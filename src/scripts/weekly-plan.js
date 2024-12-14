// DOM 元素
const prevWeekBtn = document.getElementById('prevWeekBtn');
const nextWeekBtn = document.getElementById('nextWeekBtn');
const currentWeekSpan = document.querySelector('.current-week');
const createTaskBtn = document.getElementById('createTaskBtn');
const taskModal = document.getElementById('taskModal');
const closeTaskModal = document.getElementById('closeTaskModal');
const taskForm = document.getElementById('taskForm');
const cancelTaskBtn = document.getElementById('cancelTask');
const saveTaskBtn = document.getElementById('saveTask');
const loadingOverlay = document.getElementById('loadingOverlay');

// 当前周的日期范围
let currentWeekStart = new Date('2024-01-01');
let editingTaskId = null;

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    updateWeekDisplay();
    initDragAndDrop();
    loadWeeklyData();
    initTaskModal();
});

// 周切换功能
if (prevWeekBtn) {
    prevWeekBtn.addEventListener('click', () => {
        currentWeekStart.setDate(currentWeekStart.getDate() - 7);
        updateWeekDisplay();
        loadWeeklyData();
    });
}

if (nextWeekBtn) {
    nextWeekBtn.addEventListener('click', () => {
        currentWeekStart.setDate(currentWeekStart.getDate() + 7);
        updateWeekDisplay();
        loadWeeklyData();
    });
}

// 任务模态框管理
function initTaskModal() {
    // 打开创建任务模态框
    createTaskBtn.addEventListener('click', () => {
        editingTaskId = null;
        taskForm.reset();
        taskModal.querySelector('.modal-header h3').textContent = '创建任务';
        taskModal.hidden = false;
    });

    // 关闭模态框
    closeTaskModal.addEventListener('click', () => {
        taskModal.hidden = true;
    });

    cancelTaskBtn.addEventListener('click', () => {
        taskModal.hidden = true;
    });

    // 保存任务
    saveTaskBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        if (!taskForm.checkValidity()) {
            taskForm.reportValidity();
            return;
        }

        const formData = {
            title: document.getElementById('taskTitle').value,
            goalId: document.getElementById('taskGoal').value,
            priority: document.querySelector('input[name="priority"]:checked').value,
            date: document.getElementById('taskDate').value,
            time: document.getElementById('taskTime').value,
            tags: document.getElementById('taskTags').value.split(',').map(tag => tag.trim()).filter(Boolean)
        };

        try {
            if (editingTaskId) {
                await updateTask(editingTaskId, formData);
            } else {
                await createTask(formData);
            }
            taskModal.hidden = true;
            loadWeeklyData();
        } catch (error) {
            console.error('保存任务失败：', error);
            // TODO: 显示错误提示
        }
    });

    // 点击模态框外部关闭
    taskModal.addEventListener('click', (e) => {
        if (e.target === taskModal) {
            taskModal.hidden = true;
        }
    });
}

// 编辑任务
function editTask(taskId) {
    editingTaskId = taskId;
    const task = findTaskById(taskId);
    if (!task) return;

    document.getElementById('taskTitle').value = task.title;
    document.getElementById('taskGoal').value = task.goalId;
    document.querySelector(`input[name="priority"][value="${task.priority}"]`).checked = true;
    document.getElementById('taskDate').value = task.date;
    document.getElementById('taskTime').value = task.time || '';
    document.getElementById('taskTags').value = task.tags.join(', ');

    taskModal.querySelector('.modal-header h3').textContent = '编辑任务';
    taskModal.hidden = false;
}

// 更新周显示
function updateWeekDisplay() {
    const weekEnd = new Date(currentWeekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);

    const weekNumber = getWeekNumber(currentWeekStart);
    const formattedStart = formatDate(currentWeekStart);
    const formattedEnd = formatDate(weekEnd);

    currentWeekSpan.textContent = `${currentWeekStart.getFullYear()}年第${weekNumber}周 (${formattedStart}-${formattedEnd})`;
    updateCalendarDays(currentWeekStart);
}

// 获取周数
function getWeekNumber(date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

// 格式化日期
function formatDate(date) {
    return `${date.getMonth() + 1}.${date.getDate()}`;
}

// 更新日历格子的日期显示
function updateCalendarDays(startDate) {
    const days = document.querySelectorAll('.calendar-day');
    const currentDate = new Date(startDate);

    days.forEach((day, index) => {
        const dayHeader = day.querySelector('.day-header');
        dayHeader.textContent = `${currentDate.getMonth() + 1}月${currentDate.getDate()}日`;
        day.dataset.date = currentDate.toISOString().split('T')[0];

        // 更新周末样式
        if (index >= 5) {
            day.classList.add('weekend');
        } else {
            day.classList.remove('weekend');
        }

        currentDate.setDate(currentDate.getDate() + 1);
    });
}

// 加载周数据
async function loadWeeklyData() {
    try {
        showLoading();
        // 添加模拟延迟
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // TODO: 从服务器获取数据
        const weekData = {
            goals: [
                {
                    id: 1,
                    title: '提升产品质量',
                    progress: 75,
                    milestones: [
                        { text: '完成需求分析', completed: true },
                        { text: '用户测试', completed: false }
                    ]
                },
                {
                    id: 2,
                    title: '技能提升',
                    progress: 30,
                    milestones: [
                        { text: '完成在线课程', completed: false }
                    ]
                }
            ],
            tasks: [
                {
                    id: 1,
                    title: '产品评审会议',
                    time: '09:00-11:00',
                    date: '2024-01-01',
                    tags: ['会议'],
                    goalId: 1,
                    priority: 'high'
                },
                {
                    id: 2,
                    title: '准备用户访谈',
                    deadline: '本周五截止',
                    goalId: 1,
                    tags: ['调研', '用户'],
                    priority: 'medium'
                },
                {
                    id: 3,
                    title: '完成在线课程第三章',
                    deadline: '本周日截止',
                    goalId: 2,
                    tags: ['学习'],
                    priority: 'low'
                }
            ]
        };

        updateWeeklyDisplay(weekData);
        hideLoading();

    } catch (error) {
        console.error('加载周数据失败：', error);
        showError('加载数据失败，请稍后重试');
        hideLoading();
    }
}

// 更新周视图显示
function updateWeeklyDisplay(data) {
    // 更新目标列表
    updateGoalsList(data.goals);
    // 更新任务列表
    updateTasksList(data.tasks);
    // 更新日历视图
    updateCalendarTasks(data.tasks);
}

// 更新目标列表
function updateGoalsList(goals) {
    const goalsList = document.querySelector('.goals-list');
    if (!goalsList) return;

    goalsList.innerHTML = goals.map(goal => `
        <div class="goal-card">
            <div class="goal-header">
                <h3 class="text-h4">${goal.title}</h3>
                <span class="progress text-primary">${goal.progress}%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${goal.progress}%"></div>
            </div>
            <div class="milestones">
                ${goal.milestones.map(milestone => `
                    <div class="milestone ${milestone.completed ? 'completed' : ''}">
                        <span class="milestone-dot"></span>
                        <span class="milestone-text">${milestone.text}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// 更新待办任务列表
function updateTasksList(tasks) {
    const todosList = document.querySelector('.todos-list');
    if (!todosList) return;

    const unscheduledTasks = tasks.filter(task => !task.date);
    todosList.innerHTML = unscheduledTasks.map(task => `
        <div class="task-card" draggable="true" data-task-id="${task.id}">
            <div class="task-header">
                <span class="task-title text-body">${task.title}</span>
                <div class="task-actions">
                    <button class="btn btn-icon btn-sm" title="编辑任务" onclick="editTask(${task.id})">
                        <i class="icon icon-edit">📝</i>
                    </button>
                </div>
            </div>
            <div class="task-info text-small">
                ${task.deadline ? `<span class="task-deadline text-error">${task.deadline}</span>` : ''}
                ${task.goalId ? `<span class="task-goal text-primary">${findGoalTitle(task.goalId)}</span>` : ''}
            </div>
            <div class="task-tags">
                ${task.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');

    // 重新初始化拖拽
    initDragAndDrop();
}

// 更新日历任务
function updateCalendarTasks(tasks) {
    const scheduledTasks = tasks.filter(task => task.date);
    
    // 清除所有日历格子中的任务
    document.querySelectorAll('.day-content').forEach(content => {
        content.innerHTML = '';
    });

    // 添加已安排的任务
    scheduledTasks.forEach(task => {
        const dayCell = document.querySelector(`[data-date="${task.date}"] .day-content`);
        if (dayCell) {
            dayCell.innerHTML += `
                <div class="task-card" draggable="true" data-task-id="${task.id}">
                    ${task.time ? `<div class="task-time text-small text-primary">${task.time}</div>` : ''}
                    <div class="task-title text-body">${task.title}</div>
                    <div class="task-tags">
                        ${task.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
        }
    });

    // 重新初始化拖拽
    initDragAndDrop();
}

// 初始化拖拽功能
function initDragAndDrop() {
    const taskCards = document.querySelectorAll('.task-card');
    const dropZones = document.querySelectorAll('[data-droppable="true"]');

    taskCards.forEach(card => {
        card.addEventListener('dragstart', handleDragStart);
        card.addEventListener('dragend', handleDragEnd);
    });

    dropZones.forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('dragleave', handleDragLeave);
        zone.addEventListener('drop', handleDrop);
    });
}

// 拖拽事件处理
function handleDragStart(e) {
    this.classList.add('dragging');
    e.dataTransfer.setData('text/plain', this.dataset.taskId);
    e.dataTransfer.effectAllowed = 'move';

    // 添加拖拽预览效果
    const dragImage = this.cloneNode(true);
    dragImage.style.opacity = '0.5';
    document.body.appendChild(dragImage);
    e.dataTransfer.setDragImage(dragImage, 0, 0);
    setTimeout(() => document.body.removeChild(dragImage), 0);
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    document.querySelectorAll('.day-content').forEach(zone => {
        zone.classList.remove('drag-over');
    });
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    this.classList.add('drag-over');
}

function handleDragLeave(e) {
    this.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    this.classList.remove('drag-over');

    const taskId = e.dataTransfer.getData('text/plain');
    const targetDate = this.parentElement.dataset.date;
    
    try {
        updateTaskDate(taskId, targetDate);
        loadWeeklyData();
    } catch (error) {
        console.error('更新任务日期失败：', error);
        showError('更新任务失败，请稍后重试');
    }
}

// 辅助函数
function findTaskById(taskId) {
    // TODO: 从数据中查找任务
    return null;
}

function findGoalTitle(goalId) {
    // TODO: 从数据中查找目标标题
    return '';
}

async function createTask(taskData) {
    // TODO: 创建任务的 API 调用
    console.log('创建任务：', taskData);
}

async function updateTask(taskId, taskData) {
    // TODO: 更新任务的 API 调用
    console.log('更新任务：', taskId, taskData);
}

async function updateTaskDate(taskId, date) {
    // TODO: 更新任务日期的 API 调用
    console.log('更新任务日期：', taskId, date);
}

// UI 状态管理
function showLoading() {
    if (loadingOverlay) {
        loadingOverlay.hidden = false;
    }
}

function hideLoading() {
    if (loadingOverlay) {
        loadingOverlay.hidden = true;
    }
}

function showError(message) {
    // TODO: 显示错误提示
    console.error(message);
} 
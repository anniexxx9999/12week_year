// 页面元素
const filterBtn = document.getElementById('filterBtn');
const filterPanel = document.getElementById('filterPanel');
const createTaskBtn = document.getElementById('createTaskBtn');
const taskLists = document.querySelectorAll('.task-list');
const taskCards = document.querySelectorAll('.task-card');

// 筛选面板显示/隐藏
if (filterBtn && filterPanel) {
    filterBtn.addEventListener('click', () => {
        filterPanel.style.display = filterPanel.style.display === 'none' ? 'flex' : 'none';
    });
}

// 创建任务按钮
if (createTaskBtn) {
    createTaskBtn.addEventListener('click', () => {
        // TODO: 打开创建任务弹窗
        console.log('打开创建任务弹窗');
    });
}

// 拖拽功能实现
let draggedTask = null;

// 为每个任务卡片添加拖拽事件
taskCards.forEach(card => {
    // 开始拖拽
    card.addEventListener('dragstart', (e) => {
        draggedTask = card;
        card.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', card.innerHTML);
    });

    // 结束拖拽
    card.addEventListener('dragend', () => {
        draggedTask.classList.remove('dragging');
        draggedTask = null;
        taskLists.forEach(list => {
            list.classList.remove('drag-over');
        });
    });

    // 任务完成状态切换
    const checkbox = card.querySelector('input[type="checkbox"]');
    if (checkbox) {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                card.style.animation = 'task-complete 0.3s ease-out forwards';
                setTimeout(() => {
                    // TODO: 更新任务状态
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // 任务操作按钮
    const editBtn = card.querySelector('.task-actions button:first-child');
    const menuBtn = card.querySelector('.task-actions button:last-child');

    if (editBtn) {
        editBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            // TODO: 打开编辑任务弹窗
            console.log('编辑任务');
        });
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            // TODO: 显示更多操作菜单
            console.log('显示更多操作');
        });
    }
});

// 为每个任务列表添加拖放事件
taskLists.forEach(list => {
    // 拖拽经过
    list.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        list.classList.add('drag-over');
    });

    // 拖拽离开
    list.addEventListener('dragleave', () => {
        list.classList.remove('drag-over');
    });

    // 放置任务
    list.addEventListener('drop', (e) => {
        e.preventDefault();
        list.classList.remove('drag-over');

        if (draggedTask) {
            // 获取放置区域的象限类型
            const quadrantType = list.parentElement.dataset.type;
            
            // 更新任务的优先级标记
            updateTaskPriority(draggedTask, quadrantType);

            // 移动任务卡片
            list.appendChild(draggedTask);

            // TODO: 更新任务数据
            console.log('任务已移动到：', quadrantType);
        }
    });
});

// 标签选择功能
const tagInput = document.querySelector('.tag-select input');
const selectedTags = document.querySelector('.selected-tags');

if (tagInput && selectedTags) {
    tagInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const tag = tagInput.value.trim();
            if (tag) {
                addTag(tag);
                tagInput.value = '';
                // TODO: 应用标签筛选
                filterTasks();
            }
        }
    });
}

// 工具函数
function addTag(tagText) {
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.innerHTML = `
        ${tagText}
        <button class="remove-tag" onclick="removeTag(this)">✕</button>
    `;
    selectedTags.appendChild(tag);
}

function removeTag(btn) {
    btn.parentElement.remove();
    // TODO: 更新筛选结果
    filterTasks();
}

function updateTaskPriority(task, quadrantType) {
    // 移除所有优先级类
    task.classList.remove('urgent', 'important');

    // 根据象限类型添加对应的优先级类
    switch (quadrantType) {
        case 'urgent-important':
            task.classList.add('urgent', 'important');
            break;
        case 'important':
            task.classList.add('important');
            break;
        case 'urgent':
            task.classList.add('urgent');
            break;
    }
}

function filterTasks() {
    const period = document.querySelector('select[name="period"]').value;
    const goal = document.querySelector('select[name="goal"]').value;
    const tags = Array.from(selectedTags.children).map(tag => tag.textContent.trim());

    taskCards.forEach(card => {
        let show = true;

        // 周期筛选
        if (period && !matchPeriod(card, period)) {
            show = false;
        }

        // 目标筛选
        if (goal && !matchGoal(card, goal)) {
            show = false;
        }

        // 标签筛选
        if (tags.length > 0 && !matchTags(card, tags)) {
            show = false;
        }

        card.style.display = show ? 'block' : 'none';
    });
}

function matchPeriod(card, period) {
    // TODO: 实现周期匹配逻辑
    return true;
}

function matchGoal(card, goal) {
    const taskGoal = card.querySelector('.goal').textContent;
    return taskGoal.includes(goal);
}

function matchTags(card, tags) {
    const taskTags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.trim());
    return tags.some(tag => taskTags.includes(tag));
} 
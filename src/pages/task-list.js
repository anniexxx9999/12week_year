// 任务拖拽排序功能
document.addEventListener('DOMContentLoaded', () => {
    initDragAndDrop();
});

function initDragAndDrop() {
    const taskItems = document.querySelectorAll('.task-item');
    const taskGroups = document.querySelectorAll('.task-items');

    // 为每个任务项添加拖拽功能
    taskItems.forEach(task => {
        task.setAttribute('draggable', true);
        
        // 开始拖拽
        task.addEventListener('dragstart', (e) => {
            e.target.classList.add('dragging');
            e.dataTransfer.setData('text/plain', e.target.id);
            e.dataTransfer.effectAllowed = 'move';
            
            // 添加拖拽时的视觉效果
            requestAnimationFrame(() => {
                task.style.opacity = '0.5';
                task.style.transform = 'scale(1.02)';
            });
        });

        // 结束拖拽
        task.addEventListener('dragend', (e) => {
            e.target.classList.remove('dragging');
            task.style.opacity = '';
            task.style.transform = '';
        });
    });

    // 为每个任务组添加放置区域
    taskGroups.forEach(group => {
        // 拖拽经过时
        group.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            
            const draggingTask = document.querySelector('.dragging');
            if (!draggingTask) return;

            // 获取最近的任务项
            const closestTask = getClosestTask(group, e.clientY);
            
            if (closestTask) {
                group.insertBefore(draggingTask, closestTask);
            } else {
                group.appendChild(draggingTask);
            }
        });

        // 拖拽进入时
        group.addEventListener('dragenter', (e) => {
            e.preventDefault();
            group.classList.add('drag-over');
        });

        // 拖拽离开时
        group.addEventListener('dragleave', (e) => {
            if (e.target === group) {
                group.classList.remove('drag-over');
            }
        });

        // 放置时
        group.addEventListener('drop', (e) => {
            e.preventDefault();
            group.classList.remove('drag-over');
            
            // 更新任务计数
            updateTaskCount();
            
            // 触发任务排序变化事件
            const event = new CustomEvent('taskOrderChanged', {
                detail: {
                    groupId: group.closest('.task-group').id,
                    tasks: Array.from(group.children).map(task => task.id)
                }
            });
            document.dispatchEvent(event);
        });
    });
}

// 获取最近的任务项
function getClosestTask(container, y) {
    const tasks = [...container.querySelectorAll('.task-item:not(.dragging)')];
    
    return tasks.reduce((closest, task) => {
        const box = task.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        
        if (offset < 0 && offset > closest.offset) {
            return { offset, element: task };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// 更新任务计数
function updateTaskCount() {
    const taskGroups = document.querySelectorAll('.task-group');
    
    taskGroups.forEach(group => {
        const taskCount = group.querySelector('.task-items').children.length;
        const countElement = group.querySelector('.task-count');
        countElement.textContent = `${taskCount}个任务`;
    });
}

// 监听任务状态变化
document.addEventListener('change', (e) => {
    if (e.target.matches('.task-checkbox input[type="checkbox"]')) {
        const taskItem = e.target.closest('.task-item');
        const isChecked = e.target.checked;
        
        // 添加完成动画
        if (isChecked) {
            taskItem.classList.add('completing');
            setTimeout(() => {
                moveTaskToCompleted(taskItem);
            }, 500);
        }
    }
});

// 将任务移动到已完成分组
function moveTaskToCompleted(taskItem) {
    const completedGroup = document.querySelector('.task-group.completed .task-items');
    if (!completedGroup) return;
    
    taskItem.classList.remove('completing');
    completedGroup.appendChild(taskItem);
    updateTaskCount();
    
    // 触发任务完成事件
    const event = new CustomEvent('taskCompleted', {
        detail: {
            taskId: taskItem.id
        }
    });
    document.dispatchEvent(event);
}

// 初始化排序下拉菜单
document.addEventListener('DOMContentLoaded', () => {
    const sortButton = document.querySelector('.sort-dropdown .btn');
    const sortMenu = document.createElement('div');
    sortMenu.className = 'dropdown-menu';
    sortMenu.innerHTML = `
        <button class="dropdown-item" data-sort="priority">
            <i class="icon">🔴</i>
            <span>按优先级</span>
        </button>
        <button class="dropdown-item" data-sort="date">
            <i class="icon">📅</i>
            <span>按截止日期</span>
        </button>
        <button class="dropdown-item" data-sort="name">
            <i class="icon">📝</i>
            <span>按名称</span>
        </button>
    `;
    
    sortButton.parentNode.appendChild(sortMenu);
    
    // 切换下拉菜单显示
    sortButton.addEventListener('click', () => {
        sortMenu.classList.toggle('active');
    });
    
    // 处理排序选项点击
    sortMenu.addEventListener('click', (e) => {
        const sortItem = e.target.closest('.dropdown-item');
        if (!sortItem) return;
        
        const sortType = sortItem.dataset.sort;
        sortTasks(sortType);
        sortMenu.classList.remove('active');
    });
    
    // 点击其他区域关闭下拉菜单
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.sort-dropdown')) {
            sortMenu.classList.remove('active');
        }
    });
});

// 任务排序函数
function sortTasks(sortType) {
    const taskGroups = document.querySelectorAll('.task-group');
    
    taskGroups.forEach(group => {
        const taskItems = [...group.querySelectorAll('.task-item')];
        const sortedTasks = taskItems.sort((a, b) => {
            switch (sortType) {
                case 'priority':
                    return getPriorityValue(b) - getPriorityValue(a);
                case 'date':
                    return getDateValue(a) - getDateValue(b);
                case 'name':
                    return a.querySelector('.task-title').textContent
                        .localeCompare(b.querySelector('.task-title').textContent);
                default:
                    return 0;
            }
        });
        
        const taskContainer = group.querySelector('.task-items');
        sortedTasks.forEach(task => taskContainer.appendChild(task));
    });
}

// 获取优先级数值
function getPriorityValue(taskItem) {
    const priority = taskItem.querySelector('.priority');
    if (priority.classList.contains('high')) return 3;
    if (priority.classList.contains('medium')) return 2;
    if (priority.classList.contains('low')) return 1;
    return 0;
}

// 获取日期数值
function getDateValue(taskItem) {
    const dateText = taskItem.querySelector('.due-time').textContent;
    // 解析日期文本，返回时间戳
    if (dateText.includes('今天')) return Date.now();
    if (dateText.includes('明天')) return Date.now() + 86400000;
    // 其他日期格式解析...
    return Date.now();
} 
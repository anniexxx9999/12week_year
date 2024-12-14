// 任务弹窗相关元素
const createTaskModal = document.getElementById('createTaskModal');
const closeTaskModalBtn = document.getElementById('closeTaskModalBtn');
const cancelTaskBtn = document.getElementById('cancelTaskBtn');
const createTaskBtn = document.getElementById('createTaskBtn');
const taskForm = document.getElementById('taskForm');

// 任务弹窗事件处理
function initTaskModal() {
    // 关闭弹窗
    function closeTaskModal() {
        createTaskModal.style.display = 'none';
        taskForm.reset();
        clearTags();
    }

    closeTaskModalBtn.addEventListener('click', closeTaskModal);
    cancelTaskBtn.addEventListener('click', closeTaskModal);

    // 提交表单
    createTaskBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (validateTaskForm()) {
            const formData = new FormData(taskForm);
            const taskData = {
                ...Object.fromEntries(formData.entries()),
                tags: getSelectedTags()
            };
            console.log('创建任务：', taskData);
            // TODO: 发送数据到服务器
            closeTaskModal();
        }
    });

    // 表单验证
    function validateTaskForm() {
        const taskName = taskForm.querySelector('input[name="taskName"]').value;
        const dueDate = taskForm.querySelector('input[name="dueDate"]').value;
        const dueTime = taskForm.querySelector('input[name="dueTime"]').value;

        if (!taskName.trim()) {
            showError('请输入任务名称');
            return false;
        }
        if (!dueDate) {
            showError('请选择截止日期');
            return false;
        }
        if (!dueTime) {
            showError('请选择截止时间');
            return false;
        }
        return true;
    }

    // 标签管理
    const tagInput = taskForm.querySelector('.tag-input input');
    const tagList = taskForm.querySelector('.tag-list');
    const tags = new Set();

    tagInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const tag = tagInput.value.trim();
            if (tag && !tags.has(tag)) {
                addTag(tag);
                tagInput.value = '';
            }
        }
    });

    function addTag(tag) {
        tags.add(tag);
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.innerHTML = `
            ${tag}
            <button class="remove-tag" data-tag="${tag}">✕</button>
        `;
        tagList.appendChild(tagElement);

        // 删除标签事件
        tagElement.querySelector('.remove-tag').addEventListener('click', () => {
            tags.delete(tag);
            tagElement.remove();
        });
    }

    function clearTags() {
        tags.clear();
        tagList.innerHTML = '';
    }

    function getSelectedTags() {
        return Array.from(tags);
    }
}

// 错误提示
function showError(message) {
    // TODO: 实现错误提示UI
    alert(message);
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initTaskModal();
}); 
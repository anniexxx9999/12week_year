// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initTaskForm();
    initRichEditor();
    initTaskTypeToggle();
    initSubtaskList();
    initFileUpload();
    initTagSelector();
    initReminderToggle();
    initGoalSelector();
    initPreview();
    initAutoSave();
});

// 初始化任务表单
function initTaskForm() {
    const form = document.getElementById('taskForm');
    const saveBtn = document.getElementById('saveTaskBtn');
    const saveDraftBtn = document.getElementById('saveAsDraftBtn');

    // 表单验证
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            saveTask();
        }
    });

    // 保存任务
    saveBtn.addEventListener('click', () => {
        if (validateForm()) {
            saveTask();
        }
    });

    // 保存草稿
    saveDraftBtn.addEventListener('click', () => {
        saveTask(true);
    });
}

// 表单验证
function validateForm() {
    const form = document.getElementById('taskForm');
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            showError(field, '此字段不能为空');
        } else {
            clearError(field);
        }
    });

    return isValid;
}

// 显示错误信息
function showError(field, message) {
    const formGroup = field.closest('.form-group');
    const errorElement = formGroup.querySelector('.form-error');
    
    field.classList.add('error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

// 清除错误信息
function clearError(field) {
    const formGroup = field.closest('.form-group');
    const errorElement = formGroup.querySelector('.form-error');
    
    field.classList.remove('error');
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

// 初始化富文本编辑器
function initRichEditor() {
    const toolbar = document.querySelector('.editor-toolbar');
    const editor = document.querySelector('.editor-content');

    toolbar.addEventListener('click', (e) => {
        const button = e.target.closest('.btn');
        if (!button) return;

        const format = button.dataset.format;
        e.preventDefault();

        switch (format) {
            case 'bold':
                document.execCommand('bold', false, null);
                break;
            case 'italic':
                document.execCommand('italic', false, null);
                break;
            case 'underline':
                document.execCommand('underline', false, null);
                break;
            case 'bullet':
                document.execCommand('insertUnorderedList', false, null);
                break;
            case 'number':
                document.execCommand('insertOrderedList', false, null);
                break;
            case 'link':
                const url = prompt('输入链接地址：');
                if (url) {
                    document.execCommand('createLink', false, url);
                }
                break;
        }
    });

    // 保存选区
    editor.addEventListener('keyup', () => {
        saveSelection();
    });

    editor.addEventListener('mouseup', () => {
        saveSelection();
    });
}

// 保存选区
let savedSelection = null;
function saveSelection() {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        savedSelection = selection.getRangeAt(0);
    }
}

// 恢复选区
function restoreSelection() {
    if (savedSelection) {
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(savedSelection);
    }
}

// 初始化任务类型切换
function initTaskTypeToggle() {
    const typeRadios = document.querySelectorAll('input[name="taskType"]');
    const recurringSettings = document.querySelector('.recurring-settings');
    const frequencySelect = document.querySelector('select[name="frequency"]');
    const weekdaySelector = document.querySelector('.weekday-selector');

    typeRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            recurringSettings.style.display = 
                radio.value === 'recurring' ? 'block' : 'none';
        });
    });

    frequencySelect.addEventListener('change', () => {
        weekdaySelector.style.display = 
            frequencySelect.value === 'weekly' ? 'flex' : 'none';
    });
}

// 初始化子任务列表
function initSubtaskList() {
    const subtaskList = document.getElementById('subtaskList');
    const addSubtaskBtn = document.getElementById('addSubtaskBtn');

    // 添加子任务
    addSubtaskBtn.addEventListener('click', () => {
        const subtaskItem = createSubtaskItem();
        subtaskList.appendChild(subtaskItem);
    });

    // 删除子任务
    subtaskList.addEventListener('click', (e) => {
        const removeBtn = e.target.closest('.remove-subtask');
        if (removeBtn) {
            const subtaskItem = removeBtn.closest('.subtask-item');
            subtaskItem.remove();
        }
    });

    // 初始化拖拽排序
    initSubtaskDragSort();
}

// 创建子任务项
function createSubtaskItem() {
    const id = 'subtask' + Date.now();
    const div = document.createElement('div');
    div.className = 'subtask-item';
    div.innerHTML = `
        <div class="drag-handle">⋮⋮</div>
        <div class="checkbox">
            <input type="checkbox" id="${id}">
            <label for="${id}"></label>
        </div>
        <input type="text" class="form-input" placeholder="输入子任务内容">
        <button type="button" class="btn btn-icon remove-subtask">
            <i class="icon">✕</i>
        </button>
    `;
    return div;
}

// 初始化子任务拖拽排序
function initSubtaskDragSort() {
    const subtaskList = document.getElementById('subtaskList');
    let draggedItem = null;

    // 为每个子任务添加拖拽功能
    const subtaskItems = subtaskList.querySelectorAll('.subtask-item');
    subtaskItems.forEach(item => {
        const handle = item.querySelector('.drag-handle');
        
        handle.addEventListener('mousedown', () => {
            item.draggable = true;
        });

        handle.addEventListener('mouseup', () => {
            item.draggable = false;
        });

        item.addEventListener('dragstart', (e) => {
            draggedItem = item;
            e.dataTransfer.effectAllowed = 'move';
            item.classList.add('dragging');
        });

        item.addEventListener('dragend', () => {
            draggedItem = null;
            item.classList.remove('dragging');
        });

        item.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        });

        item.addEventListener('drop', (e) => {
            e.preventDefault();
            if (draggedItem && draggedItem !== item) {
                const items = [...subtaskList.children];
                const draggedIndex = items.indexOf(draggedItem);
                const droppedIndex = items.indexOf(item);

                if (draggedIndex < droppedIndex) {
                    item.parentNode.insertBefore(draggedItem, item.nextSibling);
                } else {
                    item.parentNode.insertBefore(draggedItem, item);
                }
            }
        });
    });
}

// 初始化文件上传
function initFileUpload() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const fileList = document.getElementById('fileList');

    // 点击上传
    uploadArea.addEventListener('click', () => {
        fileInput.click();
    });

    // 文件选择
    fileInput.addEventListener('change', () => {
        handleFiles(fileInput.files);
    });

    // 拖放上传
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('drag-over');
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('drag-over');
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('drag-over');
        handleFiles(e.dataTransfer.files);
    });

    // 删除文件
    fileList.addEventListener('click', (e) => {
        const removeBtn = e.target.closest('.remove-file');
        if (removeBtn) {
            const fileItem = removeBtn.closest('.file-item');
            fileItem.remove();
        }
    });
}

// 处理文件上传
function handleFiles(files) {
    Array.from(files).forEach(file => {
        if (validateFile(file)) {
            addFileToList(file);
        }
    });
}

// 验证文件
function validateFile(file) {
    // 检查文件大小（10MB）
    if (file.size > 10 * 1024 * 1024) {
        alert('文件大小不能超过10MB');
        return false;
    }

    // 检查文件类型
    const allowedTypes = [
        'image/jpeg',
        'image/png',
        'image/gif',
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'text/plain'
    ];

    if (!allowedTypes.includes(file.type)) {
        alert('不支持的文件类型');
        return false;
    }

    return true;
}

// 添加文件到列表
function addFileToList(file) {
    const fileList = document.getElementById('fileList');
    const div = document.createElement('div');
    div.className = 'file-item';
    div.innerHTML = `
        <div class="file-icon">${getFileIcon(file.type)}</div>
        <div class="file-info">
            <div class="file-name">${file.name}</div>
            <div class="file-meta">
                <span class="file-size">${formatFileSize(file.size)}</span>
                <span class="file-date">${formatDate(new Date())}</span>
            </div>
        </div>
        <button type="button" class="btn btn-icon remove-file">
            <i class="icon">✕</i>
        </button>
    `;
    fileList.appendChild(div);
}

// 获取文件图标
function getFileIcon(type) {
    if (type.startsWith('image/')) return '🖼️';
    if (type.includes('pdf')) return '📄';
    if (type.includes('word')) return '📝';
    if (type.includes('text')) return '📃';
    return '📎';
}

// 格式化文件大小
function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + 'B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + 'KB';
    return (bytes / (1024 * 1024)).toFixed(1) + 'MB';
}

// 格式化日期
function formatDate(date) {
    return date.toISOString().split('T')[0];
}

// 初始化标签选择器
function initTagSelector() {
    const tagInput = document.querySelector('.tag-input');
    const tagSuggestions = document.querySelector('.tag-suggestions');
    const selectedTags = document.querySelector('.selected-tags');

    // 显示建议
    tagInput.addEventListener('focus', () => {
        tagSuggestions.style.display = 'block';
    });

    // 隐藏建议
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.tag-input-wrapper')) {
            tagSuggestions.style.display = 'none';
        }
    });

    // 选择标签
    tagSuggestions.addEventListener('click', (e) => {
        const item = e.target.closest('.suggestion-item');
        if (!item) return;

        if (item.classList.contains('create')) {
            showCreateTagModal();
        } else {
            const tagName = item.querySelector('.tag-name').textContent;
            const tagColor = item.querySelector('.tag-color').style.backgroundColor;
            addTag(tagName, tagColor);
        }

        tagInput.value = '';
        tagSuggestions.style.display = 'none';
    });

    // 删除标签
    selectedTags.addEventListener('click', (e) => {
        const removeBtn = e.target.closest('.remove-tag');
        if (removeBtn) {
            const tag = removeBtn.closest('.tag');
            tag.remove();
        }
    });
}

// 添加标签
function addTag(name, color) {
    const selectedTags = document.querySelector('.selected-tags');
    const span = document.createElement('span');
    span.className = 'tag';
    span.style.backgroundColor = color;
    span.innerHTML = `
        ${name}
        <button class="remove-tag">✕</button>
    `;
    selectedTags.appendChild(span);
}

// 显示创建标签弹窗
function showCreateTagModal() {
    const modal = document.getElementById('createTagModal');
    modal.style.display = 'block';

    const form = document.getElementById('tagForm');
    const createBtn = document.getElementById('createTagBtn');
    const cancelBtn = document.getElementById('cancelTagBtn');
    const closeBtn = document.getElementById('closeTagModalBtn');

    createBtn.addEventListener('click', () => {
        const name = form.tagName.value;
        const color = form.tagColor.value;
        if (name && color) {
            addTag(name, color);
            modal.style.display = 'none';
            form.reset();
        }
    });

    cancelBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        form.reset();
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        form.reset();
    });
}

// 初始化提醒设置
function initReminderToggle() {
    const reminderSwitch = document.querySelector('input[name="enableReminder"]');
    const reminderSelect = document.querySelector('select[name="reminderTime"]');

    reminderSwitch.addEventListener('change', () => {
        reminderSelect.disabled = !reminderSwitch.checked;
    });
}

// 初始化目标选择器
function initGoalSelector() {
    const goalSelect = document.querySelector('select[name="linkedGoal"]');
    const selectedGoal = document.querySelector('.selected-goal');
    const removeGoalBtn = document.querySelector('.remove-goal');

    goalSelect.addEventListener('change', () => {
        if (goalSelect.value) {
            selectedGoal.style.display = 'block';
            goalSelect.style.display = 'none';
        }
    });

    removeGoalBtn.addEventListener('click', () => {
        selectedGoal.style.display = 'none';
        goalSelect.style.display = 'block';
        goalSelect.value = '';
    });
}

// 初始化预览
function initPreview() {
    const previewBtn = document.getElementById('previewBtn');
    const previewModal = document.getElementById('previewModal');
    const closePreviewBtn = document.getElementById('closePreviewBtn');
    const closePreviewBtn2 = document.getElementById('closePreviewBtn2');
    const confirmSaveBtn = document.getElementById('confirmSaveBtn');

    previewBtn.addEventListener('click', () => {
        updatePreview();
        previewModal.style.display = 'block';
    });

    closePreviewBtn.addEventListener('click', () => {
        previewModal.style.display = 'none';
    });

    closePreviewBtn2.addEventListener('click', () => {
        previewModal.style.display = 'none';
    });

    confirmSaveBtn.addEventListener('click', () => {
        saveTask();
        previewModal.style.display = 'none';
    });
}

// 更新预览内容
function updatePreview() {
    const previewCard = document.querySelector('.preview-card');
    const formData = getFormData();

    previewCard.innerHTML = `
        <div class="preview-header">
            <h4>${formData.taskName || '未命名任务'}</h4>
            <div class="preview-meta">
                <span class="priority ${formData.priority}">${getPriorityText(formData.priority)}</span>
                <span class="status">${getStatusText(formData.status)}</span>
            </div>
        </div>
        <div class="preview-body">
            <div class="preview-desc">${formData.description || '暂无描述'}</div>
            ${formData.subtasks.length ? `
                <div class="preview-subtasks">
                    <h5>子任务 (${formData.subtasks.length})</h5>
                    <ul>
                        ${formData.subtasks.map(subtask => `
                            <li>${subtask}</li>
                        `).join('')}
                    </ul>
                </div>
            ` : ''}
            ${formData.tags.length ? `
                <div class="preview-tags">
                    ${formData.tags.map(tag => `
                        <span class="tag" style="background-color: ${tag.color}">${tag.name}</span>
                    `).join('')}
                </div>
            ` : ''}
        </div>
        <div class="preview-footer">
            <div class="preview-dates">
                <span>开始：${formData.startTime || '未设置'}</span>
                <span>截止：${formData.dueTime || '未设置'}</span>
            </div>
            ${formData.linkedGoal ? `
                <div class="preview-goal">
                    <span>关联目标：${formData.linkedGoal}</span>
                </div>
            ` : ''}
        </div>
    `;
}

// 获取表单数据
function getFormData() {
    const form = document.getElementById('taskForm');
    const data = {
        taskName: form.querySelector('[name="taskName"]').value,
        description: form.querySelector('.editor-content').innerHTML,
        taskType: form.querySelector('[name="taskType"]:checked').value,
        status: form.querySelector('[name="status"]').value,
        priority: form.querySelector('[name="priority"]:checked').value,
        startTime: form.querySelector('[name="startTime"]').value,
        dueTime: form.querySelector('[name="dueTime"]').value,
        enableReminder: form.querySelector('[name="enableReminder"]').checked,
        reminderTime: form.querySelector('[name="reminderTime"]').value,
        linkedGoal: form.querySelector('[name="linkedGoal"]').value,
        subtasks: [],
        tags: []
    };

    // 获取子任务
    form.querySelectorAll('.subtask-item input[type="text"]').forEach(input => {
        if (input.value.trim()) {
            data.subtasks.push(input.value.trim());
        }
    });

    // 获取标签
    form.querySelectorAll('.selected-tags .tag').forEach(tag => {
        data.tags.push({
            name: tag.textContent.trim(),
            color: tag.style.backgroundColor
        });
    });

    return data;
}

// 获取优先级文本
function getPriorityText(priority) {
    const texts = {
        high: '高优先级',
        medium: '中优先级',
        low: '低优先级'
    };
    return texts[priority] || '未设置';
}

// 获取状态文本
function getStatusText(status) {
    const texts = {
        todo: '待办',
        in_progress: '进行中',
        completed: '已完成'
    };
    return texts[status] || '未设置';
}

// 初始化自动保存
function initAutoSave() {
    let autoSaveTimer;
    const form = document.getElementById('taskForm');

    // 监听表单变化
    form.addEventListener('input', () => {
        clearTimeout(autoSaveTimer);
        autoSaveTimer = setTimeout(() => {
            saveTask(true);
        }, 3000);
    });
}

// 保存任务
function saveTask(isDraft = false) {
    const formData = getFormData();
    formData.isDraft = isDraft;

    // TODO: 发送数据到服务器
    console.log('保存任务：', formData);

    // 显示保存成功提示
    showToast(isDraft ? '已自动保存草稿' : '保存成功');
}

// 显示提示信息
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
} 
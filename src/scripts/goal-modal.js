// 目标弹窗相关元素
const createGoalModal = document.getElementById('createGoalModal');
const closeGoalModalBtn = document.getElementById('closeGoalModalBtn');
const cancelGoalBtn = document.getElementById('cancelGoalBtn');
const createGoalBtn = document.getElementById('createGoalBtn');
const goalForm = document.getElementById('goalForm');

// 目标弹窗事件处理
function initGoalModal() {
    // 关闭弹窗
    function closeGoalModal() {
        createGoalModal.style.display = 'none';
        goalForm.reset();
    }

    closeGoalModalBtn.addEventListener('click', closeGoalModal);
    cancelGoalBtn.addEventListener('click', closeGoalModal);

    // 提交表单
    createGoalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (validateGoalForm()) {
            const formData = new FormData(goalForm);
            const goalData = Object.fromEntries(formData.entries());
            console.log('创建目标：', goalData);
            // TODO: 发送数据到服务器
            closeGoalModal();
        }
    });

    // 表单验证
    function validateGoalForm() {
        const goalName = goalForm.querySelector('input[name="goalName"]').value;
        if (!goalName.trim()) {
            showError('请输入目标名称');
            return false;
        }
        return true;
    }

    // 提醒设置切换
    const reminderSwitch = goalForm.querySelector('input[name="enableReminder"]');
    const reminderSelect = goalForm.querySelector('select[name="reminderTime"]');
    
    reminderSwitch.addEventListener('change', () => {
        reminderSelect.disabled = !reminderSwitch.checked;
    });
}

// 错误提示
function showError(message) {
    // TODO: 实现错误提示UI
    alert(message);
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initGoalModal();
}); 
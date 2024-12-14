// 表单元素
const profileForm = document.getElementById('profileForm');
const uploadAvatarBtn = document.getElementById('uploadAvatarBtn');
const removeAvatarBtn = document.getElementById('removeAvatarBtn');
const avatarInput = document.getElementById('avatarInput');
const avatarPreview = document.getElementById('avatarPreview');
const resetBtn = document.getElementById('resetBtn');

// 初始表单数据
let initialFormData = null;

// 页面加载时获取初始数据
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // TODO: 从服务器获取用户数据
        const userData = {
            username: '示例用户',
            nickname: '',
            email: 'example@email.com',
            bio: '',
            language: 'zh-CN',
            timezone: 'Asia/Shanghai',
            publicProfile: false
        };

        // 填充表单
        fillFormData(userData);
        // 保存初始数据用于重置
        initialFormData = { ...userData };

    } catch (error) {
        console.error('获取用户数据失败：', error);
        showError('获取用户数据失败，请刷新页面重试');
    }
});

// 头像上传处理
if (uploadAvatarBtn && avatarInput) {
    uploadAvatarBtn.addEventListener('click', () => {
        avatarInput.click();
    });

    avatarInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            if (validateImage(file)) {
                previewImage(file);
                // TODO: 上传图片到服务器
            } else {
                showError('请选择小于2MB的图片文件（JPG、PNG）');
                avatarInput.value = '';
            }
        }
    });
}

// 删除头像
if (removeAvatarBtn) {
    removeAvatarBtn.addEventListener('click', () => {
        if (confirm('确定要删除头像吗？')) {
            avatarPreview.src = '../../assets/images/default-avatar.png';
            avatarInput.value = '';
            // TODO: 从服务器删除头像
        }
    });
}

// 表单提交处理
if (profileForm) {
    profileForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = profileForm.querySelector('button[type="submit"]');
        submitBtn.classList.add('btn-loading');

        try {
            const formData = new FormData(profileForm);
            const data = Object.fromEntries(formData.entries());

            // 表单验���
            if (!validateForm(data)) {
                return;
            }

            // TODO: 发送数据到服务器
            console.log('保存的数据：', data);

            // 模拟保存成功
            await new Promise(resolve => setTimeout(resolve, 1000));
            showSuccess('保存成功');

        } catch (error) {
            console.error('保存失败：', error);
            showError('保存失败，请稍后重试');
        } finally {
            submitBtn.classList.remove('btn-loading');
        }
    });
}

// 重置表单
if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        if (confirm('确定要重置所有更改吗？')) {
            fillFormData(initialFormData);
        }
    });
}

// 工具函数
function validateImage(file) {
    const validTypes = ['image/jpeg', 'image/png'];
    const maxSize = 2 * 1024 * 1024; // 2MB

    return validTypes.includes(file.type) && file.size <= maxSize;
}

function previewImage(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        avatarPreview.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function validateForm(data) {
    if (!data.username || data.username.length < 2) {
        showError('用户名至少需要2个字符');
        return false;
    }

    if (!validateEmail(data.email)) {
        showError('请输入有效的邮箱地址');
        return false;
    }

    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function fillFormData(data) {
    for (const [key, value] of Object.entries(data)) {
        const input = profileForm.querySelector(`[name="${key}"]`);
        if (input) {
            if (input.type === 'checkbox') {
                input.checked = value;
            } else {
                input.value = value;
            }
        }
    }
}

function showSuccess(message) {
    const toast = document.createElement('div');
    toast.className = 'save-success';
    toast.innerHTML = `
        <i class="icon">✓</i>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function showError(message) {
    // TODO: 实现更好的错误提示UI
    alert(message);
} 
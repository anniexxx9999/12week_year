// 表单元素
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const passwordInputs = document.querySelectorAll('input[type="password"]');
const togglePasswordBtns = document.querySelectorAll('.toggle-password');

// 密码显示切换
togglePasswordBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const input = btn.parentElement.querySelector('input');
        const type = input.getAttribute('type');
        input.setAttribute('type', type === 'password' ? 'text' : 'password');
        btn.querySelector('i').textContent = type === 'password' ? '👁️‍🗨️' : '👁️';
    });
});

// 登录表单处理
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = loginForm.querySelector('button[type="submit"]');
        submitBtn.classList.add('btn-loading');

        try {
            const formData = new FormData(loginForm);
            const data = Object.fromEntries(formData.entries());

            // 表单验证
            if (!validateEmail(data.email)) {
                showError('请输入有效的邮箱地址');
                return;
            }

            if (!data.password) {
                showError('请输入密码');
                return;
            }

            // TODO: 发送登录请求
            console.log('登录数据：', data);

            // 模拟登录成功
            setTimeout(() => {
                window.location.href = '/dashboard';
            }, 1500);

        } catch (error) {
            showError('登录失败，请稍后重试');
            console.error('登录错误：', error);
        } finally {
            submitBtn.classList.remove('btn-loading');
        }
    });
}

// 注册表单处理
if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = registerForm.querySelector('button[type="submit"]');
        submitBtn.classList.add('btn-loading');

        try {
            const formData = new FormData(registerForm);
            const data = Object.fromEntries(formData.entries());

            // 表单验证
            if (!data.username || data.username.length < 2) {
                showError('用户名至少需要2个字符');
                return;
            }

            if (!validateEmail(data.email)) {
                showError('请输入有效的邮箱地址');
                return;
            }

            if (!validatePassword(data.password)) {
                showError('密码需要至少8个字符，包含字母和数字');
                return;
            }

            if (data.password !== data.confirmPassword) {
                showError('两次输入的密码不一致');
                return;
            }

            if (!data.agreement) {
                showError('请阅读并同意服务条款和隐私政策');
                return;
            }

            // TODO: 发送注册请求
            console.log('注册数据：', data);

            // 模拟注册成功
            setTimeout(() => {
                window.location.href = '/auth/login';
            }, 1500);

        } catch (error) {
            showError('注册失败，请稍后重试');
            console.error('注册错误：', error);
        } finally {
            submitBtn.classList.remove('btn-loading');
        }
    });
}

// 工具函数
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 8 && /[A-Za-z]/.test(password) && /[0-9]/.test(password);
}

function showError(message) {
    // TODO: 实现更好的错误提示UI
    alert(message);
}

// 社交登录处理
const socialLoginBtns = document.querySelectorAll('.social-login');
socialLoginBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // TODO: 实现社交登录
        console.log('社交登录点击');
    });
}); 
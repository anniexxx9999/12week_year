# 开发指南

## 项目概述
12周年目标追踪是一个 Chrome 扩展程序，帮助用户设定、追踪和实现他们的目标。

## 开发环境设置

### 系统要求
- Node.js 14.0 或更高版本
- Chrome 浏览器（最新版本）
- Git

### 本地开发
1. 克隆仓库
```bash
git clone https://github.com/anniexxx9999/12week_year.git
cd 12week_year
```

2. 安装依赖
```bash
npm install
```

3. 在 Chrome 中加载扩展
- 打开 Chrome 浏览器
- 访问 `chrome://extensions/`
- 开启"开发者模式"
- 点击"加载已解压的扩展程序"
- 选择项目目录

## 项目结构
```
/src
  /pages          # 页面组件
  /components     # 可复用组件
  /styles         # 样式文件
  /scripts        # JavaScript 文件
  /assets         # 静态资源
/docs             # 文档
/tests            # 测试文件
```

## 开发规范

### 代码风格
- 使用 2 空格缩进
- 使用语义化的 HTML 标签
- CSS 类名使用 BEM 命名规范
- JavaScript 使用 ES6+ 语法

### Git 工作流
1. 从 main 分支创建新特性分支
```bash
git checkout -b feature/your-feature-name
```

2. 提交代码
```bash
git add .
git commit -m "feat: 添加新功能"
```

3. 推送到远程仓库
```bash
git push origin feature/your-feature-name
```

4. 创建 Pull Request

### 提交信息规范
- feat: 新功能
- fix: 修复 bug
- docs: 文档更新
- style: 代码格式修改
- refactor: 代码重构
- test: 测试用例
- chore: 构建过程或辅助工具的变动

## 发布流程
1. 更新版本号（package.json）
2. 更新文档
3. 创建版本标签
4. 构建发布包
5. 提交到 Chrome Web Store

## 调试指南
1. 使用 Chrome DevTools
2. 查看 Console 日志
3. 使用断点调试
4. 测试不同设备和分辨率

## 常见问题
1. 如何处理跨域请求？
2. 如何调试 Chrome 扩展？
3. 如何处理数据持久化？

## 相关资源
- [Chrome 扩展开发文档](https://developer.chrome.com/docs/extensions/)
- [项目 Wiki](https://github.com/anniexxx9999/12week_year/wiki)
- [问题追踪](https://github.com/anniexxx9999/12week_year/issues) 
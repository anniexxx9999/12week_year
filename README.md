# 12周目标追踪器 (12-Week Goal Tracker)

## 项目概述

这是一个 Chrome 插件，帮助用户设置和追踪12周目标的工具。用户可以管理目标和任务，跟踪进度，并获得及时提醒。

### 目标用户
- 主要用户：上班族
- 使用场景：工作日程管理、个人目标追踪
- 使用平台：Chrome 浏览器插件

## 功能模块

### 1. 目标管理模块
- 创建、编辑、删除 12 周目标
- 目标进度可视化
- 目标优先级设置
- 目标分类管理

### 2. 周计划视图模块
- 类 Google Calendar 的周视图
- 任务时间块展示
- 拖拽调整任务
- 周进度统计

### 3. 任务管理模块
- 任务 CRUD（创建、读取、更新、删除）
- 任务状态跟踪
- 任务优先级管理
- 任务提醒设置

### 4. 今日任务模块
#### 4.1 普通视图
- 按时间顺序排列
- 任务完成状态标记
- 快速添加任务

#### 4.2 四象限视图
- 重要且紧急
- 重要不紧急
- 紧急不重要
- 既不重要也不紧急

### 5. 进度追踪模块
- 整体目标完成度
- 每周任务完成统计
- 数据可视化展示
- 进度报告导出

## 技术架构

### 前端技术栈
- 框架：Vue 3 + TypeScript
- 构建工具：Vite + vite-plugin-chrome-extension
- 状态管理：Pinia
- UI 框架：TailwindCSS + DaisyUI
- 图表库：Chart.js

### 数据存储
- Chrome Storage API
- IndexedDB

### 项目结构
```
src/
├── popup/          # 插件弹窗页面
├── options/        # 插件设置页面
├── background/     # 后台脚本
├── content/        # 内容脚本
├── components/     # 共用组件
├── stores/         # 状态管理
└── utils/          # 工具函数
```

## 开发规范

### Git 提交规范
- feat: 新功能
- fix: 修复
- docs: 文档更新
- style: 代码格式
- refactor: 重构
- test: 测试
- chore: 构建过程或辅助工具的变动

### 代码规范
- ESLint + Prettier
- Vue 3 组件命名采用 PascalCase
- TypeScript 严格模式
- 组件属性顺序规范

## 开发路线

### Phase 1: 项目初始化与基础架构
- [x] 项目文档规划
- [ ] 技术方案设计
- [ ] 项目脚手架搭建
- [ ] 基础组件开发

### Phase 2: 核心功能开发
- [ ] 目标管理模块
- [ ] 任务管理模块
- [ ] 周计划视图
- [ ] 今日任务模块

### Phase 3: 进阶功能与优化
- [ ] 四象限任务视图
- [ ] 数据统计与可视化
- [ ] 提���系统
- [ ] 性能优化

### Phase 4: 测试与发布
- [ ] 单元测试
- [ ] E2E 测试
- [ ] Chrome 商店发布准备
- [ ] 用户文档编写

## 后续规划
- 多语言支持
- 数据导出功能
- 团队协作功能
- 移动端适配
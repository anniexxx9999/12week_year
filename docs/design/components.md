# 基础UI组件库

## 1. 按钮组件

### 1.1 基础按钮
```html
<!-- 主要按钮 -->
<button class="btn btn-primary">
  主要按钮
</button>

<!-- 次要按钮 -->
<button class="btn btn-secondary">
  次要按钮
</button>

<!-- 文本按钮 -->
<button class="btn btn-text">
  文本按钮
</button>
```

### 1.2 按钮状态
```html
<!-- 默认状态 -->
<button class="btn">默认按钮</button>

<!-- 悬停状态 -->
<button class="btn hover">悬停状态</button>

<!-- 点击状态 -->
<button class="btn active">点击状态</button>

<!-- 禁用状态 -->
<button class="btn disabled">禁用状态</button>
```

### 1.3 按钮尺寸
```html
<!-- 大按钮 -->
<button class="btn btn-lg">大按钮</button>

<!-- 中按钮（默认） -->
<button class="btn">中按钮</button>

<!-- 小按钮 -->
<button class="btn btn-sm">小按钮</button>
```

## 2. 输入框组件

### 2.1 基础输入框
```html
<!-- 文本输入框 -->
<input type="text" class="input" placeholder="请输入内容">

<!-- 带标签的输入框 -->
<div class="input-group">
  <label>标签</label>
  <input type="text" class="input">
</div>

<!-- 带图标的输入框 -->
<div class="input-group">
  <i class="icon">🔍</i>
  <input type="text" class="input">
</div>
```

### 2.2 输入框状态
```html
<!-- 默认状态 -->
<input type="text" class="input">

<!-- 聚焦状态 -->
<input type="text" class="input focus">

<!-- 错误状态 -->
<input type="text" class="input error">

<!-- 禁用状态 -->
<input type="text" class="input disabled">
```

## 3. 卡片组件

### 3.1 基础卡片
```html
<!-- 简单卡片 -->
<div class="card">
  <div class="card-body">
    卡片内容
  </div>
</div>

<!-- 带标题的卡片 -->
<div class="card">
  <div class="card-header">
    卡片标题
  </div>
  <div class="card-body">
    卡片内容
  </div>
</div>
```

### 3.2 卡片变体
```html
<!-- 无阴影卡片 -->
<div class="card card-flat">
  卡片内容
</div>

<!-- 可点击卡片 -->
<div class="card card-clickable">
  卡片内容
</div>

<!-- 带边框卡片 -->
<div class="card card-bordered">
  卡片内容
</div>
```

## 4. 列表组件

### 4.1 基础列表
```html
<!-- 简单列表 -->
<ul class="list">
  <li class="list-item">列表项1</li>
  <li class="list-item">列表项2</li>
  <li class="list-item">列表���3</li>
</ul>

<!-- 带图标的列表 -->
<ul class="list">
  <li class="list-item">
    <i class="icon">📌</i>
    <span>列表项1</span>
  </li>
</ul>
```

### 4.2 列表变体
```html
<!-- 可选择的列表 -->
<ul class="list list-selectable">
  <li class="list-item">可选择项1</li>
  <li class="list-item selected">可选择项2</li>
</ul>

<!-- 可排序的列表 -->
<ul class="list list-sortable">
  <li class="list-item">可拖拽项1</li>
  <li class="list-item">可拖拽项2</li>
</ul>
```

## 5. 表单组件

### 5.1 表单布局
```html
<!-- 垂直表单 -->
<form class="form">
  <div class="form-item">
    <label>用户名</label>
    <input type="text" class="input">
  </div>
  <div class="form-item">
    <label>密码</label>
    <input type="password" class="input">
  </div>
</form>

<!-- 水平表单 -->
<form class="form form-horizontal">
  <div class="form-item">
    <label class="form-label">用户名</label>
    <div class="form-content">
      <input type="text" class="input">
    </div>
  </div>
</form>
```

### 5.2 表单验证
```html
<!-- 必填项 -->
<div class="form-item required">
  <label>用户名</label>
  <input type="text" class="input">
</div>

<!-- 错误提示 -->
<div class="form-item error">
  <label>密码</label>
  <input type="password" class="input">
  <div class="error-message">
    请输入密码
  </div>
</div>
```

## 6. 对话框组件

### 6.1 基础对话框
```html
<!-- 简单对话框 -->
<div class="dialog">
  <div class="dialog-header">
    标题
    <button class="close">×</button>
  </div>
  <div class="dialog-body">
    内容
  </div>
  <div class="dialog-footer">
    <button class="btn">取消</button>
    <button class="btn btn-primary">确定</button>
  </div>
</div>
```

### 6.2 对话框变体
```html
<!-- 确认对话框 -->
<div class="dialog dialog-confirm">
  <div class="dialog-body">
    <i class="icon">⚠️</i>
    <div class="message">确认删除？</div>
  </div>
  <div class="dialog-footer">
    <button class="btn">取消</button>
    <button class="btn btn-danger">删除</button>
  </div>
</div>

<!-- 提示对话框 -->
<div class="dialog dialog-alert">
  <div class="dialog-body">
    <i class="icon">ℹ️</i>
    <div class="message">操作成功</div>
  </div>
</div>
```

## 7. 标签组件

### 7.1 基础标签
```html
<!-- 普通标签 -->
<span class="tag">标签</span>

<!-- 可关闭标签 -->
<span class="tag">
  标签
  <i class="close">×</i>
</span>
```

### 7.2 标签变体
```html
<!-- 不同状态的标签 -->
<span class="tag tag-success">成功</span>
<span class="tag tag-warning">警告</span>
<span class="tag tag-error">错误</span>
<span class="tag tag-info">信息</span>
```

## 8. 进度条组件

### 8.1 基础进度条
```html
<!-- 简单进度条 -->
<div class="progress">
  <div class="progress-bar" style="width: 50%"></div>
</div>

<!-- 带文字的进度条 -->
<div class="progress">
  <div class="progress-bar" style="width: 50%">
    50%
  </div>
</div>
```

### 8.2 进度条变体
```html
<!-- 条纹进度条 -->
<div class="progress progress-striped">
  <div class="progress-bar" style="width: 50%"></div>
</div>

<!-- 动画进度条 -->
<div class="progress progress-animated">
  <div class="progress-bar" style="width: 50%"></div>
</div>
```

## 9. 加载组件

### 9.1 加载动画
```html
<!-- 圆形加载 -->
<div class="spinner">
  <div class="spinner-circle"></div>
</div>

<!-- 点状加载 -->
<div class="spinner">
  <div class="spinner-dot"></div>
  <div class="spinner-dot"></div>
  <div class="spinner-dot"></div>
</div>
```

### 9.2 加载状态
```html
<!-- 内容加载 -->
<div class="loading">
  <div class="spinner"></div>
  <div class="loading-text">加载中...</div>
</div>

<!-- 按钮加�� -->
<button class="btn loading">
  <div class="spinner"></div>
  加载中
</button>
``` 
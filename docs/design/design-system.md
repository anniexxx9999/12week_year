# 设计系统规范（Design System）

## 1. 品牌标识

### 1.1 Logo
- 主Logo：12周目标追踪器标志
- Logo尺寸：40px × 40px（标准尺寸）
- 安全空间：Logo四周需保留至少10px的空白区域

### 1.2 品牌色系
```css
/* 主色 */
--primary-100: #E3F2FD;  /* 最浅 */
--primary-200: #BBDEFB;
--primary-300: #90CAF9;
--primary-400: #64B5F6;
--primary-500: #42A5F5;  /* 标准 */
--primary-600: #2196F3;
--primary-700: #1E88E5;
--primary-800: #1976D2;
--primary-900: #1565C0;  /* 最深 */

/* 辅助色 */
--success-500: #4CAF50;  /* 成功 */
--warning-500: #FF9800;  /* 警告 */
--error-500: #F44336;    /* 错误 */
--info-500: #2196F3;     /* 信息 */

/* 中性色 */
--neutral-100: #FFFFFF;  /* 白色 */
--neutral-200: #F5F5F5;  /* 背景色 */
--neutral-300: #E0E0E0;  /* 分割线 */
--neutral-400: #BDBDBD;  /* 禁用 */
--neutral-500: #9E9E9E;  /* 次要文字 */
--neutral-600: #757575;  /* 主要文字 */
--neutral-700: #616161;  /* 标题 */
--neutral-800: #424242;  /* 深色文字 */
--neutral-900: #212121;  /* 最深 */
```

## 2. 字体规范

### 2.1 字体家族
```css
/* 中文字体 */
font-family: -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif;

/* 英文字体 */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

### 2.2 字号规范
```css
/* 标题 */
--font-h1: 24px;  /* 主标题 */
--font-h2: 20px;  /* 次标题 */
--font-h3: 18px;  /* 小标题 */
--font-h4: 16px;  /* 段落标题 */

/* 正文 */
--font-body: 14px;    /* 正文 */
--font-small: 12px;   /* 小字 */
--font-mini: 10px;    /* 最小 */

/* 行高 */
--line-height-tight: 1.2;   /* 紧凑 */
--line-height-normal: 1.5;  /* 标准 */
--line-height-loose: 1.8;   /* 宽松 */
```

### 2.3 字重规范
```css
--font-weight-regular: 400;   /* 常规 */
--font-weight-medium: 500;    /* 中等 */
--font-weight-semibold: 600;  /* 半粗 */
--font-weight-bold: 700;      /* 粗体 */
```

## 3. 间距规范

### 3.1 基础间距
```css
--spacing-xxs: 4px;   /* 超小间距 */
--spacing-xs: 8px;    /* 小间距 */
--spacing-sm: 12px;   /* 较小间距 */
--spacing-md: 16px;   /* 中等间距 */
--spacing-lg: 24px;   /* 大间距 */
--spacing-xl: 32px;   /* 较大间距 */
--spacing-xxl: 48px;  /* 超大间距 */
```

### 3.2 布局间距
```css
--layout-gutter: 24px;     /* 栅格间距 */
--layout-margin: 16px;     /* 页面边距 */
--layout-padding: 24px;    /* 内容边距 */
--layout-radius: 8px;      /* 圆角半径 */
```

## 4. 基础组件规范

### 4.1 按钮
```css
/* 按钮尺寸 */
--button-height-sm: 32px;   /* 小按钮 */
--button-height-md: 40px;   /* 中按钮 */
--button-height-lg: 48px;   /* 大按钮 */

/* 按钮圆角 */
--button-radius: 6px;

/* 按钮内边距 */
--button-padding: 16px;
```

### 4.2 输入框
```css
/* 输入框尺寸 */
--input-height-sm: 32px;   /* 小输入框 */
--input-height-md: 40px;   /* 中输入框 */
--input-height-lg: 48px;   /* 大输入框 */

/* 输入框圆角 */
--input-radius: 6px;

/* 输入框内边距 */
--input-padding: 12px;
```

### 4.3 卡片
```css
/* 卡片阴影 */
--shadow-sm: 0 2px 4px rgba(0,0,0,0.1);    /* 小阴影 */
--shadow-md: 0 4px 8px rgba(0,0,0,0.1);    /* 中阴影 */
--shadow-lg: 0 8px 16px rgba(0,0,0,0.1);   /* 大阴影 */

/* 卡片圆角 */
--card-radius: 8px;

/* 卡片内边距 */
--card-padding: 16px;
```

## 5. 响应式断点

### 5.1 断点定义
```css
/* 响应式断点 */
--breakpoint-sm: 640px;   /* 手机 */
--breakpoint-md: 768px;   /* 平板 */
--breakpoint-lg: 1024px;  /* 小桌面 */
--breakpoint-xl: 1280px;  /* 大桌面 */
```

### 5.2 容器宽度
```css
/* 容器最大宽度 */
--container-sm: 640px;   /* 手机容器 */
--container-md: 768px;   /* 平板容器 */
--container-lg: 1024px;  /* 小桌面容器 */
--container-xl: 1280px;  /* 大桌面容器 */
```

## 6. 动画效果

### 6.1 过渡时间
```css
/* 过渡持续时间 */
--duration-fast: 0.2s;    /* 快速过渡 */
--duration-normal: 0.3s;  /* 普通过渡 */
--duration-slow: 0.4s;    /* 慢速过渡 */
```

### 6.2 过渡曲线
```css
/* 过渡曲线 */
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

## 7. 图标规范

### 7.1 图标尺寸
```css
/* 图标尺寸 */
--icon-size-sm: 16px;   /* 小图标 */
--icon-size-md: 24px;   /* 中图标 */
--icon-size-lg: 32px;   /* 大图标 */
```

### 7.2 图标颜色
```css
/* 图标颜色 */
--icon-color: var(--neutral-600);         /* 默认颜色 */
--icon-color-hover: var(--primary-500);   /* 悬停颜色 */
--icon-color-active: var(--primary-600);  /* 激活颜色 */
```

## 8. 交互状态

### 8.1 悬停状态
```css
/* 悬停效果 */
--hover-opacity: 0.8;      /* 透明度 */
--hover-scale: 1.02;       /* 缩放 */
--hover-shadow: var(--shadow-md);  /* 阴影 */
```

### 8.2 激活状态
```css
/* 激活效果 */
--active-opacity: 0.7;     /* 透明度 */
--active-scale: 0.98;      /* 缩放 */
--active-shadow: var(--shadow-sm);  /* 阴影 */
```

### 8.3 禁用状态
```css
/* 禁用效果 */
--disabled-opacity: 0.5;   /* 透明度 */
--disabled-bg: var(--neutral-200);  /* 背景色 */
--disabled-color: var(--neutral-500);  /* 文字色 */
``` 
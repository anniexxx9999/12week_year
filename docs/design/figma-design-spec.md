# Figma 设计规范文档

## 1. Figma 文件组织

### 1.1 页面结构
```
📁 12周目标追踪器
├── 🎨 Style Guide
│   ├── Colors
│   ├── Typography
│   ├── Components
│   └── Icons
├── 🖥 Desktop
│   ├── Home
│   ├── Period Management
│   ├── Goal Management
│   └── Task Management
├── 📱 Tablet
└── 📱 Mobile
```

### 1.2 组件库结构
```
📁 Components
├── Navigation
│   ├── Top Bar
│   ├── Side Menu
│   └── Bottom Bar
├── Cards
│   ├── Goal Card
│   ├── Task Card
│   └── Period Card
├── Forms
│   ├── Input Fields
│   ├── Buttons
│   └── Dropdowns
└── Charts
    ├── Progress Charts
    ├── Statistics Charts
    └── Timeline Charts
```

## 2. 设计系统

### 2.1 颜色系统
```
Primary Colors:
- Brand Blue: #007AFF
  - Light: #E5F1FF
  - Dark: #004999

Secondary Colors:
- Success Green: #4CD964
  - Light: #E8F9EB
  - Dark: #2E8138
- Warning Orange: #FF9500
  - Light: #FFF2E5
  - Dark: #995900
- Error Red: #FF3B30
  - Light: #FFE5E4
  - Dark: #991008

Neutral Colors:
- Black: #000000
- Dark Gray: #333333
- Gray: #666666
- Light Gray: #999999
- Extra Light Gray: #F5F5F5
- White: #FFFFFF
```

### 2.2 字体系统
```
Font Family:
- Primary: SF Pro Display (macOS/iOS)
- Fallback: -apple-system, BlinkMacSystemFont, Segoe UI

Font Sizes:
- H1: 24px (Bold)
- H2: 20px (Bold)
- H3: 18px (Semibold)
- Body: 14px (Regular)
- Small: 12px (Regular)
- Tiny: 10px (Regular)

Line Heights:
- Headings: 1.4
- Body: 1.5
- Small: 1.4
```

### 2.3 间距系统
```
Spacing Scale:
- 4px  (xs)
- 8px  (sm)
- 16px (md)
- 24px (lg)
- 32px (xl)
- 48px (2xl)

Layout Spacing:
- Page Padding: 24px
- Section Spacing: 32px
- Card Padding: 16px
- Input Padding: 8px
```

### 2.4 阴影系统
```
Shadows:
- Level 1 (Cards):
  box-shadow: 0 2px 4px rgba(0,0,0,0.1)
  
- Level 2 (Dropdowns):
  box-shadow: 0 4px 8px rgba(0,0,0,0.1)
  
- Level 3 (Modals):
  box-shadow: 0 8px 16px rgba(0,0,0,0.1)
```

## 3. 组件设计规范

### 3.1 导航组件
```
Top Bar:
- Height: 56px
- Background: White
- Border Bottom: 1px solid #F5F5F5
- Title: H2
- Actions: Icon Buttons

Side Menu:
- Width: 240px
- Background: White
- Item Height: 48px
- Active State: Brand Blue Light
```

### 3.2 卡片组件
```
Goal Card:
- Padding: 16px
- Border Radius: 8px
- Title: H3
- Progress Bar Height: 4px
- Shadow: Level 1

Task Card:
- Padding: 12px
- Border Radius: 6px
- Title: Body
- Checkbox Size: 20px
- Priority Indicator: 4px width
```

### 3.3 表单组件
```
Input Field:
- Height: 40px
- Border Radius: 6px
- Border: 1px solid #E5E5E5
- Padding: 8px 12px
- Focus State: Brand Blue

Button:
- Height: 40px
- Border Radius: 6px
- Padding: 0 16px
- Text: 14px Medium
```

### 3.4 图表组件
```
Progress Chart:
- Height: 200px
- Legend Position: Bottom
- Colors: Brand Colors
- Tooltip: Custom Card

Timeline Chart:
- Height: 160px
- Grid Lines: Light Gray
- Today Indicator: Brand Blue
```

## 4. 页面布局规范

### 4.1 桌面端布局
```
Main Layout:
- Side Menu: 240px fixed
- Content: Fluid
- Right Panel: 320px fixed
- Min Width: 1200px
- Max Width: 1920px

Grid System:
- Columns: 12
- Gutter: 24px
- Margin: 24px
```

### 4.2 响应式断点
```
Breakpoints:
- Desktop: ≥1200px
- Tablet: 768px - 1199px
- Mobile: <768px

Layout Changes:
- Tablet: Hide right panel, collapsible menu
- Mobile: Bottom navigation, full-width content
```

## 5. 交互设计规范

### 5.1 状态变化
```
Hover States:
- Opacity: 0.8
- Transition: 0.2s ease

Active States:
- Scale: 0.98
- Transition: 0.1s ease

Loading States:
- Skeleton Loading
- Progress Indicators
```

### 5.2 动画效果
```
Transitions:
- Duration: 0.2s - 0.3s
- Timing: ease-in-out
- Properties: opacity, transform

Micro-interactions:
- Button Press: Scale
- Card Hover: Elevation
- Menu Transition: Slide
```

## 6. Figma 文件链接

[设计文件链接将在完成后提供]

## 7. 设计资源

### 7.1 图标库
- Phosphor Icons (Regular & Fill)
- Custom Product Icons

### 7.2 图表库
- Charts & Graphs Components
- Data Visualization Patterns

### 7.3 插画资源
- Empty States
- Success/Error States
- Onboarding Illustrations 
# 界面原型设计

## 1. 主界面布局

```
+------------------+------------------+------------------+
|     顶部导航栏                                        |
+------------------+------------------+------------------+
|                  |                  |                 |
| 左侧导航         |     主内容区      |    右侧面板     |
| - 周期列表       |                  |   - 今日任务    |
| - 目标管理       |                  |   - 待办事项    |
| - 统计分析       |                  |   - 进度概览    |
|                  |                  |                 |
+------------------+------------------+-----------------+
|     底部状态栏                                        |
+------------------+------------------+------------------+
```

## 2. 弹出窗口设计

### 2.1 快速任务添加
```
+----------------------------------------+
|  快速添加任务                    [x]    |
+----------------------------------------+
|  任务标题: [                    ]       |
|  所属目标: [下拉选择           v]       |
|  优先级:   ○高  ○中  ○低              |
|  截止时间: [日期选择器]               |
|                                        |
|  [取消]                [确定]          |
+----------------------------------------+
```

### 2.2 目标创建界面
```
+----------------------------------------+
|  创建12周目标                    [x]    |
+----------------------------------------+
|  目标标题: [                    ]       |
|  所属周期: [当前周期]                  |
|  目标类型: ○工作 ○学习 ○生活 ○其他    |
|  开始时间: [日期选择器]               |
|  优先级:   [下拉选择]                  |
|                                        |
|  每周目标设置:                         |
|  +-----------------------------------+ |
|  | 第1周 [输入框]                    | |
|  | 第2周 [输入框]                    | |
|  | ...                               | |
|  +-----------------------------------+ |
|                                        |
|  [取消]                [保存]          |
+----------------------------------------+
```

## 3. 主要功能页面

### 3.1 周期管理页面
```
+------------------+------------------+------------------+
|  周期管理                        [+ 新建周期]        |
+------------------+------------------+------------------+
|  当前周期: 2024Q1 (第3����/共12周)                    |
|  [===========○=================] 25%                 |
|                                                      |
|  目标概览:                                          |
|  +------------------+------------------+             |
|  |  进行中目标 (5)  |  已完成目标 (2)  |             |
|  |  - 目标1         |  - 已完成1       |             |
|  |  - 目标2         |  - 已完成2       |             |
|  +------------------+------------------+             |
|                                                      |
|  本周任务分布:                                      |
|  [图表区域 - 显示任务分布情况]                      |
+------------------------------------------------------+
```

### 3.2 四象限任务视图
```
+------------------+------------------+
|   重要且紧急     |    重要不紧急    |
| [任务列表]       | [任务列表]       |
|                  |                  |
+------------------+------------------+
|   紧急不重要     |  不重要不紧急    |
| [任务列表]       | [任务列表]       |
|                  |                  |
+------------------+------------------+
```

### 3.3 目标详情页面
```
+------------------------------------------+
|  目标详情: 提升产品开发效率               |
+------------------------------------------+
|  进度: [=================] 75%            |
|  剩余时间: 6周                           |
|                                          |
|  每周目标进度:                           |
|  +-------------------------------------+ |
|  | 第1周 [已完成] 学习新技术           | |
|  | 第2周 [已完成] 制定开发计划         | |
|  | 第3周 [进行中] 开发核心功能         | |
|  | ...                                 | |
|  +-------------------------------------+ |
|                                          |
|  关联任务:                               |
|  [ ] 任务1 (高优先级)                    |
|  [x] 任务2 (已完成)                      |
|  [ ] 任务3 (进行中)                      |
+------------------------------------------+
```

### 3.4 统计分析页面
```
+------------------------------------------+
|  数据统计                                |
+------------------------------------------+
|  +----------------+  +----------------+   |
|  | 目标完成率     |  | 任务完成趋势   |   |
|  | [环形图]       |  | [折线图]       |   |
|  +----------------+  +----------------+   |
|                                          |
|  +----------------+  +----------------+   |
|  | 时间分配       |  | 效率分析       |   |
|  | [��图]         |  | [柱状图]       |   |
|  +----------------+  +----------------+   |
+------------------------------------------+
```

## 4. 响应式设计

### 4.1 桌面端（>1200px）
- 三栏布局
- 完整功能展示
- 图表完整显示

### 4.2 平板端（768px-1200px）
- 双栏布局
- 部分功能折叠
- 图表自适应

### 4.3 移动端（<768px）
- 单栏布局
- 功能通过菜单访问
- 简化图表显示

## 5. 交互状态

### 5.1 任务卡片状态
```
+------------------------------------------+
|  默认状态                                |
+------------------------------------------+
|  悬停状态 (显示操作按钮)                 |
+------------------------------------------+
|  拖拽状态 (半透明)                       |
+------------------------------------------+
|  编辑状态 (突出显示)                     |
+------------------------------------------+
```

### 5.2 按钮状态
```
+------------------------------------------+
|  [默认状态]                              |
|  [悬停状态 - 背景色变化]                 |
|  [点击状态 - 轻微下沉]                   |
|  [禁用状态 - 置灰]                       |
+------------------------------------------+
```

## 6. 列表页面

### 6.1 周期列表页面
```
+------------------------------------------+
|  周期管理                    [+ 新建周期] |
+------------------------------------------+
|  筛选: [全部 v] [进行中 v] [搜索 🔍]     |
|                                          |
|  +--------------------------------------+|
|  | 2024 Q1                              ||
|  | 进行中 | 01/01 - 03/24               ||
|  | [===========] 45%                    ||
|  +--------------------------------------+|
|                                          |
|  +--------------------------------------+|
|  | 2023 Q4                              ||
|  | 已完成 | 10/01 - 12/24               ||
|  | [====================] 100%          ||
|  +--------------------------------------+|
+------------------------------------------+
```

### 6.2 目标列表页面
```
+------------------------------------------+
|  目标管理                    [+ 新建目标] |
+------------------------------------------+
|  视图: [列表 v]  排序: [最新 v]          |
|  筛选: [全部 v] [类型 v] [搜索 🔍]       |
|                                          |
|  +--------------------------------------+|
|  | ⭐ 提升产品开发效率                   ||
|  | 进行中 | 剩余 4 周                   ||
|  | [===========] 45%                    ||
|  | 5 个任务待完成                        ||
|  +--------------------------------------+|
|                                          |
|  +--------------------------------------+|
|  | 📚 学习新技术                         ||
|  | 进行中 | 剩余 2 周                   ||
|  | [===============] 75%                ||
|  | 2 个任务待完成                        ||
|  +--------------------------------------+|
+------------------------------------------+
```

### 6.3 设置页面
```
+------------------------------------------+
|  设置                                    |
+------------------------------------------+
|  个人信息                                |
|  +--------------------------------------+|
|  | 头像: [图片]                         ||
|  | 昵称: [输入框]                       ||
|  | 邮箱: [输入框]                       ||
|  +--------------------------------------+|
|                                          |
|  通知设置                                |
|  +--------------------------------------+|
|  | [√] 浏览器通知                       ||
|  | [√] 邮件提醒                         ||
|  | [ ] 免打扰模式                       ||
|  +--------------------------------------+|
|                                          |
|  数据管理                                |
|  +--------------------------------------+|
|  | [导入数据] [导出数据] [清除数据]     ||
|  +--------------------------------------+|
+------------------------------------------+
```

## 7. 弹窗界面

### 7.1 周期创建弹窗
```
+----------------------------------------+
|  创建新周期                      [x]    |
+----------------------------------------+
|  周期名称: [2024 Q1              ]     |
|  开始日期: [2024-01-01           ]     |
|  结束日期: [2024-03-24] (自动计算)     |
|                                        |
|  继承设置:                             |
|  [√] 继承上个周期未完成的目标          |
|  [ ] 使用周期模板                      |
|                                        |
|  提醒设置:                             |
|  [√] 周期开始提醒                      |
|  [√] 周期结束提醒                      |
|  [√] 每 [4] 周提醒一次                 |
|                                        |
|  [取消]                [创建]          |
+----------------------------------------+
```

### 7.2 任务编辑弹窗
```
+----------------------------------------+
|  编辑任务                        [x]    |
+----------------------------------------+
|  任务标题: [完成产品原型设计     ]     |
|  所属目标: [提升产品开发效���     v]    |
|  开始时间: [2024-01-15           ]     |
|  结束时间: [2024-01-20           ]     |
|  优先级:   ○高  ●中  ○低              |
|                                        |
|  描述:                                 |
|  [                                ]    |
|  [                                ]    |
|                                        |
|  标签:                                 |
|  [设计] [原型] [+ 添加标签]           |
|                                        |
|  [删除任务]         [取消]  [保存]     |
+----------------------------------------+
```

### 7.3 提醒设置弹窗
```
+----------------------------------------+
|  提醒设置                        [x]    |
+----------------------------------------+
|  提醒时间:                             |
|  [√] 任务开始时                        |
|  [√] 任务截止前 [24] 小时             |
|  [ ] 自定义时间                        |
|      [2024-01-19 14:00]               |
|                                        |
|  提醒方式:                             |
|  [√] 浏览器通知                        |
|  [√] 邮件提醒                          |
|                                        |
|  重复规则:                             |
|  [不重复 v]                            |
|                                        |
|  [取消]                [保存]          |
+----------------------------------------+
```

### 7.4 导入导出弹窗
```
+----------------------------------------+
|  数据导入导出                    [x]    |
+----------------------------------------+
|  导入数据:                             |
|  [选择文件] 支持 Excel, CSV 格式       |
|  [√] 下载导入模板                      |
|                                        |
|  导出数据:                             |
|  导出范围:                             |
|  [√] 周期数据                          |
|  [√] 目标数据                          |
|  [√] 任务数据                          |
|                                        |
|  导出格式: [Excel v]                   |
|                                        |
|  [取消]                [确定]          |
+----------------------------------------+
```

## 8. 功能模块界面

### 8.1 新手引导界面
```
+------------------------------------------+
|  欢迎使用 12周目标追踪器                  |
+------------------------------------------+
|  [步骤 1/4]                              |
|                                          |
|  创建你的第一个12周期                     |
|  +------------------------------------+  |
|  |  [示意图]                          |  |
|  |                                    |  |
|  |  1. 点击右上角 [+ 新建周期]        |  |
|  |  2. 设置周期名称和时间             |  |
|  |  3. 选择提醒方式                   |  |
|  +------------------------------------+  |
|                                          |
|  [跳过引导]            [下一步 →]        |
+------------------------------------------+
```

### 8.2 搜索结果界面
```
+------------------------------------------+
|  搜索结果: "产品设计"                     |
+------------------------------------------+
|  目标 (3)                                |
|  +--------------------------------------+|
|  | 提升产品开发效率                     ||
|  | 学习产品设计方法                     ||
|  | 产品设计认证                        ||
|  +--------------------------------------+|
|                                          |
|  任务 (5)                                |
|  +--------------------------------------+|
|  | 完成产品原型设计                     ||
|  | 产品需求文档编写                     ||
|  | ...                                 ||
|  +--------------------------------------+|
+------------------------------------------+
```

### 8.3 通知中心界面
```
+------------------------------------------+
|  通知中心                    [全部标记已读]|
+------------------------------------------+
|  今天                                    |
|  +--------------------------------------+|
|  | [!] 任务即将截止: 完成产品原型设计   ||
|  | 距离截止还有 2 小时                  ||
|  +--------------------------------------+|
|  | [√] 目标已完成: 学习新技术          ||
|  | 恭喜你完成了本周目标！              ||
|  +--------------------------------------+|
|                                          |
|  昨天                                    |
|  +--------------------------------------+|
|  | [i] 新周期开始: 2024 Q1             ||
|  | 开始制定你的目标吧                   ||
|  +--------------------------------------+|
+------------------------------------------+
```

### 8.4 批量操作界面
```
+------------------------------------------+
|  任务管理                   [批量操作 v]  |
+------------------------------------------+
|  [√] 全选                                |
|                                          |
|  [ ] 完成产品原型设计                    |
|  [ ] 编写技术文档                        |
|  [ ] 用户调研                            |
|                                          |
|  已选择 3 项                             |
|  +--------------------------------------+|
|  | [移动到] [设置标签] [删除] [导出]    ||
|  +--------------------------------------+|
+------------------------------------------+
```

## 9. 用户账号界面

### 9.1 登录/注册界面
```
+------------------------------------------+
|  登录 12周目标追踪器                      |
+------------------------------------------+
|  [使用 Chrome 账号登录]                   |
|                                          |
|  - 或者 -                                |
|                                          |
|  邮箱: [                           ]     |
|  密码: [                           ]     |
|                                          |
|  [登录]                                  |
|                                          |
|  还没有账号？[注册]                       |
+------------------------------------------+
```

### 9.2 个人信息设置界面
```
+------------------------------------------+
|  完善个人信息                             |
+------------------------------------------+
|  [上传头像]                              |
|                                          |
|  昵称: [                           ]     |
|  职业: [                           ]     |
|  时区: [UTC+8 v]                         |
|                                          |
|  工作时间:                               |
|  开始: [09:00 v]  结束: [18:00 v]       |
|                                          |
|  [跳过]                [保存]            |
+------------------------------------------+
```

### 9.3 偏好设置界面
```
+------------------------------------------+
|  偏好设置                                |
+------------------------------------------+
|  界面设置:                               |
|  主题: ○浅色 ●深色 ○跟随系统            |
|  语言: [简体中文 v]                      |
|  默认视图: [四象限 v]                    |
|                                          |
|  工作习惯:                               |
|  [√] 自动开始下一个任务                  |
|  [√] 显示任务预计时间                    |
|  [ ] 允许任务重叠                        |
|                                          |
|  [恢复默认]            [保存]            |
+------------------------------------------+
```

## 10. 周期管理补充界面

### 10.1 周期编辑界面
```
+------------------------------------------+
|  编辑周期: 2024 Q1                       |
+------------------------------------------+
|  基本信息:                               |
|  名称: [2024 Q1              ]          |
|  描述: [第一季度目标规划     ]          |
|  状态: [进行中 v]                       |
|                                          |
|  时间调整:                               |
|  [!] 修改时间将影响关联的目标和任务      |
|  开始: [2024-01-01]                     |
|  结束: [2024-03-24]                     |
|                                          |
|  [删除周期]            [保存]            |
+------------------------------------------+
```

### 10.2 周期模板管理界面
```
+------------------------------------------+
|  周期模板管理                  [+ 新建模板]|
+------------------------------------------+
|  常用模板:                               |
|  +--------------------------------------+|
|  | ⭐ 季度OKR模板                       ||
|  | - 包含3个目标框架                    ||
|  | - 12个每周任务模板                   ||
|  +--------------------------------------+|
|                                          |
|  自定义模板:                             |
|  +--------------------------------------+|
|  | 📊 项目管理模板                      ||
|  | - 包含5个目标框架                    ||
|  | - 20个任务模板                       ||
|  +--------------------------------------+|
+------------------------------------------+
```

## 11. 目标管理补充界面

### 11.1 目标依赖关系设置
```
+------------------------------------------+
|  目标依赖关系 - 提升产品开发效率          |
+------------------------------------------+
|  前置目标:                               |
|  [ ] 完成产品调研                        |
|  [√] 制定开发计划                        |
|                                          |
|  后置目标:                               |
|  [ ] 产品发布                            |
|  [ ] 用户反馈收集                        |
|                                          |
|  [取消]                [保存]            |
+------------------------------------------+
```

### 11.2 目标复制设置
```
+------------------------------------------+
|  复制目标                                |
+------------------------------------------+
|  源目标: 提升产品开发效率                 |
|                                          |
|  复制选项:                               |
|  [√] 复制每周目标                        |
|  [√] 复制关联任务                        |
|  [ ] 复制提醒设置                        |
|                                          |
|  目标周期: [2024 Q2 v]                  |
|                                          |
|  [取消]                [复制]            |
+------------------------------------------+
```

## 12. 任务管理补充界面

### 12.1 任务模板管理
```
+------------------------------------------+
|  任务模板管理                  [+ 新建模板]|
+------------------------------------------+
|  常用任务模板:                           |
|  +--------------------------------------+|
|  | 📝 每周回顾模板                      ||
|  | - 固定周五截止                       ||
|  | - 包含5个检查项                      ||
|  +--------------------------------------+|
|                                          |
|  自定义任务模板:                         |
|  +--------------------------------------+|
|  | 🎯 产品迭代模板                      ||
|  | - 包含10个标准步骤                   ||
|  | - 自动设置依赖关系                   ||
|  +--------------------------------------+|
+------------------------------------------+
```

### 12.2 任务关联设置
```
+------------------------------------------+
|  任务关联 - 完成产品原型设计              |
+------------------------------------------+
|  前置任务:                               |
|  [√] 收集用户需求                        |
|  [√] 竞品分析                           |
|                                          |
|  子任务:                                 |
|  [ ] 设计主界面                          |
|  [ ] 设计交互流程                        |
|  [+] 添加子任务                          |
|                                          |
|  [取消]                [保存]            |
+------------------------------------------+
```

## 13. 数据管理补充界面

### 13.1 数据备份设置
```
+------------------------------------------+
|  数据备份设置                             |
+------------------------------------------+
|  自动备份:                               |
|  [√] 启用自动备份                        |
|  频率: [每周 v]                          |
|  保留份数: [4 v]                         |
|                                          |
|  备份内容:                               |
|  [√] 周期数据                           |
|  [√] 目标数据                           |
|  [√] 任务数据                           |
|  [√] 个人设置                           |
|                                          |
|  [立即备份]            [保存设置]        |
+------------------------------------------+
```

### 13.2 数据恢复界面
```
+------------------------------------------+
|  数据恢复                                |
+------------------------------------------+
|  可用备份:                               |
|  +--------------------------------------+|
|  | 2024-01-20 10:00                    ||
|  | 大小: 2.5MB                         ||
|  | [预览] [恢复]                       ||
|  +--------------------------------------+|
|                                          |
|  +--------------------------------------+|
|  | 2024-01-13 10:00                    ||
|  | 大小: 2.3MB                         ||
|  | [预览] [恢复]                       ||
|  +--------------------------------------+|
+------------------------------------------+
```

### 13.3 数据清理确认
```
+------------------------------------------+
|  ⚠️ 确认清理数据                         |
+------------------------------------------+
|  您确定要清理以下数据吗？                 |
|  此操作不可撤销！                        |
|                                          |
|  清理范围:                               |
|  [√] 已归档的周期                        |
|  [√] 已完成的目标                        |
|  [√] 已完成的任务                        |
|  [ ] 个人设置                            |
|                                          |
|  请输入"DELETE"确认:                     |
|  [                    ]                  |
|                                          |
|  [取消]                [确认清理]        |
+------------------------------------------+
``` 
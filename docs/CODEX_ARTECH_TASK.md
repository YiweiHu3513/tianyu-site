# Codex 任务：天与科艺（ARTECH）页面样式还原

## 目标
将 `src/pages/Artech.jsx` 的视觉效果还原到与旧站 https://tianyu.art/ 一致，当前结构大致正确，但样式细节有很多 bug。

## 参考网站
- **旧站**：https://tianyu.art/ （可能即将下线，截图见下方描述）
- **旧站特征**：Framer 构建，暗色主题，高级感强

## 项目技术栈
- Vite 8 + React 19 + Tailwind CSS v4 + React Router v7
- **不是 Next.js**，不需要 "use client"
- 本地开发：`npm run dev` → localhost:5173
- 天与科艺路由已独立于主站 Layout（在 App.jsx 中 `/artech` 路由不包裹在 Layout 里）

## 当前文件位置
- 主文件：`src/pages/Artech.jsx`（约 692 行）
- 样式变量：`src/index.css`（`@theme` 块定义了 --color-ink, --color-teal 等，但 Artech 页面用内联 style 自定义暗色主题）
- 图片：`public/images/artech/`（hero-banner.png, founder-huyl.jpg, founder-sc.jpg）
- 事件图片：`public/images/events/`（各事件封面图）
- 案例图片：`public/images/cases/`（各案例作品图）

## 旧站首页结构（从上到下，需要还原的）

### 1. 导航栏
- 半透明暗色覆盖层（`rgba(14,14,15,0.35)` + backdrop-blur）
- 左侧："TIANYUARTECH" 小字 logo（tracking 很宽）
- 右侧：菜单项 作品 / 节目 / 事件（间距较大，hover 变白）
- 右上角有搜索图标 🔍 和 语言切换 "CN"
- **新增**："← 天与视界" 返回按钮（当前已有，保留）
- 汉堡菜单图标（三条线）

### 2. Hero 区域（全屏高度）
- **背景图**：星云/太空大图，铺满整个视口
- **暗色渐变叠加**：`linear-gradient(180deg, rgba(13,9,9,0.57) 3%, rgba(0,0,0,0.57) 40%, rgba(92,65,65,0.78) 100%)`
- **巨型文字**：
  - "TIANYU" 一行，非常大的白色粗体（约 15-20vw）
  - "ARTECH" 第二行，同样大，但颜色稍微偏灰/银色（不是纯白，有金属质感）
  - 两行之间间距很紧（leading 约 0.85）
  - **重要**：旧站的 ARTECH 文字有微妙的金属光泽/3D 感，不是纯平面白色
- 下方：logo 图标 + "天与 ARTECH" 中文标识
- 最底部有向下滚动的箭头动画

### 3. 关于区域
- **旧站不是圆形头像**，是竖版人像照片（portrait format，约 2:3 比例）并排展示
- 照片下方是名字和简介
- 地点标识："香港火炭艺术区"
- 理念文字段落
- **当前 bug**：用了圆形裁切 `rounded-full`，应该改为矩形竖版照片

### 4. 作品区域
- 旧站的作品是**一个接一个纵向排列**的大卡片，每个包含：
  - 全宽横版大图（16:9 或类似比例）
  - 下方：标题（大号白色粗体）+ 英文名（斜体灰色）
  - 年份、时长、类别等元信息
  - 描述文字
  - 点击进入详情页
- **当前**：基本已实现，但需要检查间距、字号是否和旧站一致

### 5. 节目区域
- 旧站显示 6 个节目，每个有缩略图 + 标题 + 日期
- **当前**：用的是纯文字卡片，缺少缩略图

### 6. 事件区域
- 旧站首页只显示 **3 个精选事件**
- 每个事件：左侧文字描述 + 右侧竖版海报/缩略图
- 有"查看更多"链接
- **当前**：基本结构对，但图片布局需要调

### 7. 页脚
- 暗色背景
- 联系邮箱：tianyuartech@gmail.com（蓝色链接 #0099ff）
- 社交：Bilibili / YouTube / 微信公众号
- 版权信息

## 需要修复的具体 Bug

### Bug 1：创始人照片应该是矩形竖版，不是圆形
- 当前：`rounded-full` + `w-48 h-48`
- 应改为：矩形，约 `w-56 h-80` 或类似 2:3 比例，`rounded-lg`，无圆形裁切
- 照片并排居中展示

### Bug 2：Hero ARTECH 文字缺乏金属质感
- 当前：纯白色 `#fff`
- 旧站：ARTECH 那行有偏银/灰的金属感，可以用 `background: linear-gradient(...)` + `background-clip: text` + `-webkit-text-fill-color: transparent` 实现金属渐变效果

### Bug 3：节目区域缺少缩略图
- 当前是纯文字卡片
- 如果没有图片，至少给一个深色占位 + icon，而不是完全空白

### Bug 4：事件卡片图片高度不统一
- 右侧图片区域应该统一高度（如 h-64），用 `object-cover` 裁切

### Bug 5：页面进入时没有滚动到顶部
- Artech 页面独立于 Layout，Layout 里的 `scrollTo(0,0)` 不会触发
- 需要在 Artech 组件的 useEffect 里加 `window.scrollTo(0, 0)`

### Bug 6：汉堡菜单没有功能
- 点击汉堡菜单应该展开一个全屏暗色菜单覆盖层
- 菜单项：作品 / 节目 / 事件 / 返回天与视界
- 点击后关闭菜单并滚动到对应区域

### Bug 7：事件详情页（EventDetail.jsx）和案例详情页（CaseDetail.jsx）还在用主站的浅色主题
- 从暗色 Artech 页面点击进入详情页时，应该也是暗色主题
- 或者至少 EventDetail 页面应该有暗色主题（因为它属于 ARTECH 子站）

## 不需要改的
- 数据数组（CASES, PROGRAMS, EXHIBITIONS, ACTIVITIES）的内容
- 路由结构（App.jsx）
- 主站的其他页面（Home, SciVision, SciPlay 等）
- index.css 的全局样式

## 验证步骤
1. `npm run build` 必须通过
2. 浏览 localhost:5173/artech 检查各区域
3. 点击 "← 天与视界" 能回到主站首页
4. 点击事件/案例卡片能进入对应详情页
5. 导航菜单项点击能滚动到对应区域
6. 手机端响应式布局正常

## 设计 Token 参考
```
背景色: #0a0a0a (页面主背景)
卡片背景: #111 或 #141414
标题: #fff (白色)
正文: #999 (中灰)
辅助文字: #666 / #777
强调色: #d4a853 (琥珀金)
链接色: #0099ff (蓝色)
分割线: rgba(255,255,255,0.06)
导航背景: rgba(14,14,15,0.35)
标题字体: var(--font-display) 即 'Noto Serif SC', 'Playfair Display', serif
正文字体: var(--font-sans) 即 'Outfit', 'Noto Sans SC', system-ui, sans-serif
```

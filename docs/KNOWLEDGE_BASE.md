# 天与视界站点知识库

最后更新：2026-03-27（Asia/Shanghai）

## 项目定位

- 仓库：`/Users/yiweihu/天与视界/tianyu-site`
- 技术栈：Vite 8 + React 19 + Tailwind CSS v4 + React Router v7
- 线上临时主地址：`https://tianyu-site.vercel.app`
- 当前策略：先用 Vercel 临时域名持续迭代，`tianyu.art` 待 DNS 权限恢复后再切换

## 本次已落地修改（ARTECH 修复）

### 1. ARTECH 页面（`src/pages/Artech.jsx`）

- 修复 `Bug 1`：创始人照片由圆形改为竖版矩形（`w-56 h-80 + rounded-lg`）。
- 修复 `Bug 2`：Hero 第二行 `ARTECH` 改为银灰金属渐变文字（`background-clip + text-fill transparent`）。
- 修复 `Bug 3`：节目区补充缩略图区域；无图时有深色占位视觉。
- 修复 `Bug 4`：事件卡右侧图片高度统一（`h-64 + object-cover`）。
- 修复 `Bug 5`：页面挂载时执行 `window.scrollTo(0, 0)`。
- 修复 `Bug 6`：汉堡菜单实现全屏暗色覆盖层，支持：
  - 跳转到 `作品 / 节目 / 事件`
  - 返回主站首页
  - 点击关闭后恢复页面滚动

### 2. 详情页暗色统一

- 修复 `Bug 7`：
  - `src/pages/EventDetail.jsx` 统一到 ARTECH 暗色语境。
  - `src/pages/CaseDetail.jsx` 统一到 ARTECH 暗色语境，并补充详情页滚动到顶部行为。

### 3. 部署优化

- 新增 `.vercelignore`，避免部署上传本地重资源目录，减少部署体积和耗时。
- 排除项包含：`.git`、`node_modules`、`dist`、`图片库`、`docs` 等。

## 发布记录

### 2026-03-27

- 发布命令：`npx vercel deploy --prod --yes`
- 部署快照：
  - `https://tianyu-site-4d24rgavp-yiweihu3513-2757s-projects.vercel.app`
- 当前生产别名：
  - `https://tianyu-site.vercel.app`

## 验证结果

- `npm run build`：通过（Vite 构建成功）。
- 生产页面返回新构建资源（`index-D6jElmrD.js` / `index-BCNp5Q7g.css`）。
- 详情页脚本中已确认包含 ARTECH 暗色文案与结构（活动概述、章节结构等）。

## 待办与风险

- `tianyu.art / www.tianyu.art` 仍依赖域名注册商账号（Name.com）改 DNS 后才能完成正式切换。
- 建议后续将 ARTECH 修复整理为独立 commit，避免与历史未整理改动混在一起。


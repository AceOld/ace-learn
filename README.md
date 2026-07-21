# ace-learn

AceOld 的多主题学习仓库。每个子目录是一个独立的学习主题(课程 + 术语表 + 参考资料)。

**在线访问**:👉 **https://aceold.github.io/ace-learn/**

---

## 当前主题

| 目录 | 主题 | 说明 |
|------|------|------|
| [`learn-data-govern/`](./learn-data-govern/) | 数据治理 Data Governance | 从 DAMA-DMBOK 出发,覆盖管理 / 技术 / 合规三视角,项目实战型 |

## 目录结构(每个主题通用)

```
<topic>/
├── lessons/         # 课程 HTML,手机/桌面/打印都友好
├── assets/          # 课程共享 CSS / JS(可复用组件)
├── reference/       # 术语表、速查
└── RESOURCES.md     # 高可信资源清单
```

**说明**:Mission、Notes、Learning Records 等个人内容**不发布**到本仓库,仅保留在本地工作区。

## 本地预览

```bash
cd ace-learn
python3 -m http.server 8080
# 浏览器打开 http://localhost:8080
```

## 添加新主题

1. 复制 `learn-data-govern/` 的目录结构到新主题目录
2. 在 `index.html` 加一张 `<a class="course-card">` 卡片
3. push 到 main,GitHub Pages 自动部署

## 技术栈

- 纯 HTML + CSS + vanilla JS,无构建步骤
- 响应式 + 深色模式 + 可访问性(`prefers-color-scheme`、`prefers-reduced-motion`、`viewport-fit=cover`)
- GitHub Pages 通过 `main` 分支根目录部署

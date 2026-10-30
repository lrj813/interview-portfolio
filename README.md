# 梁瑞杰 · 产品与思考

[访问个人网站](https://Liang-Ruijie.github.io/interview-portfolio/)

面向面试展示的个人网站。杂志编辑风，包含个人介绍、个人项目、文章、工具和联系入口。纯 HTML、CSS、JavaScript，无构建依赖。

目前内容整理自 [GitHub 个人简介](https://github.com/Liang-Ruijie/Liang-Ruijie)，可继续替换。项目截图与文章链接用于呈现公开实践，不代表商业客户成果。

## 本地查看

在本目录运行 `python3 -m http.server 8080 --directory dist`，访问 http://localhost:8080。

## 修改内容

**正式发布源目录是 `dist/`。** `github-pages/` 是早期压缩包的解压副本，不参与发布。不要只改解压副本。

- `dist/index.html`：封面、姓名、个人介绍、工具、联系方式和导航。
- `dist/content.js`：项目与文章。修改数组即可调整展示顺序；新增条目会自动渲染。
- `dist/assets/`：项目配图。截图来自本人公开项目；LifeOS 当前配图为历史设计过程稿。
- `dist/style.css`：排版、配色与手机样式。中文衬线使用 Noto Serif SC，字体加载失败时回退宋体和系统字体。
- `dist/script.js`：内容渲染、手机目录、复制邮箱和导航提示。

所有资源路径均为相对路径，适用于 GitHub Pages 的项目子目录。

## GitHub Pages

网站地址：https://Liang-Ruijie.github.io/interview-portfolio/

通过 GitHub Actions 自动发布 `dist/`，无需上传或解压压缩包。

- 推送 `dist/` 的修改到 `main`，网站自动更新。
- 在 Actions 中选择 `Deploy personal website to GitHub Pages`，可手动 Run workflow。
- Settings → Pages → Source 保持 GitHub Actions。
- 仓库 About 中的网站地址保持上面的 URL。

个人主页 README 可添加 `[我的个人网站](https://Liang-Ruijie.github.io/interview-portfolio/)`。

# 梁瑞杰的个人网站

[访问个人网站](https://lrj813.github.io/interview-portfolio/)

面向面试展示的中文个人网站。纯 HTML、CSS 和 JavaScript，无构建依赖。暂不展示项目、履历或未经提供的工作成果。个人介绍与产品思考为可修改的初版文案。

## 本地查看

在本目录运行 `python3 -m http.server 8080 --directory dist`，访问 http://localhost:8080。

## 修改内容

- `dist/index.html`：姓名、简介、产品思考、GitHub 链接。
- `dist/style.css`：布局、配色与移动端样式。
- `dist/script.js`：导航当前区域提示。

字体有本地系统字体回退，无需外部 API、账号或密钥。

## GitHub Pages

网站地址：https://lrj813.github.io/interview-portfolio/

本仓库通过 GitHub Actions 自动发布 `dist/` 中的静态网页，不需要上传或解压压缩包。

- 修改网站：编辑 `dist/` 里的 HTML、CSS 或 JavaScript 文件，然后提交到 `main`。
- 自动发布：推送后，GitHub 的 Actions 页面会显示部署进度。
- 手动发布：在 Actions 中选择 `Deploy personal website to GitHub Pages`，点击 Run workflow。
- 发布设置：Settings → Pages → Source 选择 GitHub Actions。
- 仓库展示：About 中的 Website 使用上面的网站地址。

可放入个人主页 README 的链接：

[我的个人网站](https://lrj813.github.io/interview-portfolio/)

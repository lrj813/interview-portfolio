# 梁瑞杰的个人网站

面向面试展示的中文个人网站。纯 HTML、CSS 和 JavaScript，无构建依赖。暂不展示项目、履历或未经提供的工作成果。个人介绍与产品思考为可修改的初版文案。

## 本地查看

在本目录运行 `python3 -m http.server 8080 --directory dist`，访问 http://localhost:8080。

## 修改内容

- `dist/index.html`：姓名、简介、产品思考、GitHub 链接。
- `dist/style.css`：布局、配色与移动端样式。
- `dist/script.js`：导航当前区域提示。

字体有本地系统字体回退，无需外部 API、账号或密钥。

## GitHub Pages

1. 在 GitHub 创建 `lrj813.github.io` 仓库。
2. 将 `dist/` 里面的四个文件放在仓库根目录。
3. 在 Settings → Pages 选择 Deploy from a branch，选择 main 分支和 /(root)。
4. 发布完成后将 https://lrj813.github.io 放在 GitHub 个人简介的 Website 字段或个人主页 README 中。

可放入 README 的链接：`[我的个人网站](https://lrj813.github.io)`。该地址需在 GitHub Pages 实际发布成功后使用。

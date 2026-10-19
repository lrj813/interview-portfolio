'use strict';
const element = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
};
const externalLink = (text, url, className) => {
  const a = element('a', className, text);
  a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer';
  return a;
};
const content = window.portfolioContent || {projects: [], articles: []};
for (const project of content.projects) {
  const article = element('article', 'project');
  const figure = element('figure', 'project-figure');
  const preview = externalLink('', project.demo, 'project-preview');
  preview.setAttribute('aria-label', '体验 ' + project.name);
  const img = element('img'); img.src = project.image; img.alt = project.alt;
  img.width = 1440; img.height = 960; img.loading = 'lazy';
  preview.append(img, element('span', 'preview-hint', '打开项目 ↗'));
  const caption = element('figcaption');
  caption.append(element('span', '', project.caption), element('span', '', 'FIG. 0' + (Number(project.number) + 1)));
  figure.append(preview, caption);
  const details = element('div', 'project-details');
  const meta = element('div', 'project-meta');
  meta.append(element('span', 'red', 'PROJECT ' + project.number), element('span', '', project.category));
  details.append(meta, element('h3', 'project-name', project.name), element('p', 'project-english', project.english), element('h4', '', project.headline), element('p', 'project-description', project.description));
  const tags = element('div', 'tags'); project.tags.forEach(tag => tags.append(element('span', '', tag)));
  const actions = element('div', 'project-actions');
  actions.append(externalLink('体验项目 ↗', project.demo, 'button-dark'), externalLink('查看源码 ↗', project.github, 'source-link'));
  details.append(tags, actions, element('p', 'project-note', project.note));
  article.append(figure, details); document.getElementById('project-list').append(article);
}
for (const article of content.articles) {
  const link = externalLink('', article.url, 'article-link');
  link.append(element('span', 'article-number', article.number));
  const copy = element('div', 'article-copy');
  copy.append(element('span', 'article-category', article.category), element('h3', '', article.title), element('span', 'article-source', '微信公众号 · 阅读原文'));
  link.append(copy, element('span', 'article-arrow', '↗'));
  document.getElementById('article-list').append(link);
}
const menuButton = document.querySelector('.menu-toggle');
const menu = document.getElementById('mobile-nav');
const closeMenu = () => {menu.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', '打开导航');};
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menu.hidden = !open; menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '关闭导航' : '打开导航');
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => {if (e.key === 'Escape') closeMenu();});
window.matchMedia('(min-width: 701px)').addEventListener('change', e => {if (e.matches) closeMenu();});
document.getElementById('copy-email').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try { await navigator.clipboard.writeText('15766742178@163.com'); status.textContent = '邮箱已复制'; }
  catch { status.textContent = '请长按或选中上方邮箱复制'; }
});
const navLinks = document.querySelectorAll('.masthead nav a');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(a => {
      if (a.hash === '#' + entry.target.id) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    });
  }), {rootMargin: '-15% 0px -65% 0px'});
  document.querySelectorAll('section[id]').forEach(s => observer.observe(s));
}

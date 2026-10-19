const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('nav a[href^="#"]');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-10% 0px -55% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}

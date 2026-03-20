const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const storedTheme = localStorage.getItem('irina-theme');

if (storedTheme === 'light') {
  body.classList.add('light');
  themeToggle.textContent = '☀';
} else {
  themeToggle.textContent = '☾';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  const isLight = body.classList.contains('light');
  themeToggle.textContent = isLight ? '☀' : '☾';
  localStorage.setItem('irina-theme', isLight ? 'light' : 'dark');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const buttons = document.querySelectorAll('.filter-btn');
const toolCards = document.querySelectorAll('.tool-card');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((b) => b.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    toolCards.forEach((card) => {
      const categories = card.dataset.category.split(' ');
      const show = filter === 'all' || categories.includes(filter);
      card.classList.toggle('hidden', !show);
    });
  });
});

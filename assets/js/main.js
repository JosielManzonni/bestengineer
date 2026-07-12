const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

document.querySelectorAll('#mobileMenu a').forEach((link) => {
  link.addEventListener('click', () => {
    if (mobileMenu) {
      mobileMenu.classList.add('hidden');
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll('section article, section .glass').forEach((element) => {
  observer.observe(element);
});

const year = new Date().getFullYear();
const footerParagraph = document.querySelector('footer p');
if (footerParagraph) {
  footerParagraph.replaceChildren(`© ${year} Josiel Manzonni. Built with passion for engineering.`);
}

const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const htmlElement = document.documentElement;
const sunIcon = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />';
const moonIcon = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />';

if (localStorage.theme === 'light') {
  htmlElement.classList.remove('dark');
  if (themeIcon) themeIcon.innerHTML = moonIcon;
} else {
  htmlElement.classList.add('dark');
  if (themeIcon) themeIcon.innerHTML = sunIcon;
  localStorage.theme = 'dark';
}

if (themeToggle && themeIcon) {
  themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    if (htmlElement.classList.contains('dark')) {
      localStorage.theme = 'dark';
      themeIcon.innerHTML = sunIcon;
    } else {
      localStorage.theme = 'light';
      themeIcon.innerHTML = moonIcon;
    }
  });
}

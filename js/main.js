// js/main.js
const links = document.querySelectorAll('nav a');
for (const link of links) {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
}

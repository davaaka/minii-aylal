// menu.js - Mobile цэс нээх/хаах код
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});
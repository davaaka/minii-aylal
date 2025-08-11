// menu.js - Mobile цэс нээх/хаах код
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});
// ---------------------------
// Хэл солих toggle код
// ---------------------------
(function() {
  const mnBtn = document.getElementById('lang-mn');
  const enBtn = document.getElementById('lang-en');

  // localStorage эсвэл browser default
  const saved = localStorage.getItem('site-lang');
  const defaultLang = saved || (navigator.language && navigator.language.startsWith('en') ? 'en' : 'mn');

  function applyLanguage(lang) {
    if (lang === 'mn') {
      mnBtn.classList.add('active');
      mnBtn.setAttribute('aria-selected', 'true');
      enBtn.classList.remove('active');
      enBtn.setAttribute('aria-selected', 'false');
    } else {
      enBtn.classList.add('active');
      enBtn.setAttribute('aria-selected', 'true');
      mnBtn.classList.remove('active');
      mnBtn.setAttribute('aria-selected', 'false');
    }

    // Бүх текст солих
    document.querySelectorAll('[data-mn]').forEach(el => {
      const value = el.getAttribute(`data-${lang}`);
      if (value !== null) el.textContent = value;
    });

    localStorage.setItem('site-lang', lang);
  }

  mnBtn.addEventListener('click', () => applyLanguage('mn'));
  enBtn.addEventListener('click', () => applyLanguage('en'));

  applyLanguage(defaultLang);
})();

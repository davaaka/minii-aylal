// Menu toggle товч дарахад mobile меню нээгдэж/хаагдана
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("show");
});

// Хэл солих товчлуурууд
const langButtons = document.querySelectorAll("#lang-switch button");

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Active class солих
    langButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Хэл солих логик
    const lang = btn.dataset.lang;
    changeLanguage(lang);
  });
});

// Хэл солих функц
function changeLanguage(lang) {
  // Текст солих
  const textElements = document.querySelectorAll("[data-mn], [data-en]");
  textElements.forEach((el) => {
    if (el.dataset[lang]) {
      el.textContent = el.dataset[lang];
    }
  });

  // Placeholder солих
  const placeholders = document.querySelectorAll("[data-mn-placeholder], [data-en-placeholder]");
  placeholders.forEach((el) => {
    if (el.dataset[`${lang}Placeholder`]) {
      el.placeholder = el.dataset[`${lang}Placeholder`];
    }
  });
}

// Default хэл — Монгол
changeLanguage("mn");

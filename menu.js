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
  // Энгийн текст солих
  const textElements = document.querySelectorAll("[data-mn]");
  textElements.forEach((el) => {
    const mnText = el.getAttribute("data-mn");
    const enText = el.getAttribute("data-en");
    el.textContent = lang === "mn" ? mnText : enText;
  });

  // Placeholder солих (input, textarea)
  const placeholderElements = document.querySelectorAll("[data-mn-placeholder]");
  placeholderElements.forEach((el) => {
    const mnPh = el.getAttribute("data-mn-placeholder");
    const enPh = el.getAttribute("data-en-placeholder");
    el.setAttribute("placeholder", lang === "mn" ? mnPh : enPh);
  });
}

// Default хэл — Монгол
changeLanguage("mn");

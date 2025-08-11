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
  const textElements = document.querySelectorAll("[data-mn], [data-en]");
  textElements.forEach((el) => {
    if (lang === "mn" && el.dataset.mn) {
      el.textContent = el.dataset.mn;
    } else if (lang === "en" && el.dataset.en) {
      el.textContent = el.dataset.en;
    }
  });

  // Placeholder солих
  const placeholders = document.querySelectorAll("[data-mn-placeholder], [data-en-placeholder]");
  placeholders.forEach((el) => {
    if (lang === "mn" && el.dataset.mnPlaceholder) {
      el.placeholder = el.dataset.mnPlaceholder;
    } else if (lang === "en" && el.dataset.enPlaceholder) {
      el.placeholder = el.dataset.enPlaceholder;
    }
  });

  // Textarea доторх анхны текст солих
  const textareas = document.querySelectorAll("[data-mn-value], [data-en-value]");
  textareas.forEach((el) => {
    if (lang === "mn" && el.dataset.mnValue) {
      el.value = el.dataset.mnValue;
    } else if (lang === "en" && el.dataset.enValue) {
      el.value = el.dataset.enValue;
    }
  });
}

// Default хэл — Монгол
changeLanguage("mn");

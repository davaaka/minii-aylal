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
  const elements = document.querySelectorAll("[data-lang-text]");
  elements.forEach((el) => {
    const textData = el.dataset.langText;
    if (textData) {
      try {
        const parsed = JSON.parse(textData);
        el.textContent = parsed[lang] || el.textContent;
      } catch (err) {
        console.error("Текстийн хэлний мэдээлэл буруу байна:", err);
      }
    }
  });
}

// Default хэл — Монгол
changeLanguage("mn");

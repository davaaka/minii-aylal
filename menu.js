// 📌 Menu toggle — Mobile menu нээх/хаах
const menuToggle = document.getElementById("menu-toggle");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("show");
  });
}

// 📌 Хэл солих товчлуурууд
const langButtons = document.querySelectorAll("#lang-switch button");

if (langButtons.length > 0) {
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Active class солих
      langButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Хэл солих
      const lang = btn.dataset.lang;
      localStorage.setItem("siteLang", lang); // сонголтыг хадгалах
      changeLanguage(lang);
    });
  });
}

// 📌 Хэл солих функц
function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-lang-text]");
  elements.forEach((el) => {
    const textData = el.dataset.langText;
    if (textData) {
      try {
        const parsed = JSON.parse(textData);
        if (parsed[lang]) {
          el.textContent = parsed[lang];
        }
      } catch (err) {
        console.warn("⚠ Хэлний текстийн формат буруу байна:", el);
      }
    }
  });
}

// 📌 Ачаалах үед хадгалсан хэл сэргээх
const savedLang = localStorage.getItem("siteLang") || "mn";
changeLanguage(savedLang);

// Сонгосон хэл дээр active class тавих
if (langButtons.length > 0) {
  langButtons.forEach((b) => {
    if (b.dataset.lang === savedLang) {
      b.classList.add("active");
    }
  });
}

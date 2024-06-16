// Language translation data
const translations = {
    english: {
        hello: "Hello",
        goodbye: "Goodbye"
    },
    spanish: {
        hello: "Hola",
        goodbye: "Adiós"
    },
    french: {
        hello: "Bonjour",
        goodbye: "Au revoir"
    }
};

// Get elements
const inputText = document.getElementById("input-text");
const translateBtn = document.getElementById("translate-btn");
const translationResult = document.getElementById("translation-result");
const languageLinks = document.querySelectorAll("nav a");

// Set active language
let activeLanguage = "english";

// Add event listeners
languageLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        activeLanguage = e.target.id;
        languageLinks.forEach((link) => link.classList.remove("active"));
        e.target.classList.add("active");
    });
});

translateBtn.addEventListener("click", () => {
    const userInput = inputText.value.trim();
    if (userInput) {
        const translation = translations[activeLanguage][userInput.toLowerCase()];
        if (translation) {
            translationResult.textContent = translation;
        } else {
            translationResult.textContent = "Translation not found";
        }
    } else {
        translationResult.textContent = "Please enter some text";
    }
});
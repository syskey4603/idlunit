const translateButton = document.querySelector("#translate-button");
const textInput = document.querySelector("#text-input");
const languageSelect = document.querySelector("#language-select");
const translatedText = document.querySelector("#translated-text");

translateButton.addEventListener("click", (event) => {
  event.preventDefault();
  const text = textInput.value;
  const language = languageSelect.value;
  // Use an API or function to translate text
  translatedText.innerHTML = `Translated Text: ${text}`;
});

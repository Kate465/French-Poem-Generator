function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "Je partirai. Vois-tu, je sais que tu m’attend",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

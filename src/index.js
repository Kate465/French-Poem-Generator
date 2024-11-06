function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "cf0f31ao4d106c8ff184dbac1a07a8t3";
  let prompt = `Generate a French poem ${instructionsInput.value}`;
  let context =
    "you are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in <p>, make sure to follow user instructions. write poem in separate lines. do not include a title to the poem. sign the poem with 'sheCodes-AI' inside a <strong> element, at the end of the poem and not at the beginning.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">Generating the French poem about ${instructionsInput.value} </div>`;

  console.log("generating poem");
  console.log(`prompt:${prompt}`);
  console.log(`context:${context}`);

  axios.get(apiUrl).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

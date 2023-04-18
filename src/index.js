import DinoService from "./dino-service";
import './css/styles.css';

function getRandomDino() {
  let promise = DinoService.getDino();
  promise.then(function(dino) {
    reset(); 
    printElements(dino);
    console.log(dino);
    createDinoNameInputs(dino);
  }, function(errorMessage) {
    printError(errorMessage);
  });
}

function createDinoNameInputs(dino) {
  const div = document.querySelector(".letter-inputs");
  let dinoArray = dino.Name.toUpperCase().split("");
  dinoArray.forEach((letter) => {
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.maxLength = "1";
    input.dataset.id = letter;
    div.append(input);
  });
}

function checkDinoLetter(e) {
  e.preventDefault();
  let letters = document.querySelectorAll("input[type='text']");
  letters.forEach((letter) => {
    console.log(letter);
    if (letter.value.toUpperCase() === letter.dataset.id) {
      letter.style.backgroundColor = "green";
    } else {
      letter.style.backgroundColor = "red";
    }
  });
}

function printElements(result) {
  document.querySelector('#description').innerText = result.Description;
}

function reset() {
  const div = document.querySelector('.letter-inputs')
  div.innerHTML = null;
}

function printError(error) {
  return error;
}

window.addEventListener("load", function() {
  this.document.querySelector("button.load-dino").addEventListener("click", getRandomDino);
  this.document.querySelector("#letters").addEventListener("submit", checkDinoLetter);
});

import DinoService from "./dino-service";

function getRandomDino() {
  let promise = DinoService.getDino();
  promise.then(function(dino) {
    printElements(dino);
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
    input.dataset.id = letter;
    div.append(input);
  });
}

function printElements(result) {
  document.querySelector('#description').innerText = result.Description;

}

function printError(error) {
  return error;
}

window.addEventListener("load", function() {
  this.document.querySelector("button.load-dino").addEventListener("click", getRandomDino);
});

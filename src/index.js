import DinoService from "./dino-service";

function getRandomDino() {
  let promise = DinoService.getDino();
  promise.then(function(dino) {
    printElements(dino);
  }, function(errorMessage) {
    printError(errorMessage);
  });
}

function printElements(result) {
  document.querySelector('#description').innerText = result.Description;
}

function printError(error) {
  document.querySelector('#description').innerText = error;
}

window.addEventListener("load", function() {
  this.document.querySelector("button.load-dino").addEventListener("click", getRandomDino);
});

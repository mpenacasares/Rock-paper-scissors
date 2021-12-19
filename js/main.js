"use strict";
// elementos HTML
const userSelect = document.querySelector(".js_select");
const playBtn = document.querySelector(".js_btnPlay");
const resultText = document.querySelector(".js_text");
const counterUser = document.querySelector(".js_user");
const counterComputer = document.querySelector(".js_computer");

// variablesglobales

let countUserResult = 0;
let countComputerResult = 0;

// funciones
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}


// jugada aleatoria y mov del pc
function computerPlay() {
  let randomNum = getRandomNumber(9);
  let computerResult="";
  if (randomNum <= 3) {
    computerResult = "piedra";
  } else if (randomNum>3 && randomNum<= 6) {
    computerResult = "papel";
  } else {
    computerResult = "tijera";
  }
  return computerResult;
}

// jugada persona, comparación vs pc y contador
function finalResult() {
  let playerSelect = userSelect.value;
  let computerResult = computerPlay();
  console.log(`Jugada persona ${playerSelect}`);
  console.log(`Jugada pc ${computerResult}`);
  if (playerSelect === computerResult) {
    resultText.innerHTML = "Empate";

  } else if (playerSelect === "piedra") {
    if (computerResult === "tijera") {
      resultText.innerHTML = "¡Has ganado!";
    } else if (computerResult === "papel") {
      resultText.innerHTML = "¡Has perdido!";
    }

  } else if (playerSelect === "papel") {
    if (computerResult === "piedra") {
      resultText.innerHTML = "¡Has ganado!";
    } else if (computerResult === "tijera") {
      resultText.innerHTML = "¡Has perdido!";
    }
  } else if (playerSelect === "tijera") {
    if (computerResult === "papel") {
      resultText.innerHTML = "¡Has ganado!";
    } else if (computerResult === "piedra") {
      resultText.innerHTML = "¡Has perdido!";
    }
  }
 
}


function handleClickBtn(event) {
  event.preventDefault();
  finalResult()
}

// operaciones
playBtn.addEventListener('click', handleClickBtn);

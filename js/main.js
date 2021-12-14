"use strict";
// elementos HTML
const valueSelect = document.querySelector(".js_select");
const playBtn = document.querySelector(".js_btnPlay");
const resultText = document.querySelector(".js_text");
const counterUser = document.querySelector(".js_user");
const counterComputer = document.querySelector(".js_computer");

let countUserResult = 0;
let countComputerResult = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function changeOptionsGame(resultVariable) {
  const valueEl = valueSelect.value;

  if (valueEl === resultVariable) {
    resultText.innerHTML = "Empate";
  } else if (valueEl === "piedra") {
    if (resultVariable === "tijera") {
      resultText.innerHTML = "¡Has ganado!";
    } else if (resultVariable === "papel") {
      resultText.innerHTML = "¡Has perdido!";
    }
  } else if (valueEl === "papel") {
    if (resultVariable === "papel") {
      resultText.innerHTML = "Empate";
    } else if (resultVariable === "tijera") {
      resultText.innerHTML = "¡Has perdido!";
    }
  } else if (valueEl === "tijera") {
    if (resultVariable === "piedra") {
      resultText.innerHTML = "¡Has ganado!";
    } else if (resultVariable === "papel") {
      resultText.innerHTML = "¡Has ganado!";
    }
  }
  return resultText;
}

function computerPlay() {
  const randomNum = getRandomNumber(10);
  let computerResult;
  if (randomNum < 3) {
    computerResult = "piedra";
  } else if (randomNum>= 6) {
    computerResult = "papel";
  } else {
    computerResult = "tijera";
  }
  return computerResult;
}

function Counter(resultVariable) {
    if (resultVariable === "¡Has ganado!") {
        countUserResult += 1;
        counterUser.innerHTML = `Jugador: ${countUserResult}`;
    } else if (resultVariable === "¡Has perdido!") {
        countComputerResult += 1;
        counterComputer.innerHTML = `Computadora: ${countComputerResult}`;
    }
  }

function handleClickBtn(event) {
  event.preventDefault();
  let resultVariable = computerPlay();
  changeOptionsGame(resultVariable);
  Counter(resultVariable);
}

// operaciones
playBtn.addEventListener('click', handleClickBtn);

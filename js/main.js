"use strict";
// elementos HTML
const valueSelect = document.querySelector("js_select");
const playBtn = document.querySelector("js_btnPlay");
const resultText = document.querySelector("js_text");
const counterUser = document.querySelector("js_user");
const counterPC = document.querySelector("js_computer");

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
}

function computerPlay() {
  const randomNum = getRandomNumber(10);
  let computerResult;
  if (randomNum < 3) {
    computerResult = "piedra";
  } else if (randomNum >= 3 && randomNum <= 6) {
    computerResult = "papel";
  } else {
    computerResult = "tijera";
  }
  return computerResult;
}

function handleClickBtn(event) {
  event.preventDefault();
  let resultVariable = computerPlay();
  changeOptionsGame(resultVariable);
}

// operaciones
playBtn.addEventListener("click", handleClickBtn);

"use strict";
// elementos HTML
const valueSelect = document.querySelector('js_select');
const playBtn = document.querySelector('js_btnPlay');
const resultText = document.querySelector('js_text');
const counterUser = document.querySelector('js_user');
const counterPC = document.querySelector('js_computer');



// funciones
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

function computerPlay() {
    let computerResult = getRandomNumber(10);
    console.log(computerResult);
    if (computerResult < 3) {
        computerResult = "piedra";
    } else if (computerResult >= 3 && computerOption <= 6) {
        computerResult = "papel";
    } else {
        computerResult = "tijera";
    }
    return computerResult;
  }

  function compareUserOption() {
    const userOption = valueSelect.value;
    const computerOption = computerPlay();
    if (userOption === computerOption()) {
      console.log(`The number is... ${getRandomNumber()}`);
    } else {
      console.log(`try again`);
    }
  }



function handleClickBtn() {
    // event.preventDefault();
    computer();
   
}


// operaciones
playBtn.addEventListener('click', handleClickBtn);
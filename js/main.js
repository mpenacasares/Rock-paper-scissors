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

function handleClickBtn() {
    console.log(getRandomNumber(10));
}


// operaciones
playBtn.addEventListener('click', handleClickBtn);
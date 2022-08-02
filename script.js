'use strict';

// Select Elements
const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const number = document.querySelector('.number');

// Define Random Number
const numberRandom = Math.trunc(Math.random() * 30) + 1;
number.textContent = numberRandom;

//Implement the game logic
check.addEventListener('click', event => {
  const guessValue = Number(guess.value);

  if (!guessValue) {
    message.textContent = 'No number, Please enter a number! 🚫';
  } else if (guessValue === numberRandom) {
    message.textContent = 'Correct Number! 🎊';
  } else if (guessValue > numberRandom) {
    message.textContent = 'Less! ⬇️';
  } else if (guessValue < numberRandom) {
    message.textContent = 'More! ⬆️';
  } else if (guessValue === 0 || guessValue > 30) {
    message.textContent = 'Please enter a number between 1 and 30! ';
  }
});

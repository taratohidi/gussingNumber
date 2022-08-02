'use strict';

// Select Elements
const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');

// Define Random Number
const numberRandom = Math.trunc(Math.random() * 30) + 1;
number.textContent = numberRandom;

let scoreInit = 20;

//Implement the game logic and score
check.addEventListener('click', event => {
  const guessValue = Number(guess.value);

  if (!guessValue) {
    message.textContent = 'No Number 🚫';
  } else if (guessValue === 0 || guessValue > 30) {
    message.textContent = 'Between 1 and 30 🚫';
  } else if (guessValue === numberRandom) {
    message.textContent = 'Correct Number! 🎊';
  } else if (guessValue > numberRandom) {
    if (scoreInit >= 1) {
      score.textContent = scoreInit;
      message.textContent = 'Less! ⬇️';
      scoreInit--;
    } else {
      message.textContent = 'You lost the game';
    }
  } else if (guessValue < numberRandom) {
    if (scoreInit >= 1) {
      score.textContent = scoreInit;
      message.textContent = 'More! ⬆️';
      scoreInit--;
    } else {
      message.textContent = 'You lost the game';
    }
  }
});

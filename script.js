'use strict';

// Select Elements
const check = document.querySelector('.check');
const again = document.querySelector('.again');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const body = document.querySelector('body');

// Define Random Number
let numberRandom = Math.trunc(Math.random() * 30) + 1;

let scoreInit = 20;

//Implement the game logic and score
check.addEventListener('click', event => {
  const guessValue = Number(guess.value);

  // When there is no input
  if (!guessValue) {
    message.textContent = 'No Number 🚫';

    // When the input is not between 1 and 30
  } else if (guessValue === 0 || guessValue > 30) {
    message.textContent = 'Between 1 and 30 🚫';

    // When player wins
  } else if (guessValue === numberRandom) {
    message.textContent = 'Correct Number! 🎊';
    number.textContent = numberRandom;

    body.style.backgroundColor = '#5996c6';

    // When guess is higher
  } else if (guessValue > numberRandom) {
    if (scoreInit >= 1) {
      score.textContent = scoreInit;
      message.textContent = 'Less! ⬇️';
      scoreInit--;
    } else {
      message.textContent = 'You lost the game';
    }

    // When guess is lower
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

//Functionality of again button
again.addEventListener('click', event => {
  score.textContent = 20;
  let scoreInit = 20;

  message.textContent = 'Start guessing...';
  number.textContent = '?';
  body.style.backgroundColor = '#1e3e57';
  guess.value = '';
});

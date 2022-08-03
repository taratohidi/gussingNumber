'use strict';

// Select Elements
const check = document.querySelector('.check');
const again = document.querySelector('.again');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const body = document.querySelector('body');

// Define Random Number
let numberRandom = Math.trunc(Math.random() * 30) + 1;

let scoreInit = 20;
let highscoreInit = 0;

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

    // Implement HighScore
    if (scoreInit > highscoreInit) {
      highscoreInit = scoreInit;
      highScore.textContent = highscoreInit;
    }

    // When guess is higher
  } else if (guessValue > numberRandom) {
    if (scoreInit >= 1) {
      message.textContent = 'Less! ⬇️';
      scoreInit--;
      score.textContent = scoreInit;
    } else {
      message.textContent = 'You lost the game';
    }

    // When guess is lower
  } else if (guessValue < numberRandom) {
    if (scoreInit >= 1) {
      message.textContent = 'More! ⬆️';
      scoreInit--;
      score.textContent = scoreInit;
    } else {
      message.textContent = 'You lost the game';
    }
  }
});

//Functionality of again button
again.addEventListener('click', event => {
  numberRandom = Math.trunc(Math.random() * 30) + 1;
  score.textContent = 20;
  scoreInit = 20;

  message.textContent = 'Start guessing...';
  number.textContent = '?';
  body.style.backgroundColor = '#1e3e57';
  guess.value = '';
});

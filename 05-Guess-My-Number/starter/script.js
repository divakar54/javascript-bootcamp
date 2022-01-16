'use strict';

const targetValue = Math.floor(Math.random() * (20 - 1) + 1);
let currentScore = 20;
let highscore = 0;

function getGuessValue() {
  return Number(document.querySelector('.guess').value);
}

function getDisplayString(guessedNumber) {
  if (guessedNumber > targetValue) {
    return '📈 Too High';
  } else if (guessedNumber < targetValue) {
    return '📉 Too Low';
  } else {
    return '🎉 Correct Number';
  }
}

function changeDisplayMessage(displayString) {
  document.querySelector('.message').textContent = displayString;
}

function updateHighScoreUI(currentScore) {
  if (currentScore > highscore) {
    highscore = currentScore;
    document.querySelector('.highscore').textContent = highscore;
  }
}

function getCurrentScore() {
  return Number(document.querySelector('.score').textContent);
}

function updateCurrentScoreUI() {
  let currentScoreNumber = Number(document.querySelector('.score').textContent);
  currentScoreNumber--;
  document.querySelector('.score').textContent = currentScoreNumber;
}

function updateNumberUI(guessedNumber) {
  document.querySelector('.number').textContent = guessedNumber;
}

function updateBackgroundColor() {
  document.body.style.backgroundColor = `#60b347`;
}
function onCheckClick() {
  const guessedNumber = getGuessValue();
  const displayString = getDisplayString(guessedNumber);
  changeDisplayMessage(displayString);
  if (displayString === '🎉 Correct Number') {
    const currentScore = getCurrentScore();
    updateHighScoreUI(currentScore);
    // updateScreenUI(currentScore);
    updateNumberUI(guessedNumber);
    updateBackgroundColor();
  } else {
    updateCurrentScoreUI();
  }
}

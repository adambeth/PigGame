"use strict";
let player1 = {
  score: 0,
  isActive: true,
  currentScore: 0,
};
let player2 = {
  score: 0,
  isActive: false,
  currentScore: 0,
};

const player1Score = document.querySelector("#score--0");
const player2Score = document.querySelector("#score--1");
const player1CurrentScore = document.querySelector("#current--0");
const player2CurrentScore = document.querySelector("#current--1");
const btnNewGame = document.querySelector(".btn--new");
const dice = document.querySelector(".dice");
const btnRolDice = document.querySelector(".btn--roll");
const diceImage = document.querySelector(".dice");
player1Score.textContent = 0;
player2Score.textContent = 0;

btnRolDice.addEventListener("click", () => {
  let diceNumber = Math.floor(Math.random() * 6) + 1;
  console.log(diceNumber);

  switch (diceNumber) {
    case 1:
      dice.setAttribute("src", "dice-1.png");
      break;
    case 2:
      dice.setAttribute("src", "dice-2.png");
      break;
    case 3:
      dice.setAttribute("src", "dice-3.png");
      break;
    case 4:
      dice.setAttribute("src", "dice-4.png");
      break;
    case 5:
      dice.setAttribute("src", "dice-5.png");
      break;
    case 6:
      dice.setAttribute("src", "dice-6.png");
  }

  if (player1.isActive) {
    console.log("Player1 is active");
    if (diceNumber > 1) {
      player1.score += diceNumber;
      player1CurrentScore.textContent = player1.score;
    } else {
      player1.score = 0;
      player1CurrentScore.textContent = 0;
      player1.isActive = false;
      player2.isActive = true;
    }
  } else {
    console.log("Player2 is active");
    if (diceNumber > 1) {
      player2.score += diceNumber;
      player2CurrentScore.textContent = player2.score;
    } else {
      player2.score = 0;
      player2CurrentScore.textContent = 0;
      player2.isActive = false;
      player1.isActive = true;
    }
  }
});

btnNewGame.addEventListener("click", () => {
  player1.isActive = true;
  resetScores();
});

const resetScores = function () {
  console.log("Starting New Game");
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;
};

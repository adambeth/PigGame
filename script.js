"use strict";
const player1Score = document.querySelector("#score--0");
const player2Score = document.querySelector("#score--1");
const player1CurrentScore = document.querySelector("#current--0");
const player2CurrentScore = document.querySelector("#current--1");
const btnNewGame = document.querySelector(".btn--new");
const dice = document.querySelector(".dice");
const btnRolDice = document.querySelector(".btn--roll");
const diceImage = document.querySelector(".dice");
const btnHold = document.querySelector(".btn--hold");

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

player1Score.textContent = 0;
player2Score.textContent = 0;

btnRolDice.addEventListener("click", () => {
  let diceNumber = Math.floor(Math.random() * 6) + 1;

  console.log(diceNumber);
  setDiceImage(diceNumber);

  if (player1.isActive) {
    console.log("Player1 is active");
    if (diceNumber > 1) {
      player1.currentScore += diceNumber;
      player1CurrentScore.textContent = player1.currentScore;
    } else {
      player1CurrentScore.textContent = 0;
      player1.isActive = false;
      player2.isActive = true;
    }
  } else {
    console.log("Player2 is active");
    if (diceNumber > 1) {
      player2.currentScore += diceNumber;
      player2CurrentScore.textContent = player2.currentScore;
    } else {
      player2CurrentScore.textContent = 0;
      player2.isActive = false;
      player1.isActive = true;
    }
  }
});
btnHold.addEventListener("click", () => {
  console.log("hold clicked");
  if (player1.isActive) {
    console.log("inside");
    console.log(player1.score, player1.currentScore);
    player1.score += player1.currentScore;
    player1Score.textContent = player1.score;
    player1CurrentScore.textContent = 0;
    player1.currentScore = 0;
    player1.isActive = false;
    player2.isActive = true;
  } else {
    console.log("inside");
    console.log(player2.score, player2.currentScore);
    player2.score += player2.currentScore;
    player2Score.textContent = player2.score;
    player2CurrentScore.textContent = 0;
    player2.currentScore = 0;
    player2.isActive = false;
    player1.isActive = true;
  }
});

btnNewGame.addEventListener("click", () => {
  player1.isActive = true;
  resetScores();
});

const resetScores = function () {
  console.log("Starting New Game");
  player1.score = 0;
  player2.score = 0;
  player1.currentScore = 0;
  player2.currentScore = 0;
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;
};

const setDiceImage = function (diceNumber) {
  dice.setAttribute("src", `dice-${diceNumber}.png`);
};

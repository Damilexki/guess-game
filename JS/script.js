"use strict";
const againBtn = document.querySelector(".again");
const guessNum = document.querySelector(".number");
const input = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");
let score = 20;
let highscore = 0;
let randomNum = Math.trunc(Math.random() * 20) + 1;

function checkGuess() {
  if (input.value === "") return;
  const value = Number(input.value);
  if (score < 1) {
    message.innerText = "🤦🏽‍♂️ You lost the game!";
    return;
  }
  if (value === randomNum) {
    handelCorrect(input.value);
  } else {
    handelIncorrect(input.value);
  }
}

function handelCorrect(value) {
  document.body.style.backgroundColor = "green";
  guessNum.innerText = value;
  message.innerText = "🤝👍🏾 Correct";
  scoreEl.innerText = score;
  highscore = score > highScore ? score : highScore;
  highscoreEl.innerText = highScore;
}

function handelIncorrect(value) {
  const msg = value > randomNum ? "Too high..." : "Too low...";
  score--;
  message.innerText = msg;
  scoreEl.innerText = score;
}

function reset() {
  document.body.style.backgroundColor = "#222";
  guessNum.innerText = "?";
  message.innerText = " Start guessing...";
  input.value = "";
  score = 20;
  scoreEl.innerText = score;
  highscoreEl.innerText = highscore;
  randomNum = Math.trunc(Math.random() * 20) + 1;
}

checkBtn.addEventListener("click", checkGuess);
againBtn.addEventListener("click", reset);

const toggleButton = document.getElementById("darkModeToggle");
const body = document.body;

const toggleDarkMode = () => {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  body.classList.toggle("dark-mode", !isDarkMode);
  localStorage.setItem("darkMode", !isDarkMode);
};

toggleButton.addEventListener("click", toggleDarkMode);

// Check on page load for previously set mode
const isDarkMode = localStorage.getItem("darkMode") === "true";
body.classList.toggle("dark-mode", isDarkMode);

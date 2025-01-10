/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const suits = ["♦", "♥", "♠", "♣"];
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const generateCard = () => {
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

    document.getElementById("top-suit").textContent = randomSuit;
    document.getElementById("bottom-suit").textContent = randomSuit;
    document.getElementById("number").textContent = randomNumber;

    const isRed = randomSuit === "♦" || randomSuit === "♥";
    const color = isRed ? "red" : "black";

    document.getElementById("top-suit").style.color = color;
    document.getElementById("bottom-suit").style.color = color;
    document.getElementById("number").style.color = color;
  };

  document
    .getElementById("generate-btn")
    .addEventListener("click", generateCard);

  generateCard();

  setInterval(generateCard, 10000);
};

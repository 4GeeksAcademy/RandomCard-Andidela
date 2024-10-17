import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let topSuit = document.querySelector("#topSuit");
  let ranksElement = document.querySelector("#ranks");
  let bottomSuit = document.querySelector("#bottomSuit");
  function newCard() {
    const suits = ["♠", "♣", "♥", "♦"];
    const ranks = [
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
    document.querySelector("#miBoton").addEventListener("click", () => {
      const suit = suits[Math.floor(Math.random() * suits.length)];
      const rank = ranks[Math.floor(Math.random() * ranks.length)];
      ranksElement.innerText = rank;
      topSuit.innerText = suit;
      bottomSuit.innerText = suit;
      if (suit == "♥" || suit == "♦") {
        topSuit.style.color = "red";
        bottomSuit.style.color = "red";
      } else {
        topSuit.style.color = "black";
        bottomSuit.style.color = "black";
      }
    });
  }
  newCard();
};

/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let figura = ["♥", "♦", "♠", "♣"];
  let numero = [
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

  //   Crea variable con figura random
  let figuraRandom = figura[Math.floor(Math.random() * figura.length)];
  //   Crea variable con número random
  let numeroRandom = numero[Math.floor(Math.random() * numero.length)];

  document.querySelector("#figura1").innerHTML = `${figuraRandom}`;
  document.querySelector("#numero").innerHTML = `${numeroRandom}`;
  document.querySelector("#figura2").innerHTML = `${figuraRandom}`;

  //   Si la figura random es corazones o diamantes se pinta rojo
  if (figuraRandom == "♥" || figuraRandom == "♦") {
    figura1.style.color = "red";
    figura2.style.color = "red";
  }
  //  Si la figura random es picas o tréboles
  if (figuraRandom == "♠" || figuraRandom == "♣") {
    figura1.style.color = "black";
    figura2.style.color = "black";
  }
};

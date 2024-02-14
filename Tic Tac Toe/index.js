let music = new Audio("../music.mp3");
let audioTurn = new Audio("../ting.mp3");
let gameover = new Audio("../gameover.mp3");
let btn = document.getElementById("reset");
let line = document.getElementById("line");
let gif = document.getElementById("gif");
let wintxt = document.getElementById("wintxt");
let w = window.matchMedia("(max-width:500px)");
turn = "x";

// Function to change the turn
function changeTurn() {
  if (turn === "x") {
    turn = "o";
  } else {
    turn = "x";
  }
  return turn;
}

// reset button function
function button(i) {
  btn.addEventListener("click", () => {
    turn = "x";
    i.innerText = "";
    line.style.width = "0%";
    gif.style.width = "0vw";
    wintxt.style.display = "none";
    music.pause();
    document.getElementById("turn").innerText = turn;
  });
}

// Function to check win
function winner() {
  win = [
    [0, 3, 6, -10, 15, 90],
    [1, 4, 7, 0, 15, 90],
    [2, 5, 8, 10, 15, 90],
    [0, 1, 2, 0, 5.5, 0],
    [3, 4, 5, 0, 15.5, 0],
    [6, 7, 8, 0, 25.5, 0],
    [0, 4, 8, 0, 15, 45],
    [2, 4, 6, 0, 15, -45],
  ];
  win.forEach((e) => {
    if (
      box[e[0]].innerText == turn &&
      box[e[1]].innerText == turn &&
      box[e[2]].innerText == turn
    ) {
      music.play();
      line.style.width = "30vw";
      line.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      gif.style.width = "170px";
      wintxt.style.display = "block";
      gameover.play();
    }
  });
}

box = document.querySelectorAll(".box");
document.getElementById("turn").innerText = turn;
box.forEach((i) => {
  i.addEventListener("click", () => {
    audioTurn.play();
    i.innerHTML = turn;
    winner();
    changeTurn();
    document.getElementById("turn").innerText = turn;
    button(i);
  });
});

let allDiv = document.querySelectorAll(".boxes");
let gameW = document.getElementById("gameWinner");
let resetGame = document.getElementById("resetGame");
let allBoxArray = Array.from(allDiv);
let winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let playerA = 0;  // X
let playerB = 0;  // O
let gameOver = false;

function gameReset() {
  allBoxArray.forEach(box => box.innerText = "");
  gameW.innerText = "Start Game";
  playerA = 0;
  playerB = 0;
  gameOver = false;
  allBoxArray.forEach(box => box.addEventListener("click", handleClick, { once: true }));
}

resetGame.addEventListener("click", gameReset);

function handleClick(e) {
  if (gameOver) return;

  let clickBox = e.target;
  let clickBoxIndex = allBoxArray.indexOf(clickBox);

  if (playerA === 0 && playerB === 0) {
    placeMark(clickBoxIndex, "X");
    playerB = 1;
  } else if (playerA === 1) {
    placeMark(clickBoxIndex, "X");
    playerA = 0;
    playerB = 1;
  } else if (playerB === 1) {
    placeMark(clickBoxIndex, "O");
    playerB = 0;
    playerA = 1;
  }

  checkWinner();
}

function placeMark(index, mark) {
  if (allBoxArray[index].innerText === "") {
    allBoxArray[index].innerText = mark;
  }
}

function checkWinner() {
  for (let pattern of winningPattern) {
    const [a, b, c] = pattern;
    if (allBoxArray[a].innerText && allBoxArray[a].innerText === allBoxArray[b].innerText && allBoxArray[a].innerText === allBoxArray[c].innerText) {
      gameW.innerText = `Player ${allBoxArray[a].innerText} is the winner!`;
      gameOver = true;
      return;
    }
  }

  if (allBoxArray.every(box => box.innerText !== "")) {
    gameW.innerText = "Draw!";
    gameOver = true;
  }
}

gameReset();

let gameboard = ["", "", "", "", "", "", "", "", ""];
let myPlayers = [];
let gameFlow = [];

const game_board = () => {
  const board_container = document.querySelector(".play-area");
  board_container.innerHTML = ""
  gameboard.forEach((e, i) => {
    board_container.innerHTML += `<div id="block_${i}" class="block" onclick="addPlayerMove(${i})">${game_board[i]}</div>`
    if (e == playerOne || e == playerTwo) {
      document.querySelector(`#block_${i}`).classList.add("occupied");
    }
  });
};

game_board();

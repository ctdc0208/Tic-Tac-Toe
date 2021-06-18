let game_board = ["", "", "", "", "", "", "", "", ""];
let mycurrentTurns = [];
let board_full = false;

const playerOne = "X";
const playerTwo = "O";
let currentTurnTurn;


const rendergame = (() => {
  function render_board(){
    const board_container = document.querySelector(".play-area");
    board_container.innerHTML = ""
    game_board.forEach((e, i) => {
        board_container.innerHTML += `<div id="block_${i}" class="block" onclick="addcurrentTurnMove(${i})">${game_board[i]}</div>`
    });
  };
  render_board();
});

function addcurrentTurnMove(e){
  const currentTurn = currentTurnTurn ? playerTwo : playerOne;
  if (!board_full && game_board[e] == "") {
    game_board[e] = currentTurn;
    game_loop();
  }
  switchTurn();
};

function switchTurn() {
  currentTurnTurn = !currentTurnTurn;
}

const game_loop = () => {
  rendergame();
  check_board_full();
  check_winner();
}

function check_lines(a, b, c) {
  return (
    game_board[a] == game_board[b] &&
    game_board[b] == game_board[c] &&
    (game_board[a] == playerOne || game_board[a] == playerTwo)
  );
}
function check_match() {
  for (i = 0; i < 9; i += 3) {
    if (check_lines(i, i + 1, i + 2)) {
      return game_board[i];
    }
  }
  for (i = 0; i < 3; i++) {
    if (check_lines(i, i + 3, i + 6)) {
      return game_board[i];
    }
  }
  if (check_lines(0, 4, 8)) {
    return game_board[0];
  }
  if (check_lines(2, 4, 6)) {
    return game_board[2];
  }
  return "";
}
function check_board_full() {
    let flag = true;
    game_board.forEach(element => {
    if (element != playerOne && element != playerTwo) {
      flag = false;
    }
  });
  board_full = flag;
}

function check_winner() {
  const winner = document.getElementById('winner');
  let win = check_match();
  if (win == playerOne){
    winner.innerText = "Player One Win!";
    board_full = true;
  } else if (win == playerTwo) {
    winner.innerText = "Player Two Win!";
    board_full = true;
  } else if (board_full) {
    winner.innerText = "Draw!";
  }
}





rendergame();

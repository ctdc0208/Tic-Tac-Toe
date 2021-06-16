let game_board = ["", "", "", "", "", "", "", "", ""];
let mycurrentTurns = [];
let board_full = false;

const playerOne = "O";
const playerTwo = "X";
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
  const currentTurn = currentTurnTurn ? playerOne : playerTwo;
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
  check_winner();
}

function check_match(){

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
console.log(check_winner)

let game_board = ["", "", "", "", "", "", "", "", ""];
let myPlayers = [];
let board_full = false;

const playerOne = "0";
const playerTwo = "X";

const rendergame = (() => {
  function render_board(){
    const board_container = document.querySelector(".play-area");
    board_container.innerHTML = ""
    game_board.forEach((e, i) => {
        board_container.innerHTML += `<div id="block_${i}" class="block" onclick="addPlayerMove(${i})">${game_board[i]}</div>`
    });
  };
  render_board();
});

const displayController = (() => {
});

const players = (playerOne, playerTwo) => {
}

const game_flow = (() => {

});


rendergame();


const addPlayerMove = e => {
  switchTurn()
  if (!board_full && game_board[e] == "") {
    game_board[e] = player;
    game_loop();
  }
};

function switchTurn() {
  if (Math.random() < Math.random()) {
    player = "X";
  } else {
      player="O";
    }
  if (player == 'X') {
     player = "O";
   } else {
     player = "X";
   }
}

const game_loop = () => {
  rendergame();
}

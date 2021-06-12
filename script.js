let game_board = ["", "", "", "", "", "", "", "", ""];
let myPlayers = [];
let gameFlow = [];


const rendergame = (() => {
  const render_board = () => {
    const board_container = document.querySelector(".play-area");
    board_container.innerHTML = ""
    game_board.forEach((e, i) => {
        board_container.innerHTML += `<div id="block_${i}" class="block">${game_board[i]}</div>`
    });
  };
  render_board();
});

const displayController = (() => {

});

const players = (playerOne, playerTwo) => {
}



rendergame();

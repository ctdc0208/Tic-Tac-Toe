let myGame = []; //gameboard
let myPlayers = []; // players
let gameFlow = []; // flow of the game

const gameBoard = (() => {
  function addMove() {
    document.addEventListener('click', (event) => {
      const { target } = event;
      const tr = target.parentNode.parentNode.rowIndex - 1;
      
    }
  );
  }

})(); // gameboard module

const displayController = (() => {


})(); // displayController module

const players = (name) => {

} // players factory

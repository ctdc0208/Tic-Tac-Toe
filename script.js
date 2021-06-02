let myGame = []; //gameboard
//let myPlayers = []; // players
let gameFlow = []; // flow of the game

const gameBoard = (() => {
    }
  );
  }

})(); // gameboard module

const displayController = (() => {
  function addMove() {
    document.addEventListener('click', (event) => {
      const { target } = event;
      const tr = target.parentNode.parentNode.rowIndex - 1;

    }
  );
  }

})(); // displayController module

const myPlayers = (playerOne, playerTwo) => {
  function createPlayer(event) {
    const form = document.querySelector('form');
    const playerOneInput = document.querySelector('#player-one');
    const playerTwoInput = document.querySelector('#player-two');

    if (playerOneInput.value !== '' && playerOneInput.value !== '') {
      myPlayers(playerOneInput.value, playerTwoInput.value)
      }
    form.reset();
    }

  return {playerOne, playerTwo};
} // players factory


const jeff = myPlayers("Jeff", "Jeff2");

console.log(jeff.playerOne);
console.log(jeff.playerTwo);

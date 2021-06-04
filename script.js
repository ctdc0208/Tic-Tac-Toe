let myGame = []; //gameboard
//let myPlayers = []; // players
let gameFlow = []; // flow of the game

const gameBoard = (() => {

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
  function addPlayers() {

  }


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


  const newPlayer = document.querySelector('#player-name');
  newPlayer.addEventListener('click', () => popUpForm.style.display = 'block');

  const popUpForm = document.getElementById('popUp');

  const closePopUp = document.getElementsByTagName('span')[0];
  closePopUp.addEventListener('click', () => popUpForm.style.display = 'none');
function showPlayers() {
    popUpForm.style.display = 'none';

    const showOne = document.querySelector('#player-one');
    showOne.textContent = myPlayers.playerOne;
  }



const jeff = myPlayers("Jeff", "Jeff2");

console.log(jeff.playerOne);
console.log(jeff.playerTwo);


showPlayers();

let game_board = ["", "", "", "", "", "", "", "", ""]; // game_board array
let board_full = false; // set board_full to false
let myPlayers = []; // players array

const playerOne = "X"; // mark of player One
const playerTwo = "O"; // mark of player Two
let currentTurnTurn;  // set current turn to player One

const players = (playerOne, playerTwo) => {
  return { playerOne, playerTwo};
} // assign playerOne playerTwo to players and return it

const rendergame = (() => {
    const board_container = document.querySelector(".play-area"); //select play-area html
    board_container.innerHTML = ""
    game_board.forEach((e, i) => {
        board_container.innerHTML += `<div id="block_${i}" class="block" onclick="addcurrentTurnMove(${i})">${game_board[i]}</div>`
    }); // render the play-area
});

const addcurrentTurnMove = (e) => {
  const currentTurn = currentTurnTurn ? playerTwo : playerOne; // set currentTurn, playerOne or Two
  if (!board_full && game_board[e] == "") {
    game_board[e] = currentTurn;  // assign currentTurn as a mark to be put in the board
    game_loop(); // check match, game loop
  }
  const switchTurn = () => {
    currentTurnTurn = !currentTurnTurn; // set alternating current turn
  }
  switchTurn(); // call the switch turn
};


const game_loop = () => {
  rendergame(); // render board

  const check_board_full = () => {
      let flag = true;
      game_board.forEach(element => {
      if (element != playerOne && element != playerTwo) {
        flag = false;
      }
    });
    board_full = flag;
  } // check if board is full
  check_board_full(); // call check_board_full

  const check_lines = (a, b, c) => {
    return (
      game_board[a] == game_board[b] &&
      game_board[b] == game_board[c] &&
      (game_board[a] == playerOne || game_board[a] == playerTwo)
    );
  } // check if there is a similar 3 lines to check who's winner

  const check_match = () => {
    for (i = 0; i < 9; i += 3) {
      if (check_lines(i, i + 1, i + 2)) {
        return game_board[i];
      }
    }  // for row check
    for (i = 0; i < 3; i++) {
      if (check_lines(i, i + 3, i + 6)) {
        return game_board[i];
      }
    } // for columns check
    if (check_lines(0, 4, 8)) {
      return game_board[0];
    } // for diagonal
    if (check_lines(2, 4, 6)) {
      return game_board[2];
    }
    return "";
  } // also for diagonal

  const check_winner = () => {
    const winner = document.getElementById('winner'); // get winner html
    let win = check_match();
    for (let i = 0; i < myPlayers.length; i += 1) {
      if (win == playerOne){
        winner.innerText = myPlayers[i].playerOne + " Win!"; // assing playerOne win text
        board_full = true; // call board is full
      } else if (win == playerTwo) {
        winner.innerText = myPlayers[i].playerTwo + " Win!"; // assing playerTwo win text
        board_full = true;
      } else if (board_full) {
        winner.innerText = "Draw!"; // Draw text
      }
    }
  }
  check_winner(); // call check_winner
}

const displayController = (() => {
  const popUpForm = document.getElementById('popUp');  // get assign popUpForm html
  const playerNames = document.querySelector('#player-name'); // get assign player-names html
  playerNames.addEventListener('click', () => popUpForm.style.display = 'block'); //  addEventListener when clicked
  const closePopUp = document.getElementsByTagName('span')[0];
  closePopUp.addEventListener('click', () => popUpForm.style.display = 'none'); // a close button for the popUp

  const restartButton = document.getElementById('restart'); // get assign restartButton html

  const addPlayerNames = (playerOne, playerTwo) => {
    popUpForm.style.display = 'none'; // closed the popUpForm

    const newPlayer = players(playerOne, playerTwo);
    myPlayers.push(newPlayer);  // push newPlayer on the players array


    const createPlayers = (event) => {
      const form = document.querySelector('form'); // get form html
      const pOneInput = document.querySelector('#playerOne'); // get playerOne input name
      const pTwoInput = document.querySelector('#playerTwo'); // get playerTwo input name
      if (pOneInput.value !== '' & pTwoInput.value !=='') {
        addPlayerNames(pOneInput.value, pTwoInput.value);
      } // assign the input values as newPlayer
      form.reset();
    }
    const listenClicks = () => {
      document.addEventListener('click', (event) => {
        const { target } = event;
        if (target.id === 'add-players') {
          myPlayers = []; // empty first the players array
          createPlayers(); // then push the input Value of newPlayer
        }
      });
    }
    listenClicks(); // calls listenClicks

    const displayPlayers = () => {
        const p1 = document.querySelector('#player1Name'); // get p1 html
        p1.textContent = '';
        for (let i = 0; i < myPlayers.length; i += 1) {
          const p1Name = document.createElement('p1');  // create p1Name div
          p1Name.textContent = myPlayers[i].playerOne; // get playerOne name from players array
          p1.appendChild(p1Name); // append p1Name to p1
        }

        const p2 = document.querySelector('#player2Name'); // get p2 html
        p2.textContent = '';
        for (let i = 0; i < myPlayers.length; i += 1) {
          const p2Name = document.createElement('p2'); // create p2Name div
          p2Name.textContent = myPlayers[i].playerTwo; // get playerTwo name from players array
          p2.appendChild(p2Name); // append p2Name to p2
        }
    }
    displayPlayers(); // call displayPlayers

    const reset_board = () => {
      game_board = ["", "", "", "", "", "", "", "", ""]; // reset game_board
      board_full = false;
      winner.classList.remove("playerWin");
      winner.classList.remove("computerWin");
      winner.classList.remove("draw");
      winner.innerText = ""; // remove all text done midgame
      rendergame(); // call for rendergame
    };
    restartButton.addEventListener('click', reset_board); //addEventListener for restart button

  }
  addPlayerNames(' Player One', 'Player Two'); // assign "Player One" and "Player Two" texts
})();

rendergame(); // execute rendergame

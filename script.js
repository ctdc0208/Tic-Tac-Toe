let game_board = ["", "", "", "", "", "", "", "", ""];
let board_full = false;
let myPlayers = [];

const playerOne = "X";
const playerTwo = "O";
let currentTurnTurn;

const players = (playerOne, playerTwo) => {
  return { playerOne, playerTwo};
}

const rendergame = (() => {
    const board_container = document.querySelector(".play-area");
    board_container.innerHTML = ""
    game_board.forEach((e, i) => {
        board_container.innerHTML += `<div id="block_${i}" class="block" onclick="addcurrentTurnMove(${i})">${game_board[i]}</div>`
    });
    return {
      board_container
    }
});

const addcurrentTurnMove = (e) => {
  const currentTurn = currentTurnTurn ? playerTwo : playerOne;
  if (!board_full && game_board[e] == "") {
    game_board[e] = currentTurn;
    game_loop();
  }
  const switchTurn = () => {
    currentTurnTurn = !currentTurnTurn;
  }
  switchTurn();
};


const game_loop = () => {
  rendergame();

  const check_board_full = () => {
      let flag = true;
      game_board.forEach(element => {
      if (element != playerOne && element != playerTwo) {
        flag = false;
      }
    });
    board_full = flag;
  }
  check_board_full();

  const check_lines = (a, b, c) => {
    return (
      game_board[a] == game_board[b] &&
      game_board[b] == game_board[c] &&
      (game_board[a] == playerOne || game_board[a] == playerTwo)
    );
  }

  const check_match = () => {
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

  const check_winner = () => {
    const winner = document.getElementById('winner');
    let win = check_match();
    for (let i = 0; i < myPlayers.length; i += 1) {
      if (win == playerOne){
        winner.innerText = myPlayers[i].playerOne + " Win!";
        board_full = true;
      } else if (win == playerTwo) {
        winner.innerText = myPlayers[i].playerTwo + " Win!";
        board_full = true;
      } else if (board_full) {
        winner.innerText = "Draw!";
      }
    }
  }
  check_winner();
}

const displayController = (() => {
  const popUpForm = document.getElementById('popUp');
  const playerNames = document.querySelector('#player-name');
  playerNames.addEventListener('click', () => popUpForm.style.display = 'block');
  const closePopUp = document.getElementsByTagName('span')[0];
  closePopUp.addEventListener('click', () => popUpForm.style.display = 'none');

  const restartButton = document.getElementById('restart');

  const addPlayerNames = (playerOne, playerTwo) => {
    popUpForm.style.display = 'none';

    const newPlayer = players(playerOne, playerTwo);
    myPlayers.push(newPlayer);


    const createPlayers = (event) => {
      const form = document.querySelector('form')
      const pOneInput = document.querySelector('#playerOne');
      const pTwoInput = document.querySelector('#playerTwo');
      if (pOneInput.value !== '' & pTwoInput.value !=='') {
        addPlayerNames(pOneInput.value, pTwoInput.value);
      }
      form.reset();
    }
    const listenClicks = () => {
      document.addEventListener('click', (event) => {
        const { target } = event;
        if (target.id === 'add-players') {
          myPlayers = [];
          createPlayers();
        }
      });
    }
    listenClicks();

    const displayPlayers = () => {
        const p1 = document.querySelector('#player1Name');
        p1.textContent = '';
        for (let i = 0; i < myPlayers.length; i += 1) {
          const p1Name = document.createElement('p1');
          p1Name.textContent = myPlayers[i].playerOne;
          p1.appendChild(p1Name);
        }

        const p2 = document.querySelector('#player2Name');
        p2.textContent = '';
        for (let i = 0; i < myPlayers.length; i += 1) {
          const p2Name = document.createElement('p2');
          p2Name.textContent = myPlayers[i].playerTwo;
          p2.appendChild(p2Name);
        }
    }
    displayPlayers();

    const reset_board = () => {
      game_board = ["", "", "", "", "", "", "", "", ""];
      board_full = false;
      winner.classList.remove("playerWin");
      winner.classList.remove("computerWin");
      winner.classList.remove("draw");
      winner.innerText = "";
      rendergame();
    };
    restartButton.addEventListener('click', reset_board);

  }
  addPlayerNames(' Player One', 'Player Two');
})();

rendergame();

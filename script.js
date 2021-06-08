let playerXIcon = "player-one-mark";
let playerOIcon = "player-two-mark";
let playerOneSign = "X";
let playerTwoSign = "O";

const displayController = (() => {
  players = document.getElementById(".player-one .player-two"),
  allBox = document.querySelector("tr td"),
  mainBoard = document.querySelector(".main-game");

  function clickSelectBox() {
    for (let i = 0; i < allBox.length; i++) {
      allBox[i].setAttribute("onclick", "clickBox(this)");
    }
  function clickBox(element) {
    if(players.classlist.contain("player-one")) {
      element.innerHTML = `<i class=${playerXIcon}></i>`;
      players.classlist.add('active')
      element.setAttribute("id", playerOneSign);
    } else {
      element.innerHTML = `<i class=${playerOIcon}></i>`;
      players.classlist.add('active')
      element.setAttribute("id", playerTwpSign);
    }
    checkWinner();
    element.style.pointerEvents = "none";
  }


}
})(); // displayController module

function Tictactoe() {
  this.turn = 'X';
  this.letters = new Array(9).fill(null);
  this.clear = document.getElementById('reset');
  this.boxes = document.getElementsByClassName('item');
  this.boxClicked = document.getElementById('container');
  this.status = document.getElementById("message");
  this.addEventListeners();
  this.moves = 0;
}

Tictactoe.prototype.addEventListeners = function () {
  this.clear.addEventListener('click', this.clearBoard.bind(this))
  this.boxClicked.addEventListener('click', this.startGame.bind(this))
}

Tictactoe.prototype.startGame = function (e) {

  if (e.target.innerHTML === 'X' || e.target.innerHTML === 'O') {
  } else {
    e.target.innerHTML = this.turn;
    dataBox = e.target.getAttribute('id');
    this.letters.splice(dataBox, 1, this.turn);
    this.moves++;
    if (this.moves >= 5 && this.moves <= 9) {
      this.checkWin();
    }
    this.turn === 'X' ? this.turn = 'O' : this.turn = 'X';
    this.showTurn();
  }
}

Tictactoe.prototype.clearBoard = function () {
  for (let box of this.boxes)
    box.innerHTML = '';
    this.moves = 0;
  this.setNextTurn();
  this.resetColor('black');
  this.status.className -= 'new-message';
  this.status.textContent = '';
  this.boxClicked.className -= 'container-no-click';
}

Tictactoe.prototype.resetColor = function(color) {
  const allBoxes = Array.from(this.boxes);
  allBoxes.forEach(element => {
    element.style.color = color;
  });
}

Tictactoe.prototype.changeColor = function(pos, color) {
  const allBoxes = Array.from(this.boxes);
  pos.forEach(element => {
    allBoxes[element].style.color = color;
  });
}

Tictactoe.prototype.setNextTurn = function () {
  this.turn = 'X';
  console.log(this.turn);
  this.showTurn();
  this.letters = new Array(9).fill(null);
}

Tictactoe.prototype.showTurn = function () {
  let whosTurn = document.getElementById('turn');

  whosTurn.innerHTML = 'Who\'s turn is it: ' + this.turn;
}

Tictactoe.prototype.rowWin = function (arr) {
  return (arr[0] === arr[1] && arr[0] === arr[2] && arr[0] !== null) ||
      (arr[3] === arr[4] && arr[3] === arr[5] && arr[3] !== null) ||
      (arr[6] === arr[7] && arr[6] === arr[8] && arr[6] !== null)
}

Tictactoe.prototype.columnWin = function (arr) {
  return (arr[0] === arr[3] && arr[0] === arr[6] && arr[0] !== null) ||
      (arr[1] === arr[4] && arr[1] === arr[7] && arr[1] !== null) ||
      (arr[2] === arr[5] && arr[2] === arr[8] && arr[2] !== null)
}

Tictactoe.prototype.diagonalWin = function (arr) {
  return (arr[0] === arr[4] && arr[0] === arr[8] && arr[0] !== null) ||
      (arr[2] === arr[4] && arr[2] === arr[6] && arr[2] !== null)
}

Tictactoe.prototype.statusMessage = function (message) {
  this.status.classList.add('new-message', 'fadeInUp');
  this.status.textContent = message;
}

Tictactoe.prototype.checkWin = function () {
  if (
    this.rowWin(this.letters) ||
    this.columnWin(this.letters) ||
    this.diagonalWin(this.letters)
  ) {
    this.statusMessage('Winner!');
    this.boxClicked.classList.add("container-no-click");
    return;
  } else if (
    ((!this.rowWin(this.letters)) || !this.columnWin(this.letters) || !this.diagonalWin(this.letters)) &&
    this.moves === 9
  ) {
    this.statusMessage("It is a tie!");
    return;
  }
  return;
}

var game1 = new Tictactoe();



























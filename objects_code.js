function Tictactoe() {
  this.turn = 'X';
  this.letters = new Array(9).fill(null);
  this.clear = document.getElementById('reset');
  this.boxes = document.getElementsByClassName('item');
  this.boxClicked = document.getElementById('container');
  this.addEventListeners();
}

Tictactoe.prototype.addEventListeners = function() {
  this.clear.addEventListener('click', this.clearBoard.bind(this))
  this.boxClicked.addEventListener('click', this.startGame.bind(this))
}

Tictactoe.prototype.startGame = function(e) {
  let moves = 0;
  if (e.target.innerHTML === 'X' || e.target.innerHTML === 'O') {
    console.log('You can\'t do that');
  } else {
    let turn = 'X';
    e.target.innerHTML = turn;
    console.log(e.target.innerHTML);
    dataBox = e.target.getAttribute('data-id');
    this.letters.splice(dataBox, 1, this.turn);
    moves++;
    if (moves >= 5) { this.checkWin(this.letters); }
    this.turn === 'X' ? this.turn = 'O' : this.turn = 'X';
    this.showTurn();
  }

  this.clearBoard();
}

Tictactoe.prototype.clearBoard = function() {
  for (let box of this.boxes)
    box.innerHTML = '';
  this.setNextTurn()
}

Tictactoe.prototype.setNextTurn = function() {
  this.turn = 'X';
  this.showTurn();
  this.letters = new Array(9).fill(null);
}

Tictactoe.prototype.showTurn = function() {
  let whosTurn = document.getElementById('turn');

  whosTurn.innerHTML = 'Who\'s turn is it: ' + this.turn;
}

Tictactoe.prototype.checkWin = function(arr) {
 if (arr[0] === 'X' && arr[1] === 'X' && arr[2] === 'X') {
   console.log('You Win');
 }
}

var game1 = new Tictactoe();

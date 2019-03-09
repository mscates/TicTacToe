function Tictactoe() {
  this.turn = 'X';
  this.letters = new Array(9).fill(null);
  this.clear = document.getElementById('reset');
  this.boxes = document.getElementsByClassName('item');
  this.boxClicked = document.getElementById('container');
  this.addEventListeners();
  this.moves = 0;
}

Tictactoe.prototype.addEventListeners = function () {
  this.clear.addEventListener('click', this.clearBoard.bind(this))
  this.boxClicked.addEventListener('click', this.startGame.bind(this))
}

Tictactoe.prototype.startGame = function (e) {

  if (e.target.innerHTML === 'X' || e.target.innerHTML === 'O') {
    console.log('You can\'t do that');
  } else {
    e.target.innerHTML = this.turn;
    dataBox = e.target.getAttribute('id');
    this.letters.splice(dataBox, 1, this.turn);
    this.moves++;
    if (this.moves >= 5 && this.moves <= 9) {
      this.checkWin(this.letters);
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

Tictactoe.prototype.checkWin = function (arr) {
  let checkArray = [[[0, 1, 2], arr[0], arr[1], arr[2]],
                    [[3,4,5], arr[3], arr[4], arr[5]],
                    [[6,7,8], arr[6], arr[7], arr[8]],
                    [[0,3,6], arr[0], arr[3], arr[6]],
                    [[1,4,7], arr[1], arr[4], arr[7]],
                    [[2,5,8], arr[2], arr[5], arr[8]],
                    [[0,4,8], arr[0], arr[4], arr[8]],
                    [[2,4,6], arr[2], arr[4], arr[6]]
                    ];
  for (let item of checkArray) {
    let arrPossibles = item.slice(1);
    answer = arrPossibles.reduce((a, b) => a === b ? a : false);
    if (answer) {
      console.log(`${answer} wins!`);
      this.changeColor(item[0], 'red');
      this.boxClicked.classList.add("container-no-click");
      return;
    }
    else if (!answer && this.moves === 9) {
      console.log('It is a tie!');
      return;
    }
  }
  return;
}

var game1 = new Tictactoe();



























document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
 var board = {
   cells: []
 }

var allCellsArray = board.cells; //declaring a variable for the array that holds the objects/cells

var numberOfCellsAcross = prompt('How many cells across would you like?','Give a number between 3 and 6');
console.log('User entered ' + numberOfCellsAcross + ' cells across.'); // for reference purposes

function resetGame() {
  console.log('Need to code the reset');
}

function boardSize (numberOfCellsAcross) { // width and height will be the same
  for (var xRow = 0; xRow < numberOfCellsAcross; xRow ++) {
    for (var yCol = 0; yCol < numberOfCellsAcross; yCol ++) {
      var cellObject = {
        row: xRow,
        col: yCol,
        isMine: Math.random() < 0.33, // 1/3 chance this cell will have a mine
        isMarked: false, //starts with cell unmarked
        hidden: true, // starts with cell hidden
      }
      console.log(cellObject); //for reference purposes
      allCellsArray.push(cellObject); // push this cellObject into the board.cells array
    }
  }
}
boardSize(numberOfCellsAcross); // prompt answer goes in here


function startGame () {
  // Don't remove this function call: it makes the game work!
  document.addEventListener('click', checkForWin);
  document.addEventListener('contextmenu', checkForWin);

  for (var i = 0; i < allCellsArray.length; i ++){ // loops through by the number of objects/cells in the array
    //console.log(allCellsArray[i]); // console.logs the current object/cell within the array - for reference
    allCellsArray[i].surroundingMines = countSurroundingMines(allCellsArray[i]); // creates a surroundingMines property with the results of the countSurroundingMines function
  }
  lib.initBoard()
}

var clapS = document.getElementById('clapS');

// Win condition checks:
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  for (var i = 0; i < allCellsArray.length; i ++){
    if ((!allCellsArray[i].isMine) && (!allCellsArray[i].hidden)) { // if cell is not a mine and is visible
      // if condition met, then continues to iterate
    } else if (allCellsArray[i].isMine && allCellsArray[i].isMarked) { // if cell is a mine and marked
      // if condition met, then continues to iterate
    } else { // otherwise, not won yet
      return; // exit this function
    }
  }
  clapS.play();
  lib.displayMessage('You win!'); // once BOTH these conditions have been met (by completing the for loop to the length of cell objects in the array - thus counting all cells as meeting the conditions), you win
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {

  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col); // for each iteration of the previous for loop, it counts how many cells there are around it

  var count = 0; // declaring the variable count with a starting point of 0

  for (var j = 0; j < surroundingCells.length; j ++){ // loops through by the number of surroundingCells
    if (surroundingCells[j].isMine) { // if that particular surroundingCells[j] isMine property === true
      count ++; // add 1 iteration to the count variable
    }
  }
  return count;
}

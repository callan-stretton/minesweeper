document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
 var board = {
   cells: [
     { //1
       hidden: true,
       row: 0,
       col: 0,
       isMine: false
     },
     { //2
       hidden: true,
       row: 0,
       col: 1,
       isMine: false
     },
     { //3
       hidden: true,
       row: 0,
       col: 2,
       isMine: false
     },
     { //4
       hidden: true,
       row: 1,
       col: 0,
       isMine: false
     },
     { //5
       hidden: true,
       row: 1,
       col: 1,
       isMine: false
     },
     { //6
       hidden: true,
       row: 1,
       col: 2,
       isMine: true
     },
     { //7
       hidden: true,
       row: 2,
       col: 0,
       isMine: true
     },
     { //8
       hidden: true,
       row: 2,
       col: 1,
       isMine: false
     },
     { //9
       hidden: true,
       row: 2,
       col: 2,
       isMine: false
     }
   ]
 }
 /*
 Looks Like:
 1 | 2 | 3
---+---+---
 4 | 5 | 6
---+---+---
 7 | 8 | 9
 */

var allCellsArray = board.cells; //declaring a variable for the array that holds the objects/cells

function startGame () {
  // Don't remove this function call: it makes the game work!

  for (var i = 0; i < allCellsArray.length; i ++){ // loops through by the number of objects/cells in the array
    //console.log(allCellsArray[i]); // console.logs the current object/cell within the array - for reference
    allCellsArray[i].surroundingMines = countSurroundingMines(allCellsArray[i]); // creates a surroundingMines property with the results of the countSurroundingMines function
  }


  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
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
  //console.log(surroundingCells);

  var count = 0;

  for (var j = 0; j < surroundingCells.length; j ++){
    if (surroundingCells[j].isMine) { // the same as saying surroundingCells[j].isMine === true
      //console.log(j);
      count ++;
    }
  }
  return count;
}

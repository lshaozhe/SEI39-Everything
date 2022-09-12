"use strict";

const initialArr = [
    [0, 6, 0, 0, 0, 0, 0, 1, 0],
    [7, 0, 1, 0, 0, 0, 0, 0, 4],
    [0, 0, 3, 9, 0, 0, 0, 0, 0],
    [6, 0, 9, 0, 0, 0, 0, 0, 5],
    [0, 5, 0, 0, 0, 9, 7, 2, 0],
    [0, 7, 0, 2, 0, 6, 0, 0, 0],
    [0, 0, 6, 0, 3, 0, 0, 0, 0],
    [9, 0, 0, 7, 0, 0, 5, 3, 0],
    [0, 0, 0, 0, 9, 0, 1, 0, 0],
  ]

let solnArr = [], errArr = [], n = 9;

initialiseArrs(n); //create 9x9 solution array which records answer, and 9x9x9 error array to check valid moves
populateInitialValues(); //Mainly to push valid answers for each grid onto errArr
console.log(errArr);
console.log(solnArr);

  if (autoSolver()) {
    console.log(solnArr);
  } else {
    console.log("no solution exists");
  }

function autoSolver(row = 0, col = 0) {
    //write base case first to stop recussion => in this case condition where board is solved
  if (checkComplete(row, col)) {
    return true;
  }
  //Manual nested i, j loop => if col > max index then increment row and reset col
  if (col === solnArr.length) {
    row++, col = 0;
  }
  //search for the first element to be solved => i.e element == 0
  if (solnArr[row][col] !== 0) {
    //console.log("increament performed");
    return autoSolver(row, col + 1); //cannot ++ no assignment*
  }
  //when element == 0 is found, try to fit the possible solutions into it.
  for (const element of errArr[row][col]) {
    if (isNotConstrained(element, row, col) && element !== 0) {
      solnArr[row][col] = element;
      //console.log(`element ${element} was input at row:${row}, col:${col}`);
      //then solve all remaning 0 in the board, if there are elements that cannot be solved, it will not pass the previous if loop
      if (autoSolver(row, col + 1)) { //cannot ++ no assignment*
        return true; //return true when all elements solved => a valid soln is found
        } else {
            //console.log("increment from r performed");
        }
    }
    //if it do not pass the previous if loop => the solution assumed initially is not valid, re-solve
    solnArr[row][col] = 0;
    //console.log(`${row}, ${col} did not yield a possible solution`);
  }
  //console.log("false is returned");
  return false;
}

function checkComplete(row, col) {
    //if the current row is index 8 and col is index 9 means 8 : 8 had been solved
    if(row === solnArr[0].length - 1 && col === solnArr.length) {
        return true;
    }
    return false;
}

function initialiseArrs(n) {
    solnArr = new Array(n).fill(new Array(n).fill(-1));
    errArr = new Array(n).fill(new Array(n).fill([1, 2, 3, 4, 5, 6, 7, 8, 9]));
    solnArr = JSON.parse(JSON.stringify(solnArr));
    errArr = JSON.parse(JSON.stringify(errArr));
  }
  
  function populateInitialValues() {
    //limiting all solvable grids to be contrained - i.e will never conflict with solve/ default puzzle input in the same row, col, box
    for (let i = 0; i < initialArr.length; i++) {
      for (let j = 0; j < initialArr[i].length; j++) {
        if (initialArr[i][j] !== 0) {
          removeElement(initialArr[i][j], i, j);
        }
        solnArr[i][j] = initialArr[i][j];
      }
    }
    //limiting the error array to register the solved/ default puzzle input to be the only right answer at the grid
    for (let i = 0; i < initialArr.length; i++) {
      for (let j = 0; j < initialArr[i].length; j++) {
        if (initialArr[i][j] !== 0) {
          errArr[i][j] = JSON.parse(JSON.stringify(Array(9).fill(0)));
          errArr[i][j][initialArr[i][j] - 1] = initialArr[i][j];
        }
      }
    }
  }

  function removeElement(num, row, col) {
    removeElementInCol(num - 1, row, col);
    removeElementInRow(num - 1, row, col);
    removeElementInBox(num - 1, row, col);
  }
  
  function removeElementInRow(num, row, col) {
    for (let i = 0; i < errArr[row].length; i++) {
      errArr[row][i][num] = 0;
    }
  }
  
  function removeElementInCol(num, row, col) {
    for (let i = 0; i < errArr[col].length; i++) {
      errArr[i][col][num] = 0;
    }
  }
  
  function removeElementInBox(num, row, col) {
    let localRow, localCol;
    localRow = row - (row % 3);
    localCol = col - (col % 3);
    for (let i = localRow; i < localRow + 3; i++) {
      for (let j = localCol; j < localCol + 3; j++) {
        errArr[i][j][num] = 0;
      }
    }
  }

  function isNotConstrained(num, row, col) {
    //returns true if not contrained, i.e valid move
    if (
      isRowNotConstrained(num, row, col) &&
      isColNotConstrained(num, row, col) &&
      isBoxNotConstrained(num, row, col)
    ) {
      //console.log("true is returned");
      return true;
    } else {
      //console.log("false is returned");
      return false;
    }
  }
  
  function isRowNotConstrained(num, row, col) {
    const solnArrR = solnArr[row];
    let rFinder = solnArrR.find((element) => element === num); //returns undefined if no number found
    //console.log(`R returning: ${solnArrR}, rFinder = ${rFinder}, testing ${num}`);
    if (rFinder === undefined) {
      return true;
    } else {
      return false;
    }
  }
  
  function isColNotConstrained(num, row, col) {
    const solnArrC = [];
    let cFinder;
    for (let i = 0; i < solnArr.length; i++) {
      solnArrC.push(solnArr[i][col]);
    }
    cFinder = solnArrC.find((element) => element === num);
    //console.log(`C returning: ${solnArrC}, cFinder = ${cFinder}, testing ${num}`);
    if (cFinder === undefined) {
      return true;
    } else {
      return false;
    }
  }
  
  function isBoxNotConstrained(num, row, col) {
    const solnArrB = [];
    let bFinder, localRow, localCol;
    localRow = row - (row % 3);
    localCol = col - (col % 3);
    for (let i = localRow; i < localRow + 3; i++) {
      for (let j = localCol; j < localCol + 3; j++) {
        solnArrB.push(solnArr[i][j]);
      }
    }
    bFinder = solnArrB.find((element) => element === num);
    //console.log(`B returning: ${solnArrB}, bFinder = ${bFinder}, testing ${num}`);
    if (bFinder === undefined) {
      return true;
    } else {
      return false;
    }
  }

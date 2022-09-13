"use strict";

let initialArr = [],
  solnArr = [],
  errArr = [],
  n = 9,
  depth = 2;

function generateSolutionsforHTML() {
  if (autoSolver()) {
    return "Solve Puzzle was clicked => Solutions generated.";
  } else {
    return "Solve Puzzle was clicked => However, no solution exists";
  }
}
function autoSolver(row = 0, col = 0) {
  //write base case first to stop recussion => in this case condition where board is solved
  if (checkComplete(row, col)) {
    return true;
  }
  //Manual nested i, j loop => if col > max index then increment row and reset col
  if (col === solnArr.length) {
    row++, (col = 0);
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
      if (autoSolver(row, col + 1)) {
        //cannot ++ no assignment*
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
  if (row === solnArr[0].length - 1 && col === solnArr.length) {
    return true;
  }
  return false;
}

//=============== Boards Generator Functions below ===============
//Summary: to create 3 arrays that are ready for solver to take in and solve for solutions
//Change Logs:
//Commit 1: Sets up the 3 array for a fixed array defined within JS.
//Commit 4: Created boardGenerator function that allows for generation of 9x9 boards.
//Note: Only for 9x9 board for now. Code is NOT READY for nxn where n is any number and NOT READY for use in 3D (nxnxn) boards. though some features for n and depths are considered below.
//Note: by default uses a pre-generated board

//Returns 3 initiallised arrays for errArr (nxnxn), solnArr (nxn) and initialArr. Input the gridlength and dimension of selected board
function initialiseArrs(n = 9, depth = 2) {
  (n = parseInt(n)), (depth = parseInt(depth));

  //generate all soln on errArr depending on n length first
  let tempArr = new Array(n);
  for (let i = 0; i < n; i++) {
    tempArr[i] = i + 1;
  }

  //Generates dimensions dimensions next
  if (depth === 2) {
    solnArr = new Array(n).fill(new Array(n).fill(-1));
    initialArr = new Array(n).fill(new Array(n).fill(0));
    errArr = new Array(n).fill(new Array(n).fill(-1));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        errArr[i][j] = tempArr;
      }
    }
  }
  if (depth === 3) {
    solnArr = new Array(n).fill(new Array(n).fill(new Array(n).fill(-1)));
    initialArr = new Array(n).fill(new Array(n).fill(new Array(n).fill(0)));
    errArr = new Array(n).fill(new Array(n).fill(new Array(n).fill(-1)));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
          errArr[i][j][k] = tempArr;
        }
      }
    }
  }

  //making all array elements unique (not references of each other)
  solnArr = JSON.parse(JSON.stringify(solnArr));
  initialArr = JSON.parse(JSON.stringify(initialArr));
  errArr = JSON.parse(JSON.stringify(errArr));
}

//Either generate a 9x9 board or use a default 9x9 board depending on user selection
function boardGenerator(n = 9, depth = 2, isGenerateTrue = false) {
  let count = 0;
  if (isGenerateTrue) {
    while (count < n * depth) {
      let num = Math.ceil(Math.random() * n);
      let x = Math.floor(Math.random() * n);
      let y = Math.floor(Math.random() * n);
      if (depth === 3) {
        let z = Math.floor(Math.random() * n);
      }
      if (isNotConstrained(num, x, y, initialArr) && depth === 2) {
        initialArr[x][y] = num;
        count++;
      }
      //   if (isNotConstrained(num, x, y, z, initialArr) && depth === 3) {
      //     initialArr[x][y][z] = num;
      //     count++;
      //   }
    }
  } else {
    // initialArr = [
    //   [0, 6, 0, 0, 0, 0, 0, 1, 0],
    //   [7, 0, 1, 0, 0, 0, 0, 0, 4],
    //   [0, 0, 3, 9, 0, 0, 0, 0, 0],
    //   [6, 0, 9, 0, 0, 0, 0, 0, 5],
    //   [0, 5, 0, 0, 0, 9, 7, 2, 0],
    //   [0, 7, 0, 2, 0, 6, 0, 0, 0],
    //   [0, 0, 6, 0, 3, 0, 0, 0, 0],
    //   [9, 0, 0, 7, 0, 0, 5, 3, 0],
    //   [0, 0, 0, 0, 9, 0, 1, 0, 0],
    // ];
    let count = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        console.log(document.querySelectorAll(".gridElement").value);
        if (document.querySelectorAll(".gridElement").value == undefined) {
          initialArr[i][j] = 0;
        } else {
          initialArr[i][j] = document.querySelectorAll(".gridElement").value;
        }
        count++;
      }
    }
    console.log(initialArr);
  }
}

//Creating a working board: SolnArr, and error board: ErrArr for working of solutions in solver, and errArr to generate hints later
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

//all other remove functions below are lower order functions called solely by populateInitialValues
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

//=============== Constrains Checker Functions below ===============
//Change Logs:
//Commit 1: Takes in num, row, col for any nxn boards to check if a move is valid. isNotConstrained returns true if move is valid
//Commit 4: Able to take in array when reference is specified -> For use in board generation
//Note: Code is ready for nxn where n is any number, but NOT READY for use in 3D (nxnxn) boards
//Note: All row and col arguments for functions are array index (i.e starts from 0)

//returns true if not contrained, i.e valid move. All other functions below are lower order functions called solely by isNotConstrained
function isNotConstrained(num, row, col, arr = solnArr) {
  if (
    isRowNotConstrained(num, row, col, arr) &&
    isColNotConstrained(num, row, col, arr) &&
    isBoxNotConstrained(num, row, col, arr)
  ) {
    return true;
  } else {
    return false;
  }
}

function isRowNotConstrained(num, row, col, arr) {
  const arrR = arr[row];
  let rFinder = arrR.find((element) => element === num);
  //console.log(`R returning: ${solnArrR}, rFinder = ${rFinder}, testing ${num}`);
  if (rFinder === undefined) {
    return true;
  } else {
    return false;
  }
}

function isColNotConstrained(num, row, col, arr) {
  const arrC = [];
  let cFinder;
  for (let i = 0; i < arr.length; i++) {
    arrC.push(arr[i][col]);
  }
  cFinder = arrC.find((element) => element === num);
  //console.log(`C returning: ${solnArrC}, cFinder = ${cFinder}, testing ${num}`);
  if (cFinder === undefined) {
    return true;
  } else {
    return false;
  }
}

function isBoxNotConstrained(num, row, col, arr) {
  const arrB = [];
  let bFinder, localRow, localCol;
  localRow = row - (row % 3);
  localCol = col - (col % 3);
  for (let i = localRow; i < localRow + 3; i++) {
    for (let j = localCol; j < localCol + 3; j++) {
      arrB.push(arr[i][j]);
    }
  }
  bFinder = arrB.find((element) => element === num);
  //console.log(`B returning: ${solnArrB}, bFinder = ${bFinder}, testing ${num}`);
  if (bFinder === undefined) {
    return true;
  } else {
    return false;
  }
}

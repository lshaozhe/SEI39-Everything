"use strict";

let initialArr = [],
  solnArr = [],
  errArr = [];
// n = 9,
// dimension = 2;

// initialiseArrs(n, dimension);
// boardGenerator(n, dimension, true);
// populateInitialValues();
// generateSolutionsforHTML();

function generateSolutionsforHTML() {
  if (dimension === 2) {
    return autoSolver()
      ? "Solutions generated."
      : "However, no solution exists";
  } else {
    return autoSolver3D()
      ? "Solutions generated."
      : "However, no solution exists";
  }
}
function autoSolver(row = 0, col = 0) {
  //write base case first to stop recussion => in this case condition where board is solved
  if (row === solnArr[0].length - 1 && col === solnArr.length) {
    return true;
  }
  //Manual nested i, j loop => if col > max index then increment row and reset col
  if (col === solnArr.length) {
    row++, (col = 0);
  }
  //search for the first element to be solved => i.e element == 0
  if (solnArr[row][col] !== 0) {
    //console.log("increament performed");
    return autoSolver(row, col + 1);
  }
  //when element == 0 is found, try to fit the possible solutions into it.
  for (const element of errArr[row][col]) {
    if (isNotConstrained(element, row, col) && element !== 0) {
      solnArr[row][col] = element;
      //console.log(`element ${element} was input at row:${row}, col:${col}`);
      //then solve all remaning 0 in the board, if there are elements that cannot be solved, it will not pass the previous if loop
      if (autoSolver(row, col + 1)) {
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
function autoSolver3D(y = 0, x = 0, z = 0) {
  if (x === n - 1 && y === n - 1 && z === n) {
    return true;
  }
  if (x === n) {
    y++, (x = 0);
    if (y === n) {
      z++, (y = 0);
    }
  }
  if (solnArr[y][x][z] !== 0) {
    return autoSolver3D(y, x + 1, z);
  }
  for (const element of errArr[y][x][z]) {
    if (isNotConstrained(element, x, y, z) && element !== 0) {
      solnArr[y][x][z] = element;
      if (autoSolver3D(y, x + 1, z)) {
        return true;
      }
    }
    solnArr[y][x][z] = 0;
  }
  return false;
}

//=============== Boards Generator Functions below ===============
//Summary: to create 3 arrays that are ready for solver to take in and solve for solutions
//Change Logs:
//Commit 1: Sets up the 3 array for a fixed array defined within JS.
//Commit 4: Created boardGenerator function that allows for generation of 9x9 boards.
//Commit 5: resolved boardGenerator not receiving user input due to incorrect array reference.
//Branch 1 (Merged): Allowed nxnxn solver to initialise
//Commit 8: limits the max number of elements filled, think solver works too hard if puzzle too tough
//Note: Only for 9x9 board for now. Code is NOT READY for nxn where n is any number and NOT READY for use in 3D (nxnxn) boards. though some features for n and depths are considered below.
//Note: by default uses a pre-generated board

//Returns 3 initiallised arrays for errArr (nxnxn), solnArr (nxn) and initialArr. Input the gridlength and dimension of selected board
function initialiseArrs(n = 9, dimension = 2) {
  (n = parseInt(n)), (dimension = parseInt(dimension));

  //generate all soln on errArr depending on n length first
  let tempArr = new Array(n);
  for (let i = 0; i < n; i++) {
    tempArr[i] = i + 1;
  }

  //Generates dimensions dimensions next
  if (dimension === 2) {
    solnArr = new Array(n).fill(new Array(n).fill(-1));
    initialArr = new Array(n).fill(new Array(n).fill(0));
    errArr = new Array(n).fill(new Array(n).fill(-1));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        errArr[i][j] = tempArr;
      }
    }
  }
  if (dimension === 3) {
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

//Either generate a 9x9 board or use a default 9x9 board depending on user selection. i.e filling initialArr only
function boardGenerator(n = 9, dimension = 2, isGenerateTrue = false) {
  let count = 0;
  let maxCount = Math.ceil(Math.random() * (n / 2) * (n / 2));
  if (n === 16 && maxCount > 25) {
    maxCount = 20;
  }
  if (n === 4 && maxCount > 6) {
    maxCount = 5;
  }
  if (isGenerateTrue) {
    while (count < maxCount) {
      //initial numbers of populated elements on generated grid
      let num = Math.ceil(Math.random() * n);
      let x = Math.floor(Math.random() * n);
      let y = Math.floor(Math.random() * n);
      let z = Math.floor(Math.random() * n);
      if (isNotConstrained(num, x, y, 0, initialArr) && dimension === 2) {
        initialArr[x][y] = num;
        count++;
      }
      if (dimension === 3) {
        if (isNotConstrained(num, x, y, z, initialArr)) {
          initialArr[x][y][z] = num;
          count++;
        }
      }
    }
  } else {
    let count = 0;
    if (dimension === 2) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (
            document.querySelectorAll(".gridElement")[count].value > 0 &&
            document.querySelectorAll(".gridElement")[count].value < 10
          ) {
            initialArr[i][j] = parseInt(
              document.querySelectorAll(".gridElement")[count].value
            );
          } else {
            initialArr[i][j] = 0;
          }
          count++;
        }
      }
    }
    if (dimension === 3) {
      //TO BE DEVELOPED WITH FRONTEND
    }
  }
}

//Creating a working board: SolnArr, and error board: ErrArr for working of solutions in solver, and errArr to generate hints later
//limiting the error array to register the solved/ default puzzle input to be the only right answer at the grid
//Also copies valid entries from initialArr to solnArr such that solnArr can be run by solver later.
function populateInitialValues() {
  for (let i = 0; i < initialArr.length; i++) {
    for (let j = 0; j < initialArr[i].length; j++) {
      if (dimension === 2) {
        if (initialArr[i][j] !== 0) {
          removeElement(initialArr[i][j], i, j); //taking z = 0 default value when function is invoked
          errArr[i][j] = JSON.parse(JSON.stringify(Array(n).fill(0)));
          errArr[i][j][initialArr[i][j] - 1] = initialArr[i][j];
        }
        solnArr[i][j] = initialArr[i][j];
      }
      if (dimension === 3) {
        for (let k = 0; k < initialArr[i][j].length; k++) {
          if (initialArr[i][j][k] !== 0) {
            removeElement(initialArr[i][j][k], i, j, k);
            errArr[i][j][k] = JSON.parse(JSON.stringify(Array(n).fill(0)));
            errArr[i][j][k][initialArr[i][j][k] - 1] = initialArr[i][j][k];
          }
          solnArr[i][j][k] = initialArr[i][j][k];
        }
      }
    }
  }
}

//all other remove functions below are lower order functions called solely by populateInitialValues
function removeElement(num, x, y, z = 0) {
  //num must -1 as it is removing index
  removeElementInCol(num - 1, x, y, z);
  removeElementInRow(num - 1, x, y, z);
  removeElementInBox(num - 1, x, y, z);
  if (dimension === 3) {
    removeElementInDepth;
  }
}

function removeElementInRow(num, x, y, z) {
  for (let i = 0; i < errArr[x].length; i++) {
    if (dimension === 2) {
      errArr[x][i][num] = 0;
    } else {
      errArr[x][i][z][num] = 0;
    }
  }
}

function removeElementInCol(num, x, y, z) {
  for (let i = 0; i < n; i++) {
    if (dimension === 2) {
      errArr[i][y][num] = 0;
    } else {
      errArr[i][y][z][num] = 0;
    }
  }
}

function removeElementInBox(num, x, y, z) {
  let localRow, localCol, localDepth;
  localRow = x - (x % n ** 0.5);
  localCol = y - (y % n ** 0.5);
  localDepth = z - (z % n ** 0.5);
  for (let i = localRow; i < localRow + n ** 0.5; i++) {
    for (let j = localCol; j < localCol + n ** 0.5; j++) {
      if (dimension === 2) {
        errArr[i][j][num] = 0;
      } else {
        errArr[i][j][z][num] = 0;
      }
    }
  }
}

function removeElementInDepth(num, x, y, z) {
  for (let i = 0; i < n; i++) {
    errArr[x][y][i][num] = 0;
  }
}

//=============== Constrains Checker Functions below ===============
//Change Logs:
//Commit 1: Takes in num, row, col for any nxn boards to check if a move is valid. isNotConstrained returns true if move is valid
//Commit 4: Able to take in array when reference is specified -> For use in board generation
//Branch 1: Allowed nxnxn checks on arrays
//Note: Code is ready for nxn where n is any number, but NOT READY for use in 3D (nxnxn) boards
//Note: All row and col arguments for functions are array index (i.e starts from 0)

//returns true if not contrained, i.e valid move. All other functions below are lower order functions called solely by isNotConstrained
function isNotConstrained(num, x, y, z = 0, arr = solnArr) {
  let booleanHolder = true;
  if (dimension === 2) {
    booleanHolder =
      isRowNotConstrained(num, x, y, z, arr) &&
      isColNotConstrained(num, x, y, z, arr) &&
      isBoxNotConstrained(num, x, y, z, arr);
  } else {
    booleanHolder =
      isRowNotConstrained(num, x, y, z, arr) &&
      isColNotConstrained(num, x, y, z, arr) &&
      isBoxNotConstrained(num, x, y, z, arr) &&
      isDepthNotConstrained(num, x, y, z, arr);
  }
  return booleanHolder ? true : false;
}

function isRowNotConstrained(num, x, y, z, arr) {
  let arrR = [];
  if (dimension === 2) {
    arrR = arr[x];
  } else {
    for (let i = 0; i < arr.length; i++) {
      arrR.push(arr[x][i][z]);
    }
  }
  let rFinder = arrR.find((element) => element === num);
  return rFinder === undefined ? true : false;
}

function isColNotConstrained(num, x, y, z, arr) {
  const arrC = [];
  let cFinder;
  if (dimension === 2) {
    for (let i = 0; i < arr.length; i++) {
      arrC.push(arr[i][y]);
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      arrC.push(arr[i][y][z]);
    }
  }
  cFinder = arrC.find((element) => element === num);
  return cFinder === undefined ? true : false;
}

function isBoxNotConstrained(num, x, y, z, arr) {
  const arrB = [];
  let bFinder, localRow, localCol;
  localRow = x - (x % n ** 0.5);
  localCol = y - (y % n ** 0.5);
  for (let i = localRow; i < localRow + n ** 0.5; i++) {
    for (let j = localCol; j < localCol + n ** 0.5; j++) {
      if (dimension === 2) {
        arrB.push(arr[i][j]);
      } else {
        arrB.push(arr[i][j][z]);
      }
    }
  }
  bFinder = arrB.find((element) => element === num);
  return bFinder === undefined ? true : false;
}

function isDepthNotConstrained(num, x, y, z, arr) {
  const arrD = [];
  let DFinder;
  for (let i = 0; i < arr.length; i++) {
    arrD.push(arr[x][y][i]);
  }
  DFinder = arrD.find((element) => element === num);
  return DFinder === undefined ? true : false;
}

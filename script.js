"use strict";

const initialArr = [
  [0, 0, 2, 5, 0, 7, 0, 0, 3],
  [8, 0, 0, 1, 6, 0, 0, 7, 0],
  [0, 1, 7, 0, 3, 0, 2, 0, 0],
  [2, 0, 0, 0, 0, 0, 0, 8, 6],
  [0, 0, 0, 6, 2, 3, 0, 0, 0],
  [3, 9, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 9, 0, 8, 0, 1, 5, 0],
  [0, 3, 0, 0, 5, 1, 0, 0, 4],
  [5, 0, 0, 4, 0, 9, 3, 0, 0],
];

let solnArr = [],
  errArr = [];

initialiseArrs(); //create 9x9 solution array which records answer, and 9x9x9 error array to check valid moves
populateInitialValues(); //Mainly to push valid answers for each grid onto errArr
autoSolver();
console.log(solnArr);

function autoSolver() {
  for (let i = 0; i < solnArr.length; i++) {
    for (let j = 0; j < solnArr[i].length; j++) {
      if (solnArr[i][j] === 0) {
        //run thru the valid solutions and put the first element here
        const possibleSoln = errArr[i][j].filter((number) => number > 0);
        console.log(possibleSoln);
        //run thru check constrains
        for (let k = 0; k < possibleSoln.length; k++) {
          if (isNotConstrained(possibleSoln[k], i, j)) {
            //if true -> valid move, move on to next 0 element on solnArr, note: no need update errArr as it may be a false positive
            solnArr[i][j] = possibleSoln[k];
            console.log(
              `for row ${i}, col ${j}, testing ${
                possibleSoln[k]
              } returns ${isNotConstrained(
                possibleSoln[k],
                i,
                j
              )}, solnarr is ${solnArr}`
            );
            break; //break out of if loop

            //if false -> not valid move, try the next option on possibleSoln
          }
          if (k === possibleSoln.length - 1) {
            //no possible soln on possibleSoln, some previous entry is wrong, go back 1s
            console.log("error");
            0;
          }
          //break; //break out of for loop
        }
      }

      //update errArr

      //if all errArr elements do not work, go back one element and repeat, prolly backtrack function here
    }
  }
}

function initialiseArrs() {
  solnArr = new Array(9).fill(new Array(9).fill(-1));
  errArr = new Array(9).fill(new Array(9).fill([1, 2, 3, 4, 5, 6, 7, 8, 9]));
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

function populateSolutionOrError(num, row, col) {
  if (checkConstrains) {
    /*populate errArr*/
    errArr[row][col][num] = 1;
  } else {
    solnArr[row][col] = num;
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

"use strict";

var n, dimension;

console.log(document.location.pathname);
window.addEventListener("load", function () {
  switch (document.location.pathname) {
    case "/4x4Board.html":
      (n = 4), (dimension = 2);
      break;
    case "/16x16Board.html":
      (n = 16), (dimension = 2);
      break;
    case "/9x9Board.html":
      (n = 9), (dimension = 2);
      break;
  }
});

////=============== Logic for Clicks on Menu ===============
//Summary: Click Eventlisteners and SwitchBoard for Menu
//Change Logs:
//Commit 3: Eventlistener and SwitchBoard for 5 initial buttons created
//Commit 4:
//Notes: each switch case should only trigger one function for consistency and neatness
document.querySelector("#buttons").addEventListener("click", function (e) {
  switch (e.target.id) {
    case "generateBoard":
      fGenerateRandomBoard();
      break;
    case "fillBoard":
      fGetFromBoard();
      break;
    case "solveBoard":
      fSolveBoard();
      break;
    case "showHints":
      fShowHints();
      break;
  }
});

//=============== Event Listener for Sudoku Grid ===============
//Commit 5: added input listeners (for expansion later)
document.querySelector("#grid").addEventListener("change", function (e) {
  e.preventDefault();
  console.log(e.target.value);
  if (e.target.value < 1 || e.target.value > n) {
    alert(`Please input a value between 1 and ${n}!`);
    e.target.value = "";
  }
  //if (isNotConstrained(e.target.value,)
});

////=============== Higher Order Functions for Click Logic ===============
//Change Logs:
//Commit 4: Individual button functions created. Button 1 and 4 functional.
//Commit 5: Button 2 now functional. Slighted edited DOM during button clicks

let getDisplay = document.querySelector("#display");

//Upon click, generate a random & valid board on html
function fGenerateRandomBoard() {
  let createLines = document.createElement("p");
  createLines.id = "msg";
  createLines.innerText = "A random puzzle had been generated. ";
  getDisplay.append(createLines);

  initialiseArrs(n, dimension);
  boardGenerator(n, dimension, true);
  populateInitialValues();
  setTimeout(writeToBoard(initialArr), 1000);
  console.log(solnArr, initialArr, errArr);
}

function fGetFromBoard() {
  let createLines = document.createElement("p");
  createLines.id = "msg";
  createLines.innerText = "Your input puzzle had been recorded. ";
  getDisplay.append(createLines);

  initialiseArrs(n, dimension);
  boardGenerator(n, dimension, false);
  populateInitialValues();
}

function fSolveBoard() {
  let createLines = document.createElement("p");
  createLines.id = "msg";
  createLines.innerText = generateSolutionsforHTML();
  getDisplay.append(createLines);

  setTimeout(writeToBoard(solnArr), 3000);
}

function fShowHints() {
  let createLines = document.createElement("p");
  createLines.id = "msg";
  createLines.innerText = "Button still in development";
  getDisplay.append(createLines);
}

//Takes a nxn matrix for disp (HTML limited to 9x9)
function writeToBoard(arr) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 0 || arr[i][j] === -1) {
        document.querySelectorAll(".gridElement")[count].value = null;
      } else {
        document.querySelectorAll(".gridElement")[count].value = arr[i][j];
      }
      count++;
    }
  }
}

function writeToInitialArr() {
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

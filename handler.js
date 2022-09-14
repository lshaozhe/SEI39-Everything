"use strict";

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
    case "checkBoard":
      fCheckBoard();
      break;
    case "solveBoard":
      fSolveBoard();
      break;
    case "showHints":
      fShowHints();
      break;
  }
});

////=============== Event Listener for Sudoku Grid ===============
//Commit 5: added input listeners (for expansion later)
// document.querySelector("#grid").addEventListener("change", function (e) {
//   e.preventDefault();
//   alert("changed");
// });

////=============== Higher Order Functions for Click Logic ===============
//Change Logs:
//Commit 4: Individual button functions created. Button 1 and 4 functional.
//Commit 5: Button 2 now functional. Slighted edited DOM during button clicks

let getDisplay = document.querySelector("#display");

//Upon click, generate a random & valid board on html
function fGenerateRandomBoard() {
  let createLines = document.createElement("p");
  createLines.id = "msg";
  createLines.innerText =
    "Generate Board was clicked => A random puzzle had been generated. ";
  getDisplay.append(createLines);

  initialiseArrs();
  boardGenerator(n, dimension, true);
  populateInitialValues();
  writeToBoard(initialArr);
}

function fGetFromBoard() {
  let createLines = document.createElement("p");
  createLines.id = "msg";
  createLines.innerText = "Your inputs had been recorded. ";
  getDisplay.append(createLines);

  initialiseArrs();
  boardGenerator(n, dimension, false);
  populateInitialValues();
}

function fCheckBoard() {
  let createLines = document.createElement("p");
  createLines.id = "msg";
  createLines.innerText = "Button still in development";
  getDisplay.append(createLines);
}

function fSolveBoard() {
  let createLines = document.createElement("p");
  createLines.id = "msg";
  createLines.innerText = generateSolutionsforHTML();
  getDisplay.append(createLines);

  writeToBoard(solnArr);
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

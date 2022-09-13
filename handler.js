"use strict";

////=============== Logic for Clicks on Menu ===============
//Summary: Click Eventlisteners and SwitchBoard for Menu
//Change Logs:
//Commit 3: Eventlistener and SwitchBoard for 5 initial buttons created
//Commit 4:
//Notes: each switch case should only trigger one function for consistency and neatness
document.querySelector("#buttons").addEventListener("click", function (e) {
  //e.preventDefault();
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

////=============== Higher Order Functions for Click Logic ===============
//Change Logs:
//Commit 4: Individual button functions created. Button 1 and 4 functional.

let getDisplay = document.querySelector("#display");

//Upon click, generate a random & valid board on html
function fGenerateRandomBoard() {
  getDisplay.textContent +=
    "Generate Board was clicked => A random puzzle had been generated. ";
  initialiseArrs();
  boardGenerator(n, depth, true);
  populateInitialValues();
  writeToBoard(initialArr);
}

function fGetFromBoard() {
  getDisplay.textContent += "Your inputs had been recorded. ";
  initialiseArrs();
  boardGenerator(n, depth, false);
}

function fCheckBoard() {
  getDisplay.textContent += "Button still in development";
}

function fSolveBoard() {
  getDisplay.textContent += generateSolutionsforHTML();
  writeToBoard(solnArr);
}

function fShowHints() {
  getDisplay.textContent += errArr;
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

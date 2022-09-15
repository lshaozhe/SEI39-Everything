"use strict";

////=============== Handler.js Objective ===============
//handler.js contains all eventlisteners and DOM codes for the sudoku solver. 
//It also acts as an interface between frontend HTML to backend JS solver.
//Code Structure/ Organisation: 1. Event Listeners + Switch Board, 2. Functions called within Switch Board (unless codes are short, they will be combined)

////=============== Global Variables ===============
//variable n and dimension represents the grid length and dimension of the sudoku board. 
//Majority, if not all JS functions (in ALL JS files) reads these variable directly.
var n, dimension;

////=============== Event Listeners and Switchboard for HTML Change ===============
//Below houses events when HTML loads -> mainly to initialise NxN or NxNxN (in the future) boards within JS backend.
//3 Arrs (initialArr, solnArr, errArr) are initialised (with default (generic) values)
//Commit 12: Created and tested OK
window.addEventListener("load", function () {
  switch (document.location.pathname) {
    case "/4x4Board.html":
      fLoad4x4Board();
      break;
    case "/9x9Board.html":
      fLoad9x9Board();
      (n = 9), (dimension = 2);
      break;
    case "/16x16Board.html":
      fLoad16x16Board();
      (n = 16), (dimension = 2);
      break;
  }
});

function fLoad4x4Board() {
  (n = 4), (dimension = 2);
  initialiseArrs(n, dimension);
}

function fLoad9x9Board() {
  (n = 9), (dimension = 2);
  initialiseArrs(n, dimension);
}

function fLoad16x16Board() {
  (n = 16), (dimension = 2);
  initialiseArrs(n, dimension);
}

//=============== Event Listener for Sudoku Grid ===============
//Commit 5: added input listeners (for expansion later)
//Commit 12: added feature to not allow invalid inputs on a nxn board upon losing focus
document.querySelector("#grid").addEventListener("change", function (e) {
  e.preventDefault();
  fCheckUserInput(e)
});

//Checks user input if valid i.e: 1. between 1 to n, 2. valid sudoku move
//Secondary to remove placeholder
function fCheckUserInput(e) {
  if (e.target.value < 1 || e.target.value > n) {
    alert(`Please input a value between 1 and ${n}!`);
    e.target.value = "";
  }

  let elementPosition = parseInt(e.target.id);
  let x = (elementPosition % n) - 1;
  let y = Math.floor(elementPosition / n);
  
  if (isNotConstrained(parseInt(e.target.value), y, x, 0, initialArr)) {
    writeToInitialArr();
  } else {
    alert(`Move is not valid, cannot add ${e.target.value} to current grid.`)
    e.target.value = "";
  }

  removePlaceHolders();
}

////=============== Event Listeners and Switchboard for Buttons ===============
//Summary: Click Eventlisteners and SwitchBoard for Menu
//Change Logs:
//Commit 3: Eventlistener and SwitchBoard for 5 initial buttons created
//Commit 11: Removed 1 button
//Commit 12: Made all button serviceable
//Notes: each switch case should only trigger one function for consistency and neatness
document.querySelector("#buttons").addEventListener("click", function (e) {
  removePlaceHolders(); //quick fix
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

////=============== Functions for Click Logic ===============
//Change Logs:
//Commit 4: Individual button functions created. Button 1 and 4 functional
//Commit 5: Button 2 now functional. Slighted edited DOM during button clicks
//Commit 12: Adjusted functions below to make buttons work as intended
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

  boardGenerator(n, dimension, false);
  populateInitialValues();
}

async function fSolveBoard() {
  let createLines = document.createElement("p");
  createLines.id = "msg";
  createLines.innerText = await generateSolutionsforHTML();
  getDisplay.append(createLines);

  setTimeout(writeToBoard(solnArr), 3000);
}

function fShowHints() {
  let createLines = document.createElement("p");
  createLines.id = "msg";
  createLines.innerText = "Hints Generated";
  getDisplay.append(createLines);

  generateHintsOnPlaceHolders()
}

////=============== Read/ Write Functions for HTML Grid and JS(Backend) Grid and Placeholders ===============
//Summary functions transfer data between frontend and backend arrays
//Commit 12: added write and remove placeholder for hints, refined write to initalArr to pass valeus from html to js
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
    //TO BE DEVELOPED WITH FRONTEND IN THE FUTURE
  }
}

function generateHintsOnPlaceHolders() {
  let count = 0, tempArr = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        tempArr.push(errArr[i][j].filter(x => x > 0));
      count++;
    }
  }
  console.log(tempArr, errArr);
  for (let i = 0; i < n*n; i++){
    let tempVal = tempArr[i].join();
    document.querySelectorAll(".gridElement")[i].setAttribute("placeholder", tempVal);
  }
}

function removePlaceHolders() {
  for (let i = 0; i < n*n; i++){
    document.querySelectorAll(".gridElement")[i].removeAttribute("placeholder");
  }
}
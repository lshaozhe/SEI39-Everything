"use strict";

document.querySelector("#buttons").addEventListener("click", function (e) {
  console.log(e.target.id);
  switch (e.target.id) {
    case "generateBoard":
      console.log("1");
      break;
    case "fillBoard":
      console.log("2");
      break;
    case "checkBoard":
      console.log("3");
      break;
    case "solveBoard":
      console.log("4");
      break;
    case "showHints":
      console.log("5");
      break;
  }
});

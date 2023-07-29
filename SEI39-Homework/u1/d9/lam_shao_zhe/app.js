"use strict";

const toDoListArr = [];

document.querySelector("#submit").addEventListener("click", function (e) {
  e.preventDefault();
  toDoListArr.push(document.querySelector("#input-box").value);
  createBox();
});

function createBox(passText, checker = "blue") {
  //creating the entire blue block with buttons + setting attributes
  const createDiv = document.createElement("div");
  const createH3 = document.createElement("h3");
  const createButton = document.createElement("button");
  createDiv.append(createH3);
  createDiv.append(createButton);

  if (checker === "blue") {
    createH3.innerText = toDoListArr[toDoListArr.length - 1];
    createButton.innerText = "COMPLETED!";
    createDiv.className = "to-do-item";
    createButton.className = "lists button";

    //just appending it to the to-do-list div
    document.querySelector("#to-do-list").append(createDiv);

    //adding event listener to the complete button - note: bubbling
    createDiv.addEventListener("click", function (e) {
      shiftBox(e);
    });

    document.querySelector("#input-box").value = "";

    console.log(`BLUE createBox was ran`);
  } else {
    createH3.innerText = passText;
    createButton.innerText = "REMOVE";
    createDiv.className = "done-item";
    createButton.className = "lists button";

    //just appending it to the to-do-list div
    document.querySelector("#completed").append(createDiv);

    //adding event listener to the complete button - note: bubbling
    createDiv.addEventListener("click", function (e) {
      deleteBox(e);
    });

    console.log(`PINK createBox was ran`);
  }
}

function shiftBox(e) {
  e.preventDefault();
  e.currentTarget.remove();
  createBox(e.currentTarget.children[0].innerText, "pink");
}

function deleteBox(e) {
  e.preventDefault();
  e.currentTarget.remove();
}

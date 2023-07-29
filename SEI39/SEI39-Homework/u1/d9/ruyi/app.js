"use strict";

// // Save the reference to HTML submit button in a JS variable.
// const submitButton = document.getElementById("submit");

// // Save the reference to HTML to-do list div in a JS variable.
// const toDoList = document.getElementById("to-do-list");

// // Save the reference to HTML completed list div in a JS variable.
// const completedList = document.getElementById("completed");

// // Function to create a new div, retrieve the input box
// // value and add to the div as h3 element inner text. Add a
// // button to the div as well.
// function createToDoDiv(e) {
//   e.preventDefault();
//   const newDiv = document.createElement("div");
//   const newH3 = document.createElement("h3");
//   newH3.innerText = document.getElementById("input-box").value;
//   newDiv.className = "to-do-item";
//   newDiv.append(newH3);
//   toDoList.append(newDiv);

//   const newButton = document.createElement("button");
//   newButton.innerText = "COMPLETED";
//   newButton.className = "to-do-submit-button";
//   newDiv.append(newButton);

//   // Adds event listener for click on "COMPLETED" button
//   newButton.addEventListener("click", function (e) {
//     newButton.className = "completed-button";
//     newButton.parentElement.style.backgroundColor = "#ED6495";
//     completedList.append(newButton.parentElement);
//     newButton.innerText = "REMOVE";

//     // Adds event listener for click on "REMOVED" button
//     newButton.addEventListener("click", function (e) {
//       newButton.parentElement.remove();
//     });
//   });
// }

// // Adds event listener for click on add button to trigger to-do item creation
// submitButton.addEventListener("click", createToDoDiv);

// Instructor's answer:
const inputBox = document.querySelector("#input-box");
const todoList = document.querySelector("#to-do-list");
const completedList = document.querySelector("#completed");

const moveToComplete = (e) => {
  e.target.innerText = "REMOVE";
  e.target.className = "completed-button";
  completedList.append(e.target.parentNode);
};

const removeTodo = (e) => {
  e.target.parentNode.remove();
};

const createTodo = (e) => {
  e.preventDefault();

  const itemDiv = document.createElement("div");
  itemDiv.className = "to-do-item";
  const div = document.createElement("div");
  div.innerText = inputBox.value;
  inputBox.value = "";

  const button = document.createElement("button");
  button.innerText = "COMPLETED";

  itemDiv.append(div);
  itemDiv.append(button);
  todoList.append(itemDiv);
};

document.querySelector("#submit").addEventListener("click", createTodo);
todoList.addEventListener("click", moveToComplete);
completedList.addEventListener("click", removeTodo);

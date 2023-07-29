"use strict";

const inputToDo = [];
const inputButton = document.querySelector("#submit");

inputButton.addEventListener("click", function (e) {
  e.preventDefault();
  const inputText = document.querySelector("#input-box");
  inputToDo.push(inputText.value);
  // pushes input box value into the to-do list after submit is pressed
  inputText.value = "";
  // empties the input field after submit is pressed
  const input = document.createElement("div");
  input.className = "input-to-list";
  document.querySelector("#to-do-list").append(input);
  input.innerText = inputToDo[inputToDo.length - 1];
  // creates div to be appended to text in to-do list
  inputToDo.shift();
  // empties the array where the input value was stored
  const doneButton = document.createElement("button");
  doneButton.id = "done-button";
  doneButton.innerText = "COMPLETED";
  input.append(doneButton);
  // creates 'COMPLETED' button to be appended to text in to-do list
  doneButton.addEventListener("click", function () {
    document.querySelector("#completed").append(input);
    // after 'COMPLETED' is pressed, text & button both moves to completed list
    doneButton.innerText = "REMOVE";
    // button's text is changed to 'REMOVE'
    doneButton.addEventListener("click", function () {
      input.remove();
      doneButton.remove();
      // after 'DONE' button is pressed, text and button are both removed
    });
  });
});

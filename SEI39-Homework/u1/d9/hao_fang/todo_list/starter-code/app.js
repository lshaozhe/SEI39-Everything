"use strict";

// Add new item to the "to do"list
function addToDo() {
  const newDiv = document.createElement("div");
  newDiv.className = "to-do-item";
  document.querySelector("#to-do-list").append(newDiv);
  const newPara = document.createElement("p");
  newPara.innerText = document.querySelector("#input-box").value;
  newDiv.append(newPara);

  // Add "completed" button
  const completedButton = document.createElement("button");
  completedButton.innerText = "COMPLETED";
  completedButton.className = "completed_button";
  newDiv.append(completedButton);
}

function addToCompleted(element) {
  // Shift over to the "completed" list
  document.querySelector("#completed").append(element.parentElement);
  // Add the "remove" button
  const removeButton = document.createElement("button");
  removeButton.innerText = "REMOVE";
  removeButton.className = "remove_button";
  element.parentElement.append(removeButton);
  // Remove the "completed" button
  element.remove();
}

// Submit Event
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  addToDo();
  // Clear the text in the input box
  document.querySelector("#input-box").value = "";
});

// "COMPLETED" event
document.querySelector("#to-do-list").addEventListener("click", function (e) {
  if (e.target.className === "completed_button") {
    addToCompleted(e.target);
  }
});

// "REMOVE" event
document.querySelector("#completed").addEventListener("click", function (e) {
  if (e.target.className === "remove_button") {
    e.target.parentElement.remove();
  }
});

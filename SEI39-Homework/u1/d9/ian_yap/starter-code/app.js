"use strict";

function addToDo() {
  const newDiv = document.createElement("div");
  newDiv.className = "to-do-item";
  document.querySelector("#to-do-list").append(newDiv);
  const newPara = document.createElement("p");
  newPara.innerText = document.querySelector("#input-box").value;
  newDiv.append(newPara);

  const completedButton = document.createElement("button");
  completedButton.innerText = "COMPLETED";
  completedButton.className = "completed_button";
  newDiv.append(completedButton);
}

function addToCompleted(element) {
  document.querySelector("#completed").append(element.parentElement);
  const removeButton = document.createElement("button");
  removeButton.innerText = "REMOVE";
  removeButton.className = "remove_button";
  element.parentElement.append(removeButton);
  element.remove();
}

document.querySelector("#completed").addEventListener("click", function (e) {
  if (e.target.className === "remove_button") {
    e.target.parentElement.remove();
  }
});

document.querySelector("#to-do-list").addEventListener("click", function (e) {
  if (e.target.className === "completed_button") {
    addToCompleted(e.target);
  }
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  addToDo();
  document.querySelector("#input-box").value = "";
});

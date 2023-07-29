"use strict";

const inputBox_input = document.querySelector("#input-box");
const submit_button = document.querySelector("#submit");
const toDoList_div = document.querySelector("#to-do-list");
const completed_div = document.querySelector("#completed");

const toDoArray = [];

submit_button.addEventListener("click", (e) => {
  e.preventDefault();

  let todo = inputBox_input.value;

  if (!todo) {
    alert("add something to do!");
  } else {
    toDoArray.push(todo);
    console.log(toDoArray);
  }

  const newItem = document.createElement("div");
  newItem.classList = "to-do-item";

  const newTask = document.createElement("div");
  newTask.classList = "to-do-task";
  newTask.innerText = todo;

  const completedButton = document.createElement("button");
  completedButton.innerText = "COMPLETED";

  newItem.append(newTask);
  newItem.append(completedButton);

  toDoList_div.append(newItem);

  inputBox_input.value = "";

  completedButton.addEventListener("click", (e) => {
    const completedTask = e.currentTarget.parentElement;

    completed_div.append(completedTask);
    completedTask.classList = "completed";

    completedButton.remove();

    const removeButton = document.createElement("button");
    removeButton.innerText = "REMOVE";
    completedTask.append(removeButton);

    removeButton.addEventListener("click", (e) => {
      e.currentTarget.parentElement.remove();
    });
  });
});


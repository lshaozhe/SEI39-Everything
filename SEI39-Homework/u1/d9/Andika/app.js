"use strict"

const addButton = document.querySelector('#submit');
const inputBox = document.querySelector('#input-box');
const toDoDiv = document.querySelector('#to-do-list');
const completedDiv = document.querySelector("#completed");
const toDoArray = []; //store div  of things to do
const completedArray = []; //store div of things done

// addButton.addEventListener('click', function (e) {
//   e.preventDefault(); //for listening an input from user. prevent refresh if error.
//   const newDiv = document.createElement('div');
//   newDiv.innerText = inputBox.value;
//   newDiv.classList.add("to-do-item");
//   document.querySelector("#to-do-list").append(newDiv);
//   inputBox.value = '';
// });

function addToDo(task) {
  const newDiv = document.createElement('div'); //create div
  newDiv.classList.add("to-do-item"); //assign to-do-item class
  newDiv.innerText = task
  document.querySelector("#to-do-list").append(newDiv);

  const completedButton = document.createElement('button'); //create button
  newDiv.append(completedButton);
  completedButton.innerText = "COMPLETED";
  completedButton.classList.add("completeButton");
  toDoArray.push(newDiv);
  newDiv.id = `d${toDoArray.length}`;
  completedButton.id = `b${toDoArray.length}`;
}

addButton.addEventListener('click', function (e) {
  e.preventDefault(); //for listening an input from user. prevent refresh if error.

  //reset input box

  addToDo(inputBox.value);
  inputBox.value = '';

});

toDoDiv.addEventListener('click', function (e) {
  console.log(e.target.id);
  if (e.target.className === "completeButton") {
    e.target.innerText = "REMOVE";
    e.target.style.backgroundColor = "#ED6495";
    completedDiv.append(e.target.parentNode);
    const selectedButtonNumber = (e.target.id).substring(1);
    // console.log(selectedButtonNumber);
    for (let items of toDoArray) {
      if ((items.id).substring(1) === selectedButtonNumber) {
        completedArray.push(items);
        toDoArray.splice(toDoArray.indexOf(items), 1)
      }
    }
    console.log(toDoArray);
  }
});

completedDiv.addEventListener('click', function (e) {
  if (e.target.className === "completeButton") {
    e.target.parentNode.remove()
    const selectedButtonNumber = (e.target.id).substring(1);
    for (let items of completedArray) {
      if ((items.id).substring(1) === selectedButtonNumber) {
        completedArray.splice(completedArray.indexOf(items), 1)
      }
    }
    console.log(completedArray);
  }
})
"use strict";

document.querySelector("#submit").addEventListener("click", function (e) {
  e.preventDefault();

  let input = document.querySelector("#input-box").value;

  // add input to thingsToDoArr
  const thingsToDoArr = [];
  thingsToDoArr.push(input);

  // each time user submits input, input is added to Things to Do list
  for (let item of thingsToDoArr) {
    createNewThingsToDo(item);
  }

  // create new h3 to add things to do, h3 value is equal to input
  function createNewThingsToDo(item) {
    const h3ThingsToDo = document.createElement("h3");
    h3ThingsToDo.className = "to-do-item";
    h3ThingsToDo.id = `${item}-h3`;
    h3ThingsToDo.innerText = input;
    document.querySelector("#to-do-list").appendChild(h3ThingsToDo);

    // create 'completed' button and add to h3 created
    const completedButton = document.createElement("button");
    completedButton.className = "completed-button";
    completedButton.id = `${item}-completed-button`;
    completedButton.innerText = "COMPLETED";
    document.querySelector(`#${item}-h3`).appendChild(completedButton);

    // add event listener on 'COMPLETED' button to move things to done list
    document
      .querySelector(`#${item}-completed-button`)
      .addEventListener("click", moveToDo);
  }

  // function moves 'things to do' to 'things that are done'
  function moveToDo(e) {
    // move item from 'things to do' list to 'things that are done' list
    const thingsToDoToMove = e.target.parentNode;
    document.querySelector("#completed").append(thingsToDoToMove);
    thingsToDoToMove.style.backgroundColor = "#ED6495";

    // move 'COMPLETED' button from 'things to do' list to 'things that are done' list
    // rename button to 'REMOVE'
    const removeButtonId = e.target.id;
    document.querySelector(`#${removeButtonId}`).innerText = "REMOVE";

    // add event listener on 'REMOVE' button to delete item from 'things that are done' list
    document
      .querySelector(`#${removeButtonId}`)
      .addEventListener("click", function (e) {
        // delete item from 'things that are done' list
        document.querySelector(`#${e.target.parentNode.id}`).remove();
      });
  }
});

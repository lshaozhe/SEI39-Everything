//Part 2
const button = document.querySelector("#submit");
const inputBox = document.querySelector("#input-box");
const toDoList = document.querySelector("#to-do-list");
const completed = document.querySelector("#completed");

button.addEventListener("click", function (e) {
  e.preventDefault();
  let value = inputBox.value;
  const itemToDo = document.createElement("h3");

  itemToDo.innerText = value;
  toDoList.appendChild(itemToDo);
  const toDoButton = document.createElement("button");
  toDoButton.innerText = "COMPLETED";
  toDoButton.className = "complete";
  itemToDo.append(toDoButton);

  toDoButton.addEventListener("click", function () {
    completed.append(itemToDo);
    itemToDo.style.backgroundColor = "#ED6495";
    toDoButton.innerText = "REMOVE";
    toDoButton.className = "remove";

    toDoButton.addEventListener("click", function () {
      itemToDo.remove();
    });
  });
});

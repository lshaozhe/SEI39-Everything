const $todoList = document.getElementById("to-do-list");
const $completedList = document.getElementById("completed");

const makeTodoItem = () => {
  // create the container for the item
  const $itemDiv = document.createElement("div");
  $itemDiv.classList.add("todo-item");

  // create the item liner
  const $item = document.createElement("p");
  $item.textContent = document.getElementById("input-box").value;

  // create completed button
  const $completedBtn = document.createElement("button");
  $completedBtn.classList.add("completedBtn");
  $completedBtn.textContent = "COMPLETED";

  $completedBtn.addEventListener("click", (event) => {
    makeCompletedItem($item.textContent);
    event.path[1].remove();
  });

  // add item liner and completed button to container
  $itemDiv.append($item, $completedBtn);

  // add container to todo list
  $todoList.appendChild($itemDiv);
  document.getElementById("input-box").value = "";
};

const makeCompletedItem = (item) => {
  // create the container for the item
  const $itemDiv = document.createElement("div");
  $itemDiv.classList.add("completed-item");

  // create the item liner
  const $item = document.createElement("p");
  $item.textContent = item;

  // create remove button
  const $removeBtn = document.createElement("button");
  $removeBtn.classList.add("removeBtn");
  $removeBtn.textContent = "REMOVE";

  $removeBtn.addEventListener("click", (event) => {
    event.path[1].remove();
  });

  // add item liner and completed button to container
  $itemDiv.append($item, $removeBtn);

  // add container to todo list
  $completedList.appendChild($itemDiv);
};

document.addEventListener("DOMContentLoaded", () => {
  const $addBtn = document.getElementById("submit");
  $addBtn.addEventListener("click", makeTodoItem);
});

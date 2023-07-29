let toDoList = document.querySelector("#to-do-list");
let completedList = document.querySelector("#completed");
let inputText = document.querySelector("#input-box");

//FUNCTIONS========================
function createtoDoItem(e) {
  e.preventDefault();
  const toDoItem = document.createElement("div");
  toDoItem.className = "toDoItem";
  toDoList.append(toDoItem);
  toDoItem.innerText = inputText.value;
  const completeButton = document.createElement("button");
  toDoItem.append(completeButton);
  completeButton.innerText = "COMPLETED";
  completeButton.className = "completeButton";

  completeButton.addEventListener("click", () => moveCompletedItem(toDoItem));

  function moveCompletedItem(item) {
    completedList.append(item);
    completeButton.innerText = "REMOVE";
    item.id = "redBox";

    completeButton.addEventListener("click", () => removeCompletedItem());
    function removeCompletedItem() {
      toDoItem.remove();
    }
  }
}

document
  .querySelector("#submit")
  .addEventListener("click", (e) => createtoDoItem(e));

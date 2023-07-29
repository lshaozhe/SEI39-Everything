const callToDoList = document.querySelector("#to-do-list");
const callCompleted = document.querySelector("#completed");
const inputText = document.querySelector("#input-box");

//FUNCTION =================================
function createItem(e) {
  e.preventDefault();
  const toDoItem = document.createElement("div");
  toDoItem.innerText = inputText.value;
  callToDoList.append(toDoItem);
  toDoItem.className = "toDoitem";
  const completeButton = document.createElement("button");
  completeButton.innerText = "COMPLETED";
  completeButton.className = "completeButton";
  toDoItem.append(completeButton);

  completeButton.addEventListener("click", () => moveItem(toDoItem));

  function moveItem(item) {
    document.querySelector("#completed").append(item);
    completeButton.innerText = "REMOVE";
    item.id = "redBox";
    completeButton.addEventListener("click", () => removeItem());

    function removeItem() {
      item.remove();
    }
  }
}

document
  .querySelector("#submit")
  .addEventListener("click", (e) => createItem(e));

// document
//   .querySelector(".completeButton")
//   .addEventListener("click", (e) => moveItem(e));

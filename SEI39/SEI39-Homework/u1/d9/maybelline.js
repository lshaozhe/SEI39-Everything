const toDoList = document.querySelector("#to-do-list");
const doneList = document.querySelector("#completed");

const submitButton = document.querySelector("#submit");
const inputBox = document.querySelector("#input-box");

submitButton.addEventListener("click", function (e) {
  const toDoItem = document.createElement("p");
  toDoItem.setAttribute("class", "to-do-item");
  toDoItem.innerText = inputBox.value;
  inputBox.value = " ";
  toDoList.appendChild(toDoItem);
  e.preventDefault();

  const toDoButton = document.createElement("button");
  toDoButton.className = "completed";
  toDoButton.innerText = "COMPLETED";
  toDoItem.append(toDoButton);

  toDoButton.addEventListener("click", function (e) {
    doneList.append(toDoItem);
    toDoItem.style.backgroundColor = "#ED6495";
    toDoButton.innerText = "REMOVE";
    toDoButton.className = "remove";

    toDoButton.addEventListener("click", function (e) {
      toDoItem.remove();
    });
  });
});

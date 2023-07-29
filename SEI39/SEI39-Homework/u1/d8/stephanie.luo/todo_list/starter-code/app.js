console.log("Linked!");
//////////////////////////////////////////////////////////////////////////////////

const taskFromInputBox = document.querySelector("#input-box");
const toDoListDiv = document.querySelector("#to-do-list");
const completedList = document.querySelector("#completed");
const taskContainer = document.querySelector(".task-card");
const completedButton = document.querySelector("#completed-btn");

let taskArray = [];

// function for adding new task and adding it into an array
const addNewTask = () => {
  task = taskFromInputBox.value;
  //   console.log(task);
  if (task != "") {
    taskArray.push(task);
    console.log(taskArray);
  }
};

// function to display new task under to-do-list div
const displayNewTask = () => {
  const task = document.createElement("p");
  task.className = "task";
  const taskContainer = document.createElement("div");
  taskContainer.className = "task-card";
  const completedButton = document.createElement("button");
  completedButton.id = "completed-btn";
  completedButton.innerText = "COMPLETED";

  for (let i = 0; i < taskArray.length; i++) {
    task.innerText = taskArray[i];
    console.log(taskArray[i]);
    taskContainer.append(task);
    taskContainer.appendChild(completedButton);
    toDoListDiv.appendChild(taskContainer);
  }

  completedButton.addEventListener("click", function (e) {
    const completedTask = e.currentTarget.parentElement;
    completedList.appendChild(completedTask);
    completedTask.style.backgroundColor = "#ED6495";
    removeButton = document.querySelector("#completed-btn");
    removeButton.id = "remove-btn";
    removeButton.innerText = "REMOVE";

    document
      .querySelector("#remove-btn")
      .addEventListener("click", function (e) {
        const removeTask = e.currentTarget.parentElement;
        removeTask.remove();
      });
  });
};

document.querySelector("#submit").addEventListener("click", function (e) {
  // prevent page refresh on form submission
  e.preventDefault();
  addNewTask();
  displayNewTask();
  // clear input box after submission is click
  taskFromInputBox.value = "";
});

/*
function addToDoList(e) {
  e.preventDefault();
  const addToDoList = document.querySelector("#input-box").value;

  const addToDo = document.createElement("div");
  addToDo.setAttribute("id", addToDoList);
  addToDo.innerText = addToDoList;

  document.querySelector("#to-do-list").append(addToDo);
  //console.log(addToDoList);

  let btn = document.createElement("button");
  btn.setAttribute("id", "to-do-list");
  btn.innerHTML = "COMPLETED";
  addToDo.appendChild(btn);

  function moveTodo(e) {
    document.querySelector("#completed").append(e.target.parentNode);
    e.target.parentNode.style.backgroundColor = "#ED6495";
    btn.setAttribute("id", "completed");
    btn.innerHTML = "REMOVE";
    btn.addEventListener("click", toRemove);

    function toRemove(e) {
      addToDo.remove();
      //e.target.parentNode.remove();
    }
  }
  btn.addEventListener("click", moveTodo);
}
document.querySelector("#submit").addEventListener("click", addToDoList);
*/
// other mehtod
function addToDoList(e) {
  e.preventDefault();
  const addToDoList = document.querySelector("#input-box").value;

  const addToDo = document.createElement("div");
  addToDo.setAttribute("class", addToDoList);
  addToDo.innerText = addToDoList;

  document.querySelector("#to-do-list").append(addToDo);

  let btn = document.createElement("button");
  btn.setAttribute("id", addToDoList);
  btn.innerHTML = "COMPLETED";
  addToDo.appendChild(btn);

  return btn.addEventListener("click", moveTodo);
}
document.querySelector("#submit").addEventListener("click", addToDoList);

function moveTodo(e) {
  document.querySelector("#completed").append(e.target.parentNode);

  const moveID = e.target.id;

  // console.log(move)
  const move = document.querySelector(`.${moveID}`); //find the div
  //console.log(move);
  const btnMove = move.childNodes[1];
  btnMove.textContent = "REMOVE";
  move.style.backgroundColor = "#ED6495";
  //  console.log(`.${moveID}`);
  //  console.log(move.childNodes[0]);
  //  console.log(move.childNodes[1]);
  return btnMove.addEventListener("click", toRemove);
}
function toRemove(e) {
  const removeID = e.target.id;
  const remove = document.querySelector(`.${removeID}`);

  //console.log(remove);
  remove.remove();
}
/*
// another method
const inputBox = document.querySelector("#input-box");
const todoList = document.querySelector("#to-do-list");
const completedList = document.querySelector("#completed");

const moveToComplete = (e) => {
  e.target.innerText = "REMOVE";
  completedList.append(e.target.parentNode);
};

const removeTodo = (e) => {
  e.target.parentNode.remove();
};

const createTodo = (e) => {
  e.preventDefault();

  const itemDiv = document.createElement("div");
  const div = document.createElement("div");
  div.innerText = inputBox.value;
  inputBox.value = "";

  const button = document.createElement("button");
  button.innerText = "COMPLETED";

  itemDiv.append(div);
  itemDiv.append(button);
  todoList.append(itemDiv);
};

document.querySelector("#submit").addEventListener("click", createTodo);
todoList.addEventListener("click", moveToComplete);
completedList.addEventListener("click", removeTodo);
*/

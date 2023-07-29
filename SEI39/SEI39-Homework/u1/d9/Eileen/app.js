const toDoArr = [];
const completeButtonArr = [];
const removeButtonArr = [];
const thingsDoneArr = [];

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  //Gets the value of the input and appends to things to do
  const todo = document.getElementById("input-box").value;
  const toDoDiv = document.createElement("div");
  document.getElementById("to-do-list").append(toDoDiv);
  toDoDiv.setAttribute("id", "toDoDiv");
  toDoDiv.append(todo);
  toDoArr.push(toDoDiv);

  //creates complete button and appends to things to do
  const completeButton = document.createElement("BUTTON");
  completeButton.innerText = "COMPLETED";
  completeButton.setAttribute("id", "completeButton");
  const completeButtonDiv = document.createElement("div");
  toDoDiv.append(completeButtonDiv);
  completeButtonDiv.append(completeButton);
  completeButtonArr.push(completeButton);

  //Resets the input value
  document.getElementById("input-box").value = " ";

  //Appends completed item to things done
  for (let i = 0; i < toDoArr.length; i++) {
    toDoArr[i].addEventListener("click", function (e) {
      const thingsDone = document.getElementById("completed");
      thingsDone.append(toDoArr[i]);
      thingsDoneArr.push(toDoArr[i]);
      //changes complete button to remove button
      completeButtonArr[i].style.backgroundColor = "#ED6495";
      completeButtonArr[i].innerText = "REMOVE";
      toDoArr[i].setAttribute("id", "done-item");
      removeButtonArr.push(completeButtonArr[i]);

      //Removes things completed
      for (let i = 0; i < thingsDoneArr.length; i++) {
        thingsDoneArr[i].addEventListener("click", function (e) {
          thingsDoneArr[i].remove();
        });
      }
    });
  }
});

"use strict";

if (typeof jQuery == "undefined") {
  console.log("oops! I still have to link my jQuery properly!");
} else {
  console.log("I did it! I linked jQuery and this js file!");
}

//Year1
const doc = document.querySelector("#container");
console.log(doc);
const h1 = document.createElement("h1");
console.log(h1);
doc.appendChild(h1);
document.querySelector("h1").innerText = "This is header 1";
console.log(h1);

//Year2
doc.appendChild(document.createElement("h2"));
document.querySelector("h2").innerText = "Lam Shao Zhe";

doc.appendChild(document.createElement("h3"));
document.querySelector("h3").innerText = "Raven Claw";

doc.appendChild(document.createElement("h4"));
document.querySelector("h4").className = "Owl";
document.querySelector("h4").innerText = "Huffle";

doc.appendChild(document.createElement("h4"));
document.querySelectorAll("h4")[1].className = "Wand";
document.querySelector(".Wand").innerText = "Unicorn Hair Wand";

//Year3
doc.appendChild(document.createElement("ul"));
document.querySelector("ul").setAttribute("storage", "trunk");
const findUL = document.querySelector("ul");
const addLI = document.createElement("li");
const listOfItems = [
  "butter beer",
  "invisibility cloak",
  "magic map",
  "time turner",
  "leash",
  "Bertie Bott's Every Flaor [Jelly] Beans",
];

for (let i = 0; i < listOfItems.length; i++) {
  const addLI = document.createElement("li"); //creates a new reference to another copy of addLI
  findUL.appendChild(addLI);
  document.querySelectorAll("li")[i].innerText = listOfItems[i];
  if (1 <= i && i <= 3) {
    document.querySelectorAll("li")[i].className = "secret";
  }
}
document.querySelectorAll("li")[4].className = "Owl";

//Year4
doc.appendChild(document.createElement("h5"));
document.querySelector("h5").innerText = "Spring 2017";
doc.appendChild(document.createElement("table"));

const dayArr = ["Day", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
for (let i = 0; i < dayArr.length; i++) {
  document.querySelector("table").appendChild(document.createElement("tr"));
  document.querySelectorAll("tr")[i].appendChild(document.createElement("th"));
  document.querySelectorAll("tr")[i].appendChild(document.createElement("th"));
  document.querySelectorAll("th")[i * 2].innerText = dayArr[i];
}
document.querySelectorAll("th")[1].innerText = "Classes";
document.querySelectorAll("th")[3].innerText =
  "Charms, Quidditch practice, History of Magic";
document.querySelectorAll("th")[5].innerText = "Defence against the Dark Arts";
document.querySelectorAll("th")[7].innerText = "Potions, Quidditch practoce";
document.querySelectorAll("th")[9].innerText = "Charms, History of Magic";
document.querySelectorAll("th")[11].innerText = "Transfiguration";

//Year5
document.querySelector(".Wand").remove();
document.querySelectorAll("li")[0].remove();
document
  .querySelector("ul")
  .insertBefore(
    document.createElement("li"),
    document.getElementsByClassName("secret")[0]
  );
document.querySelector("li").className = "Wand";
document.querySelector("li").innerText = "Dragon Core Wand";
document.getElementsByClassName("Wand")[0].style.color = "indigo";

document.querySelector("h4").remove();
document
  .querySelector("ul")
  .insertBefore(
    document.createElement("li"),
    document.getElementsByClassName("secret")[0]
  );
document.querySelectorAll("li")[1].innerText = "Huffles";
document.querySelectorAll("li")[1].className = "Owl";

document.querySelectorAll("li")[1].remove();
document
  .querySelector("div")
  .insertBefore(document.createElement("h4"), document.querySelector("ul"));
document.querySelector("h4").innerText = "Huffles";
document.querySelector("h4").className = "Owl";

//Year6
const secrets = document.querySelectorAll(".secret");
for (const x of secrets) {
  setTimeout(function () {
    return (x.style.display = "none");
  }, 2000);
}
for (const x of secrets) {
  setTimeout(function () {
    return (x.style.display = "block");
  }, 5000);
}

document.querySelector("li.Owl").classList.add("cabbage");

document.querySelector("li.Owl").classList.remove("cabbage");

//Year7
document.querySelector("h5").innerText = "Fall 2018";
listOfItems.reverse();
for (const x of listOfItems) {
  document
    .querySelector("ul")
    .insertBefore(
      document.createElement("li"),
      document.querySelectorAll("li")[0]
    );
  document.querySelectorAll("li")[0].innerText = x;
}

document.querySelector("ul").setAttribute("storage", "chest");

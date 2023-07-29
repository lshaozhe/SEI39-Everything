///////////////////////////////////////////////
// == Year 1 == //
///////////////////////////////////////////////

//

// creating container variable
const container = document.querySelector("#container");
// console.log(container);
const h1 = document.createElement("h1");
// console.log(h1);

// add text into h1
h1.innerText = "Hogwarts";

// appending h1 into container
container.appendChild(h1);

///////////////////////////////////////////////
// == Year 2 == //
///////////////////////////////////////////////

// add h2 element with your name
const h2 = document.createElement("h2");
h2.innerText = "Stephanie";
container.appendChild(h2);

// add h3 element with your house
const h3 = document.createElement("h3");
h3.innerText = "Slytherin";
container.appendChild(h3);

// add h4 element with your pet's name
const h4 = document.createElement("h4");
h4.classList.add("cat"); // add a pet type as a class to h4
h4.innerText = "Oops"; // add pet name
container.appendChild(h4);

// add h4 element with your wand
h4_2 = document.createElement("h4");
h4_2.innerText = "Holly Wand with Unicorn Hair Core";
container.appendChild(h4_2);

///////////////////////////////////////////////
// == Year 3 == //
///////////////////////////////////////////////

const ul = document.createElement("ul");
ul.setAttribute("storage", "trunk");
// console.log(storageList);s

const item1 = document.createElement("li");
item1.innerText = "butter beer";

const item2 = document.createElement("li");
item2.innerText = "invisibility cloak";
item2.classList.add("secret");

const item3 = document.createElement("li");
item3.innerText = "magic map";
item3.classList.add("secret");

const item4 = document.createElement("li");
item4.innerText = "time turner";
item4.classList.add("secret");

const item5 = document.createElement("li");
item5.innerText = "leash";
item5.classList.add("cat");

const item6 = document.createElement("li");
item6.innerText = "Bertie Bott's Every Flavor [Jelly] Beans";

container.appendChild(ul);
ul.appendChild(item1);
ul.appendChild(item2);
ul.appendChild(item3);
ul.appendChild(item4);
ul.appendChild(item5);
ul.appendChild(item6);

// Can use a function and for-loop to make this dry

///////////////////////////////////////////////
// == Year 4 == //
///////////////////////////////////////////////

const classSchedule = document.createElement("h5");
classSchedule.innerText = "Spring 2017";
container.appendChild(classSchedule);

// make a table
const table = document.createElement("table");
const tr1 = document.createElement("tr");
const th1 = document.createElement("th");
const th2 = document.createElement("th");

th1.innerText = "Day";
th2.innerText = "Classes";
tr1.appendChild(th1);
tr1.appendChild(th2);
table.append(tr1);

//
const tr2 = document.createElement("tr");
const td1 = document.createElement("td");
const td2 = document.createElement("td");

td1.innerText = "Monday";
td2.innerText = "Herbology, Divination";
tr2.appendChild(td1);
tr2.appendChild(td2);
table.append(tr2);

const tr3 = document.createElement("tr");
table.append(tr3);
const tr4 = document.createElement("tr");
table.append(tr4);
const tr5 = document.createElement("tr");
table.append(tr5);
const tr6 = document.createElement("tr");
table.append(tr6);

container.appendChild(table);

///////////////////////////////////////////////
// == Year 5 == //
///////////////////////////////////////////////

// remove wand
h4_2.classList.add("wand");
wand = document.querySelector(".wand");
// console.log(wand);
wand.remove();

// remove butter beer
item1.remove();

// add new wand after pet
newWand = document.createElement("h4");
newWand.innerText = "Molly Wand with Apricot Core";
h4.insertAdjacentElement("afterend", newWand);

// make new wand stand out by adding color
newWand.style.color = "indigo";

// remove pet only and put it somewhere else in HTML (leash should remain in the same location)
pet = document.querySelector(".cat");
// console.log(pet);
pet.style.display = "none";

// put pet back in original place
pet.style.display = "block";

///////////////////////////////////////////////
// == Year 6 == //
///////////////////////////////////////////////

// hide all your belongings with a class of secret
secretItems = document.querySelectorAll(".secret"); // returns node list
// console.log(secretItems);

// create function for hiding
const hideSecret = () => {
  for (let i = 0; i < secretItems.length; i++) {
    secretItems[i].style.display = "none";
  }
};

hideSecret();

// create function for showing hidden items
const showSecret = () => {
  for (let i = 0; i < secretItems.length; i++) {
    secretItems[i].style.display = "block";
    console.log(secretItems[i].style.display);
  }
};

// create function for delay
const delayShowing = () => {
  setTimeout(showSecret, 2000);
};

delayShowing();

item5.classList.add("cabbage"); // realised I should use name of item to create the variable name

item5.classList.remove("cabbage");

///////////////////////////////////////////////
// == Year 7 == //
///////////////////////////////////////////////

// update your class schedule to read 'Fall 2018'
classSchedule.innerText = "Fall 2018";

// buy more butter beer, append as first list item
const butterBeer = document.createElement("li");
butterBeer.innerText = "butter beer";
ul.prepend(butterBeer);

// new storage container with property = chest, replace unordered list
const itemsInsideTrunk = document.querySelectorAll("li");
// console.log(itemsInsideTrunk);
const newStorage = document.createElement("ul");
newStorage.setAttribute("storage", "chest");
// syntax: targetVariable.parentNode.insertBefore(newElementVariable, targetVariable)
h5.container.insertBefore(newStorage, h5);

function moveItemsFromTrunkToChest() {
  const chest = document.querySelector("[storage = chest]");
  for (let i = 0; i < itemsInsideTrunk.length; i++) {
    chest.append(itemsInsideTrunk[i]);
  }
}

moveItemsFromTrunkToChest();

const trunk = document.querySelector("[storage = trunk]");
trunk.remove();

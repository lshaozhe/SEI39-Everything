"use strict";

const container = document.querySelector("#container");
console.log(container);

const h1 = document.createElement('h1');
h1.innerText = "Hogwarts";
//not shown yet, bcs still in memory. need to append to one of the element first.
container.appendChild(h1);

const h2 = document.createElement('h2');
h2.innerText = "Andika Hadisaputra";

const h3 = document.createElement('h3');
h3.innerText = "Hufflepuff";

const h4Pet = document.createElement('h4');
h4Pet.innerText = "Mozart";
h4Pet.classList.add('cat');

const h4Wand = document.createElement('h4');
h4Wand.innerText = "Elder Wand";

container.appendChild(h1);

container.appendChild(h2);

container.appendChild(h3);

container.appendChild(h4Pet);

container.appendChild(h4Wand);

const trunkList = document.createElement('ul');
trunkList.setAttribute('storage', 'trunk');
trunkList.setAttribute('id', 'theList');
const listItem = ['butter beer', 'invisibility cloak', 'magic map', 'time turner', 'leash', "Bertie Bott's Every Flavor [Jelly] Beans"];
for (let item of listItem) {
  const li = document.createElement('li');
  li.innerHTML = item;
  trunkList.appendChild(li);
  if (item === 'invisibility cloak' || item === 'magic map' || item === 'time turner') {
    li.setAttribute('class', 'secret');
  }
  if (item === 'leash') {
    li.setAttribute('class', 'cat');
  }
}

container.appendChild(trunkList);

const table = document.createElement('table');
const h5 = document.createElement('h5');
h5.innerText = 'Spring 2017';
container.appendChild(h5);
container.appendChild(table);

const row1 = document.createElement('tr');
const heading1 = document.createElement('th');
heading1.innerText = 'Day';
const heading2 = document.createElement('th');
heading2.innerText = 'Classes';
row1.appendChild(heading1);
row1.appendChild(heading2);

table.appendChild(row1);


const row2 = document.createElement('tr');
const row2Data1 = document.createElement('td');
row2Data1.innerText = 'Monday';
const row2Data2 = document.createElement('td');
row2Data2.innerText = 'Charms, Quidditch practice, History of Magic';
row2.appendChild(row2Data1);
row2.appendChild(row2Data2);

table.appendChild(row2);

const row3 = document.createElement('tr');
const row3Data1 = document.createElement('td');
row3Data1.innerText = 'Tuesday';
const row3Data2 = document.createElement('td');
row3Data2.innerText = 'Charms, Quidditch practice, History of Magic';
row3.appendChild(row3Data1);
row3.appendChild(row3Data2);
table.appendChild(row3);


const row4 = document.createElement('tr');
const row4Data1 = document.createElement('td');
row4Data1.innerText = 'Wednesday';
const row4Data2 = document.createElement('td');
row4Data2.innerText = 'Charms, Quidditch practice, History of Magic';
row4.appendChild(row4Data1);
row4.appendChild(row4Data2);

table.appendChild(row4);


const row5 = document.createElement('tr');
const row5Data1 = document.createElement('td');
row5Data1.innerText = 'Thursday';
const row5Data2 = document.createElement('td');
row5Data2.innerText = 'Charms, Quidditch practice, History of Magic';
row5.appendChild(row5Data1);
row5.appendChild(row5Data2);

table.appendChild(row5);


const row6 = document.createElement('tr');
const row6Data1 = document.createElement('td');
row6Data1.innerText = 'Friday';
const row6Data2 = document.createElement('td');
row6Data2.innerText = 'Charms, Quidditch practice, History of Magic';
row6.appendChild(row6Data1);
row6.appendChild(row6Data2);

table.appendChild(row6);


// YEAR 5
h4Wand.remove();

document.querySelectorAll("#theList > li")[0].remove();

const h4NewWand = document.createElement('h4');
h4NewWand.innerText = "Super Elder Wand";
container.insertBefore(h4NewWand, container.children[4]);

h4NewWand.style.color = "indigo";

container.insertBefore(h4Pet, container.children[6]);

h4Pet.remove();
container.insertBefore(h4Pet, container.children[3]);

//Year 6

const allSecretItem = document.querySelectorAll('.secret');
// h4Pet.style.visibility = 'hidden';
const hideSecret = () => {
  for (let item of allSecretItem) {
    item.style.display = 'none';
  }
}

// hideSecret();

const showSecret = () => {
  for (let item of allSecretItem) {
    item.style.display = '';
  }
}
// setTimeout("showSecret()", 2000);

document.querySelector("li.cat").classList.add("cabbage");

document.querySelector("li.cat").classList.remove("cabbage");

// YEAR 7

h5.innerHTML = 'Fall 2018';
const newBeer = document.createElement('li');
newBeer.innerText = "butter beer";
trunkList.insertBefore(newBeer, trunkList.children[0]);

trunkList.setAttribute('storage', 'chest');
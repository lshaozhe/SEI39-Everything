//Y1
const container = document.querySelector("#container");
console.log(container);
const school = document.createElement("h1");
school.innerText = "Hogwarts";
container.appendChild(school);

//Y2
const myName = document.createElement("h2");
myName.innerText = "Andre";
const myHouse = document.createElement("h3");
myHouse.innerText = "Gryffindor";
const petName = document.createElement("h4");
petName.innerText = "Tod";
petName.setAttribute("class", "toad");
const wand = document.createElement("h4");
wand.innerText = "elder wand";
container.appendChild(myName);
container.appendChild(myHouse);
container.appendChild(petName);
container.appendChild(wand);

//Y3
const list = document.createElement("ul");
list.setAttribute("storage", "trunk");
const butterBeer = document.createElement("li");
butterBeer.innerText = "butter beer";
const invisibilityCloak = document.createElement("li");
invisibilityCloak.innerText = "invisibility cloak";
invisibilityCloak.setAttribute("class", "secret");
const magicMap = document.createElement("li");
magicMap.innerText = "magic map";
magicMap.setAttribute("class", "secret");
const timeTurner = document.createElement("li");
timeTurner.innerText = "time turner";
timeTurner.setAttribute("class", "secret");
const leash = document.createElement("li");
leash.innerText = "leash";
leash.setAttribute("class", "toad");
const jellyBeans = document.createElement("li");
jellyBeans.innerText = "Bertie Bott's Every Flavor [Jelly] Beans.";
list.appendChild(butterBeer);
list.appendChild(invisibilityCloak);
list.appendChild(magicMap);
list.appendChild(timeTurner);
list.appendChild(leash);
list.appendChild(jellyBeans);
container.appendChild(list);

//Y4
const period = document.createElement("h5");
period.innerText = "Spring 2017";
container.appendChild(period);
const table = document.createElement("table");
const tableHead = document.createElement("thead");
const tableHead1 = document.createElement("th");
tableHead1.innerText = "Day";
const tableHead2 = document.createElement("th");
tableHead2.innerText = "Classes";
tableHead.appendChild(tableHead1);
tableHead.appendChild(tableHead2);
table.appendChild(tableHead);

const tableRow1 = document.createElement("tr");
const tableData1 = document.createElement("td");
tableData1.innerText = "Monday";
const tableData11 = document.createElement("td");
tableData11.innerText = "Herbology";
tableRow1.appendChild(tableData1);
tableRow1.appendChild(tableData11);
table.appendChild(tableRow1);

const tableRow2 = document.createElement("tr");
const tableData2 = document.createElement("td");
tableData2.innerText = "Tuesday";
const tableData22 = document.createElement("td");
tableData22.innerText = "Divination";
tableRow2.appendChild(tableData2);
tableRow2.appendChild(tableData22);
table.appendChild(tableRow2);

const tableRow3 = document.createElement("tr");
const tableData3 = document.createElement("td");
tableData3.innerText = "Wednesday";
const tableData33 = document.createElement("td");
tableData33.innerText = "History of Magic";
tableRow3.appendChild(tableData3);
tableRow3.appendChild(tableData33);
table.appendChild(tableRow3);

const tableRow4 = document.createElement("tr");
const tableData4 = document.createElement("td");
tableData4.innerText = "Thursday";
const tableData44 = document.createElement("td");
tableData44.innerText = "Charms";
tableRow4.appendChild(tableData4);
tableRow4.appendChild(tableData44);
table.appendChild(tableRow4);

const tableRow5 = document.createElement("tr");
const tableData5 = document.createElement("td");
tableData5.innerText = "Friday";
const tableData55 = document.createElement("td");
tableData55.innerText = "Potions";
tableRow5.appendChild(tableData5);
tableRow5.appendChild(tableData55);
table.appendChild(tableRow5);
container.append(table);

//Y5
wand.remove();
butterBeer.remove();
const newWand = document.createElement("h4");
newWand.innerText = "Snake Wood";
container.insertBefore(newWand, container.children[4]);
newWand.style.color = "indigo";
container.insertBefore(petName, container.children[6]);
container.insertBefore(petName, container.children[3]);

//Y6
const secrets = document.getElementsByClassName("secret");
for (const items of secrets) {
  items.style.display = "none";
}
const show = () => {
  console.log("shows");
  for (const items of secrets) {
    items.style.display = "list-item";
  }
};
setTimeout(show, 2000);
leash.classList.add("cabbage");
leash.classList.remove("cabbage");

//Y7
period.innerText = "Fall 2018";
list.insertBefore(butterBeer, list.children[0]);
list.setAttribute("storage", "chest");

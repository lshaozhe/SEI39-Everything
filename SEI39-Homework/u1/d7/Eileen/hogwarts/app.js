//Year 1
const container = document.querySelector("#container");
// console.log(container);

const h1 = document.createElement("h1");
h1.innerText = "Hogwarts";
document.querySelector("#container").appendChild(h1);
// console.log(h1);

//Year 2
const h2 = document.createElement("h2");
h2.innerText = "Eileen";
document.querySelector("#container").appendChild(h2);

const h3 = document.createElement("h3");
h3.innerText = "Gryffindor";
document.querySelector("#container").appendChild(h3);

const h4 = document.createElement("h4");
h4.setAttribute("class", "dog");
h4.innerText = "Bubbles";
document.querySelector("#container").append(h4);

const h4wand = document.createElement("h4");
h4wand.setAttribute("class", "dog");
h4wand.innerText = "Holly Wand with Unicorn Hair Core";
document.querySelector("#container").appendChild(h4wand);

//Year 3
const list = document.createElement("ul");
list.setAttribute("storage", "trunk");
document.querySelector("#container").appendChild(list);

const li1 = document.createElement("li");
li1.innerText = "butter beer";
document.querySelector("ul").appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "invisibility cloak";
li2.setAttribute("class", "secret");
document.querySelector("ul").appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "magic map";
li3.setAttribute("class", "secret");
document.querySelector("ul").appendChild(li3);

const li4 = document.createElement("li");
li4.innerText = "time turner";
li4.setAttribute("class", "secret");
document.querySelector("ul").appendChild(li4);

const li5 = document.createElement("li");
li5.innerText = "leash";
li5.setAttribute("class", "dog");
document.querySelector("ul").appendChild(li5);

const li6 = document.createElement("li");
li6.innerText = "Bertie Bott's Every Flavor [Jelly] Beans";
document.querySelector("ul").appendChild(li6);

// Year 4
const h5 = document.createElement("h5");
h5.innerText = "Spring 2017";
document.querySelector("#container").appendChild(h5);

const table = document.createElement("table");
document.querySelector("#container").appendChild(table);

const thead = document.createElement("thead");
document.querySelector("table").appendChild(thead);

const th1 = document.createElement("th");
th1.innerText = "Day";
document.querySelector("thead").appendChild(th1);

const th2 = document.createElement("th");
th2.innerText = "Classes";
document.querySelector("thead").appendChild(th2);

//Monday
const tr = document.createElement("tr");
tr.setAttribute("class", "Monday");
document.querySelector("table").appendChild(tr);

const td1 = document.createElement("td");
td1.innerText = "Monday";
document.querySelector(".Monday").appendChild(td1);

const td2 = document.createElement("td");
td2.innerText = "Herbology, Divination";
document.querySelector(".Monday").appendChild(td2);

//Tuesday
const tr1 = document.createElement("tr");
tr1.setAttribute("class", "Tuesday");
document.querySelector("table").appendChild(tr1);

const td3 = document.createElement("td");
td3.innerText = "Tuesday";
document.querySelector(".Tuesday").appendChild(td3);

const td4 = document.createElement("td");
td4.innerText = "History of Magic";
document.querySelector(".Tuesday").appendChild(td4);

//Wednesday
const tr2 = document.createElement("tr");
tr2.setAttribute("class", "Wednesday");
document.querySelector("table").appendChild(tr2);

const td5 = document.createElement("td");
td5.innerText = "Wednesday";
document.querySelector(".Wednesday").appendChild(td5);

const td6 = document.createElement("td");
td6.innerText = "History of Magic";
document.querySelector(".Wednesday").appendChild(td6);

//Thursday
const tr3 = document.createElement("tr");
tr3.setAttribute("class", "Thursday");
document.querySelector("table").appendChild(tr3);

const td7 = document.createElement("td");
td7.innerText = "Thursday";
document.querySelector(".Thursday").appendChild(td7);

const td8 = document.createElement("td");
td8.innerText = "Charms, Potions";
document.querySelector(".Thursday").appendChild(td8);

//Friday
const tr4 = document.createElement("tr");
tr4.setAttribute("class", "Friday");
document.querySelector("table").appendChild(tr4);

const td9 = document.createElement("td");
td9.innerText = "Friday";
document.querySelector(".Friday").appendChild(td9);

const td10 = document.createElement("td");
td10.innerText = "Transfiguration, Defense Against the Dark Arts";
document.querySelector(".Friday").appendChild(td10);

//Year 5
h4wand.remove();
li1.remove();
h4wand.innerText =
  "The Elder Wand: The most powerful wand ever created, is one of three objects that make up the Deathly Hallows, including the Cloak of Invisibility and the Resurrection Stone";
h4wand.style.color = "indigo";
h4.insertAdjacentElement("afterend", h4wand);
h4.style.display = "none";
h4.style.display = "block";

//Year 6
const show = () => {
  for (let element of document.querySelectorAll(".secret")) {
    element.style.display = "block";
  }
};
for (let element of document.querySelectorAll(".secret")) {
  element.style.display = "none";
}
setTimeout(show, 2000);

li5.classList.add("cabbage");
li5.classList.remove("cabbage");

//Year 7
h5.innerText = "Fall 2018";

const butterbeer = document.createElement("li");
butterbeer.innerText = "Butter beer";
document.querySelector("ul").insertAdjacentElement("afterBegin", butterbeer);

list.setAttribute("storage", "chest");

"use strict";

///////////////////////
// Year 1
const container = document.querySelector("#container");
// console.log(container);

const h1 = document.createElement("h1");
// console.log(h1);
h1.innerText = "Hogwarts";

container.appendChild(h1);

///////////////////////
// Year 2
const h2 = document.createElement("h2");
h2.innerText = "Harry Potter";

h1.after(h2);

const h3 = document.createElement("h3");
h3.innerText = "Ravenclaw";

h2.after(h3);

class Pet {
  constructor(name, owner, type) {
    (this.name = name), (this.owner = owner), (this.type = type);
  }
}

const myPet = new Pet("Meep", "Harry Potter", "mouse");
// console.log(myPet);

const h4Pet = document.createElement("h4");
h4Pet.innerText = myPet.name;
h4Pet.classList.add("my-pet");
h3.after(h4Pet);

const h4Wand = document.createElement("h4");
h4Wand.innerText = "Hawthorn Wand with Dragon Heartstring Core";
h4Wand.classList.add("my-wand");
h4Pet.after(h4Wand);

///////////////////////
// Year 3

const objectList = document.createElement("ul");
objectList.setAttribute("storage", "trunk");
container.appendChild(objectList);

const butterBeer = document.createElement("li");
butterBeer.innerText = "butter beer";

objectList.appendChild(butterBeer);

const invisCloak = document.createElement("li");
invisCloak.innerText = "invisibility cloak";
invisCloak.classList.add("secret");

objectList.appendChild(invisCloak);

const magicMap = document.createElement("li");
magicMap.innerText = "magic map";
magicMap.classList.add("secret");

objectList.appendChild(magicMap);

const timeTurner = document.createElement("li");
timeTurner.innerText = "time turner";
timeTurner.classList.add("secret");

objectList.appendChild(timeTurner);

const leash = document.createElement("li");
leash.innerText = "leash";
leash.classList.add("my-pet");

objectList.appendChild(leash);

const jellyBeans = document.createElement("li");
jellyBeans.innerText = "Bertie Bott's Every Flavor [Jelly] Beans";

objectList.appendChild(jellyBeans);

////////////////////
// Year 4
const h5 = document.createElement("h5");
h5.innerText = "Spring 2017";

objectList.after(h5);

const table = document.createElement("table");
const thead = document.createElement("thead");
const thOne = document.createElement("th");
const thTwo = document.createElement("th");
const trMon = document.createElement("tr");
const tdA = document.createElement("td");
const tdB = document.createElement("td");
const trTues = document.createElement("tr");
const tdC = document.createElement("td");
const tdD = document.createElement("td");
const trWed = document.createElement("tr");
const tdE = document.createElement("td");
const tdF = document.createElement("td");
const trThurs = document.createElement("tr");
const tdG = document.createElement("td");
const tdH = document.createElement("td");
const trFri = document.createElement("tr");
const tdI = document.createElement("td");
const tdJ = document.createElement("td");

h5.after(table);
table.appendChild(thead);
thead.appendChild(thOne);
thead.appendChild(thTwo);
thOne.innerText = "Day";
thTwo.innerText = "Classes";
thead.appendChild(trMon);
trMon.appendChild(tdA);
trMon.appendChild(tdB);
tdA.innerText = "Monday";
tdB.innerText = "Charms, Potions, Transfiguration";
thead.appendChild(trTues);
trTues.appendChild(tdC);
trTues.appendChild(tdD);
tdC.innerText = "Tuesday";
tdD.innerText = "Defense Against the Dark Arts, Quidditch practice";
thead.appendChild(trWed);
trWed.appendChild(tdE);
trWed.appendChild(tdF);
tdE.innerText = "Wednesday";
tdF.innerText = "Potions, History of Magic, Divination";
thead.appendChild(trThurs);
trThurs.appendChild(tdG);
trThurs.appendChild(tdH);
tdG.innerText = "Thursday";
tdH.innerText = "Charms, Herbology, Defense Against the Dark Arts";
thead.appendChild(trFri);
trFri.appendChild(tdI);
trFri.appendChild(tdJ);
tdI.innerText = "Friday";
tdJ.innerText = "Transfiguration, History of Magic, Divination";

////////////////////////
// Year 5
h4Wand.remove();
document.querySelectorAll("li")[0].remove();

h4Wand.innerText = "Wand of Eclipses";
h4Pet.after(h4Wand);

h4Wand.style.color = "indigo";

h4Pet.remove();
table.after(h4Pet);
h4Pet.remove();
h3.after(h4Pet);

////////////////////////
// Year 6
const secretList = document.querySelectorAll(".secret");

const hideSecret = () => {
  for (let i = 0; i < secretList.length; i++) {
    secretList[i].style.display = "none";
  }
};

hideSecret();

const showSecret = () => {
  for (let i = 0; i < secretList.length; i++) {
    secretList[i].style.display = "block";
  }
};

const revealSecret = () => {
  setTimeout(showSecret, 2000);
};

revealSecret();

leash.classList.add("cabbage");
leash.classList.remove("cabbage");

//////////////////
// Year 7

h5.innerText = "Fall 2018";

objectList.prepend(butterBeer);

objectList.setAttribute("storage", "chest");

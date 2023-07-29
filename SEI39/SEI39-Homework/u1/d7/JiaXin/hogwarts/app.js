/*if (typeof jQuery == "undefined") {
  console.log("oops! I still have to link my jQuery properly!");
} else {
  console.log("I did it! I linked jQuery and this js file!");
}*/
const contaniner = document.querySelector("#container");
console.log(contaniner);

const h1 = document.createElement("h1");
h1.innerText = "Hogwarts";
document.querySelector("#container").appendChild(h1);

//console.log(h1);
const h2 = document.createElement("h2");
h2.innerText = "Jia Xin";
document.querySelector("#container").appendChild(h2);

const h3 = document.createElement("h3");
h3.innerText = "Ravenclaw";
document.querySelector("#container").appendChild(h3);

const h4 = document.createElement("h4");
h4.setAttribute("class", "Dog");
h4.innerText = "Junior";
document.querySelector("#container").appendChild(h4);

const h5 = document.createElement("h4");
h5.innerText = "Holly Wand with Unicorn Hair Core";
document.querySelector("#container").appendChild(h5);

const ul = document.createElement("ul");
ul.setAttribute("storage", "trunk");
document.querySelector("#container").appendChild(ul);

const l1 = document.createElement("li");
l1.innerText = "butter beer";
document.querySelector("ul").appendChild(l1);

const l2 = document.createElement("li");
l2.setAttribute("class", "secret");
l2.innerText = "invisibility cloak";
document.querySelector("ul").appendChild(l2);

const l3 = document.createElement("li");
l3.setAttribute("class", "secret");
l3.innerText = "magic map";
document.querySelector("ul").appendChild(l3);

const l4 = document.createElement("li");
l4.setAttribute("class", "secret");
l4.innerText = "time turner";
document.querySelector("ul").appendChild(l4);

const l5 = document.createElement("li");
l5.setAttribute("class", "Dog");
l5.innerText = "leash";
document.querySelector("ul").appendChild(l5);

const l6 = document.createElement("li");
l6.innerText = "Bertie Bott's Every Flavor [Jelly] Beans.";
document.querySelector("ul").appendChild(l6);

const p = document.createElement("p");
p.innerText = "Simple table with header";
document.querySelector("#container").appendChild(p);

const h7 = document.createElement("h7");
h7.innerText = "Spring 2017";
document.querySelector("#container").appendChild(h7);

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

const tr = document.createElement("tr");
document.querySelector("table").appendChild(tr);

const td1 = document.createElement("td");
td1.innerText = "Monday";
document.querySelector("tr").appendChild(td1);

const td1A = document.createElement("td");
td1A.innerText = "Transfiguration";
document.querySelector("tr").appendChild(td1A);

const tr2 = document.createElement("tr");
document.querySelector("table").appendChild(tr2);

const td2 = document.createElement("td");
td2.innerText = "Tuesday";
tr2.appendChild(td2);

const td2A = document.createElement("td");
td2A.innerText = "Charms";
tr2.appendChild(td2A);

const tr3 = document.createElement("tr");
document.querySelector("table").appendChild(tr3);

const td3 = document.createElement("td");
td3.innerText = "Wednesday";
tr3.appendChild(td3);

const td3A = document.createElement("td");
td3A.innerText = "Potions";
tr3.appendChild(td3A);

const tr4 = document.createElement("tr");
document.querySelector("table").appendChild(tr4);

const td4 = document.createElement("td");
td4.innerText = "Thursday";
tr4.appendChild(td4);

const td4A = document.createElement("td");
td4A.innerText = "History of Magic";
tr4.appendChild(td4A);

const tr5 = document.createElement("tr");
document.querySelector("table").appendChild(tr5);

const td5 = document.createElement("td");
td5.innerText = "Friday";
tr5.appendChild(td5);

const td5A = document.createElement("td");
td5A.innerText = "Defense Against the Dark Arts";
tr5.appendChild(td5A);

h5.remove();
l1.remove();
h5.innerText = "Yew Wand";
h4.insertAdjacentElement("afterend", h5);

h5.style.color = "darkgreen";
/*
h4.remove();
h3.insertAdjacentElement("afterend", h4);
*/
h4.style.display = "none";
h4.style.display = "block";

function secerthidden(classname, displayState) {
  console.log(displayState);
  const allElementOnSecert = document.getElementsByClassName(classname);
  for (let i = 0; i < allElementOnSecert.length; i++) {
    allElementOnSecert[i].style.visibility = displayState;
  }
}
console.log(secerthidden("secret", "hidden"));
// function v

// const showed = secerthidden("secret", "visible");
const show = () => secerthidden("secret", "visible");
setTimeout(show, 2000);

l5.classList.add("cabbage");

l5.classList.remove("cabbage");

h7.remove();
h7.innerText = "Fall 2018";
p.insertAdjacentElement("afterend", h7);

const l7 = document.createElement("li");
l7.innerText = "Butter beer";
l2.insertAdjacentElement("beforebegin", l7);

ul.setAttribute("storage", "chest");

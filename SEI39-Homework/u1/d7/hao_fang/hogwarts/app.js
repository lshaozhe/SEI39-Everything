// =======
// Year 1
// =======
const h1 = document.createElement("h1");
h1.innerText = "this is a h1";

const container = document.querySelector("#container");
container.appendChild(h1);

// =======
// Year 2
// =======
const h2 = document.createElement("h2");
h2.innerText = "Hao Fang";
container.appendChild(h2);

const h3 = document.createElement("h3");
h3.innerText = "Hufflepuff";
container.appendChild(h3);

const h4 = document.createElement("h4");
h4.setAttribute("class", "dog");
h4.innerText = "Haru";
container.appendChild(h4);

const h4_2 = document.createElement("h4");
h4_2.innerText = "Wand";
container.appendChild(h4_2);

// =======
// Year 3
// =======
const ul = document.createElement("ul");
ul.setAttribute("storage", "trunk");
container.appendChild(ul);

const itemArr = [
  "butter beer",
  "invisibility cloak",
  "magic map",
  "time turner",
  "leash",
  "Bertie Bott's Every Flavor[Jelly] Beans",
];

for (let i = 0; i < itemArr.length; i++) {
  const li = document.createElement("li");
  li.innerText = itemArr[i];

  if (i >= 1 && i <= 3) {
    li.setAttribute("class", "secret");
  }
  if (i === 4) {
    li.setAttribute("class", "dog");
  }
  ul.appendChild(li);
}

// =======
// Year 4
// =======
const h5 = document.createElement("h5");
h5.innerText = "Spring 2017";

const body = document.querySelector("body");
body.appendChild(h5);

const table = document.createElement("table");
body.appendChild(table);

const thead = document.createElement("thead");
table.appendChild(thead);

const th1 = document.createElement("th");
th1.innerText = "Day";
thead.appendChild(th1);

const th2 = document.createElement("th");
th2.innerText = "Classes";
thead.appendChild(th2);

const tbody = document.createElement("tbody");
table.appendChild(tbody);

daysArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
lessonsArr = ["History", "Economics", "Literature", "Math", "English"];

for (let i = 0; i <= 4; i++) {
  const tr = document.createElement("tr");
  tbody.appendChild(tr);

  const td1 = document.createElement("td");
  td1.innerText = daysArr[i];
  tr.appendChild(td1);

  const td2 = document.createElement("td");
  td2.innerText = lessonsArr[i];
  tr.appendChild(td2);
}

// =======
// Year 5
// =======
h4_2.remove();
document.querySelector("li").remove();

const h4_3 = document.createElement("h4");
h4_3.innerText = "New Wand";

h4.setAttribute("id", "haruDog");
const haruDog = document.querySelector("#haruDog");
haruDog.appendChild(h4_3);

h4_3.style.color = "indigo";
h4.remove();
container.appendChild(h4);

h3.setAttribute("id", "hufflepuff");
const hufflepuff = document.querySelector("#hufflepuff");
hufflepuff.appendChild(h4);

// =======
// Year 6
// =======
function showSecret() {
  allSecret.style.display = "block";
}

for (let i = 0; i < 3; i++) {
  document.querySelectorAll(".secret")[i].style.display = "none";
}

for (let i = 0; i < 3; i++) {
  setTimeout(function showSecret() {
    document.querySelectorAll(".secret")[i].style.display = "block";
  }, 2000);
}

const leash = document.querySelectorAll("li")[3];
leash.className += " cabbage";
leash.className -= " cabbage";

// =======
// Year 7
// =======
h5.innerText = "Fall 2018";

const butterBeer = document.createElement("li");
butterBeer.innerText = "Butter beer";
ul.prepend(butterBeer);

ul.setAttribute("storage", "chest");

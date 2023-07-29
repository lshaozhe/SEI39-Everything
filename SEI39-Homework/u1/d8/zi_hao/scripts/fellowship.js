// console.log("LINKED");

// Dramatis Personae
const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took",
];

const buddies = ["Gandalf the Grey", "Legolas", "Gimli", "Strider", "Boromir"];

const baddies = ["Sauron", "Saruman", "The Uruk-hai", "Orcs"];

// Our Setting
const lands = ["The-Shire", "Rivendell", "Mordor"];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {
  const middleEarth = document.createElement("section");
  middleEarth.id = "middle-earth";
  document.querySelector("body").append(middleEarth);
  for (let i = 0; i < lands.length; i++) {
    const landArticle = document.createElement("article");
    landArticle.id = lands[i];
    middleEarth.append(landArticle);
    const landH1 = document.createElement("h1");
    landH1.innerText = lands[i];
    landArticle.append(landH1);
  }

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!
  // console.log("making Middle Earth");
  // console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth

  // 2. append the section to the body of the DOM.

  // 3. use a for loop to iterate over the lands array that does the following:

  //   3a. creates an article tag (there should be one for each land when the loop is done)

  //   3b. gives each land article an `id` tag of the corresponding land name

  //   3c. includes an h1 with the name of the land inside each land article

  //   3d. appends each land to the middle-earth section
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {
  const hobbitList = document.createElement("ul");
  for (let i = 0; i < hobbits.length; i++) {
    const hobbitInList = document.createElement("li");
    hobbitInList.innerText = hobbits[i];
    hobbitInList.className = "hobbit";
    hobbitList.append(hobbitInList);
    document.querySelector("#The-Shire").append(hobbitList);
  }

  // Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // 1. create a 'ul'
  // 2. make each hobbit an li element and append it to the 'ul' you just created
  // hint: use the given 'hobbits' array and use a for loop
  // 3. also, give each hobbit (`li`) a class of "hobbit"
  // 4. append the ul to the shire
  // hint: get 'The-Shire' by using its id
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {
  const ring = document.createElement("div");
  ring.id = "the-ring";
  document.querySelectorAll(".hobbit")[0].appendChild(ring);
  // 1. create an empty div with an id of 'the-ring'
  // 2. add the ring as a child of Frodo
  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .
  // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {
  const baddiesList = document.createElement("ul");
  for (let i = 0; i < baddies.length; i++) {
    const baddiesInList = document.createElement("li");
    baddiesInList.innerText = baddies[i];
    baddiesInList.className = "baddy";
    baddiesList.append(baddiesInList);
    document.querySelector("#Mordor").append(baddiesList);
  }

  // 1. display an unordered list of baddies in Mordor
  // 2. give each of the baddies a class of "baddy"
  // 3. remember to append the ul to Mordor
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {
  const aside = document.createElement("aside");
  document.querySelector("#middle-earth").append(aside);
  const buddiesList = document.createElement("ul");
  aside.appendChild(buddiesList);
  for (let i = 0; i < buddies.length; i++) {
    const buddiesInList = document.createElement("li");
    buddiesInList.innerText = buddies[i];
    buddiesInList.className = "buddy";
    buddiesList.append(buddiesInList);
  }
  // 1. create an aside tag and append it to middle-earth below mordor
  // 2. display an unordered list of buddies in the aside
  // 3. give each of the buddies a class of "buddy"
  // 4. don't forget to append them to the aside
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

const leaveTheShire = () => {
  const moveHobbits = document.querySelector("#The-Shire").childNodes;
  document.querySelector("#Rivendell").append(moveHobbits[1]);
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {
  const striderName = document.querySelectorAll(".buddy")[3];
  striderName.innerText = "Aragorn";
  // 1. change the buddy 'Strider' textnode to "Aragorn"
  // hint: You can get a list of elements by tag name, such as 'aside'
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {
  const fellowship = document.createElement("div");
  fellowship.id = "the-fellowship";
  document.querySelector("#middle-earth").append(fellowship);
  const hobbitsFellowship = document.querySelector("#Rivendell").childNodes;
  fellowship.append(hobbitsFellowship[1]);
  const buddiesFellowship = document.querySelector("aside").childNodes;
  fellowship.append(buddiesFellowship[0]);
  // 1. create a new div with an id 'the-fellowship'
  // 2. add an h1 with the text 'The Fellowship' to this new div
  // 3. append the fellowship to middle-earth
  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {
  const gandalfName = document.querySelectorAll(".buddy")[0];
  gandalfName.innerText = "Gandalf the White";
  gandalfName.classList.add("the-white");
  gandalfName.style.backgroundColor = "white";
  gandalfName.style.border = "1px solid gray";
  gandalfName.style.width = "50px";
  // gandalfName.style;
  // 1. change the 'Gandalf' text to 'Gandalf the White'
  // 2. add a class "the-white" to this element
  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {
  alert("The horn of Gondor has been blown!");
  const boromir = document.querySelectorAll(".buddy")[4];
  // boromir.classList.add("strikethrough");
  boromir.style.textDecoration = "line-through";
  document.querySelectorAll(".baddy")[2].remove();
  // 1. create a pop-up alert that the horn of gondor has been blown
  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  const frodo = document.querySelectorAll(".hobbit")[0];
  const sam = document.querySelectorAll(".hobbit")[1];
  document.querySelector("#Mordor").append(frodo);
  document.querySelector("#Mordor").append(sam);
  const mountDoom = document.createElement("div");
  mountDoom.id = "mount-doom";
  document.querySelector("#Mordor").append(mountDoom);

  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  // 2. add a div with an id of 'mount-doom' to Mordor
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {
  const gollum = document.createElement("div");
  gollum.id = "gollum";
  document.querySelector("#Mordor").append(gollum);
  gollum.append(document.querySelector("#the-ring"));
  document.querySelector("#mount-doom").append(gollum);

  // 1. Create a div with an id of 'gollum' and add it to Mordor
  // 2. Move the ring from Frodo and give it to Gollum
  // 3. Move Gollum into Mount Doom
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {
  document.querySelector("#gollum").remove();
  const baddiesList = document.querySelectorAll(".baddy");
  const hobbitsList = document.querySelectorAll(".hobbit");
  for (let i = 0; i < baddiesList.length; i++) {
    for (let j = 0; j < hobbitsList.length; j++) {
      baddiesList[i].remove();
      document.querySelector("#The-Shire").append(hobbitsList[j]);
    }
  }
  // 1. remove Gollum and the Ring from the DOM
  // 2. remove all the baddies from the DOM
  // 3. Move all the hobbits back to the shire
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

const runAll = () => {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBaddies();
  makeBuddies();
  leaveTheShire();
  beautifulStranger();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
  //pending chapter 4
};

$(() => {
  $("#1").on("click", runAll);
  $("#2").on("click", makeHobbits);
  $("#3").on("click", keepItSecretKeepItSafe);
  $("#4").on("click", makeBaddies);
  $("#5").on("click", makeBuddies);
  $("#6").on("click", leaveTheShire);
  $("#7").on("click", beautifulStranger);
  $("#8").on("click", forgeTheFellowShip);
  $("#9").on("click", theBalrog);
  $("#10").on("click", hornOfGondor);
  $("#11").on("click", itsDangerousToGoAlone);
  $("#12").on("click", weWantsIt);
  $("#13").on("click", thereAndBackAgain);
});

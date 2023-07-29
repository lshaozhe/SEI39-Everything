"use strict";

console.log("LINKED");

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
  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!
  console.log("making Middle Earth");
  // console.log("Trying to make middle earth.");
  // 1. create a section tag with an id of middle-earth
  // 2. append the section to the body of the DOM.
  // 3. use a for loop to iterate over the lands array that does the following:
  // 3a. creates an article tag (there should be one for each land when the loop is done)
  // 3b. gives each land article an `id` tag of the corresponding land name
  // 3c. includes an h1 with the name of the land inside each land article
  // 3d. appends each land to the middle-earth section

  const middleEarth = document.createElement("section");
  document.querySelector("body").appendChild(middleEarth);
  middleEarth.setAttribute("id", "middle-earth");

  for (let i = 0; i < lands.length; i++) {
    const landArticle = document.createElement("article");
    landArticle.setAttribute("id", lands[i]);
    const landName = document.createElement("h1");
    landName.innerText = lands[i];
    document.querySelector("#middle-earth").appendChild(landArticle);
    landArticle.appendChild(landName);
  }
};
// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {
  // Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // 1. create a 'ul'
  // 2. make each hobbit an li element and append it to the 'ul' you just created
  // hint: use the given 'hobbits' array and use a for loop
  // 3. also, give each hobbit (`li`) a class of "hobbit"
  // 4. append the ul to the shire
  // hint: get 'The-Shire' by using its id
  const shireList = document.createElement("ul");
  shireList.setAttribute("class", "hobbitsList");
  for (let i = 0; i < hobbits.length; i++) {
    const hobbitName = document.createElement("li");
    hobbitName.innerText = hobbits[i];
    hobbitName.setAttribute("class", "hobbit");
    shireList.append(hobbitName);
    document.querySelector("#The-Shire").appendChild(shireList);
  }
};
// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {
  // 1. create an empty div with an id of 'the-ring'
  // 2. add the ring as a child of Frodo
  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .
  // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly
  const div1 = document.createElement("div");
  div1.setAttribute("id", "the-ring");
  const hobbitList = document.getElementsByClassName("hobbit");
  hobbitList[0].appendChild(div1);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {
  // 1. display an unordered list of baddies in Mordor
  // 2. give each of the baddies a class of "baddy"
  // 3. remember to append the ul to Mordor

  const mordorList = document.createElement("ul");
  for (let i = 0; i < baddies.length; i++) {
    const makeBaddiesName = document.createElement("li");
    makeBaddiesName.innerText = baddies[i];
    makeBaddiesName.setAttribute("class", "baddy");
    mordorList.append(makeBaddiesName);
    document.querySelector("#Mordor").appendChild(mordorList);
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {
  // 1. create an aside tag and append it to middle-earth below mordor
  // 2. display an unordered list of buddies in the aside
  // 3. give each of the buddies a class of "buddy"
  // 4. don't forget to append them to the aside
  const asideTag = document.createElement("aside");
  document.querySelector("#middle-earth").append(asideTag);

  const buddiesList = document.createElement("ul");
  buddiesList.setAttribute("class", "buddiesList");
  for (let i = 0; i < buddies.length; i++) {
    const makeBuddiesName = document.createElement("li");
    makeBuddiesName.innerText = buddies[i];
    makeBuddiesName.setAttribute("class", "buddy");
    buddiesList.append(makeBuddiesName);
    asideTag.append(buddiesList);
  }
};
// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

const leaveTheShire = () => {
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
  const allHobbits = document.querySelector("#The-Shire").childNodes[1];
  document.querySelector("#Rivendell").append(allHobbits);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {
  // 1. change the buddy 'Strider' textnode to "Aragorn"
  // hint: You can get a list of elements by tag name, such as 'aside'
  const striderText = document.getElementsByClassName("buddy")[3];
  striderText.innerText = "Aragorn";
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {
  // 1. create a new div with an id 'the-fellowship'
  // 2. add an h1 with the text 'The Fellowship' to this new div
  // 3. append the fellowship to middle-earth
  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'

  const theFellowShip = document.createElement("div");
  theFellowShip.setAttribute("id", "the-fellowship");
  const theFellowShipTitle = document.createElement("h1");
  theFellowShipTitle.innerText = "The Fellowship";
  document.querySelector("#middle-earth").append(theFellowShip);
  document.querySelector("#the-fellowship").append(theFellowShipTitle);
  const allHobbits = document.querySelector("#Rivendell").childNodes[1];
  const allBuddies = document.querySelector("aside").childNodes[0];
  theFellowShip.append(allBuddies);
  theFellowShip.append(allHobbits);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {
  // 1. change the 'Gandalf' text to 'Gandalf the White'
  // 2. add a class "the-white" to this element
  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border
  const gandalfText = document.getElementsByClassName("buddy")[0];
  gandalfText.innerText = "Gandalf the White";
  gandalfText.setAttribute("class", "the-white");
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {
  // 1. create a pop-up alert that the horn of gondor has been blown
  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  alert("Horn of gondor has been blown!");
  const boromir = document.getElementsByClassName("buddy")[3];
  boromir.style.textDecoration = "line-through";
  document.getElementsByClassName("baddy")[2].remove();
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  // 2. add a div with an id of 'mount-doom' to Mordor
  const frodo = document.getElementsByClassName("hobbit")[0];
  document.querySelector("#Mordor").append(frodo);
  const sam = document.getElementsByClassName("hobbit")[1];
  document.querySelector("#Mordor").appendChild(sam);
  const mountDoom = document.createElement("div");
  mountDoom.setAttribute("id", "mount-doom");
  document.querySelector("#Mordor").appendChild(mountDoom);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {
  // 1. Create a div with an id of 'gollum' and add it to Mordor
  // 2. Move the ring from Frodo and give it to Gollum
  // 3. Move Gollum into Mount Doom
  const gollum = document.createElement("div");
  gollum.setAttribute("id", "gollum");
  document.querySelector("#mount-doom").append(gollum);
  const ring = document.getElementById("the-ring");
  gollum.append(ring);
  document.querySelector("#Mordor").append(gollum);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {
  // 1. remove Gollum and the Ring from the DOM
  // 2. remove all the baddies from the DOM
  // 3. Move all the hobbits back to the shire
  document.getElementById("gollum").remove();
  const allBaddies = document.getElementsByClassName("baddy");
  for (let i = 0; i < allBaddies.length; i++) {
    allBaddies[i].remove();
  }
  //^^The for loop above didnt remove allBaddies[1], "Saruman" even though when i console.log allBaddies[1], it logs the "Saruman"
  allBaddies[0].remove();
  const shire = document.getElementById("The-Shire");
  const allHobbits = document.getElementsByClassName("hobbit");
  for (let i = 0; i < allHobbits.length; i++) {
    shire.append(allHobbits[i]);
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {
  $("#1").on("click", makeMiddleEarth);
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

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
  // console.log("making Middle Earth");
  // console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth
  const middleEarth = document.createElement("section");
  middleEarth.id = "middle-earth";
  // 2. append the section to the body of the DOM.
  const body = document.querySelector("body");
  body.appendChild(middleEarth);
  // 3. use a for loop to iterate over the lands array that does the following:
  for (const items of lands) {
    //   3a. creates an article tag (there should be one for each land when the loop is done)
    const lands = document.createElement("article");
    //   3b. gives each land article an `id` tag of the corresponding land name
    lands.id = items;
    //   3c. includes an h1 with the name of the land inside each land article
    const name = document.createElement("h1");
    lands.appendChild(name);
    //   3d. appends each land to the middle-earth section
    middleEarth.appendChild(lands);
  }
};
makeMiddleEarth();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {
  // Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // 1. create a 'ul'
  const listOfHobbits = document.createElement("ul");
  // 2. make each hobbit an li element and append it to the 'ul' you just created
  // hint: use the given 'hobbits' array and use a for loop
  for (items of hobbits) {
    const hobbit = document.createElement("li");
    hobbit.innerText = items;
    hobbit.classList = "hobbit";
    listOfHobbits.appendChild(hobbit);
  }
  // 3. also, give each hobbit (`li`) a class of "hobbit" - done in step 2
  // 4. append the ul to the shire
  // hint: get 'The-Shire' by using its id
  const theShire = document.querySelector("#The-Shire");
  theShire.appendChild(listOfHobbits);
};
makeHobbits();
// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {
  // 1. create an empty div with an id of 'the-ring'
  const theRing = document.createElement("div");
  theRing.id = "the-ring";
  // 2. add the ring as a child of Frodo
  const frodo = document.querySelector("ul").childNodes[0];
  frodo.appendChild(theRing);
  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .
  // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly
};
keepItSecretKeepItSafe();
// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {
  // 1. display an unordered list of baddies in Mordor
  const listOfBaddies = document.createElement("ul");
  for (items of baddies) {
    const baddies = document.createElement("li");
    baddies.innerText = items;
    baddies.setAttribute("class", "baddy");
    listOfBaddies.appendChild(baddies);
  }
  // 2. give each of the baddies a class of "baddy" - done in 1
  // 3. remember to append the ul to Mordor
  document.querySelector("#Mordor").appendChild(listOfBaddies);
};
makeBaddies();
// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {
  // 1. create an aside tag and append it to middle-earth below mordor
  const aside = document.createElement("aside");
  document.querySelector("#middle-earth").appendChild(aside);
  // 2. display an unordered list of buddies in the aside
  const listOfBuddies = document.createElement("ul");
  for (items of buddies) {
    const buddy = document.createElement("li");
    buddy.innerText = items;
    buddy.setAttribute("class", "buddy");
    listOfBuddies.appendChild(buddy);
  }
  // 3. give each of the buddies a class of "buddy" - done in 2
  // 4. don't forget to append them to the aside
  aside.appendChild(listOfBuddies);
};
makeBuddies();
// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

const leaveTheShire = () => {
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
  const hobbits = document.querySelector("#The-Shire").childNodes[1];
  //console.log(hobbits);
  const rivendell = document.querySelector("#Rivendell");
  rivendell.appendChild(hobbits);
};
leaveTheShire();
// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {
  // 1. change the buddy 'Strider' textnode to "Aragorn"
  // hint: You can get a list of elements by tag name, such as 'aside'
  const strider = document.querySelectorAll(".buddy")[3];
  strider.innerText = "Aragorn";
};
beautifulStranger();
// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {
  // 1. create a new div with an id 'the-fellowship'
  const fellowship = document.createElement("div");
  fellowship.id = "the-fellowship";
  // 2. add an h1 with the text 'The Fellowship' to this new div
  const h1 = document.createElement("h1");
  h1.innerText = "The Fellowship";
  fellowship.appendChild(h1);
  // 3. append the fellowship to middle-earth
  document.querySelector("#middle-earth").appendChild(fellowship);
  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
  const hobbits = document.querySelector("#Rivendell").childNodes[1];
  //console.log(hobbits);
  const buddies = document.querySelector("aside").childNodes[0];
  //console.log(buddies);
  fellowship.append(hobbits, buddies);
};
forgeTheFellowShip();
// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {
  // 1. change the 'Gandalf' text to 'Gandalf the White'
  const gandalf = document.querySelectorAll(".buddy")[0];
  //console.log(gandalf);
  gandalf.innerText = "Gandalf the White";
  // 2. add a class "the-white" to this element
  gandalf.className = "the-white";
  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border
};
theBalrog();
// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {
  // 1. create a pop-up alert that the horn of gondor has been blown
  alert("The horn of gondor has been blown!");
  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  document.querySelectorAll(".buddy")[3].style.textDecorationLine =
    "line-through";
  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  const urukHai = document.querySelectorAll(".baddy")[2];
  urukHai.remove();
};
hornOfGondor();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  const frodo = document.querySelectorAll(".hobbit")[0];
  const sam = document.querySelectorAll(".hobbit")[1];
  const mordor = document.querySelector("#Mordor");
  mordor.append(frodo, sam);
  // 2. add a div with an id of 'mount-doom' to Mordor
  const mountDoom = document.createElement("div");
  mountDoom.id = "mount-doom";
  mordor.append(mountDoom);
};
itsDangerousToGoAlone();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {
  // 1. Create a div with an id of 'gollum' and add it to Mordor
  const gollum = document.createElement("div");
  gollum.id = "gollum";
  const mordor = document.querySelector("#Mordor");
  mordor.append(gollum);
  // 2. Move the ring from Frodo and give it to Gollum
  const ring = document.querySelector("#the-ring");
  gollum.append(ring);
  // 3. Move Gollum into Mount Doom
  const mountDoom = document.querySelector("#mount-doom");
  mountDoom.append(gollum);
};
weWantsIt();
// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {
  // 1. remove Gollum and the Ring from the DOM
  const gollum = document.querySelector("#gollum");
  gollum.remove();
  // 2. remove all the baddies from the DOM
  document.querySelector("#Mordor").childNodes[1].remove();
  // 3. Move all the hobbits back to the shire
  const hobbits = document.querySelectorAll(".hobbit");
  const theshire = document.querySelector("#The-Shire");
  for (hobbit of hobbits) {
    theshire.append(hobbit);
  }
};
thereAndBackAgain();
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

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
  const createSection = document.createElement("section");
  createSection.id = "middle-earth";

  // 2. append the section to the body of the DOM.
  document.querySelector("body").append(createSection);

  // 3. use a for loop to iterate over the lands array that does the following:
  for (const element of lands) {
    //   3a. creates an article tag (there should be one for each land when the loop is done)
    const createArt = document.createElement("article");
    //   3b. gives each land article an `id` tag of the corresponding land name
    createArt.id = element;
    //   3c. includes an h1 with the name of the land inside each land article
    const createH1 = document.createElement("h1");
    createH1.innerText = element;
    createArt.append(createH1);
    //   3d. appends each land to the middle-earth section
    document.querySelector("#middle-earth").append(createArt);
  }
  console.log("makeMiddleEarth was ran");
};

// COMMIT YOUR WORK
// The commit message should read:

// ============
// Chapter 2
// ============
const makeHobbits = () => {
  // Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)
  console.log("making makeHobbits");
  // 1. create a 'ul'
  createUL = document.createElement("ul");
  // 2. make each hobbit an li element and append it to the 'ul' you just created
  // hint: use the given 'hobbits' array and use a for loop
  for (const element of hobbits) {
    const createLI = document.createElement("li");
    createLI.innerText = element;
    createUL.append(createLI);
    // 3. also, give each hobbit (`li`) a class of "hobbit"
    createLI.className = "hobbit";
  }
  // 4. append the ul to the shire
  // hint: get 'The-Shire' by using its id
  document.querySelector("#The-Shire").append(createUL);
  console.log("makeHobbits was ran");
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {
  // 1. create an empty div with an id of 'the-ring'
  createDiv = document.createElement("div");
  createDiv.id = "the-ring";
  // 2. add the ring as a child of Frodo
  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .
  document.querySelectorAll(".hobbit")[0].append(createDiv);
  // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly
  console.log("keepItSecretKeepItSafe was ran");
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {
  // 1. display an unordered list of baddies in Mordor
  const createUL = document.createElement("ul");
  for (const element of baddies) {
    const createLI = document.createElement("li");
    createLI.innerText = element;
    createUL.append(createLI);
    createLI.className = "baddy";
  }
  document.querySelector("#Mordor").append(createUL);
  // 2. give each of the baddies a class of "baddy"
  // 3. remember to append the ul to Mordor
  console.log("makeBaddies was ran");
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {
  // 1. create an aside tag and append it to middle-earth below mordor
  const createAside = document.createElement("aside");
  document.querySelector("#middle-earth").append(createAside);
  const createUL = document.createElement("ul");
  // 2. display an unordered list of buddies in the aside
  for (const element of buddies) {
    const createLI = document.createElement("li");
    createLI.innerText = element;
    createUL.append(createLI);
    createLI.className = "buddy";
  }
  document.querySelector("aside").append(createUL);
  document.querySelector("#middle-earth").append(createAside);
  // 3. give each of the buddies a class of "buddy"
  // 4. don't forget to append them to the aside
  console.log("makeBuddies was ran");
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

const leaveTheShire = () => {
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
  const grabChildren = document.querySelector("#The-Shire").children;
  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
  document.querySelector("#Rivendell").append(grabChildren[1]);
  console.log("leaveTheShire was ran");
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {
  // 1. change the buddy 'Strider' textnode to "Aragorn"
  // hint: You can get a list of elements by tag name, such as 'aside'
  //3
  document.querySelectorAll(".buddy")[3].innerText = "Aragorn";
  console.log("beatifulStranger was ran");
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {
  // 1. create a new div with an id 'the-fellowship'
  const createDiv = document.createElement("div");
  createDiv.id = "the-fellowship";
  // 2. add an h1 with the text 'The Fellowship' to this new div
  const createH1 = document.createElement("h1");
  createH1.innerText = "The Fellowship";
  createDiv.append(createH1);
  // 3. append the fellowship to middle-earth
  document.querySelector("#middle-earth").append(createDiv);
  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
  document
    .querySelector("#the-fellowship")
    .append(document.querySelector("#Rivendell").children[1]);
  document
    .querySelector("#the-fellowship")
    .append(document.querySelector("aside").children[0]);
  //did it meant remain the original uls unchanged?????
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {
  // 1. change the 'Gandalf' text to 'Gandalf the White'
  document.querySelector(".buddy").innerText = "Gandalf the White";
  // 2. add a class "the-white" to this element
  document.querySelector(".buddy").classList.add;
  ("the-white");
  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border
  console.log("theBalrog was ran");
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {
  // 1. create a pop-up alert that the horn of gondor has been blown
  alert("the horn of gondor has been blown");
  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  document.querySelectorAll(".buddy")[4].style.textDecoration = "line-through";
  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  document.querySelectorAll(".baddy")[2].remove();
  console.log("hornOfGondor was ran");
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  document
    .querySelector("#Mordor")
    .append(document.querySelector("#the-fellowship").children[1].children[0]);
  document
    .querySelector("#Mordor")
    .append(document.querySelector("#the-fellowship").children[1].children[0]);
  // 2. add a div with an id of 'mount-doom' to Mordor
  const createDiv = document.createElement("div");
  createDiv.id = "mount-doom";
  document.querySelector("#Mordor").append(createDiv);
  console.log("itsDangerousToGoAlone was ran");
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {
  // 1. Create a div with an id of 'gollum' and add it to Mordor
  const createDiv = document.createElement("div");
  createDiv.id = "gollum";
  document.querySelector("#Mordor").append(createDiv);
  // 2. Move the ring from Frodo and give it to Gollum
  const ring = document.querySelector("#the-ring");
  document.querySelector("#gollum").append(ring);
  // 3. Move Gollum into Mount Doom
  document
    .querySelector("#mount-doom")
    .append(document.querySelector("#gollum"));
  console.log("weWantsIt was ran");
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {
  // 1. remove Gollum and the Ring from the DOM
  document.querySelector("#gollum").remove();
  // 2. remove all the baddies from the DOM
  document.querySelector("#Mordor").children[1].remove();
  // 3. Move all the hobbits back to the shire
  document
    .querySelector("#The-Shire")
    .append(document.querySelector("#the-fellowship").children[1]);

  console.log("thereAndBackAgain was ran");
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

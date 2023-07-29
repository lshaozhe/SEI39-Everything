console.log("LINKED2");

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
  console.log("Trying to make middle-earth");
  // 1. create a section tag with an id of middle-earth
  const sectionTag1 = document.createElement("section");
  sectionTag1.id = "middle-earth";
  // 2. append the section to the body of the DOM.
  document.querySelector("body").append(sectionTag1);
  // 3. use a for loop to iterate over the lands array that does the following:

  //   3a. creates an article tag (there should be one for each land when the loop is done)

  //   3b. gives each land article an `id` tag of the corresponding land name

  //   3c. includes an h1 with the name of the land inside each land article

  //   3d. appends each land to the middle-earth section
  function createArticleTags(landName) {
    const article = document.createElement("article");
    article.id = landName;
    const h1 = document.createElement("h1");
    h1.innerText = landName;
    article.append(h1);
    // article.innerText = landName;
    document.querySelector("#middle-earth").append(article);
  }

  function generateArticleTags() {
    for (i = 0; i < lands.length; i++) {
      createArticleTags(lands[i]);
      console.log(lands[i]);
    }
  }

  generateArticleTags();
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {
  // Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // 1. create a 'ul'
  const ulHobbits = document.createElement("UL");
  ulHobbits.id = "ulHobbits";
  // 2. make each hobbit an li element and append it to the 'ul' you just created
  function createHobbitsLi(name) {
    const hobbitsList = document.createElement("LI");
    hobbitsList.className = "hobbit";
    hobbitsList.innerText = name;
    ulHobbits.append(hobbitsList);
  }

  function generateHobbitsLi() {
    for (i = 0; i < hobbits.length; i++) {
      createHobbitsLi(hobbits[i]);
    }
  }

  document.querySelector("#The-Shire").append(ulHobbits);

  generateHobbitsLi();

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
  // 1. create an empty div with an id of 'the-ring'
  const theRing = document.createElement("div");
  theRing.id = "the-ring";
  // 2. add the ring as a child of Frodo
  const thisHobbits = document.querySelectorAll(".hobbit");
  thisHobbits[0].appendChild(theRing);
  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .
  // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {
  // 1. display an unordered list of baddies in Mordor
  const ulBaddies = document.createElement("UL");
  ulBaddies.id = "ulBaddies";
  // 2. give each of the baddies a class of "baddy"
  function createBaddiesLi(name) {
    const baddiesList = document.createElement("LI");
    baddiesList.className = "baddy";
    baddiesList.innerText = name;
    ulBaddies.append(baddiesList);
  }
  function generateBaddiesLi() {
    for (i = 0; i < baddies.length; i++) {
      createBaddiesLi(baddies[i]);
    }
  }
  // 3. remember to append the ul to Mordor
  document.querySelector("#Mordor").append(ulBaddies);

  generateBaddiesLi();
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
  const createAside = document.createElement("aside");
  document.querySelector("#middle-earth").append(createAside);

  const ulBuddies = document.createElement("UL");
  ulBuddies.className = "ulBuddies";
  function createBuddiesList(name) {
    const buddiesList = document.createElement("LI");
    buddiesList.innerText = name;
    buddiesList.className = "buddy";
    ulBuddies.append(buddiesList);
  }
  function generateBuddiesList() {
    for (i = 0; i < buddies.length; i++) {
      createBuddiesList(buddies[i]);
    }
  }

  createAside.append(ulBuddies);
  generateBuddiesList();
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

const leaveTheShire = () => {
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
  document
    .querySelector("#Rivendell")
    .append(document.querySelector("#ulHobbits"));
  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {
  // 1. change the buddy 'Strider' textnode to "Aragorn"
  // hint: You can get a list of elements by tag name, such as 'aside'
  const buddyList = document.querySelectorAll(".buddy");
  buddyList[3].innerText = "Aragorn";
  console.log(buddyList);
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
  const divFellowship = document.createElement("div");
  divFellowship.id = "the-fellowship";
  const h1 = document.createElement("h1");
  h1.innerText = "The Fellowship";
  divFellowship.append(h1);
  document.querySelector("#middle-earth").append(divFellowship);
  divFellowship.append(document.querySelector("#ulHobbits"));
  divFellowship.append(document.querySelector(".ulBuddies"));
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
  const findGandalf = document.querySelectorAll(".buddy");
  findGandalf[0].innerText = "Gandalf the White";
  findGandalf[0].className = "the-white";
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
  alert("The horn of gondor has been blown!");
  const findGandalf = document.querySelectorAll(".buddy");
  findGandalf[3].style.textDecoration = "line-through";
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  // 2. add a div with an id of 'mount-doom' to Mordor
  const findHobbits = document.querySelectorAll(".hobbit");
  document.querySelector("#Mordor").append(findHobbits[0]);
  document.querySelector("#Mordor").append(findHobbits[1]);
  const mountdoom = document.createElement("div");
  mountdoom.id = "mount-doom";
  document.querySelector("#Mordor").append(mountdoom);
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
  gollum.innerText = "Gollum";
  gollum.id = "gollum";
  document.querySelector("#Mordor").append(gollum);
  gollum.append(document.querySelector("#the-ring"));
  document.querySelector("#mount-doom").append(gollum);
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
  document.querySelector("#gollum").remove();
  document.querySelector("#ulBaddies").remove();
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
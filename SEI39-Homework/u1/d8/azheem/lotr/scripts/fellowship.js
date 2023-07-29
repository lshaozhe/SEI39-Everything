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
  console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth
  const middleEarthSection = document.createElement("section");
  middleEarthSection.id = "middle-earth";

  // 2. append the section to the body of the DOM.
  document.querySelector("body").append(middleEarthSection);

  // 3. use a for loop to iterate over the lands array that does the following:
  for (let item of lands) {
    //   3a. creates an article tag (there should be one for each land when the loop is done)
    let articleTag = document.createElement("article");

    //   3b. gives each land article an `id` tag of the corresponding land name
    articleTag.id = `${item}`;

    //   3c. includes an h1 with the name of the land inside each land article
    let h1 = document.createElement("h1");
    h1.innerText = `${item}`;
    articleTag.append(h1);

    //   3d. appends each land to the middle-earth section
    document.querySelector("#middle-earth").append(articleTag);
  }
};

// makeMiddleEarth();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {
  // Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // 1. create a 'ul'
  const hobbitsUList = document.createElement("ul");

  // 2. make each hobbit an li element and append it to the 'ul' you just created
  // hint: use the given 'hobbits' array and use a for loop
  for (let item of hobbits) {
    const hobbitsUListElement = document.createElement("li");
    hobbitsUListElement.innerText = `${item}`;

    // 3. also, give each hobbit (`li`) a class of "hobbit"
    hobbitsUListElement.className = "hobbit";

    // 4. append the ul to the shire
    // hint: get 'The-Shire' by using its id
    document.querySelector("#The-Shire").append(hobbitsUListElement);
  }
};

// makeHobbits();

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
  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .
  // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly
  const hobbitsUListArr = document.querySelectorAll(".hobbit");
  hobbitsUListArr[0].appendChild(theRing);
};

// keepItSecretKeepItSafe();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {
  // 1. display an unordered list of baddies in Mordor
  const baddiesList = document.createElement("ul");
  for (let item of baddies) {
    const baddiesMorder = document.createElement("li");
    baddiesMorder.innerText = `${item}`;

    // 2. give each of the baddies a class of "baddy"
    baddiesMorder.id = "baddy";

    // 3. remember to append the ul to Mordor
    document.querySelector("#Mordor").append(baddiesMorder);
  }
};

// makeBaddies();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {
  // 1. create an aside tag and append it to middle-earth below mordor
  const asideTag = document.createElement("aside");
  document.querySelector("#middle-earth").append(asideTag);

  // 2. display an unordered list of buddies in the aside
  const buddiesList = document.createElement("ul");
  for (let item of buddies) {
    const buddiesAside = document.createElement("li");
    buddiesAside.innerText = `${item}`;

    // 3. give each of the buddies a class of "buddy"
    buddiesAside.className = "buddy";

    // 4. don't forget to append them to the aside
    document.querySelector("aside").append(buddiesAside);
  }
};

// makeBuddies();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

const leaveTheShire = () => {
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
  const hobbitsUListArr = document.querySelectorAll(".hobbit");

  for (let item of hobbitsUListArr) {
    document.querySelector("#Rivendell").append(item);
  }
};

// leaveTheShire();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {
  // 1. change the buddy 'Strider' textnode to "Aragorn"
  // hint: You can get a list of elements by tag name, such as 'aside'
  const buddyUListArr = document.querySelectorAll(".buddy");
  buddyUListArr[3].innerText = "Aragorn";
};

// beautifulStranger();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {
  // 1. create a new div with an id 'the-fellowship'
  const theFellowship = document.createElement("div");
  theFellowship.id = "the-fellowship";

  // 2. add an h1 with the text 'The Fellowship' to this new div
  const h1 = document.createElement("h1");
  h1.innerText = "The Fellowship";
  document.querySelector("#middle-earth").append(theFellowship); // 3. append the fellowship to middle-earth
  document.querySelector("#the-fellowship").append(h1);

  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
  const hobbitsUListArr = document.querySelectorAll(".hobbit");
  for (let item of hobbitsUListArr) {
    document.querySelector("#the-fellowship").append(item);
  }

  const buddyUListArr = document.querySelectorAll(".buddy");
  for (let item of buddyUListArr) {
    document.querySelector("#the-fellowship").append(item);
  }
};

// forgeTheFellowShip();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {
  // 1. change the 'Gandalf' text to 'Gandalf the White'
  const buddyUListArr = document.querySelectorAll(".buddy");
  buddyUListArr[0].innerText = "Gandalf";

  // 2. add a class "the-white" to this element
  buddyUListArr[0].classList.add("the-white");

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border
  // done in style.css file
};

// theBalrog();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {
  // 1. create a pop-up alert that the horn of gondor has been blown
  window.alert("the horn of gondor has been blown");

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  const buddyUListArr = document.querySelectorAll(".buddy");
  buddyUListArr[4].style.textDecoration = "line-through";

  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  const baddiesUListArr = document.querySelectorAll("#baddy");
  baddiesUListArr[2].remove();
};

// hornOfGondor();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  // frodo first, sam second of hobbit under fellowship
  const hobbitsUListArr = document.querySelectorAll(".hobbit");
  document.querySelector("#Mordor").append(hobbitsUListArr[0]);
  document.querySelector("#Mordor").append(hobbitsUListArr[1]);

  // 2. add a div with an id of 'mount-doom' to Mordor
  const mountDoom = document.createElement("div");
  mountDoom.id = "mount-doom";
  document.querySelector("#Mordor").append(mountDoom);
};

// itsDangerousToGoAlone();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {
  // 1. Create a div with an id of 'gollum' and add it to Mordor
  const gollum = document.createElement("div");
  gollum.id = "gollum";
  document.querySelector("#Mordor").append(gollum);

  // 2. Move the ring from Frodo and give it to Gollum
  const theRing = document.querySelector("#the-ring");
  document.querySelector("#gollum").append(theRing);

  // 3. Move Gollum into Mount Doom
  document.querySelector("#mount-doom").append(gollum);
};

// weWantsIt();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {
  // 1. remove Gollum and the Ring from the DOM
  document.querySelector("#the-ring").remove();
  document.querySelector("#gollum").remove();

  // 2. remove all the baddies from the DOM
  const baddiesUListArr = document.querySelectorAll("#baddy");
  for (let item of baddiesUListArr) {
    item.remove();
  }

  // 3. Move all the hobbits back to the shire
  const hobbitsUListArr = document.querySelectorAll(".hobbit");
  for (let item of hobbitsUListArr) {
    document.querySelector("#The-Shire").append(item);
  }
};

// thereAndBackAgain();

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

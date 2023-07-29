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
  const middleEarth = document.createElement("section");
  middleEarth.setAttribute("id", "middle-earth");
  // 2. append the section to the body of the DOM.
  document.body.append(middleEarth);

  // 3. use a for loop to iterate over the lands array that does the following:
  for (let i = 0; i < lands.length; i++) {
    //   3a. creates an article tag (there should be one for each land when the loop is done)
    const land = document.createElement("article");
    //   3b. gives each land article an `id` tag of the corresponding land name
    land.setAttribute("id", `${lands[i]}`);
    //   3c. includes an h1 with the name of the land inside each land article
    const landName = document.createElement("h1");
    const landText = `${lands[i]}`;
    landName.innerText = landText;
    land.append(landName);
    //   3d. appends each land to the middle-earth section
    middleEarth.append(land);
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {
  // Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)
  console.log("making hobbits");
  // 1. create a 'ul'
  const hobbitList = document.createElement("ul");
  // 2. make each hobbit an li element and append it to the 'ul' you just created
  for (let i = 0; i < hobbits.length; i++) {
    const hobbit = document.createElement("li");
    hobbit.innerText = `${hobbits[i]}`;
    hobbitList.append(hobbit);
    // hint: use the given 'hobbits' array and use a for loop
    // 3. also, give each hobbit (`li`) a class of "hobbit"
    hobbit.setAttribute("class", "hobbit");
    // 4. append the ul to the shire
    document.querySelector("#The-Shire").append(hobbitList);
    // hint: get 'The-Shire' by using its id
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {
  console.log("Keeping it Secret, Keeping it Safe");
  // 1. create an empty div with an id of 'the-ring'
  let ring = document.createElement("div");
  ring.setAttribute("id", "the-ring");
  // 2. add the ring as a child of Frodo
  const frodo = document.querySelectorAll(".hobbit")[0];
  frodo.appendChild(ring);
  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .
  // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {
  console.log("making Baddies");
  // 1. display an unordered list of baddies in Mordor
  const baddiesList = document.createElement("ul");
  for (let i = 0; i < baddies.length; i++) {
    const baddie = document.createElement("li");
    baddie.innerText = `${baddies[i]}`;
    baddie.className = "baddy";
    baddiesList.append(baddie);
  }
  // 2. give each of the baddies a class of "baddy"
  // 3. remember to append the ul to Mordor
  document.querySelector("#Mordor").append(baddiesList);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {
  console.log("making Buddies");
  // 1. create an aside tag and append it to middle-earth below mordor
  const buddiesTag = document.createElement("aside");
  document.querySelector("#Mordor").append(buddiesTag);
  // 2. display an unordered list of buddies in the aside
  const buddiesList = document.createElement("ul");
  for (let i = 0; i < buddies.length; i++) {
    const buddy = document.createElement("li");
    buddy.innerText = `${buddies[i]}`;
    buddy.className = "buddy";
    buddiesList.append(buddy);
  }
  // 3. give each of the buddies a class of "buddy"
  // 4. don't forget to append them to the aside
  buddiesTag.append(buddiesList);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

const leaveTheShire = () => {
  console.log("Leaving the Shire");
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
  const ul = document.querySelector("#The-Shire");
  const children = ul.childNodes;
  for (let i = 1; i < children.length; i++) {
    const node = children[i];
    document.querySelector("#Rivendell").append(node);
  }
  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {
  console.log("beautiful stranger");
  const buddiesList = document.getElementsByTagName("aside")[0].childNodes[0];
  const buddies = buddiesList.childNodes;
  buddies[3].innerText = "Aragorn";
  // 1. change the buddy 'Strider' textnode to "Aragorn"
  // hint: You can get a list of elements by tag name, such as 'aside'
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {
  console.log("Forging the Fellowship");
  // 1. create a new div with an id 'the-fellowship'
  const theFellowship = document.createElement("div");
  theFellowship.setAttribute("id", "the-fellowship");
  // 2. add an h1 with the text 'The Fellowship' to this new div
  const text = document.createElement("h1");
  text.innerText = "The Fellowship";
  theFellowship.append(text);
  // 3. append the fellowship to middle-earth
  document.querySelector("#middle-earth").append(theFellowship);
  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
  const buddiesList = document.querySelectorAll(".buddy");
  const hobbitList = document.querySelectorAll(".hobbit");
  const fellowshipList = document.createElement("ul");
  theFellowship.append(fellowshipList);
  for (let i = 0; i < buddiesList.length; i++) {
    fellowshipList.append(buddiesList[i]);
  }
  for (let i = 0; i < hobbitList.length; i++) {
    fellowshipList.append(hobbitList[i]);
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {
  console.log("making the Balrog");
  // 1. change the 'Gandalf' text to 'Gandalf the White'
  let gandalf =
    document.querySelector("#the-fellowship").childNodes[1].childNodes[0];
  gandalf.innerText = "Gandalf the White";
  // 2. add a class "the-white" to this element
  gandalf.className = "the-white";
  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {
  console.log("Horn of Gondor");
  // 1. create a pop-up alert that the horn of gondor has been blown
  alert("The Horn of Gondor has been blown!");
  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  boromir =
    document.querySelector("#the-fellowship").childNodes[1].childNodes[4];
  boromir.style.textDecoration = "line-through";
  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  document.querySelector("#Mordor").childNodes[1].childNodes[2].remove();
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  console.log("Dangerous to go alone");
  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  const frodo =
    document.querySelector("#the-fellowship").childNodes[1].childNodes[5];
  const samwise =
    document.querySelector("#the-fellowship").childNodes[1].childNodes[6];
  document.querySelector("#Mordor").append(frodo);
  document.querySelector("#Mordor").append(samwise);

  // 2. add a div with an id of 'mount-doom' to Mordor
  const mountDoom = document.createElement("div");
  const text = document.createElement("h2");
  text.innerText = "Mount Doom";
  mountDoom.setAttribute("id", "mount-doom");
  document.querySelector("#Mordor").append(mountDoom);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {
  console.log("we wants it");
  // 1. Create a div with an id of 'gollum' and add it to Mordor
  const gollum = document.createElement("div");
  gollum.setAttribute("id", "gollum");
  document.querySelector("#Mordor").append(gollum);
  // 2. Move the ring from Frodo and give it to Gollum
  const theRing = document.querySelector("#the-ring");
  gollum.append(theRing);
  // 3. Move Gollum into Mount Doom
  document.querySelector("#mount-doom").append(gollum);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {
  console.log("there and back again");
  // 1. remove Gollum and the Ring from the DOM
  document.querySelector("#gollum").remove();
  // 2. remove all the baddies from the DOM
  document.querySelectorAll(".baddy");
  // 3. Move all the hobbits back to the shire
  const hobbits = document.querySelectorAll(".hobbit");
  console.log(hobbits);
  for (let i = 0; i < hobbits.length; i++) {
    document.querySelector("#The-Shire").append(hobbits[i]);
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

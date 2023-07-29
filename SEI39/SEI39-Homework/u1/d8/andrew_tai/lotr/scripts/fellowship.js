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
  // console.log("Trying to make middle earth.");
  console.log("making Middle Earth");

  // 1. create a section tag with an id of middle-earth
  const $middleEarth = document.createElement("section");
  $middleEarth.id = "middle-earth";

  // 2. append the section to the body of the DOM.
  document.body.appendChild($middleEarth);

  // 3. use a for loop to iterate over the lands array that does the following:
  for (let land of lands) {
    //   3a. creates an article tag (there should be one for each land when the loop is done)
    const $article = document.createElement("article");

    //   3b. gives each land article an `id` tag of the corresponding land name
    $article.id = land;

    //   3c. includes an h1 with the name of the land inside each land article
    const $h1 = document.createElement("h1");
    $h1.textContent = land;
    $article.appendChild($h1);

    //   3d. appends each land to the middle-earth section
    $middleEarth.appendChild($article);
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
  const $ul = document.createElement("ul");

  // 2. make each hobbit an li element and append it to the 'ul' you just created
  // hint: use the given 'hobbits' array and use a for loop
  for (const hobbit of hobbits) {
    const $hobbit = document.createElement("li");
    $hobbit.textContent = hobbit;

    // 3. also, give each hobbit (`li`) a class of "hobbit"
    $hobbit.classList.add("hobbit");
    $ul.appendChild($hobbit);
  }
  // 4. append the ul to the shire
  // hint: get 'The-Shire' by using its id
  const $theShire = document.getElementById("The-Shire");
  $theShire.appendChild($ul);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {
  // 1. create an empty div with an id of 'the-ring'
  const $theRing = document.createElement("div");
  $theRing.id = "the-ring";
  $theRing.textContent = "The Ring";

  // 2. add the ring as a child of Frodo
  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .
  // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly
  const $hobbits = document.getElementsByClassName("hobbit");
  for (const hobbit of $hobbits) {
    if (hobbit.innerText.toLowerCase().includes("frodo")) {
      hobbit.appendChild($theRing);
    }
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {
  // 1. display an unordered list of baddies in Mordor
  const $ul = document.createElement("ul");

  for (const baddy of baddies) {
    const $baddy = document.createElement("li");
    $baddy.textContent = baddy;
    // 2. give each of the baddies a class of "baddy"
    $baddy.classList.add("baddy");
    $ul.appendChild($baddy);
  }
  // 3. remember to append the ul to Mordor

  const $mordor = document.getElementById("Mordor");
  $mordor.appendChild($ul);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {
  // 1. create an aside tag and append it to middle-earth below mordor
  const $aside = document.createElement("aside");
  document.getElementById("middle-earth").appendChild($aside);

  // 2. display an unordered list of buddies in the aside
  const $ul = document.createElement("ul");
  for (const buddy of buddies) {
    const $buddy = document.createElement("li");
    $buddy.textContent = buddy;
    // 3. give each of the buddies a class of "buddy"
    $buddy.classList.add("buddy");
    $ul.appendChild($buddy);
  }
  // 4. don't forget to append them to the aside
  $aside.appendChild($ul);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

const leaveTheShire = () => {
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
  const $theShireNodes = document.getElementById("The-Shire").childNodes;
  for (const node of $theShireNodes) {
    if (node.nodeName.toLowerCase() === "ul") {
      document.getElementById("Rivendell").appendChild(node);
    }
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {
  // 1. change the buddy 'Strider' textnode to "Aragorn"
  // hint: You can get a list of elements by tag name, such as 'aside'
  const $buddies = document.getElementsByClassName("buddy");
  for (const buddy of $buddies) {
    if (buddy.innerText.toLowerCase().includes("strider")) {
      buddy.textContent = "Aragon";
    }
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {
  // 1. create a new div with an id 'the-fellowship'
  const $theFellowship = document.createElement("div");
  $theFellowship.id = "the-fellowship";

  // 2. add an h1 with the text 'The Fellowship' to this new div
  const $h1 = document.createElement("h1");
  $h1.textContent = "The Fellowship";
  $theFellowship.appendChild($h1);

  // 3. append the fellowship to middle-earth
  document.getElementById("middle-earth").appendChild($theFellowship);

  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
  for (const ul of document.getElementsByTagName("ul")) {
    if (
      ul.firstChild.classList.contains("hobbit") ||
      ul.firstChild.classList.contains("buddy")
    ) {
      $theFellowship.appendChild(ul);
    }
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {
  // 1. change the 'Gandalf' text to 'Gandalf the White'
  const $buddies = document.getElementsByClassName("buddy");
  for (const buddy of $buddies) {
    if (buddy.innerText.toLowerCase().includes("gandalf")) {
      buddy.textContent = "Gandalf the White";

      // 2. add a class "the-white" to this element
      buddy.classList.add("the-white");
    }
  }

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {
  // 1. create a pop-up alert that the horn of gondor has been blown
  alert("The Horn of Gondor has been blown");

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  const $buddies = document.getElementsByClassName("buddy");
  for (const buddy of $buddies) {
    if (buddy.innerText.toLowerCase().includes("boromir")) {
      buddy.style.textDecorationLine = "line-through";
    }
  }

  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  const $baddies = document.getElementsByClassName("baddy");
  for (const baddy of $baddies) {
    if (baddy.innerText.toLowerCase().includes("uruk-hai")) {
      baddy.remove();
    }
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  const $hobbits = document.getElementsByClassName("hobbit");
  for (const hobbit of $hobbits) {
    if (
      hobbit.innerText.toLowerCase().includes("frodo") ||
      hobbit.innerText.toLowerCase().includes("sam")
    ) {
      document.getElementById("Mordor").appendChild(hobbit);
    }
  }

  // 2. add a div with an id of 'mount-doom' to Mordor
  const $mountDoom = document.createElement("div");
  $mountDoom.id = "mount-doom";

  document.getElementById("Mordor").appendChild($mountDoom);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {
  // 1. Create a div with an id of 'gollum' and add it to Mordor
  const $gollum = document.createElement("div");
  $gollum.id = "gollum";
  $gollum.textContent = "Gollum";
  document.getElementById("Mordor").appendChild($gollum);

  // 2. Move the ring from Frodo and give it to Gollum
  $gollum.appendChild(document.getElementById("the-ring"));

  // 3. Move Gollum into Mount Doom
  document
    .getElementById("mount-doom")
    .appendChild(document.getElementById("gollum"));
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {
  // 1. remove Gollum and the Ring from the DOM
  document.getElementById("gollum").remove();

  // 2. remove all the baddies from the DOM
  for (const ul of document.getElementsByTagName("ul")) {
    if (ul.firstChild.classList.contains("baddy")) {
      ul.remove();
    }
  }

  // 3. Move all the hobbits back to the shire
  for (const ul of document.getElementsByTagName("ul")) {
    if (ul.firstChild.classList.contains("hobbit")) {
      const $hobbits = document.getElementsByClassName("hobbit");
      for (let i = $hobbits.length - 1; i >= 0; i--) {
        ul.appendChild($hobbits[i]);
      }
      console.log(ul);
      document.getElementById("The-Shire").appendChild(ul);
    }
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

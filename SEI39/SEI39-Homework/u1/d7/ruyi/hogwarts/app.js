// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {
//     console.log('I did it! I linked jQuery and this js file!');
//   };

/* =======================================
Year 1
======================================= */

// Query for your div with the id of container and set it to a variable named $container

const container = document.querySelector("#container");

console.log(container);

// Create an <h1> element and set it to a variable called $h1 and console log it

const h1 = document.createElement("h1");

// Add some text inside the h1 element. Example text: 'Hogwarts'

h1.innerText = "Hogwarts";

console.log(h1);

// Why isn't your $h1 it appearing on your page?
// Because we haven't appended h1 to a DOM element.

// Append your $h1 to your $container
container.appendChild(h1);

/* =======================================
Year 2
======================================= */
// h2 element with your name
const h2 = document.createElement("h2");

h2.innerText = "Ru Yi";

container.appendChild(h2);

// h3 element with your house (Hufflepuff, Gryffindor, Ravenclaw or Slytherin )
const h3 = document.createElement("h3");

h3.innerText = "Hufflepuff";

container.appendChild(h3);

// h4 element with your pet's name
// this h4 element should have a class with a value of your pet type (owl, cat, toad, etc)
const h4Pet = document.createElement("h4");

h4Pet.innerText = "Lulu";

container.appendChild(h4Pet);

h4Pet.setAttribute("class", "Cat");

// h4 element with your wand (You can make it whatever you want. Need help coming up with one? Here is one of many websites to help you find your wand playbuzz.com )
const h4Wand = document.createElement("h4");

h4Wand.innerText = "Hawthorn Wand with Dragon Heartstring";

container.appendChild(h4Wand);

/* =======================================
Year 3
======================================= */
// Following what you did in previous years, add the following into an unordered list (with the attribute of storage and a value of trunk)
const storageTrunk = document.createElement("ul");

storageTrunk.setAttribute("storage", "trunk");

container.appendChild(storageTrunk);

// List items
// butter beer
const butterBeer = document.createElement("li");

butterBeer.innerText = "butter beer";

storageTrunk.appendChild(butterBeer);

// invisibility cloak (add a class of secret)
const invisibilityCloak = document.createElement("li");

invisibilityCloak.innerText = "invisibility cloak";

invisibilityCloak.setAttribute("class", "secret");

storageTrunk.appendChild(invisibilityCloak);

// magic map (add a class of secret)
const magicMap = document.createElement("li");

magicMap.innerText = "magic map";

magicMap.setAttribute("class", "secret");

storageTrunk.appendChild(magicMap);

// time turner (add a class of secret)
const timeTurner = document.createElement("li");

timeTurner.innerText = "time turner";

timeTurner.setAttribute("class", "secret");

storageTrunk.appendChild(timeTurner);

// leash (for your pet, be sure to give this list element the same class as you gave your pet)
const leash = document.createElement("li");

leash.innerText = "leash";

leash.setAttribute("class", "Cat");

storageTrunk.appendChild(leash);

// Bertie Bott's Every Flavor [Jelly] Beans.
const jellyBeans = document.createElement("li");

jellyBeans.innerText = "Bertie Bott's Every Flavor [Jelly] Beans";

jellyBeans.setAttribute("class", "secret");

storageTrunk.appendChild(jellyBeans);

/* =======================================
Year 4
======================================= */

// Make a table
const timetable = document.createElement("table");

// Right above your table add an h5 that says 'Spring 2017'
const timetableName = document.createElement("h5");

timetableName.innerText = "Spring 2017";

container.appendChild(timetableName);

container.appendChild(timetable);

// Inside the table add a thead element
const tableHeader = document.createElement("thead");

timetable.appendChild(tableHeader);

// Inside the thead element add two th elements
const tr0 = document.createElement("tr");

tableHeader.appendChild(tr0);

// in the first th add the text Day
const th1 = document.createElement("th");

th1.innerText = "Day";

tr0.appendChild(th1);

// in the second th add the text Classes
const th2 = document.createElement("th");

th2.innerText = "Classes";

tr0.appendChild(th2);

const tableBody = document.createElement("tbody");

timetable.appendChild(tableBody);

// Create a tr element and add two td elements inside.
const tr1 = document.createElement("tr");

tableBody.appendChild(tr1);

// in the first td add the day Monday
const td1 = document.createElement("td");

tr1.appendChild(td1);

td1.innerText = "Monday";

// in the second td add the classes you are taking ( Herbology, Divination, History of Magic, Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice, etc.)
const td2 = document.createElement("td");

tr1.appendChild(td2);

td2.innerText = "Herbology | Tranfiguration | Quidditch practice";

// Create more tr elements with tds inside so that you have Monday - Friday and classes each of those days
//TUESDAY
const tr2 = document.createElement("tr");

tableBody.appendChild(tr2);

const td3 = document.createElement("td");

tr2.appendChild(td3);

td3.innerText = "Tuesday";

const td4 = document.createElement("td");

tr2.appendChild(td4);

td4.innerText = "Divination | Potions | Defense Against the Dark Arts";

// WEDNESDAY
const tr3 = document.createElement("tr");

tableBody.appendChild(tr3);

const td5 = document.createElement("td");

tr3.appendChild(td5);

td5.innerText = "Wednesday";

const td6 = document.createElement("td");

tr3.appendChild(td6);

td6.innerText = "History of Magic | Tranfiguration | Quidditch practice";

// THURSDAY
const tr4 = document.createElement("tr");

tableBody.appendChild(tr4);

const td7 = document.createElement("td");

tr4.appendChild(td7);

td7.innerText = "Thursday";

const td8 = document.createElement("td");

tr4.appendChild(td8);

td8.innerText = "Charms | Divination | Herbology";

// FRIDAY
const tr5 = document.createElement("tr");

tr5.setAttribute("class", "Friday");

tableBody.appendChild(tr5);

const td9 = document.createElement("td");

tr5.appendChild(td9);

td9.innerText = "Friday";

const td10 = document.createElement("td");

tr5.appendChild(td10);

td10.innerText = "Potions | Charms | Defense Against the Dark Arts";

/* =======================================
Year 5
======================================= */
// Break your wand! (select the element that contains your wand and remove it)
h4Wand.remove();

// Class was hard! Drink all your butter beer! (remove just the butter beer from your list)
butterBeer.remove();

// Get a new wand (add the same element back with new text describing your new wand. Be sure to insert it after your pet in the DOM)
h4Wand.innerText = "Cherry Wand with Unicorn Hair";

h4Pet.insertAdjacentElement("afterend", h4Wand);

// Make your new wand stand out by adding a color of indigo (or whatever color you like). But do it with magic (jQuery): Don't add this css in your main.css file
h4Wand.style.color = "indigo";

// Send your pet on a spy mission (remove your pet from the DOM, put it somewhere else in your HTML). Make sure your pet's leash stays in your trunk (list item with the same class as your pet inside unordered list)
h4Pet.style.display = "none";

// Have your pet come back (remove your pet from the DOM, put it back in its original location)
h4Pet.style.display = "block";

/* =======================================
Year 6
======================================= */
// Nosey roommate alert! hide (use jQuery method hide) to hide all your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
// Nosey roommate falls asleep 2 seconds later (chain the jQuery method delay on your hide method (give argument of at least 2000) to prevent showing your secret elements too soon.
setTimeout((document.querySelector(".secret").style.display = "none"), 2000);

// Use jQuery method show to reveal all of your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
document.querySelector(".secret").style.display = "block";

// Accident! You transmogrified your pet's leash into half cabbage
// add the class cabbage to your pet's leash. Do not replace your pet's leash's original class. Your pet, which also has the same class should remain unaffected
h4Pet.classList.add("cabbage");

// Fix your pet's leash by removing the class of cabbage (be sure to keep your pet's leash's original class)
h4Pet.classList.remove("cabbage");

/* =======================================
Year 7
======================================= */
// Update your class schedule to read 'Fall 2018'
timetableName.innerText = "Fall 2018";

// Celebrate by buying more butter beer! Append a list item with the text 'Butter beer' as the first list item inside your unordered list with the value of trunk
storageTrunk.prepend(butterBeer);

// Whoops! You broke your trunk when you stood on it while singing karaoke. Get a new storage container for your stuff; replace the unodered list's property of trunk with a new property of chest
storageTrunk.setAttribute("storage", "chest");

// Add some CSS to your page. Feel free to experiment and make this page your own
// Take a screenshot of your page and add it to your homework folder

// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {
//     console.log('I did it! I linked jQuery and this js file!');

"use strict";

//==============================================================================
//Year 5
//=============================================================================

//Break your wand! (select the element that contains your wand and remove it)
document.querySelectorAll("h4")[1].remove();

//Class was hard! Drink all your butter beer! (remove just the butter beer from your list)
document.querySelectorAll("li")[0].remove();

//Get a new wand (add the same element back with new text describing your new wand. Be sure to insert it after your pet in the DOM)
const h4wand = document.createElement("h4");
h4wand.innerText = "This is my new wand";
document.querySelector("#container").appendChild(h4wand);
document.querySelectorAll("li")[3].after(h4wand); //h4pet

//Make your new wand stand out by adding a color of indigo (or whatever color you like). But do it with magic (jQuery): Don't add this css in your main.css file
h4wand.style.color = "white";

//Send your pet on a spy mission (remove your pet from the DOM, put it somewhere else in your HTML). Make sure your pet's leash stays in your trunk (list item with the same class as your pet inside unordered list)
const pet = document.querySelector("h4");
pet.style.display = "none";

//Have your pet come back (remove your pet from the DOM, put it back in its original location)
pet.style.display = "block";

//==============================================================================
/// Year 6
//==============================================================================
// School is so fun!

// Nosey roommate alert! hide (use jQuery method hide) to hide all your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
const secret = document.querySelectorAll(".secret");
for (const items of secret) {
  items.style.display = "none";
}

// Nosey roommate falls asleep 2 seconds later (chain the jQuery method delay on your hide method (give argument of at least 2000) to prevent showing your secret elements too soon.
const show = () => {
  for (const items of secret) {
    items.style.display = "list-item";
  }
};

// Use jQuery method show to reveal all of your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
setTimeout(show, 2000);

// Accident! You transmogrified your pet's leash into half cabbage
// add the class cabbage to your pet's leash. Do not replace your pet's leash's original class. Your pet, which also has the same class should remain unaffected
document.querySelector("li.cat").classList.add("cabbage");

// add an attribute of color:CHARTREUSE; in your main.css for all elements that have a class of cabbage

// Fix your pet's leash by removing the class of cabbage (be sure to keep your pet's leash's original class)
document.querySelector("li.cat").classList.remove("cabbage");

//=========================================================================
// Year 7
//=========================================================================

// Though your time at Hogwarts is nearly over, your journey of learning has just begun
// Update your class schedule to read 'Fall 2018'
document.querySelector("h5").innerText = "Fall 2018";

// Celebrate by buying more butter beer! Append a list item with the text 'Butter beer' as the first list item inside your unordered list with the value of trunk
const butterBeer = document.createElement("li");
butterBeer.innerText = "Butter beer";

const trunkList = document.querySelector("ul");
trunkList.insertBefore(butterBeer, trunkList.children[0]);

// Whoops! You broke your trunk when you stood on it while singing karaoke. Get a new storage container for your stuff; replace the unodered list's property of trunk with a new property of chest
trunkList.setAttribute("storage", "chest");
// Add some CSS to your page. Feel free to experiment and make this page your own
// Take a screenshot of your page and add it to your homework folder

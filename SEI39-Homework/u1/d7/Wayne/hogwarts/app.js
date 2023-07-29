if (typeof jQuery == "undefined") {
  console.log("oops! I still have to link my jQuery properly!");
} else {
  console.log("I did it! I linked jQuery and this js file!");
}

// $(() => {
//   // put jQuery in here
//   console.log($("#container"));
// });

const $h1 = $("<h1>Hogwarts</h1>");
// console.log($h1);
$("#container").append($h1);

const $h2 = $("<h2>Wayne</h2>");
const $h3 = $("<h3>Slytherin</h3>");
// const $h4 = $("<h4>Lucky</h4>");
const $h42 = $("<h4>Holly Wand with Unicorn Hair Core</4>");
$("h4").addClass("dog");
$("#container").append($h2);
$("#container").append($h3);
// $("#container").append($h4);
$("#container").append($h42);

document.querySelector(".beer").remove();
$h42.remove();
const $h43 = $("<h4>New Wand</h4>");
$("#container").append($h43);
$h43.css("color", "indigo");
const $h44 = $("<h4>Lucky is back</h4>");
$("#container").append($h44);

$(".secret").delay(2000).hide("slow");
$(".secret").show("slow");

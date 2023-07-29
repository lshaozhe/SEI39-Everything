// if (typeof jQuery == "undefined") {
//   console.log("oops! I still have to link my jQuery properly!");
// } else {
//   console.log("I did it! I linked jQuery and this js file!");
// }

const $container = $("#container");
console.log($container); // put jQuery in here

$(() => {
  const $h1 = $("<h1>").text("Hogwarts");
  $container.append($h1);
});

$(() => {
  const $h2 = $("<h2>").text("Vithya");
  $container.append($h2);
});

$(() => {
  const $h3 = $("<h3>").text("Hufflepuff");
  $container.append($h3);
});

$(() => {
  const $h4 = $("<h4>").text("Fluffy");
  $h4.addClass("dog");
  $container.append($h4);
});

$(() => {
  const $h4 = $("<h4>").text("Holly Wand with Unicorn Hair Core");
  $container.append($h4);
  $h4.remove();
  const $h4new = $("<h4>").text("Holly Wand with Phoenix Feather");
  $container.append($h4new);
  $h4new.css("color", "indigo");
});

$(() => {
  const $ul = $("<ul>");
  $ul.attr("storage", "trunk");
  $container.append($ul);
  const $li1 = $("<li>").text("Butter Beer");
  $ul.append($li1);
  const $li2 = $("<li>").text("Invisibility Cloak");
  $li2.addClass("secret");
  $ul.append($li2);
  const $li3 = $("<li>").text("Magic Map");
  $li3.addClass("secret");
  $ul.append($li3);
  const $li4 = $("<li>").text("Time Turner");
  $li4.addClass("secret");
  $ul.append($li4);
  const $li5 = $("<li>").text("Leash");
  $li5.addClass("dog");
  $li5.addClass("cabbage");
  $ul.append($li5);
  const $li6 = $("<li>").text("Bertie Bott's Every Flavor [Jelly] Beans");
  $ul.append($li6);
  $li1.remove();
  $(".secret").delay(2000).hide(0);
  $(".secret").show("slow");
  $(".cabbage").removeClass("cabbage");
  $("<li>Butter Beer</li>").insertBefore($li2);
  $ul.attr("storage", "chest");
});

$(() => {
  $("h5").text("Fall 2018");
});

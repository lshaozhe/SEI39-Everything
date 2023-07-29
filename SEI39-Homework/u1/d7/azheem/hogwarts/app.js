// if (typeof jQuery == "undefined") {
//   console.log("oops! I still have to link my jQuery properly!");
// } else {
//   console.log("I did it! I linked jQuery and this js file!");
// }

// // background-colour for page did load. title also appears at the tab.
// // the console logs "oops! I still have to link my jQuery properly!"

// // the console logs "I did it! I linked jQuery and this js file!" => means it's working as intended.

$(() => {
  //////////
  // Year 1
  //////////
  // Query for your div with the id of container and set it to a variable named $container
  const $container = $("#container");

  // console.log $container
  console.log($container);

  // Create an <h1> element and set it to a variable called $h1 and console log it
  const $h1 = $("<h1>");
  console.log($h1);

  // Add some text inside the h1 element. Example text: 'Hogwarts'
  $h1.text("Hogwarts");
  console.log($h1);

  // Append your $h1 to your $container
  $container.append($h1);

  // Why isn't your $h1 it appearing on your page?
  // Because it has not been appended

  //////////
  // Year 2
  //////////
  // h2 element with your name
  const $h2 = $("<h2>");
  $h2.text("azheem");
  $container.append($h2);

  // h3 element with your house (Hufflepuff, Gryffindor, Ravenclaw or Slytherin)
  const $h3 = $("<h3>");
  $h3.text("Gryffindor");
  $container.append($h3);

  // h4 element with your pet's name
  const $h4Pet = $("<h4>");
  $h4Pet.addClass("cat");
  $h4Pet.text("milo");
  $container.append($h4Pet);
  // Send your pet on a spy mission (remove your pet from the DOM, put it somewhere else in your HTML).
  $h4Pet.remove();
  // Have your pet come back (remove your pet from the DOM, put it back in its original location)
  $container.append($h4Pet);

  // h4 element with your wand
  const $h4Wand = $("<h4>");
  $h4Wand.text("Elder Wand");
  $container.append($h4Wand);

  // Get a new wand (add the same element back with new text describing your new wand. Be sure to insert it after your pet in the DOM)
  // h4 element with new wand
  const $h4NewWand = $("<h4>");
  $h4NewWand.text("New Elder Wand");
  $container.append($h4NewWand);
  // Make your new wand stand out by adding a color of indigo (or whatever color you like). But do it with magic (jQuery): Don't add this css in your main.css file
  $h4NewWand.css("color", "indigo");

  //////////
  // Year 3
  //////////
  const $yearThreeList = $("<ul>");
  //   append the unordered list to your container div (with the attribute of storage and a value of trunk)
  $yearThreeList.attr("storage", "trunk");
  $container.append($yearThreeList);

  // Celebrate by buying more butter beer!
  // Append a list item with the text 'Butter beer' as the first list item inside your unordered list with the value of trunk
  const $butterBeerNew = $("<li>");
  $butterBeerNew.text("Butter Beer");
  $yearThreeList.append($butterBeerNew);

  // butter beer
  const $butterBeer = $("<li>");
  $butterBeer.text("Butter Beer");
  $yearThreeList.append($butterBeer);

  //   invisibility cloak (add a class of secret)
  const $invisibleCloak = $("<li>");
  $invisibleCloak.addClass("secret");
  $invisibleCloak.text("invisibility cloak");
  $yearThreeList.append($invisibleCloak);

  //   magic map (add a class of secret)
  const $magicMap = $("<li>");
  $magicMap.addClass("secret");
  $magicMap.text("magic map");
  $yearThreeList.append($magicMap);

  //   time turner (add a class of secret)
  const $timeTurner = $("<li>");
  $timeTurner.addClass("secret");
  $timeTurner.text("time turner");
  $yearThreeList.append($timeTurner);

  //   leash (for your pet, be sure to give this list element the same class as you gave your pet)
  const $leash = $("<li>");
  $leash.addClass("cat");
  $leash.text("leash");
  $yearThreeList.append($leash);

  //   Bertie Bott's Every Flavor [Jelly] Beans.
  const $jellyBeans = $("<li>");
  $jellyBeans.text("Bertie Bott's Every Flavor [Jelly] Beans");
  $yearThreeList.append($jellyBeans);

  //////////
  // Year 4
  //////////

  // Right above your table add an h5 that says 'Spring 2017'
  const $h5 = $("<h5>");
  $h5.text("Spring 2017");
  $container.append($h5);

  // Make a table
  const $table = $("<table>");
  $container.append($table);

  // Inside the table add a thead element
  const $thead = $("<thead>");
  $table.append($thead);

  // Inside the thead element add two th elements
  const $trh = $("<tr>");
  $thead.append($trh);
  const $th1 = $("<th>");
  $th1.text("Day"); // in the first th add the text Day
  $trh.append($th1);
  const $th2 = $("<th>");
  $th2.text("Classes"); // in the second th add the text Classes
  $trh.append($th2);

  const $tbody = $("<tbody>");
  $table.append($tbody);

  // Create a tr element and add two td elements inside.
  const $trb1 = $("<tr>");
  $tbody.append($trb1);

  const $tdb1 = $("<td>");
  $tdb1.text("Monday"); // in the first td add the day Monday
  $trb1.append($tdb1);
  const $tdb2 = $("<td>");
  $tdb2.text("Potions"); // in the second td add the classes you are taking
  $trb1.append($tdb2);

  const $trb2 = $("<tr>");
  $tbody.append($trb2);
  const $tdb3 = $("<td>");
  $tdb3.text("Tuesday");
  $trb2.append($tdb3);
  const $tdb4 = $("<td>");
  $tdb4.text("Charms");
  $trb2.append($tdb4);

  const $trb3 = $("<tr>");
  $tbody.append($trb3);
  const $tdb5 = $("<td>");
  $tdb5.text("Wednesday");
  $trb3.append($tdb5);
  const $tdb6 = $("<td>");
  $tdb6.text("Herbology");
  $trb3.append($tdb6);

  const $trb4 = $("<tr>");
  $tbody.append($trb4);
  const $tdb7 = $("<td>");
  $tdb7.text("Thursday");
  $trb4.append($tdb7);
  const $tdb8 = $("<td>");
  $tdb8.text("Divination");
  $trb4.append($tdb8);

  const $trb5 = $("<tr>");
  $tbody.append($trb5);
  const $tdb9 = $("<td>");
  $tdb9.text("Friday");
  $trb5.append($tdb9);
  const $tdb10 = $("<td>");
  $tdb10.text("Transfiguration");
  $trb5.append($tdb10);

  //////////
  // Year 5
  //////////

  // Break your wand! (select the element that contains your wand and remove it)
  $h4Wand.remove();

  // Class was hard! Drink all your butter beer! (remove just the butter beer from your list)
  $butterBeer.remove();

  //////////
  // Year 6
  //////////

  // hide all your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
  $(".secret").hide("slow").delay(2000); // chain the jQuery method delay on your hide method (give argument of at least 2000) to prevent showing your secret elements too soon.

  // Use jQuery method show to reveal all of your belongings with a class of secret (give an argument of 'slow' - to see this function in action
  $(".secret").show("slow");

  // add the class cabbage to your pet's leash. Do not replace your pet's leash's original class.
  $leash.addClass("cabbage");

  // Fix your pet's leash by removing the class of cabbage
  $leash.removeClass("cabbage");

  //////////
  // Year 7
  //////////

  // Update your class schedule to read 'Fall 2018'
  $h5.text("Fall 2018");

  // replace the unodered list's property of trunk with a new property of chest
  $yearThreeList.attr("storage", "chest");
});

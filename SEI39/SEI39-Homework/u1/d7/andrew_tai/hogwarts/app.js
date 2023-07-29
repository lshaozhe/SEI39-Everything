$(() => {
  // ============================================================
  // Year 1
  // ============================================================

  const $container = $(".container");
  console.log($container);

  const $h1 = $("<h1>");
  console.log($h1);

  $h1.text("Hogwarts");

  // Why isn't your $h1 it appearing on your page?
  // It has not been appended to anything yet.

  $container.append($h1);

  // ============================================================
  // Year 2
  // ============================================================

  const $h2 = $("<h2>").text("John Doe");
  const $h3 = $("<h3>").text("Hufflepuff");
  const $h4 = $("<h4>").addClass("owl").text("Hagrid");
  const $wand = $("<h4>").text("Holly Wand with Unicorn Hair Core");

  $container.append($h2, $h3, $h4, $wand);

  // ============================================================
  // Year 3
  // ============================================================

  const $unorderedList = $("<ul>").attr({ storage: "trunk" });

  const arrayOfItems = [
    $("<li>").text("Butter Beer"),
    $("<li>").text("Invisibility Cloak").addClass("secret"),
    $("<li>").text("Magic Map").addClass("secret"),
    $("<li>").text("Time Turner").addClass("secret"),
    $("<li>").text("Leash").addClass("owl"),
    $("<li>").text("Bertie Bott's Every Flavour [Jelly] Beans"),
  ];

  for (let item of arrayOfItems) {
    $unorderedList.append(item);
  }

  $container.append($unorderedList);

  // ============================================================
  // Year 4
  // ============================================================

  const $table = $("<table>");
  const $h5 = $("<h5>").text("Spring 2017");
  const $thead = $("<thead>");
  const $thDay = $("<th>").text("Day");
  const $thClasses = $("<th>").text("Classes");

  const classes = {
    Monday: ["Herbology", "Divination"],
    Tuesday: ["History of Magic", "Charms"],
    Wednesday: ["Potions", "Transfiguration"],
    Thursday: ["Defense Against the Dark Arts", "Quidditch practice"],
    Friday: ["History of Magic", "Defense Against the Dark Arts"],
  };

  $container.append($table);
  $h5.insertBefore($table);

  $thead.append($thDay, $thClasses);
  $table.append($thead);

  for (const day in classes) {
    const $tr = $("<tr>");
    const $tdDay = $("<td>").text(day);
    const $tdClasses = $("<td>").text(classes[day].join(", "));
    $tr.append($tdDay, $tdClasses);
    $table.append($tr);
  }

  // ============================================================
  // Year 5
  // ============================================================

  $wand.remove();
  $("li:contains('Butter Beer')").remove();

  $wand.text("The Elder Wand");
  $wand.insertAfter($h4);

  $wand.css("color", "indigo");
  $h4.remove();
  setTimeout(() => {
    $h4.insertBefore($wand);
  }, 2000);

  // ============================================================
  // Year 6
  // ============================================================

  $(".secret").hide("slow").delay(2000).show("slow");

  for (let i = 0; i < $("li").length; i++) {
    if ($("li").eq(i).hasClass("owl")) {
      $("li").eq(i).addClass("cabbage");
    }
  }

  $(".cabbage").removeClass("cabbage");

  // ============================================================
  // Year 7
  // ============================================================

  $h5.text("Fall 2018");
  $("ul").prepend($("<li>").text("Butter Beer"));
  $("ul").removeAttr("storage").attr("storage", "chest");
});

//Part II: JavaScript Reps
//Easy Going---------------------------------------------------------
//Write a for loop that will log the numbers 1 through 20.

// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }

//Get Even---------------------------------------------------------
//Write a for loop that will log only the even numbers in 0 through 200.
//Hint: Think about the increment expression.

// for (let i = 0; i <= 200; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//Fizz Buzz---------------------------------------------------------
// This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

//Wild Wild Life---------------------------------------------------------
//Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
// const sharky = ["Sharky", "shark", 20, "Left Coast"];
// const plantee = ["Plantee", "plant", 5000, "Mordor"];
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
// const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// Give D'Art a second hometown by adding "Hawkins".
// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".

// plantee[2] = 5001;
// console.log(plantee);

// wolfy[3] = "Gotham City";
// console.log(wolfy);

// dart.push("Hawkins");
// console.log(dart);

// wolfy.splice(0, 1, "Gameboy");
// console.log(wolfy);

//Yell at the Ninja Turtles---------------------------------------------------------
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.
// As a developer, you'll be a lifelong learner and constantly encountering new things. We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own. You've got this!

// const nturtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// for (const item of nturtles) {
//   console.log(item.toUpperCase());
// }

//Methods, Revisited---------------------------------------------------------
//Here is a list of favMovies:
// const favMovies = [
//   "Jaws",
//   "The Fellowship of the Ring",
//   "Howl's Moving Castle",
//   "Django Unchained",
//   "Cloud Atlas",
//   "The Usual Suspects",
//   "Toy Story",
//   "Conan the Barbarian",
//   "Titanic",
//   "Harry Potter",
//   "Fried Green Tomatoes",
//   "Volver",
//   "Oculus",
//   "Seven",
//   "Black Panther",
//   "Harry Potter",
//   "Imitation of Life",
//   "Snatch",
//   "Fast and Furious",
// ];
// //Console log: the index of Titanic
// //Do the following and console.log the final results (I have included some thought questions, you don't have to write out an answer for those marked as such):

// console.log(favMovies.indexOf("Titanic"));
// //use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
// console.log(favMovies.sort()); //sorting the arrays alphabetically. numbers will come first, followed by Capitalised and smaller letters.
// //Use the method pop
// console.log(favMovies.pop()); //removes the last element of the array.
// //push "Guardians of the Galaxy"
// favMovies.push("Guardians of the Galaxy"); //adds a new element to the back of the array
// console.log(favMovies);
// //Reverse the array
// favMovies.reverse(); //reverses the array.
// console.log(favMovies);
// //Use the shift method
// favMovies.shift(); //remove an element from the start of the array
// console.log(favMovies);
// //unshift - what does it return?
// favMovies.unshift("Ready Player One"); //adding elements to the start of the array
// console.log(favMovies);
// //splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
// console.log(favMovies.indexOf("Django Unchained"));
// favMovies.splice(15, 1, "Avatar"); //Yes it permanantly altered the array.
// console.log(favMovies);
// //slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
// console.log(favMovies.length * 0.5);
// console.log(favMovies.slice(10, 20)); //does not permanantly alter the array
// console.log(favMovies);
// //store the value of your slice in a variable, console.log it - Thought question: what is going on here?
// const slicedMovies = favMovies.slice(10, 20);
// console.log(slicedMovies); //You now have a variable with favourite movies from the last half of the favMovies list, where you can access in the future.
// //console.log your final results
// console.log(favMovies);
// //After running the above tasks, console.log the index of "Fast and Furious"
// console.log(favMovies.indexOf("Fast and Furious")); //did not remove from array.
// console.log(favMovies.indexOf("Funny Movie")); //the output is -1 as it is not in the array.

//Where is Waldo---------------------------------------------------------
// const whereIsWaldo = [
//   ["Timmy", "Frank"],
//   "Eggbert",
//   ["Lucinda", "Jacc", "Neff", "Snoop"],
//   ["Petunia", ["Baked Goods", "Waldo"]],
// ];
// //Remove Eggbert (hint look at the slice/splice method(s))
// // Change "Neff" to "No One"
// // Access and console.log "Waldo"

// whereIsWaldo.splice(1, 1);
// console.log(whereIsWaldo);
// whereIsWaldo[1][2] = "No One";
// console.log(whereIsWaldo);
// console.log(whereIsWaldo[2][1][1]);

//Excited Kitten---------------------------------------------------------
//Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
//For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

// const noises = [
//   "...human...why you taking pictures of me?...",
//   "...the catnip made me do it...",
//   "...why does the red dot always get away...",
// ];

// for (i = 0; i < 20; i++) {
//   if (i % 2 === 0) {
//     console.log(noises[Math.floor(Math.random() * noises.length)]);
//   } else {
//     console.log("Love me, pet me! HSSSSSS!");
//   }
// }

//Find the Median---------------------------------------------------------
//Find the median number in the following nums array, then console.log that number.
//hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )
// const nums = [
//   14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
//   17, 12, 71, 18, 15, 12,
// ];
// nums.sort();
// console.log(nums[Math.floor(nums.length * 0.5)]);

//Hungry for More?---------------------------------------------------------
//Return of the Closets---------------------------------------------------------
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

//Alien Attire
//Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.
const kristynsShoe = kristynsCloset.shift();
console.log(kristynsShoe);
thomsCloset[2].push(kristynsShoe);
console.log(thomsCloset);
//Dress Us Up
//Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!
//The commit message should read:
//"Kristyn and Thom have their outfits ready for class - array practice"

// for (let i = 0; i < 3; i++) {
//   console.log(
//     kristynsCloset[Math.floor(Math.random() * kristynsCloset.length)]
//   );
// }

console.log(thomsCloset[0][Math.floor(Math.random() * thomsCloset[0].length)]);
console.log(thomsCloset[1][Math.floor(Math.random() * thomsCloset[1].length)]);
console.log(thomsCloset[2][Math.floor(Math.random() * thomsCloset[2].length)]);

console.log(test);

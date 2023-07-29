///////////////////////////
//JavaSCriptReps
//////////////////////////

//Write a for loop that will log the numbers 1 through 20.
for (let i = 0; i <= 20; i++) {}

//Write a for loop that will log only the even numbers in 0 through 200.
for (let i = 0; i <= 200; i += 2);

/////////////////////////////////
//Fizz Buzz//
/////////////////////////////////

//1. Write a javascript application that logs all numbers from 1 - 100.
for (let i = 0; i<=100; i++){
    console.log (i);
}

//2. If a number is divisible by 3 log "Fizz" instead of the number.
    if (i % 3){
    console.log ("Fizz");}
    else {
    console.log ("i");
    }
}
//3. If a number is divisible by 5 log "Buzz" instead of the number.
if (i % 5){
    console.log ("Buzz");}
    else {
    console.log ("i");
    }

//4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
if (i % 3 && i % 5){
    console.log ("FizzBuzz");}
    else {
    console.log ("i");
    }


////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

//1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] = 5001;

//2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[-1] = "Gotham City";

//3. Give D'Art a second hometown by adding "Hawkins".
dart.unshift("Gotham City");

//4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy.shift();
wolfy.unshift("Gameboy");

/////////////////////////////////////
//Yell at the Ninja Turtles
/////////////////////////////////////

//1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
const ninjas = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

//2. Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.
   
for (let x of ninjas){
    x.toUpperCase();
}


/////////////////////////////
// Methods, Revisited
/////////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

//Console log: the index of Titanic
console.log (favMovies.indexOf("Titanic"));

//1. use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
favMovies.sort(); //yes

//2. Use the method pop
favMovies.pop();

//3. push "Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy");

//4. Reverse the array
favMovies.reverse();

//5. Use the shift method
favMovies.shift(); //removes first item

//6. unshift - what does it return?
favMovies.unshift(); //index

//7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
favMovies.indexOf("Django Unchained");
favMovies.splice(14,0,"Avatar");

//8. slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
favMovies.length
favMovies.slice(8,19)

//9. store the value of your slice in a variable, console.log it - Thought question: what is going on here?
console.log (favMovies.slice(8,19)); // creating a new array

//10. console.log your final results
console.log (favMovies);

//After running the above tasks, console.log the index of "Fast and Furious"
console.log(favMovies.indexOf("Fast and Furious"));

//Did we remove it from the array? What value do we get when we look for the index of something that is not in the array?
// No

//Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?
//works either


//////////////////////////////////////////////////////
// Where is Waldo
/////////////////////////////////////////////////////

const whereIsWaldo = [
    ["Timmy", "Frank"],
    "Eggbert",
    ["Lucinda", "Jacc", "Neff", "Snoop"],
    ["Petunia", ["Baked Goods", "Waldo"]],
  ];
//Remove Eggbert (hint look at the slice/splice method(s))
whereIsWaldo.splice(1, 1)

//Change "Neff" to "No One"
whereIsWaldo[2][1][1] = "No One";

//Access and console.log "Waldo"
whereIsWaldo = [3][1][1];


////////////////////////////////////////////////////////
//Excited Kitten
///////////////////////////////////////////////////////

//1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
for (let i = 0; i < 20; i++) {
    console.log("Love me, pet me! HSSSS!");
  }

//2. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
 const kittyTalk = ["...human...why you taking pictures of me?...","...the catnip made me do it...", "...why does the red dot always get away..."];
 let meow = 0;
 kittyTalk[meow];
 
 for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      console.log(kittyTalk[0]);
    } else if ((i = Math.floor(Math.random(meow) * 2))) {
      console.log(kittyTalk[1]);
    } else {
      console.log(kittyTalk[2]);
    }
  }

///////////////////////////////////////////////////////////////////
//Find the Median
///////////////////////////////////////////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

//1. Find the median number in the following nums array, then console.log that number.
// hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )
nums.sort();
nums.length();
Math.floor(nums.length / 2);
console.log (nums[Math.floor(nums.length / 2)]);

//////////////////////////////////
//Return of the Closets
////////////////////////////////

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

  /////Alien Attire////

  //1. Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.
  kristynsCloset.shift();
  console.log (kristynsCloset);
  //
  
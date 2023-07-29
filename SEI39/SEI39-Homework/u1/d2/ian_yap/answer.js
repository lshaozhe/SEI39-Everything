"use strict";

// Part 1

// Basic HTML - 3
// Basic HTML Elements - 3
// Advanced HTML Elements - 3
// HTML Links and Inputs - 3
// CSS - 3

//Javascript Reps

////////////////////
//Easy Going answered
//////////////////////

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//////////////////////
//Get Even answered
//////////////////////

for (let i = 0; i <= 200; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

///////////////////////
//FizzBuzz answered
////////////////////////

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  }
  if (i % 5 === 0) {
    console.log("Buzz");
  }
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
}

//////////////////////////
//Wild Wild Life answered
/////////////////////////

plantee[2] = 5001;
wolfy[3] = "Gotham City";
dart.push("Hawkins");
wolfy.shift();
wolfy.unshift("Gameboy");

/////////////////////////
//Yell at the Ninja Turtles answered
/////////////////////////

let arr = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

const newArr = [];
for (let item of arr) {
  newArr.push(item.toUpperCase());
}

console.log(newArr);

/////////////////////////
//Methods Revisited answered
/////////////////////////

console.log(favMovies[8]);
//.sort method sorts the elements as string in an alphabetical and asecending order, it permanently overwrites the array
favMovies.pop();
favMovies.reverse();
favMovies.shift();
favMovies.unshift("Top Gun"); //it returns "Top Gun" as the first element of the array"
favMovies.splice(3, 1, "Avatar");

const half = Math.ceil(favMovies.length / 2);

const secondHalf = favMovies.splice(half);

console.log(secondHalf);

console.log(favMovies[18]); //"Fast and Furious" has been removed from the array and a value of undefined is returned.

////////////////////////////
//Where is Waldo answered
///////////////////////////

whereIsWaldo.splice(1, 1);

whereIsWaldo[2][2] = "No One";

console.log(whereIsWaldo[3][1][1]);

/////////////////////////////
//Excited Kittens answered
////////////////////////////

for (let i = 0; i < 20; i++) {
  

///////////////////////////////
//Find the Median answered

nums.sort();

console.log(nums[Math.floor(nums.length / 2)]);
///////////////////////////////

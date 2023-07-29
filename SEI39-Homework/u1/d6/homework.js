///////////////////
// Creating Classes
///////////////////

// ========= Hamster ==============
// attributes:
// owner - string, initially set as an empty string
// name - string, set the name from parameter in constructor method
// price - integer, set as 15
// methods:
// wheelRun() - log "squeak squeak"
// eatFood() - log "nibble nibble"
// getPrice() - return the price

class Hamster {
  constructor(owner, name, price) {
    (this.owner = owner), (this.name = name), (this.price = 15);
  }

  wheelRun() {
    console.log("squeak squeak");
  }

  eatFood() {
    console.log("nibble nibble");
  }

  getPrice() {
    return this.price;
  }
}

const hamster = new Hamster("", "Hammie", 15);

// =========== Person =================
// attributes:
// name - set name from parameter in constructor method
// age - initially 0
// height - initially 0
// weight - initially 0
// mood - integer starting at 0 initially
// hamsters - empty array initially
// bankAccount - initially set to 0
// methods:
// getName() - returns name
// getAge() - returns age
// getWeight() - returns weight
// greet() - logs a message with person's name
// eat() - increment weight, increment mood
// exercise() - decrement weight
// ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
// buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())

class Person {
  constructor(name, age, height, weight, mood, hamster, bankAccount) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamster = [];
    this.bankAccount = 0;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getWeight() {
    return this.weight;
  }

  greet(person2) {
    console.log(`Hello ${person2}`);
  }

  eat() {
    this.weight++, this.mood++;
  }

  exercise() {
    return this.weight--;
  }

  ageUp(age) {
    // this.age++;
    this.age = age;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
  }

  buyHamster(hamster) {
    const newHamster = new Hamster(this.name, hamster);
    this.mood += 10;
    this.bankAccount -= newHamster.getPrice();
  }
}

///////////////////////////////////////////
// Create a Story with your Person class
////////////////////////////////////////////

// Feel free to update or add methods to automate some of these tasks.

// Instantiate a new Person named Timmy
const timmy = new Person("Timmy");

// Age Timmy five years
timmy.ageUp(5);

// At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();

// Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.exercise();

// Age Timmy 9 years

timmy.ageUp(9);

// Create a hamster named "Gus"
const gus = new Hamster("timmy.getName()", "Gus");
timmy.buyHamster("Gus");

// Set Gus's owner to the string "Timmy"

const owner = new Hamster("Timmy");

// Have Timmy "buy" Gus
timmy.buyHamster(gus);

// Age Timmy 15 years
timmy.ageUp(15);

// Have Timmy eat twice
timmy.eat();
timmy.eat();

// Have Timmy exercise twice
timmy.exercise();
timmy.exercise();

////////////////////////////////////////////
//Daring Adventure! - Let's Go!
///////////////////////////////////////////

class Hero {
  constructor(name, health = 100, weapons, catchPhrases) {
    this.name = name;
    this.health = health;
    this.weapon = { sprinkleSpray: 5, sugarShock: 10 };
    this.catchPhrases = [
      "i'm fresher than day old pizza",
      "you can't count my calories",
    ];
  }
}

//talkSass: logs one of his catchphrases randomly
 talkSass() {
     console.log (this.catchPhrases[Math.floor(Math.random()*this.catchPhrases.length)]);
 }
////////////////////////////////////////////////////////
 ////////*********** why is there an error at {}? */
//////////////////////////////////////////////////

 // announceHealth: logs his current health
announceHealth (){
    console.log (this.health);
}
// fight: for now, logs 'i\'m ready to rumble'
fight () {
    console.log ("I'm ready to rumble");
}

const dougie = new Hero ("Dougie");

////////////////////
//Our Enemy
///////////////////
// Now let's create our Enemy class!

class Enemy extends Hero {
constructor (
    name,
    health = 100,
    weapon = {
    pepperoniStars: 5,
    cheeseGrease: 10
}
    catchPhrases = [
    "i\'m youtube famous",
    "i\'m more dangerous than an uncovered sewer"
  ]){
  /////////////******** why error? */

    super (name,health, weapon, catchPhrases);
}       
   

//     Methods:
// talkSmack: logs one of his catchphrases randomly
talkSmack () {
    console.log (this.catchPhrases[Math.floor(Math.random()*(this.catchPhrases).length); 
}

// announceHealth: logs his current health
announceHealth (){
    console.log (this._health);
}
// fight: for now, logs i\'m gonna flatten you like a slice of pepperoni!
fight (){
    console.log ("I'm gonna flatten you like a slice of pepperoni!");
}} 

const pizzaRat = new Enemy ("Pizza Rat")

////////////////////////////////////
// Walking Down the Street
///////////////////////////////////

// Now, let's write their story! Dougie is walking down Flat Iron -- but oh no! He runs into Pizza rat!

// Have Dougie talkSass
dougie.talkSass();

// Have Pizza Rat talkSmack
pizzaRat.talkSmack();

// Have Dougie announceHealth
dougie.announceHealth();

// Have Pizza Rat announceHealth
pizzaRat.announceHealth();

// Fight! //
// Things have escalated between Dougie and Pizza Rat!

// Upgrade their fight methods so that it accesses one of their weapons and console log its hitpoints. Bonus Utilize the name of each weapon by accesing the weapons object's keys.
let weaponList = Object.keys(this._weapons);

// Keep upgrading this fight method to accept an argument called enemy so that when you call on the fight method you can pass in the entire Dougie or Pizza Rat object as the parameter. (i.e. dougie.fight(pizzaRat))
// Now that we are able to pass in Dougie or Pizza Rat as an object, we can make it so that our fight method subtracts from their health.

// Using the hitpoints from the weapon they're using, subtract that amount from the enemy's health (i.e. If Dougie fights Pizza Rat using sprinkleSpray, subtract sprinkleSpray's hitpoint value (5) from Pizza Rat's health)
enemyName._health -= damage;

// Console log the enemy name and their new health value (i.e. 'Dougie got hit by pepperoniStars! His health is now at 95!')
console.log(`${enemyName.name} got hit by ${weaponSelected}! His health is now at ${enemyName.announceHealth()}!`)

// Now, they can fight!
fight(){
    fight(enemyName);
}
// Have Pizza Rat fight Dougie
(pizzaRat.dougie).fight();

// Have Dougie fight Pizza Rat
(dougie.pizzaRat).fight();

// Have Pizza Rat and Dougie both announceHealth to make sure their health has decreased!
pizzaRat.announceHealth();
dougie.announceHealth();

////////////END//////////////////
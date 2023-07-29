//============================================================================
//===================Daring Adventure! - Getting Started======================
//============================================================================

//For this section of the homework, you'll be making two objects that will interact. First we will create a Hero class,
//then an Enemy class, and instantiate our two objects from those classes.

//==================Our Hero
// Attributes:
// name: set name from parameter in constructor method
// health: initially 100
// weapons: use the following object

class Hero {
  constructor(name, health = 55, weapons, catchPhrases) {
    (this.name = name),
      (this.health = health),
      (this.weapons = {
        sprinkleSpray: 5,
        sugarShock: 10,
      }),
      (this.catchPhrases = [
        "i'm fresher than day old pizza",
        "you can't count my calories",
      ]);
  }
  talkSass() {
    return this.catchPhrases[Math.floor(Math.random() * 2)];
  }
  announceHealth() {
    return this.health;
  }
  getWeapons(choice) {
    return Object.keys(this.weapons)[choice];
  }
  fight(enemyName, weapon) {
    // return ();
    const newHealth = (enemyName.health -= this.weapons[weapon]);
    return `${enemyName.name} got hit by ${weapon}! His health is now at ${newHealth}!`;
    // return "i'm ready to rumble";
  }
}

//==================Methods:
// talkSass: logs one of his catchphrases randomly
// announceHealth: logs his current health
// fight: for now, logs 'i\'m ready to rumble'

const dougie = new Hero("Dougie");
console.log(dougie.getWeapons(0));

// console.log(dougie.talkSass());
// console.log(dougie.announceHealth());
// console.log(dougie.fight());

//==================Our Enemy:
// Attributes:
// name: set name from parameter in constructor method
// health: initially 100
// weapons: use the following object

class Enemy {
  constructor(name, health = 99, weapons, catchPhrases) {
    (this.name = name),
      (this.health = health),
      ((this.weapons = {
        pepperoniStars: 5,
        cheeseGrease: 10,
      }),
      (this.catchPhrases = [
        "i'm youtube famous",
        "i'm more dangerous than an uncovered sewer",
      ]));
  }
  talkSmack() {
    return this.catchPhrases[Math.floor(Math.random() * 2)];
  }
  announceHealth() {
    return this.health;
  }
  fight(heroName, weapon) {
    // heroName.health -= this.weapons.cheeseGrease;
    const newHealth = (heroName.health -= this.weapons[weapon]);
    return `${heroName} got hit by ${weapon}! His health is now at ${newHealth} `;
    // return `i\'m gonna flatten you like a slice of pepperoni!`;
  }
}

// Methods:
// talkSmack: logs one of his catchphrases randomly
// announceHealth: logs his current health
// fight: for now, logs i\'m gonna flatten you like a slice of pepperoni!

const pizzaRat = new Enemy("Pizza Rat");
// console.log(pizzaRat.talkSmack());
// console.log(pizzaRat.announceHealth());
// console.log(pizzaRat.fight());

//==================Walking Down the Street
// Now, let's write their story! Dougie is walking down Flat Iron -- but oh no! He runs into Pizza rat!

// Have Dougie talkSass
// Have Pizza Rat talkSmack
// Have Dougie announceHealth
// Have Pizza Rat announceHealth

// console.log(dougie.talkSass());
// console.log(pizzaRat.talkSmack());
// console.log(dougie.announceHealth());
// console.log(pizzaRat.announceHealth());

//==================Fight!
// Things have escalated between Dougie and Pizza Rat!

// Upgrade their fight methods so that it accesses one of their weapons and console log its hitpoints.
//Bonus Utilize the name of each weapon by accesing the weapons object's keys.

// Keep upgrading this fight method to accept an argument called enemy so that when you call on the fight
//method you can pass in the entire Dougie or Pizza Rat object as the parameter. (i.e. dougie.fight(pizzaRat))

// Now that we are able to pass in Dougie or Pizza Rat as an object, we can make it so that our fight method
//subtracts from their health.

// Using the hitpoints from the weapon they're using, subtract that amount from the enemy's health (i.e.
//If Dougie fights Pizza Rat using sprinkleSpray, subtract sprinkleSpray's hitpoint value (5) from Pizza Rat's health)

// Console log the enemy name and their new health value (i.e. 'Dougie got hit by pepperoniStars! His health is now at 95!')
// Now, they can fight!

// Have Pizza Rat fight Dougie
// Have Dougie fight Pizza Rat
// Have Pizza Rat and Dougie both announceHealth to make sure their health has decreased!

console.log({ pizzaRat });
console.log(dougie.fight(pizzaRat, dougie.getWeapons(0)));
console.log(pizzaRat.fight(dougie, "cheeseGrease"));
console.log({ dougie });
console.log(dougie.announceHealth());
console.log(pizzaRat.announceHealth());

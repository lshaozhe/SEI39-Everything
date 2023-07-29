"use strict";

//Our Hero
class Hero {
  constructor(
    name = "",
    health = 100,
    weapons = {
      sprinkleSpray: 5,
      sugarShock: 10,
    },
    catchPhrases = [
      "i'm fresher than day old pizza",
      "you can't count my calories",
    ]
  ) {
    (this.name = name),
      (this.health = health),
      (this.weapons = weapons),
      (this.catchPhrases = catchPhrases);
  }
  talkSass() {
    console.log(
      this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]
    );
  }
  announceHealth() {
    console.log(`The current health of ${this.name} is ${this.health}`);
  }
  fight(enemy) {
    //console.log(`I'm ready to rumble`);
    let chosenWeapon = weaponChooser(this.weapons); //Chooses a weapon from the enemy
    this.health -= chosenWeapon[1];
    console.log(
      `${enemy.name} got hit by ${chosenWeapon[0]}! His health is now at ${this.health}!`
    );
  }
}
const dougie = new Hero("Dougie");

//Our Enemy
class Enemy {
  constructor(
    name = "",
    health = 100,
    weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10,
    },
    catchPhrases = [
      "i'm youtube famous",
      "i'm more dangerous than an uncovered sewer",
    ]
  ) {
    (this.name = name),
      (this.weapons = weapons),
      (this.health = health),
      (this.catchPhrases = catchPhrases);
  }
  talkSmack() {
    console.log(
      this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]
    );
  }
  announceHealth() {
    console.log(`The current health of ${this.name} is ${this.health}`);
  }
  fight(enemy) {
    //console.log(`i'm gonna flatten you like a slice of pepperoni!`);
    let chosenWeapon = weaponChooser(this.weapons); //Chooses a weapon from the enemy
    this.health -= chosenWeapon[1];
    console.log(
      `${enemy.name} got hit by ${chosenWeapon[0]}! His health is now at ${this.health}!`
    );
  }
}
const pizzaRat = new Enemy("Pizza Rat");

//Walking Down the Street
dougie.talkSass();
pizzaRat.talkSmack();
dougie.announceHealth();
pizzaRat.announceHealth();

//Fight!
function weaponChooser(arr) {
  //takes in object of weapons by the classes and randomise the weapon of choice
  const weaponArr = Object.entries(arr);
  const weaponChosen = weaponArr[Math.floor(Math.random() * weaponArr.length)];
  return weaponChosen; //return [weapon, damage]
}

//fights until 1 party reaches 0 health
let i = 1;
while (dougie.health > 0 && pizzaRat.health > 0) {
  console.log("Turn " + i + " :");
  i++;
  dougie.fight(pizzaRat);
  pizzaRat.fight(dougie);
}

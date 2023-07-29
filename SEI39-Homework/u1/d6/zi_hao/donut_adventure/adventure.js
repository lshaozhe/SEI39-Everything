"use strict";
////////////////
// Our Hero

class Hero {
  constructor(
    name,
    health = 100,
    weapons = { sprinkleSpray: 5, sugarShock: 10 },
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
    return this.catchPhrases[
      Math.floor(Math.random() * this.catchPhrases.length)
    ];
  }
  announceHealth() {
    return `${this.name}'s health is ${this.health}`;
  }
  fight(enemy) {
    const weaponType = Object.keys(this.weapons);
    const selectedWeapon =
      weaponType[Math.floor(Math.random() * weaponType.length)];
    const weaponDamage = this.weapons[selectedWeapon];
    // let weaponDamage = 0;
    // if (selectedWeapon === "sprinkleSpray") {
    //   weaponDamage = 5;
    // } else {
    //   weaponDamage = 10;
    // }
    // if ... else not recommended as it would be considered as hard-coding
    enemy.health -= weaponDamage;

    return `${this.name} used ${selectedWeapon}, dealing ${weaponDamage} damage! ${enemy.name} now has ${enemy.health} health.`;
  }
}

const dougie = new Hero("Dougie");

//////////////
// our Enemy

class Enemy {
  constructor(
    name,
    health = 100,
    weapons = { pepperoniStars: 5, cheeseGrease: 10 },
    catchPhrases = [
      "i'm youtube famous",
      "i'm more dangerous than an uncovered sewer",
    ]
  ) {
    (this.name = name),
      (this.health = health),
      (this.weapons = weapons),
      (this.catchPhrases = catchPhrases);
  }
  talkSmack() {
    return this.catchPhrases[
      Math.floor(Math.random() * this.catchPhrases.length)
    ];
  }
  announceHealth() {
    return `${this.name}'s health is ${this.health}`;
  }
  fight(enemy) {
    const weaponType = Object.keys(this.weapons);
    const selectedWeapon =
      weaponType[Math.floor(Math.random() * weaponType.length)];
    const weaponDamage = this.weapons[selectedWeapon];
    enemy.health -= weaponDamage;
    return `${this.name} used ${selectedWeapon}, dealing ${weaponDamage} damage! ${enemy.name} now has ${enemy.health} health.`;
  }
}

const pizzaRat = new Enemy("Pizza Rat");

////////////////////////////
// Walking Down the Street

console.log(dougie.talkSass());
console.log(pizzaRat.talkSmack());
console.log(dougie.announceHealth());
console.log(pizzaRat.announceHealth());

console.log(dougie.fight(pizzaRat));
console.log(pizzaRat.fight(dougie));
console.log(dougie.announceHealth());
console.log(pizzaRat.announceHealth());

//////////////////////
// Game with Ending
while (dougie.health > 0 && pizzaRat.health > 0) {
  console.log(dougie.fight(pizzaRat));
  console.log(pizzaRat.fight(dougie));
}
if (dougie.health <= 0) {
  console.log("Pizza Rat won the fight!");
} else if (pizzaRat.health <= 0) {
  console.log("Dougie won the fight!");
}

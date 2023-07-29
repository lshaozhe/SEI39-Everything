"use strict";

// Our Hero
class Hero {
  constructor(
    name,
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
    this.name = name;
    this.health = health;
    this.weapons = weapons;
    this.catchPhrases = catchPhrases;
  }

  talkSass() {
    console.log(
      this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]
    );
  }

  announceHealth() {
    console.log(`${this.name} current health is ${this.health}`);
  }

  fight(enemy) {
    const weaponKeys = Object.keys(this.weapons);
    const randomIndex = Math.floor(Math.random() * weaponKeys.length);
    const weaponPulled = weaponKeys[randomIndex];
    const hitpointsDealt = Object.values(this.weapons)[randomIndex];
    enemy.health -= hitpointsDealt;
    console.log(`I\'m ready to rumble ${enemy.name}! Weapon pulled: ${weaponPulled} Hitpoints dealt: ${hitpointsDealt}`);
    console.log(`${enemy.name} got hit by ${this.name}! His health is now at ${enemy.health}!`)
  }
}

const dougie = new Hero("Dougie");

console.log(dougie);

// Our Enemy
class Enemy extends Hero {
  constructor(
    name,
    health,
    weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10,
    },
    catchPhrases = [
      "i'm youtube famous",
      "i'm more dangerous than an uncovered sewer",
    ]
  ) {
    super(name, health, weapons, catchPhrases);
  }

  talkSmack() {
    console.log(
      this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]
    );
  }

  fight(enemy) {
    const weaponKeys = Object.keys(this.weapons);
    const randomIndex = Math.floor(Math.random() * weaponKeys.length);
    const weaponPulled = weaponKeys[randomIndex];
    const hitpointsDealt = Object.values(this.weapons)[randomIndex];
    enemy.health -= hitpointsDealt;
    console.log(`I\'m gonna flatten you like a slice of pepperoni ${enemy.name}! Weapon pulled: ${weaponPulled} Hitpoints dealt: ${hitpointsDealt}`);
    console.log(`${enemy.name} got hit by ${this.name}! His health is now at ${enemy.health}!`)
  }
}

const pizzaRat = new Enemy("Pizza Rat");
console.log(pizzaRat);

// Walking Down the Street
dougie.talkSass();
pizzaRat.talkSmack();
dougie.announceHealth();
pizzaRat.announceHealth();

// Fight!
pizzaRat.fight(dougie);
dougie.fight(pizzaRat);
pizzaRat.announceHealth();
dougie.announceHealth();
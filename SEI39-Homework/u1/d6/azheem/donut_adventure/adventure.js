"use strict";

class Hero {
  constructor(name, health = 100) {
    (this.name = name),
      (this.health = health),
      (this.weapons = { sprinkleSpray: 5, sugarShock: 10 }),
      (this.catchPhrases = [
        "i'm fresher than day old pizza",
        "you can't count my calories",
      ]);
  }
  talkSass() {
    console.log(this.catchPhrases[Math.floor(Math.random() * 2)]);
  }
  announceHealth() {
    console.log(this.health);
  }
  fight(enemy) {
    console.log("i'm ready to rumble");
    const weaponsOptions = Object.keys(enemy.weapons);
    const weaponsSelected =
      weaponsOptions[Math.floor(Math.random() * weaponsOptions.length)];
    console.log(`Weapon Selected => ${weaponsSelected}`);
    console.log(`Hitpoints => ${enemy.weapons[weaponsSelected]}`);
    this.health -= enemy.weapons[weaponsSelected];
    console.log(
      `${this.name} got hit by ${enemy.name}! His health is now at ${this.health}`
    );
  }
}

const dougieTheDonut = new Hero("Dougie the Donut");

class Enemy {
  constructor(name, health = 100) {
    (this.name = name),
      (this.health = health),
      (this.weapons = {
        pepperoniStars: 5,
        cheeseGrease: 10,
      }),
      (this.catchPhrases = [
        "i'm youtube famous",
        "i'm more dangerous than an uncovered sewer",
      ]);
  }
  talkSmack() {
    console.log(this.catchPhrases[Math.floor(Math.random() * 2)]);
  }
  announceHealth() {
    console.log(this.health);
  }
  fight(hero) {
    console.log("i'm gonna flatten you like a slice of pepperoni!");
    const weaponsOptions = Object.keys(hero.weapons);
    const weaponsSelected =
      weaponsOptions[Math.floor(Math.random() * weaponsOptions.length)];
    console.log(`Weapon Selected => ${weaponsSelected}`);
    console.log(`Hitpoints => ${hero.weapons[weaponsSelected]}`);
    this.health -= hero.weapons[weaponsSelected];
    console.log(
      `${this.name} got hit by ${hero.name}! His health is now at ${this.health}`
    );
  }
}

const pizzaRat = new Enemy("Pizza Rat");

// dougieTheDonut.talkSass();
// pizzaRat.talkSmack();
// dougieTheDonut.announceHealth();
// pizzaRat.announceHealth();

pizzaRat.fight(dougieTheDonut);

dougieTheDonut.fight(pizzaRat);

pizzaRat.announceHealth();
dougieTheDonut.announceHealth();

//////////////////
// Hungry for More
//////////////////

// 1. Make it into a game with an ending, until someone has 0 health left.
while (dougieTheDonut.health > 0 || pizzaRat.health > 0) {
  pizzaRat.fight(dougieTheDonut);
  dougieTheDonut.fight(pizzaRat);
  pizzaRat.announceHealth();
  dougieTheDonut.announceHealth();
  if (dougieTheDonut.health === 0 || pizzaRat.health === 0) {
    break;
  }
}

// 3. Randomize the weapon choice in the fight method. => done in earlier parts

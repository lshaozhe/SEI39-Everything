"use strict";

//========================================================================
//Our Hero
//========================================================================

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
    (this.name = name),
      (this.health = health),
      (this.weapons = weapons),
      (this.catchPhrases = catchPhrases);
  }

  talkSass() {
    console.log(this.catchPhrases[Math.floor(Math.random() * 2)]);
  }

  announceHealth() {
    console.log(this.health);
  }

  fight(enemy) {
    const weaponsArr = Object.keys(this.weapons);
    const selectedWeapon = weaponsArr[Math.floor(Math.random() * 2)];
    console.log(this.weapons[selectedWeapon]);
    enemy.health = enemy.health - this.weapons[selectedWeapon];
    console.log(
      `Pizza Rat got hit by Dougie! His health is now at ${enemy.health}`
    );
  }
}

const dougie = new Hero("Dougie");

//========================================================================
//Our Enemy
//========================================================================

class Enemy {
  constructor(
    name,
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
      (this.health = health),
      (this.weapons = weapons),
      (this.catchPhrases = catchPhrases);
  }

  talkSmack() {
    console.log(this.catchPhrases[Math.floor(Math.random() * 2)]);
  }

  announceHealth() {
    console.log(this.health);
  }

  fight(enemy) {
    const weaponsArr = Object.keys(this.weapons);
    const selectedWeapon = weaponsArr[Math.floor(Math.random() * 2)];
    console.log(this.weapons[selectedWeapon]);
    enemy.health = enemy.health - this.weapons[selectedWeapon];
    console.log(
      `Dougie got hit by Pizza Rat! His health is now at ${enemy.health}`
    );
  }
}

const pizzaRat = new Enemy("Pizza Rat");

//========================================================================
//Walking Down the Street
//========================================================================

dougie.talkSass();
pizzaRat.talkSmack();
dougie.announceHealth();
pizzaRat.announceHealth();

//========================================================================
//Fight!
//========================================================================

dougie.fight(pizzaRat);
pizzaRat.fight(dougie);

pizzaRat.announceHealth();
dougie.announceHealth();

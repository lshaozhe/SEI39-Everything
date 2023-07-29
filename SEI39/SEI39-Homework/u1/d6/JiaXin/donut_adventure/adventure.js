"use strict";

class Hero {
  constructor(
    name,
    health = 100,
    weapon = {
      sprinkleSpray: 5,
      sugarShock: 10,
    },
    catchPhrase = [
      "i'm fresher than day old pizza",
      "you can't count my calories",
    ];
  ) {
    (this.name = name),
      (this.health = health),
      (this.weapon = weapon),
      (this.catchPhrase = catchPhrase);
  }
  talkSass() {
    const PhraseArr = Object.keys(this.catchPhrase);
    let x = PhraseArr[Math.floor(Math.random() * 2)];

    console.log(this.catchPhrase[x]);
  }
  announceHealth() {
    console.log(this.health);
  }
  fight(enemy) {
    //console.log("i'm ready to rumble");
    const weaponArr = Object.keys(this.weapon);
    let selectedWeapon = weaponArr[Math.floor(Math.random() * 2)];
    console.log(this.weapon[selectedWeapon]);
    enemy.health = enemy.health - this.weapon[selectedWeapon];
    console.log(
      "Dougie got hit by " +
        selectedWeapon +
        "! His Health is now at " +
        enemy.health
    );
  }
}

//talkSass: logs one of his catchphrases randomly
const dougie = new Hero("Dougie");
//ougie.talkSass();
//announceHealth: logs his current health
//dougie.announceHealth();
//fight: for now, logs 'i\'m ready to rumble'
//dougie.fight();

//"created our hero dougie"

//Our Enemy
class Enemy extends Hero {
  constructor(
    name,
    health = 100,
    weapon = {
      pepperoniStars: 5,
      cheeseGrease: 10,
    },
    catchPhrase = [
      "i'm youtube famous",
      "i'm more dangerous than an uncovered sewer",
    ];
  ) {
    super(name, health, weapon, catchPhrase);
  }
  talkSass() {
    const PhraseArr = Object.keys(this.catchPhrase);
    let x = PhraseArr[Math.floor(Math.random() * 2)];

    console.log(this.catchPhrase[x]);
  }
  announceHealth() {
    console.log(this.health);
  }
  fight(enemy) {
    // console.log("i'm gonna flatten you like a slice of pepperoni!");
    const weaponArr = Object.keys(this.weapon);
    let selectedWeapon = weaponArr[Math.floor(Math.random() * 2)];
    console.log(this.weapon[selectedWeapon]);
    enemy.health = enemy.health - this.weapon[selectedWeapon];
    console.log(
      "Pizza Rat got hit by " +
        selectedWeapon +
        "! His Health is now at " +
        enemy.health
    );
  }
}
//talkSass: logs one of his catchphrases randomly
const enemryPizzaRat = new Enemy("Pizza Rat");
//enemryPizzaRat.talkSass();
//announceHealth: logs his current health
//enemryPizzaRat.announceHealth();
//fight: for now, logs 'i\'m ready to rumble'
//enemryPizzaRat.fight();

//"created our enemy pizza rat"

/*
Walking Down the Street
1. Have Dougie talkSass
dougie.talkSass();
2. Have Pizza Rat talkSmack
enemryPizzaRat.talkSass();
3. Have Dougie announceHealth
dougie.announceHealth();
4. Have Pizza Rat announceHealth
enemryPizzaRat.announceHealth();
*/
//Fight!
dougie.fight(enemryPizzaRat);
enemryPizzaRat.fight(dougie);

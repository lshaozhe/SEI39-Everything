"use strict";

// console.log("hello donut");
////////////////////
// daring adventure! Our hero
////////////////////

class Hero {
  constructor(
    name,
    health = 100,
    weapons = {
      sprinkleSpray: 5,
      sugarShock: 10
    },
    catchPhrases = ['i\'m fresher than day old pizza',
      'you can\'t count my calories'
    ]) {
    (this._name = name),
    (this._health = health),
    (this._weapons = weapons),
    (this._catchPhrases = catchPhrases);
  }
  talkSass() {
    console.log(this._catchPhrases[Math.floor(Math.random() * (this._catchPhrases).length)])
  }
  announceHealth() {
    return this._health
  }
  fight(enemyName) {
    console.log("i'm ready to rumble");
    let weaponList = Object.keys(this._weapons);
    let randomWeapInd = Math.floor(Math.random() * weaponList.length);
    let weaponSelected = weaponList[randomWeapInd];
    let damage = this._weapons[weaponSelected];
    // let damage = this._weapons.weaponList[randomWeapInd];
    // console.log(weaponList);
    // console.log(weaponSelected);
    // console.log(damage);
    enemyName._health -= damage;
    // console.log(enemyName.announceHealth());
    console.log(`${enemyName._name} got hit by ${weaponSelected}, received ${damage} damage! ${enemyName._name}'s health is now at ${enemyName.announceHealth()}!`)
  }
}

const dougie = new Hero("Dougie");

// console.log(dougie)
// dougie.talkSass();
// console.log(dougie.announceHealth());
// dougie.fight();


////////////////////
// daring adventure! Our enemy
////////////////////

class Enemy extends Hero {
  constructor(name,
    health = 100,
    weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10
    },
    catchPhrases = [
      'i\'m youtube famous',
      'i\'m more dangerous than an uncovered sewer'
    ]

  ) {
    super(name, health, weapons, catchPhrases);
  }
  talkSmack() {
    console.log(this._catchPhrases[Math.floor(Math.random() * (this._catchPhrases).length)])
  }
  fight(enemyName) {
    console.log('i\'m gonna flatten you like a slice of pepperoni!');
    let weaponList = Object.keys(this._weapons);
    let randomWeapInd = Math.floor(Math.random() * weaponList.length);
    let weaponSelected = weaponList[randomWeapInd];
    let damage = this._weapons[weaponSelected];
    // let damage = this._weapons.weaponList[randomWeapInd];
    // console.log(weaponList);
    // console.log(weaponSelected);
    // console.log(damage);
    enemyName._health -= damage;
    // console.log(enemyName.announceHealth());
    console.log(`${enemyName._name} got hit by ${weaponSelected}, received ${damage} damage! ${enemyName._name}'s health is now at ${enemyName.announceHealth()}!`)
  }
}

const pizzaRat = new Enemy("Pizza Rat");
// console.log(pizzaRat);
// console.log(pizzaRat.announceHealth());
// pizzaRat.talkSmack();

////////////////////
// walking down the street
////////////////////

// Have Dougie talkSass
dougie.talkSass();
// Have Pizza Rat talkSmack
pizzaRat.talkSmack();
// Have Dougie announceHealth
console.log(dougie.announceHealth());
// Have Pizza Rat announceHealth
console.log(pizzaRat.announceHealth());

//Have Pizza Rat fight Dougie
dougie.fight(pizzaRat);
//Have Dougie fight Pizza Rat
pizzaRat.fight(dougie);
// Have Dougie announceHealth
console.log("Dougie: " + dougie.announceHealth());
// Have Pizza Rat announceHealth
console.log("Pizza Rat: " + pizzaRat.announceHealth());
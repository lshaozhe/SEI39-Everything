"use strict";

///////////////////////////////
// created our hero dougie
///////////////////////////////
class Hero {
  constructor(
    name,
    health = 100,
    weapons = { sprinkleSpray: 5, sugarShock: 10 },
    catchPhrases = [
      `i\'m fresher than day old pizza`,
      `you can\'t count my calories`,
    ]
  ) {
    (this.name = name),
      (this.health = health),
      (this.weapons = weapons),
      (this.catchPhrases = catchPhrases);
  }

  getName() {
    return this.name;
  }

  talkSass() {
    const catchPhrasesArray = Object.keys(this.catchPhrases);
    let x =
      catchPhrasesArray[Math.floor(Math.random() * catchPhrasesArray.length)];
    console.log(this.catchPhrases[x]);
  }

  announceHealth() {
    console.log(`current health: ${this.health}`);
  }

  fight(enemy) {
    console.log(`i\'m ready to rumble`);
    // upgrades: accesses one of their weapons and console log its hitpoints
    const weaponsArray = Object.keys(this.weapons);
    let weaponUsed =
      weaponsArray[Math.floor(Math.random() * weaponsArray.length)];
    // console.log(weaponUsed); // shows weapon choice
    // console.log(this.weapons[weaponUsed]); // shows hitpoints (but I cant store the value in a variable)
    enemy.health -= this.weapons[weaponUsed];
    console.log(
      `${
        this.name
      } attacked ${enemy.getName()} with ${weaponUsed}! ${enemy.getName()}'s health is now ${
        enemy.health
      }.`
    );
  }
}

const heroDonut = new Hero("Dougie the donut");
console.log(heroDonut);

////////////////////////////////////
// created our enemy pizza rat
///////////////////////////////////
class Enemy {
  constructor(
    name,
    health = 100,
    weapons = { pepperoniStars: 5, cheeseGrease: 10 },
    catchPhrases = [
      `i\'m youtube famous`,
      `i\'m more dangerous than an uncovered sewer`,
    ]
  ) {
    (this.name = name),
      (this.health = health),
      (this.weapons = weapons),
      (this.catchPhrases = catchPhrases);
  }

  getName() {
    return this.name;
  }

  talkSmack() {
    const catchPhrasesArray = Object.keys(this.catchPhrases);
    let x =
      catchPhrasesArray[Math.floor(Math.random() * catchPhrasesArray.length)];
    console.log(this.catchPhrases[x]);
  }

  announceHealth() {
    console.log(`current health: ${this.health}`);
  }

  fight(hero) {
    console.log(`i\'m gonna flatten you like a slice of pepperoni!`);
    // upgrades: accesses one of their weapons and console log its hitpoints
    const weaponsArray = Object.keys(this.weapons);
    let weaponUsed =
      weaponsArray[Math.floor(Math.random() * weaponsArray.length)];
    console.log(weaponUsed);
    // console.log(weaponUsed); // shows weapon choice
    // console.log(this.weapons[weaponUsed]); // shows hitpoints (but I cant store the value in a variable)
    hero.health -= this.weapons[weaponUsed];
    console.log(
      `${
        this.name
      } attacked ${hero.getName()} with ${weaponUsed}! ${hero.getName()}'s health is now ${
        hero.health
      }.`
    );
  }
}

const enemyPizza = new Enemy("Pizza Rat");
console.log(enemyPizza);

///////////////////////////////
// dougie and pizza rat have fought
///////////////////////////////
heroDonut.talkSass(enemyPizza);
enemyPizza.talkSmack(heroDonut);
heroDonut.announceHealth();
enemyPizza.announceHealth();
heroDonut.fight(enemyPizza);
enemyPizza.fight(heroDonut);
heroDonut.announceHealth();
enemyPizza.announceHealth();

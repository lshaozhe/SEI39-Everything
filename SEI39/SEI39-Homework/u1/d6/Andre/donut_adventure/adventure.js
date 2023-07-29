//===========================================================================
//Daring Adventure! - Getting Started
//===========================================================================
//Daring Adventure! - Let's Go!
//Denizen
class Denizen {
  constructor(name, health, weapon, catchPhrases) {
    this.name = name;
    this.health = health;
    this.weapon = weapon;
    this.catchPhrases = catchPhrases;
  }
  talkPhrase() {
    console.log("talking phrases");
    console.log(
      this.catchPhrases[
        Math.round(Math.random() * this.catchPhrases.length - 1)
      ]
    );
  }
  announceHealth() {
    console.log(this.health);
  }
}

//Our Hero
class Hero extends Denizen {
  constructor(
    name,
    health = 100,
    weapon = {
      sprinkleSpray: 5,
      sugarShock: 10,
    },
    catchPhrases = [
      "i'm fresher than day old pizza",
      "you can't count my calories",
    ]
  ) {
    super(name, health, weapon, catchPhrases);
  }
  talkSass() {
    this.talkPhrase();
  }
  fight(enemy) {
    //console.log("i'm ready to rumble");
    let weaponArr = Object.entries(this.weapon);
    let randomizer = Math.ceil(Math.random() * 2 - 1);
    let chosenWeapon = weaponArr[randomizer][0];
    //console.log(this.weapon[chosenWeapon]);
    enemy.health -= this.weapon[chosenWeapon];
    console.log(
      `${enemy.name} got hit by ${chosenWeapon}! His health is now at ${enemy.health}!`
    );
  }
}
const dougie = new Hero("Dougie");
//===========================================================================
//Our Enemy
class Enemy extends Denizen {
  constructor(
    name,
    health = 100,
    weapon = {
      pepperoniStars: 5,
      cheeseGrease: 10,
    },
    catchPhrases = [
      "i'm youtube famous",
      "i'm more dangerous than an uncovered sewer",
    ]
  ) {
    super(name, health, weapon, catchPhrases);
  }
  talkSmack() {
    this.talkPhrase();
  }
  fight(hero) {
    //console.log("i'm gonna flatten you like a slice of pepperoni!");
    let weaponArr = Object.entries(this.weapon);
    let randomizer = Math.ceil(Math.random() * 2 - 1);
    let chosenWeapon = weaponArr[randomizer][0];
    //console.log(this.weapon[chosenWeapon]);
    hero.health -= this.weapon[chosenWeapon];
    console.log(
      `${hero.name} got hit by ${chosenWeapon}! His health is now at ${hero.health}!`
    );
  }
}
const pizzaRat = new Enemy("Pizza Rat");

//===========================================================================
//Walking Down the Street
dougie.talkSass();
pizzaRat.talkSmack();
dougie.announceHealth();
pizzaRat.announceHealth();

//===========================================================================
//Fight!
pizzaRat.fight(dougie);
dougie.fight(pizzaRat);
console.log(dougie.health);
console.log(pizzaRat.health);

//===========================================================================
//Hungry for more
//Make it into a game with an ending, until someone has 0 health left.
while (dougie.health > 0 && pizzaRat.health > 0) {
  let whoAttacks = Math.ceil(Math.random() * 2);
  if (whoAttacks === 1) {
    dougie.fight(pizzaRat);
  } else {
    pizzaRat.fight(dougie);
  }
}
console.log(dougie.health <= 0 ? "Pizza Rat wins!" : "Dougie wins!");

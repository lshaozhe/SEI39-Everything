////////////////////////////////////////////////////////////////////////
// Our Hero
class Denizen {
  constructor(name = "", health = 100, weapons = {}, catchPhrases = []) {
    this.name = name;
    this.health = health;
    this.weapons = weapons;
    this.catchPhrases = catchPhrases;
  }
  announceHealth() {
    console.log(this.health);
  }
  fight(enemy) {
    const randomNumber = Math.floor(
      Math.random() * Object.keys(this.weapons).length
    );
    const chosenWeapon = Object.keys(this.weapons)[randomNumber];
    const hitpoints = Object.values(this.weapons)[randomNumber];
    enemy.health -= hitpoints;
    console.log(
      `${enemy.name} got hit by ${chosenWeapon}! His health is now at ${enemy.health}`
    );
    return chosenWeapon;
  }
}

class Hero extends Denizen {
  constructor(name) {
    super(
      name,
      undefined,
      {
        sprinkleSpray: 5,
        sugarShock: 10,
      },
      ["i'm fresher than day old pizza", "you can't count my calories"]
    );
  }

  talkSass() {
    console.log(
      this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]
    );
  }
}

const dougie = new Hero("Dougie");
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
// Our Enemy
class Enemy extends Denizen {
  constructor(name) {
    super(
      name,
      undefined,
      {
        pepperoniStars: 5,
        cheeseGrease: 10,
      },
      ["i'm youtube famous", "i'm more dangerous than an uncovered sewer"]
    );
  }
  talkSmack() {
    console.log(
      this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]
    );
  }
}

const pizzaRat = new Enemy("Pizza Rat");

////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
// Walking down the street
dougie.talkSass();
pizzaRat.talkSmack();
dougie.announceHealth();
pizzaRat.announceHealth();
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
// Fight!
pizzaRat.fight(dougie);
dougie.fight(pizzaRat);
pizzaRat.announceHealth();
dougie.announceHealth();
////////////////////////////////////////////////////////////////////////

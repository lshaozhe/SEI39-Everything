// Our Hero
class Hero {
  constructor(
    name = "",
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
    console.log(
      this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]
    );
  }

  announceHealth() {
    console.log(this.health);
  }

  fight(Enemy) {
    console.log("i'm ready to rumble");

    const randomNumber = Math.floor(
      Math.random() * Object.keys(this.weapons).length
    );
    const chosenWeapon = Object.keys(this.weapons)[randomNumber];

    Enemy.health -= Object.values(this.weapons)[randomNumber];

    console.log(
      `${Enemy.name} got hit by ${chosenWeapon}! His health is now at ${Enemy.health}!`
    );
  }
}

const dougie = new Hero("Dougie");

// Our Enemy
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
      (this.health = health),
      (this.weapons = weapons),
      (this.catchPhrases = catchPhrases);
  }

  talkSmack() {
    console.log(
      this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]
    );
  }

  announceHealth() {
    console.log(this.health);
  }

  fight(Hero) {
    console.log("i'm gonna flatten you like a slice of pepperoni!");
    const randomNumber = Math.floor(
      Math.random() * Object.keys(this.weapons).length
    );
    const chosenWeapon = Object.keys(this.weapons)[randomNumber];

    Hero.health -= Object.values(this.weapons)[randomNumber];
    console.log(
      `${Hero.name} got hit by ${chosenWeapon}! His health is now at ${Hero.health}!`
    );
  }
}

const pizzaRat = new Enemy("Pizza Rat");

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

class Hero {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = {
      sprinkleSpray: 5,
      sugarShock: 10,
    };
    this.catchPhrases = [
      "I'm fresher than day old pizza",
      "You can't count my calories",
    ];
  }

  talkSass() {
    const randomIndex = Math.floor(
      Math.random() * (this.catchPhrases.length - 1)
    );
    console.log(this.catchPhrases[randomIndex]);
  }

  announceHealth() {
    console.log(`${this.name} has ${this.health}HP left!`);
    return this.health;
  }

  fight(opponent, weapon) {
    console.log(`${weapon} does ${this.weapons[weapon]} damage!`);
    opponent.health -= this.weapons[weapon];
  }
}

const dougie = new Hero("Dougie");
console.log(dougie);

class Enemy {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10,
    };
    this.catchPhrases = [
      "I'm youtube famous",
      "I'm more dangerous than an uncovered sewer",
    ];
  }

  talkSmack() {
    const randomIndex = Math.floor(
      Math.random() * (this.catchPhrases.length - 1)
    );
    console.log(this.catchPhrases[randomIndex]);
  }

  announceHealth() {
    console.log(`${this.name} has ${this.health}HP left!`);
    return this.health;
  }

  fight(opponent, weapon) {
    console.log(`${weapon} does ${this.weapons[weapon]} damage!`);
    opponent.health -= this.weapons[weapon];
  }
}

const pizzaRat = new Enemy("Pizza Rat");
console.log(pizzaRat);

// =====================================================
// Walking Down the Street
// =====================================================

dougie.talkSass();
pizzaRat.talkSmack();
dougie.announceHealth();
pizzaRat.announceHealth();

// =====================================================
// Fight!
// =====================================================

pizzaRat.fight(dougie, "pepperoniStars");
dougie.fight(pizzaRat, "sugarShock");
pizzaRat.announceHealth();
dougie.announceHealth();

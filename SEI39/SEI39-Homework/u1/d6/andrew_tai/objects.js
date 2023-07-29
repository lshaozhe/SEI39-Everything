// ===========================================================
// Creating Classes
// ===========================================================
class Hamster {
  constructor(owner, name) {
    this.owner = owner;
    this.name = name;
    this.price = 15;
  }

  wheelRun() {
    console.log("squeak squeak");
  }

  eatFood() {
    console.log("nibble nibble");
  }

  getPrice() {
    return this.price;
  }
}

class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getWeight() {
    return this.weight;
  }

  greet(otherPerson) {
    console.log(`Hello ${otherPerson}!`);
  }

  eat(num) {
    this.weight += 1 * num;
    this.mood += 1 * num;
  }

  exercise(num) {
    this.weight -= 1 * num;
  }

  ageUp(num) {
    this.age += 1 * num;
    this.height += 1 * num;
    this.weight += 1 * num;
    this.mood -= 1 * num;
    this.bankAccount += 10 * num;
  }

  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.price;
  }
}

// ===========================================================
// Creating a Story
// ===========================================================

const timmy = new Person("Timmy");
timmy.ageUp(5);
timmy.eat(5);
timmy.exercise(5);
timmy.ageUp(9);
const gus = new Hamster(timmy.getName(), "Gus");
timmy.buyHamster(gus);
timmy.ageUp(15);
timmy.eat(2);
timmy.exercise(2);

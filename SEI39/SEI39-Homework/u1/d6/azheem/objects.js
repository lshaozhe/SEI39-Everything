"use strict";

//////////////////////////////
// Creating Classes -- Hamster
//////////////////////////////

class Hamster {
  constructor(owner = [], name) {
    (this.owner = owner), (this.name = name), (this.price = 15);
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

const alpha = new Hamster("Maverick", "Alpha");
console.log(alpha);

/////////////////////////////
// Creating Classes -- Person
/////////////////////////////

class Person {
  constructor(
    name,
    age = 0,
    height = 0,
    weight = 0,
    mood = 0,
    hamsters = [],
    bankAccount = 0
  ) {
    (this.name = name),
      (this.age = age),
      (this.height = height),
      (this.weight = weight),
      (this.mood = mood),
      (this.hamsters = hamsters),
      (this.bankAccount = bankAccount);
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

  greet() {
    console.log(this.name);
  }

  eat() {
    this.weight++;
    this.mood++;
  }

  exercise() {
    this.weight--;
  }

  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
  }

  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}

const maverick = new Person("Maverick", 32, 165, 57, 7, "Alpha", 100);
console.log(maverick);

////////////////////////////////////////
// Create a Story with your Person class
////////////////////////////////////////

const timmy = new Person("Timmy");

// timmy age 5 years
for (let i = 1; i <= 5; i++) {
  timmy.ageUp();
}

// timmy eat 5 times
for (let i = 1; i <= 5; i++) {
  timmy.eat();
}

// timmy exercise 5 times
for (let i = 1; i <= 5; i++) {
  timmy.exercise();
}

// timmy age 9 years
for (let i = 1; i <= 9; i++) {
  timmy.ageUp();
}

// create hamster "Gus"
const gus = new Hamster("Timmy", "Gus");

// Gus' owner is Timmy
timmy.buyHamster(gus);

// Timmy age 15 years
for (let i = 1; i <= 15; i++) {
  timmy.ageUp();
}

// Timmy eat twice
for (let i = 1; i <= 2; i++) {
  timmy.eat();
}

// Timmy exercise twice
for (let i = 1; i <= 2; i++) {
  timmy.exercise();
}

console.log(gus);
console.log(timmy);

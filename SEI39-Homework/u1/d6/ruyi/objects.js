"use strict";

// Creating Classes

// Hamster

class Hamster {
  constructor(owner = "", name, price = 15) {
    this.owner = owner;
    this.name = name;
    this.price = price;
  }

  getOwner() {
    return this.owner;
  }

  setOwner(ownerName) {
    this.owner = ownerName;
  }

  wheelRun() {
    console.log(`squeak squeak`);
  }

  eatFood() {
    console.log(`nibble nibble`);
  }

  getPrice() {
    return this.price;
  }
}

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
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.mood = mood;
    this.hamsters = hamsters;
    this.bankAccount = bankAccount;
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

  greet(person) {
    console.log(`Hi ${person.name}!`);
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

// Create a Story with your Person class
// 1. Instantiate a new Person named Timmy
const timmy = new Person("Timmy");

// 2. Age Timmy five years
function repeatAgeUp(limit, person) {
  for (let i = 1; i <= limit; i++) {
    person.ageUp();
  }
}

repeatAgeUp(5, timmy);

console.log(timmy.age);

// 3. At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
function repeatEat(limit, person) {
  for (let i = 1; i <= limit; i++) {
    person.eat();
  }
}

repeatEat(5, timmy);

// 4. Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
function repeatExercise(limit, person) {
  for (let i = 1; i <= limit; i++) {
    person.exercise();
  }
}

repeatExercise(5, timmy);

// 5. Age Timmy 9 years
repeatAgeUp(9, timmy);

// 6. Create a hamster named "Gus"
const gus = new Hamster("Ruyi", "Gus");

// 7. Set Gus's owner to the string "Timmy"
gus.setOwner("Timmy");

// 8. Have Timmy "buy" Gus
timmy.buyHamster(gus);

// 9. Age Timmy 15 years
repeatAgeUp(15, timmy);

// 10. Have Timmy eat twice
repeatEat(2, timmy);

// 11. Have Timmy exercise twice
repeatExercise(2, timmy);

console.log(timmy);

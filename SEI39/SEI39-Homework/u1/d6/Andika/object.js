"use strict";

////////////////////
// creating classes :hamster
////////////////////
class Hamster {
  constructor(owner = "", name, price = 15) {
    (this._owner = owner),
    (this._name) = name,
    (this._price) = price
  }
  wheelRun() {
    console.log("squeak squeak");
  }
  eatFood() {
    console.log("nibble nibble");
  }
  getPrice() {
    return this._price;
  }
  getName() {
    return this._name;
  }
}

const hamtaro = new Hamster("Josh", "hamtaro", 35);
const hamtaroInfo = {
  Name: hamtaro,
  Price: 35
}
console.log(hamtaro);
hamtaro.wheelRun();
hamtaro.eatFood();
console.log(hamtaro.getPrice());

////////////////////
// creating classes: person
////////////////////

class Person {
  constructor(name, age = 0, height = 0, weight = 0, mood = 0,
    hamsters = [], bankAccount = 0) {
    this._name = name,
      this._age = age,
      this._height = height,
      this._weight = weight,
      this._mood = mood,
      this._hamsters = hamsters,
      this._bankAccount = bankAccount;
  }

  getName() {
    return this._name
  }

  getAge() {
    return this._age;
  }
  getWeight() {
    return this._weight;
  }

  getHeight() {
    return this._height;
  }
  greet() {
    console.log(`Hello ${this._name}`);
  }
  eat(num) {
    for (let i = 0; i < num; i++) {
      this._weight += 1;
      this._mood += 1;
    }
  }
  exercise(num) {
    for (let i = 0; i < num; i++) {
      this._weight -= 1;
    }
  }
  ageUp(num) {
    for (let i = 0; i < num; i++) {
      this._age += 1;
      this._height += 10;
      this._weight += 1;
      this._mood - +1;
      this._bankAccount += 10;
    }
  }
  buyHamster(hamster) {
    this._hamsters.push(hamster.getName());
    this._mood += 1;
    this._bankAccount -= hamster.getPrice();
  }
}

const josh = new Person("Josh - the new hamster fans", 13, 140, 60, 10, undefined, 100)
const ownerMaleBio = (dude) => {
  return (`
Name: ${dude.getName()}
Age: ${dude.getAge()},
Height: ${dude.getHeight()},
Weight: ${dude.getWeight()},
Mood: ${dude._mood},
Hamster: ${dude._hamsters},
Bank Account: ${dude._bankAccount}
`)
}

console.log(ownerMaleBio(josh))
josh.eat();
// console.log(ownerMaleBio(Josh))
josh.buyHamster(hamtaro);
// console.log(ownerMaleBio(Josh))
josh.ageUp();
console.log(ownerMaleBio(josh))




////////////////////
// create a story with your person class
////////////////////

const timmy = new Person("Timmy");
console.log(ownerMaleBio(timmy))
timmy.ageUp(5);
console.log("Timmy 5 years later" + ownerMaleBio(timmy))
timmy.eat(5);
console.log("Timmy eating 5 times" + ownerMaleBio(timmy))
timmy.exercise(5);

console.log("Timmy after 5 exercise" + ownerMaleBio(timmy))
timmy.ageUp(9);
console.log("Timmy 9 years later" + ownerMaleBio(timmy))
const Gus = new Hamster("Timmy", "Gus");
timmy.buyHamster(Gus);
console.log("Timmy buying Gus" + ownerMaleBio(timmy))

timmy.ageUp(15);
console.log("Timmy 15 years later" + ownerMaleBio(timmy))

timmy.eat(2);
timmy.exercise(2);

console.log("Timmy ate twice and execise twice" + ownerMaleBio(timmy))
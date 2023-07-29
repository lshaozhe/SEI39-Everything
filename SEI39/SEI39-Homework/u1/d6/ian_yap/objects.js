"use strict";

////////////////////////////////////
// created hamster class
///////////////////////////////////

class Hamster {
  constructor(owner, name, price = 15) {
    (this.owner = owner), (this.name = name), (this.price = price);
  }
  getName() {
    return this.name;
  }

  setOwner(name) {
    return (this.owner = name);
  }
  wheelRun() {
    console.log("squeak squeak");
  }
  eatFood() {
    console.log("nibble nibble");
  }
  getPrice() {
    console.log(this.price);
  }
}

const me = new Hamster();

me.wheelRun();
me.eatFood();
me.getPrice();

////////////////////////////////////
// created person class
///////////////////////////////////

class Person {
  constructor(
    name,
    age = 0,
    height = 0,
    weight = 0,
    mood = 0,
    hamsters,
    bankAccount = 0
  ) {
    (this.name = name),
      (this.height = height),
      (this.weight = weight),
      (this.mood = mood),
      (this.hamsters = hamsters),
      (this.bankAccount = bankAccount);
  }
  getName() {
    console.log(this.name);
  }
  getAge() {
    console.log(this.age);
  }
  getWeight() {
    console.log(this.weight);
  }
  greet() {
    console.log(this.name);
  }
  eat() {
    console.log(this.weight, this.mood);
  }
  exercise() {
    console.log(this.weight1--);
  }
  ageUp() {
    console.log(
      this.age1++,
      this.height1++,
      this.weight1++,
      this.mood1--,
      (this.bankAccount -= 10)
    );
  }
  buyHamster(hamster) {
    console.log();
  }
}

const me = new Person();

me.getName();
me.getAge();
me.getWeight();
me.greet();
me.eat();
me.exercise();
me.ageUp();
me.buyHamster();

/////////////////////////////////////////
// created timmys story
/////////////////////////////////////////

class Timmy {
  constructor(name = "Timmy", age = 5, weight) {
    (this.name = name), (this.age = age), (this.weight = weight);
  }
  d;
}

"use strict";

//Hamster
class Hamster {
  constructor(owner = "", name = "bunny", price = 15) {
    (this.owner = owner), (this.name = name), (this.price = price);
  }

  wheelRun() {
    console.log("squek squek");
  }

  eatFood() {
    console.log("nibble nibble");
  }

  getPrice() {
    return this.price;
  }
}

//Person
class Person {
  constructor(
    name = 0,
    age = 0,
    height = 0,
    weight = 0,
    mood = 0,
    hamster = [],
    bankAccount = 0
  ) {
    (this.name = name),
      (this.age = age),
      (this.height = height),
      (this.weight = weight),
      (this.mood = 0),
      (this.hamster = hamster),
      (this.bankAccount = bankAccount);
  }
  getname() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greeting() {
    console.log(`The person's name is ${this.name}.`);
  }
  eat(x) {
    this.age += x;
    this.mood += x;
  }
  exercise(x) {
    this.weight -= 5;
  }
  ageUp(x) {
    this.age += x;
    this.weight += x;
    this.mood -= x;
    this.bankAccount += x * 10;
  }
  buyHamster(hamster) {
    this.hamster.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}

//Create a Story with your Person class
const timmy = new Person("Timmy");
//Age timmy by 5 years
timmy.ageUp(5);
//Timmy eats 5 times
timmy.eat(5);
//Timmy exercise 5 times
timmy.exercise(5);
//Age timmy by 9 years
timmy.ageUp(9);
//create hamster Gus
const gusHamster = new Hamster(undefined, "Gus", undefined);
//set Gus owner to timmy
gusHamster.owner = timmy.name;
console.log(gusHamster);
//Timmy buys Gus
timmy.buyHamster(gusHamster);
console.log(timmy.bankAccount, timmy.mood, timmy.hamster);
//Age timmy 15 years
timmy.ageUp(15);
//Timmy eats twice
timmy.eat(2);
//timmy exercise twice
timmy.exercise(2);

//below comment can be used for debugging
// console.log(
//     `Timmy age: ${timmy.age}, Timmy weight: ${timmy.weight}, Timmy mood: ${timmy.mood}, Timmy bank: ${timmy.bankAccount}`
//   );

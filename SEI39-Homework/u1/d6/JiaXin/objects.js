//Creating Classes

/*Hamster
attributes:
owner - string, initially set as an empty string
name - string, set the name from parameter in constructor method
price - integer, set as 15
methods:
wheelRun() - log "squeak squeak"
eatFood() - log "nibble nibble"
getPrice() - return the price
*/

class Hamster {
  constructor(owner, name, price = 15) {
    (this.owner = owner), (this.name = name), (this.price = price);
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
  setPrice(price) {
    this.price = price;
  }
}
//"created hamster class"

/*
Person
attributes:
name - set name from parameter in constructor method
age - initially 0
height - initially 0
weight - initially 0
mood - integer starting at 0 initially
hamsters - empty array initially
bankAccount - initially set to 0
methods:
getName() - returns name
getAge() - returns age
getWeight() - returns weight
greet() - logs a message with person's name
eat() - increment weight, increment mood
exercise() - decrement weight
ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())*/

class Person {
  constructor(
    name,
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
      (this.mood = mood),
      (this.hamster = hamster),
      (this.bankAccount = bankAccount);
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getAge() {
    return this.age;
  }
  setAge(age) {
    this.age = age;
  }
  getWeight() {
    return this.weight;
  }
  setWeight(weight) {
    this.weight = weight;
  }

  greet() {
    console.log(`Hi ${this.name}.`);
  }
  eat(time) {
    this.weight = this.weight + time;
    this.mood = this.mood + time;
  }
  exercise(time) {
    this.weight = this.weight - time;
  }

  ageUp(age) {
    this.age = this.age + age;
    this.height = this.height + age;
    this.weight = this.weight + age;
    this.mood = this.mood - age;
    this.bankAccount = this.bankAccount + 10 * age;
  }
  buyHamster(input) {
    this.hamster.push(input);
    this.mood = this.mood + 10;
    this.bankAccount -= input.getPrice();
  }
}

//const john = new Person("john", 29, 12, 25, 2, undefined, 20);
//john.buyHamster("hamster");
//"created person class"

//1. Instantiate a new Person named Timmy
//2. Age Timmy five years
//3. At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times
//4. Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
const timmy = new Person("Timmy");
timmy.ageUp(5);
timmy.eat(5);
timmy.exercise(5);
console.log(timmy);

//5. Age Timmy 9 years
//6. Create a hamster named "Gus"
//7. Set Gus's owner to the string "Timmy"
//8. Have Timmy "buy" Gus
timmy.ageUp(9);
const gus = new Hamster(timmy.name, "gus");

timmy.buyHamster(gus);
console.log(timmy);
//9. Age Timmy 15 years
//10. Have Timmy eat twice
//11. Have Timmy exercise twice
timmy.ageUp(15);
timmy.eat(2);
timmy.exercise(2);
console.log(timmy);
//"created timmys story"

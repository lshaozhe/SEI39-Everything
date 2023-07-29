/////////////////////////////////////////////////////////
// Hamster
class Hamster {
  constructor(owner = "", name, price = 15) {
    this.owner = owner;
    this.name = name;
    this.price = price;
  }
  getHamsterName() {
    return this.name;
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
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
// Person
class Person {
  constructor(
    name = "",
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
  greet() {
    console.log(`Hello ${this.name}!`);
  }
  eat(number) {
    this.weight += number;
    this.mood += number;
  }
  exercise(number) {
    this.weight -= number;
  }
  ageUp(number) {
    this.age += number;
    this.height += number;
    this.weight += number;
    this.mood -= number;
    this.bankAccount += 10 * number;
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster.getHamsterName());
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
// Create a Story with your Person class
const timmy = new Person("Timmy", 7, 120, 20, 10, undefined, 0);
timmy.ageUp(5);
timmy.eat(5);
timmy.exercise(5);
timmy.ageUp(9);
const gus = new Hamster("Timmy", "Gus", 7);
timmy.buyHamster(gus);
timmy.ageUp(15);
timmy.eat(2);
timmy.exercise(2);
console.log(timmy);
/////////////////////////////////////////////////////////
//===============================================================================
//Classes & Donut Adventure
//===============================================================================
//Creating Classes
//Hamster
class Hamster {
  constructor(owner = "", name, price = 15) {
    this.owner = owner;
    this.name = name;
    this.price = price;
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
const hamster1 = new Hamster("bob", "charlie", 15);
console.log(hamster1);

//===============================================================================
//Person
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
  greet() {
    return `Hi ${this.name}.`;
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
    this.hamsters = [this.hamsters];
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}
/* //check buyHamster
const bob = new Person("bob", 26, 178, 80, 5, hamster1, 100);
const hamster2 = new Hamster("bob", "delta", 15);
bob.buyHamster(hamster2);
console.log(bob.hamsters);
console.log(bob.mood);
console.log(bob.bankAccount); */

//===============================================================================
//Create a Story with your Person class
const timmy = new Person("Timmy");
for (let i = 0; i < 5; i++) {
  timmy.ageUp();
}
for (let i = 0; i < 5; i++) {
  timmy.eat();
}
for (let i = 0; i < 5; i++) {
  timmy.exercise();
}
for (let i = 0; i < 9; i++) {
  timmy.ageUp();
}
const gus = new Hamster("", "Gus", 15);
gus.owner = "Timmy";
timmy.buyHamster(gus);
for (let i = 0; i < 15; i++) {
  timmy.ageUp();
}
for (let i = 0; i < 2; i++) {
  timmy.eat();
}
for (let i = 0; i < 2; i++) {
  timmy.exercise();
}
//console.log(timmy);

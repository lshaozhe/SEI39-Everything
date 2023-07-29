// Creating Classes

class Hamster {
  constructor(owner = "", name, price = 15) {
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
}

const potato = new Hamster("Potato");
console.log(potato.price);

// Person
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
    console.log(`Hello ${this.name}`);
  }
  eat() {
    this.weight += 1;
    this.mood += 1;
  }
  exercise() {
    this.weight -= 1;
  }
  ageUp() {
    this.age += 1;
    this.height += 1;
    this.weight += 1;
    this.mood -= 1;
    this.bankAccount += 10;
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}

// const john = new Person("John");
// john.buyHamster(potato);
// console.log(john);
// john.ageUp();
// console.log(john);

//////////////////
// Create a Story with your Person class

const timmy = new Person("Timmy", 5);
for (let i = 0; i < 5; i++) {
  timmy.eat();
}
for (let i = 0; i < 5; i++) {
  timmy.exercise();
}
for (let i = 0; i < 9; i++) {
  timmy.ageUp();
}

const gus = new Hamster("Timmy", "Gus", 10);

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
console.log(timmy);

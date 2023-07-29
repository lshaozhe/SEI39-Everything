//============================================================================
//========================Classes & Donut Adventure===========================
//============================================================================
// //=============================Creating Classes
// //==================Hamster
// attributes:
// owner - string, initially set as an empty string
// name - string, set the name from parameter in constructor method
// price - integer, set as 15
// methods:
// wheelRun() - log "squeak squeak"
// eatFood() - log "nibble nibble"
// getPrice() - return the price

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
}

const hamster1 = new Hamster("John", "Blackie");
hamster1.wheelRun();
hamster1.eatFood();
console.log(hamster1.getPrice());

//==================Person
// attributes:
// name - set name from parameter in constructor method
// age - initially 0
// height - initially 0
// weight - initially 0
// mood - integer starting at 0 initially
// hamsters - empty array initially
// bankAccount - initially set to 0
// methods:
// getName() - returns name
// getAge() - returns age
// getWeight() - returns weight
// greet() - logs a message with person's name
// eat() - increment weight, increment mood
// exercise() - decrement weight
// ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
// buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10,
// decrement bankAccount by the value of the hamster (hint: use getPrice())

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
  greet(person) {
    return `Hi ${person.name}`;
  }
  getBankAccount() {
    return this.bankAccount;
  }
  eat(x) {
    this.weight += x;
    this.mood += x;
  }
  exercise() {
    this.weight -= 1;
  }
  //   ageUp() {
  //     this.age += 1;
  //     this.height += 1;
  //     this.weight += 1;
  //     this.mood -= 1;
  //     this.bankAccount += 10;
  //   }
  ageUp(x) {
    this.age += x;
    this.height += x;
    this.weight += x;
    this.mood -= x;
    this.bankAccount += x * 10;
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster1.getPrice();
  }
}

const john = new Person("John");
const tom = new Person("Tom");
console.log(john.getName());
console.log(john.getAge());
console.log(john.getWeight());
console.log(john.greet(tom));
john.eat(1);
console.log(john.getWeight());
john.eat(1);
console.log(john.getWeight());
john.exercise();
console.log(john.getWeight());
john.ageUp(1);
console.log(john.getAge());
console.log(john.getWeight());
console.log(john.getBankAccount());
john.buyHamster(hamster1);
console.log(john.getBankAccount());
console.log(john.hamsters);

//==================Create a Story with your Person class
// Feel free to update or add methods to automate some of these tasks.
// Instantiate a new Person named Timmy
// Age Timmy five years
// At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
// Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
// Age Timmy 9 years
// Create a hamster named "Gus"
// Set Gus's owner to the string "Timmy"
// Have Timmy "buy" Gus
// Age Timmy 15 years
// Have Timmy eat twice
// Have Timmy exercise twice

const timmy = new Person("Timmy", 5);
timmy.eat(5);
console.log(timmy.getWeight());
timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.exercise();
console.log(timmy.getWeight());
timmy.ageUp(9);
console.log(timmy.getAge());

const gus = new Hamster("Timmy", "Gus");
timmy.buyHamster(gus);
console.log(timmy.hamsters);
console.log(timmy.getBankAccount());

timmy.ageUp(15);
console.log(timmy.getAge());

timmy.eat(2);
console.log(timmy.getWeight());

timmy.exercise();
timmy.exercise();
console.log(timmy.getWeight());

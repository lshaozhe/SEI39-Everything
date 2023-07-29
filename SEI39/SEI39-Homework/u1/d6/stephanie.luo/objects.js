// do the first few sections up until the Daring Adventure in this file

//////////////////////////////////////////////////////////
// == Classes & Donut Adventure ==
//////////////////////////////////////////////////////////

//

//========================================================
// == Creating Classes ==
//========================================================

// Create hamster class
class Hamster {
  constructor(owner = "", name = String, price = 15) {
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
    return this.price;
  }
}

// const hamster1 = new Hamster("stephanie", "hammy");
// console.log(hamster1);

// Create person class
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
    console.log(`Greetings, ${this.name}.`);
  }

  eat(num) {
    (this.weight += num), (this.mood += num);
  }

  exercise(num) {
    this.weight -= num;
  }

  ageUp(num) {
    this.age += num;
    this.height += num;
    this.weight += num;
    this.mood -= num;
    this.bankAccount += num * 10;
  }

  buyHamster(hamster) {
    this.hamsters.push(hamster.getName()); // need to get name
    this.mood += 10;
    this.bankAccount -= hamster.getPrice(); // need to get price
    // console.log(hamster.getPrice());
  }
}

//========================================================
// == Create a Story with your Person class ==
//========================================================

// Instantiate a new Person named Timmy (part 1-3)
const timmy = new Person("Timmy", 5, undefined, 5, -1);
console.log(timmy);

// Story of Timmy
// Timmy becomes heavier (part 4)
timmy.eat(6);

// Timmy exercise 5 times
timmy.exercise(5);

// Timmy age 9 (part 5)
timmy.ageUp(4); // age up from 5 yo

// Create hamster Gus (part 6)
const gus = new Hamster(undefined, "Gus");

//Set Gus's owner to the string "Timmy" (part 7)
gus.setOwner("Timmy");
console.log(gus);

// Timmy buying hamster (part 8)
timmy.buyHamster(gus);

// Timmy age 15 (part 9)
timmy.ageUp(6); // age up from 9 yo

// Timmy eats twice (part 10)
timmy.eat(2);

// Timmy exercise twice (part 11)
timmy.exercise(2);

// The end
console.log(timmy);

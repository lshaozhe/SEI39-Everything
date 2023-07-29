class Hamster {
  constructor(owner = "", name = "Hammy", price = 15) {
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

class Person {
  constructor(
    name = "Hammy",
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
    console.log(this.name);
  }

  eat(num) {
    this.weight += num;
    this.mood += num;
  }

  exercise(num) {
    this.weight -= num;
  }

  ageUp(num) {
    this.age += num;
    this.height += num;
    this.weight += num;
    this.mood -= num;
    this.bankAccount += 10 * num;
  }

  buyHamster(Hamster) {
    this.hamsters.push(Hamster);
    this.mood += 10;
    this.bankAccount -= Hamster.getPrice();
  }
}

//Story
const Timmy = new Person("Timmy", 5);
Timmy.eat(5);
Timmy.exercise(5);
Timmy.ageUp(9);

const Gus = new Hamster("Timmy", "Gus");
Timmy.buyHamster(Gus);

Timmy.ageUp(15);
Timmy.eat(2);
Timmy.exercise(2);

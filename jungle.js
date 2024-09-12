class Animal {
  static remainingAnimals = 3
  #name
  #species
  #energy
  constructor(name, species, energy){
    this.#name = name
    this.#species = species
    this.#energy = energy
  }

  setName(newName){
    this.#name = newName
  }
  getName(){
    return this.#name
  }

  getSpecies(){
    return this.#species
  }
  getEnergy(){
    return this.#energy
  }

  reduceEnergy(amount) {
    this.#energy -= amount;
    if (this.#energy <= 0) {
      Animal.remainingAnimals --
    }
  }

  attack(target) {
    
  }

  eat(eatAmount) {
    this.#energy += eatAmount;
    console.log(`${this.getName()} eats and gains energy! Energy: ${this.getEnergy()}`);
  }

}

class Bird extends Animal {
  #canFly
  constructor(name, species, canFly) {
    super(name, species, 100);
    this.#canFly = canFly;
  }

  get canFly() {
    return this.#canFly;
  }
  set name(newName) {
    super.setName(newName);
  }

  get name() {
    return super.getName();
  }

  get species(){
    return super.getSpecies()
  }

  get energy(){
    return super.getEnergy()
  }

  attack(target){
    super.attack(target);
    this.reduceEnergy(10);
    target.reduceEnergy(10);
    console.log(`${this.getName()} swoops in to attack ${target.getName()}!`)
    console.log(`${this.getName()}'s energy: ${this.getEnergy()}`);
    console.log(`${target.getName()}'s energy: ${target.getEnergy()}`);
  }
  eat(){
    super.eat(10)
  }
}

class Mammal extends Animal {
  #furColor
  constructor(name, species, furColor) {
    super(name, species, 200);
    this.#furColor=furColor
  }

  get furColor(){
    return this.#furColor
  }


  set name(newName) {
    super.setName(newName);
  }

  get name() {
    return super.getName();
  }

  get species(){
    return super.getSpecies()
  }

  get energy(){
    return super.getEnergy()
  }

  attack(target){
    super.attack(target);
    this.reduceEnergy(50);
    target.reduceEnergy(50);
    console.log(`${this.getName()} lunges to attack ${target.getName()}!`)
    console.log(`${this.getName()}'s energy: ${this.getEnergy()}`);
    console.log(`${target.getName()}'s energy: ${target.getEnergy()}`);
  }
  eat(){
    super.eat(20)
  }
}

class Reptile extends Animal {
  #coldBlooded
  constructor(name, species, coldBlooded) {
    super(name, species, 100);
    this.#coldBlooded =  coldBlooded
  }


  get coldBlooded() {
    return this.#coldBlooded;
  }

  set name(newName) {
    super.setName(newName);
  }

  get name() {
    return super.getName();
  }

  get species(){
    return super.getSpecies()
  }

  get energy(){
    return super.getEnergy()
  }
  attack(target){
    super.attack(target);
    this.reduceEnergy(30);
    target.reduceEnergy(30);
    console.log(`${this.getName()} attack ${target.getName()}!`)
    console.log(`${this.getName()}'s energy: ${this.getEnergy()}`);
    console.log(`${target.getName()}'s energy: ${target.getEnergy()}`);
  }

  eat(){
    super.eat(15)
  }
}

// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly} with ${eagle.energy}`);
const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor} with ${lion.energy}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded} with ${snake.energy}`);

// // Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();

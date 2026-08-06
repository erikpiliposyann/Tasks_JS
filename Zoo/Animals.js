class Animal {
    #name
    #age
    #energy 

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.energy = 100;
    }
    get name() {
        return this.#name;
    }
    set name(value){
        this.#name = value;
    }
    get age() {
        return this.#age;
    }
    set age(value) {
        this.#age = value;
    }
    get energy() {
        return this.#energy;
    }
    set energy(value) {
        this.#energy = Math.max(0, Math.min(100, value));
    }

    eat(food) {
        this.energy += 20;
    }
    sleep(hours) {
        this.energy += (hours * 10);
    }
    getInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Energy: ${this.energy}`;
    }

}

class Predator extends Animal{
    #isHungry

    constructor(name, age) {
        super(name, age);
        this.#isHungry = true;
    }
    get isHungry() {
        return this.#isHungry;
    }
    set isHungry(value){
        this.#isHungry = value;
    }
    hunt() {
        this.energy -= 30;
        this.isHungry = false;
    }
    getInfo() {
        return `${super.getInfo()}, Hungry: ${this.isHungry}`;
    }
}

class Lion extends Predator {
    #prideName

    constructor(name, age, prideName) {
        super(name, age);
        this.#prideName = prideName;
    }

    get prideName() {
        return this.#prideName;
    }
    set prideName(value) {
        this.#prideName = value;
    }

    roar() {
        this.energy -= 10;
        console.log(`${this.name} roars!`);
    }
    hunt() {
        super.hunt();
        console.log(`${this.name} hunted with the ${this.prideName} pride.`);
    }
    getInfo() {
        return `${super.getInfo()}, Pride: ${this.prideName}`;
    }
}

class Herbivore extends Animal {
    #favoritePlant

    constructor(name, age, favoritePlant) {
        super(name, age);
        this.favoritePlant = favoritePlant;
    }
    get favoritePlant() {
        return this.#favoritePlant;
    }
    
    set favoritePlant(value) {
        this.#favoritePlant = value;
    }
    graze() {
        this.energy -= 10;
        this.energy += 15;
    }
    getInfo() {
        return `${super.getInfo()}, Favorite Plant: ${this.favoritePlant}`;
    }
}

class Rabbit extends Herbivore {
    #jumpHeight;

    constructor(name, age, favoritePlant, jumpHeight) {
        super(name, age, favoritePlant);
        this.jumpHeight = jumpHeight;
    }

    get jumpHeight() {
        return this.#jumpHeight;
    }

    set jumpHeight(value) { 
        this.#jumpHeight = value;
     }

    jump() {
        this.energy -= 5;
    }

    graze() {
        this.energy -= 5;
        this.energy += 20;
    }

    getInfo() {
        return `${super.getInfo()}, Jump Height: ${this.jumpHeight} cm`;
    }
}

const animal = new Animal("Generic", 3);
console.log(animal.getInfo());

animal.eat("Food");
animal.sleep(2);
console.log(animal.getInfo());

console.log("----------------");

const predator = new Predator("Wolf", 5);
console.log(predator.getInfo());

predator.hunt();
console.log(predator.getInfo());

console.log("----------------");

const lion = new Lion("Simba", 4, "Royal Pride");
console.log(lion.getInfo());

lion.roar();
lion.hunt();
console.log(lion.getInfo());

console.log("----------------");

const herbivore = new Herbivore("Deer", 2, "Grass");
console.log(herbivore.getInfo());

herbivore.graze();
console.log(herbivore.getInfo());

console.log("----------------");

const rabbit = new Rabbit("Bunny", 1, "Carrot", 80);
console.log(rabbit.getInfo());

rabbit.jump();
rabbit.graze();
rabbit.eat("Carrot");
rabbit.sleep(1);

console.log(rabbit.getInfo());

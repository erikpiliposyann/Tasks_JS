# 🦁 Wildlife Sanctuary OOP

A simple JavaScript project that demonstrates **Object-Oriented Programming (OOP)** by modeling a wildlife sanctuary. The project uses inheritance, encapsulation, getters/setters, and method overriding to simulate different animal behaviors.

## Class Hierarchy

```text
Animal
├── Predator
│   └── Lion
└── Herbivore
    └── Rabbit
```

## Features

### 🐾 Animal

* Stores `name`, `age`, and `energy`.
* Energy is always kept between **0** and **100**.
* Animals can:

  *  Eat
  *  Sleep
  *  Display their information

###  Predator

* Can hunt to satisfy its hunger.
* Tracks whether it is hungry or not.

### 🦁 Lion

* Belongs to a pride.
* Can roar.
* Uses its own hunting behavior by extending the parent implementation.

###  Herbivore

* Has a favorite plant.
* Can graze to restore energy.

### 🐰 Rabbit

* Has a jump height.
* Can jump.
* Uses its own grazing behavior by overriding the parent method.

## ⚡ Energy Rules

| Action             |      Energy |
| ------------------ | ----------: |
|  Eat            |         +20 |
|  Sleep           | +10 × hours |
|  Hunt            |         -30 |
|  Roar            |         -10 |
|  Herbivore Graze |     -10 +15 |
|  Rabbit Graze    |      -5 +20 |
|  Jump            |          -5 |

> **Note:** Energy is automatically limited between **0** and **100** using the `energy` setter.

## 🛠️ OOP Concepts Used

* ✅ Classes
* ✅ Inheritance
* ✅ Encapsulation (Private Fields)
* ✅ Getters & Setters
* ✅ Method Overriding
* ✅ `super`
* ✅ Polymorphism

## 🚀 Example

```javascript
const lion = new Lion("Simba", 4, "Royal Pride");

console.log(lion.getInfo());

lion.roar();
lion.hunt();

console.log(lion.getInfo());

const rabbit = new Rabbit("Bunny", 2, "Carrot", 80);

rabbit.jump();
rabbit.graze();
rabbit.eat("Carrot");

console.log(rabbit.getInfo());
```

## 📚 Purpose

This project was created as an OOP practice to strengthen the understanding of JavaScript classes, inheritance, encapsulation, and object-oriented design principles.

# 📘 Prototype Homework

## 📖 Overview

This project contains custom implementations of several JavaScript prototype-related features without using the built-in operators where they are restricted.

Implemented tasks:

- ✅ Custom `instanceof`
- ✅ Custom `new`
- ✅ Check whether a property is own or inherited
- ✅ Get all methods from an object's immediate prototype
- ✅ Custom `Array.prototype.mySum()`

---

# 📌 Task 1 — Custom `instanceof`

### Description

Implemented `myInstanceOf(obj, Constructor)` which behaves similarly to JavaScript's `instanceof` operator.

### Features

- ✅ Does not use `instanceof`
- ✅ Traverses the prototype chain manually
- ✅ Returns only `true` or `false`
- ✅ Returns `false` for primitive values
- ✅ Handles invalid constructors safely

### Example

```javascript
function Animal() {}
function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog();

console.log(myInstanceOf(dog, Dog));     // true
console.log(myInstanceOf(dog, Animal));  // true
console.log(myInstanceOf(dog, Array));   // false
```

---

# 📌 Task 2 — Custom `new`

### Description

Implemented `myNew(Constructor, ...args)` that reproduces the behavior of JavaScript's `new` operator.

### Features

- ✅ Does not use `new`
- ✅ Creates a new object manually
- ✅ Links the object with `Constructor.prototype`
- ✅ Calls the constructor with the correct `this`
- ✅ Returns an explicitly returned object when appropriate
- ✅ Otherwise returns the created object

### Example

```javascript
function User(name) {
    this.name = name;
}

const user = myNew(User, "Alex");

console.log(user.name); // Alex
```

---

# 📌 Task 3 — Check Property Ownership

### Description

Implemented `checkProperty(obj, key)`.

### Return values

| Result | Meaning |
|---------|---------|
| `"own"` | Property belongs directly to the object |
| `"inherited"` | Property exists in the prototype chain |
| `"not found"` | Property does not exist |

### Example

```javascript
const animal = { eats: true };

const dog = Object.create(animal);
dog.name = "Rex";

console.log(checkProperty(dog, "name")); // own
console.log(checkProperty(dog, "eats")); // inherited
console.log(checkProperty(dog, "age"));  // not found
```

---

# 📌 Task 4 — Get Prototype Methods

### Description

Implemented `getPrototypeMethods(obj)`.

The function returns all function names found only in the object's **immediate prototype**.

### Features

- ✅ Returns only methods
- ✅ Ignores normal properties
- ✅ Ignores `"constructor"`
- ✅ Works with `Object.create(null)`

### Example

```javascript
function User(name) {
    this.name = name;
}

User.prototype.sayHi = function () {};
User.prototype.getName = function () {};

const user = new User("Alex");

console.log(getPrototypeMethods(user));
// ["sayHi", "getName"]
```

---

# 📌 Task 5 — Array.prototype.mySum()

### Description

Added a custom method to `Array.prototype`.

The method returns the sum of all numeric elements inside the array.

### Features

- ✅ Works with numeric arrays
- ✅ Throws an error for invalid element types
- ✅ Returns `0` for an empty array

### Example

```javascript
console.log([1, 2, 3].mySum()); // 6

console.log([10, -5, 4].mySum()); // 9

console.log([].mySum()); // 0
```

---

# 🛠 Technologies

- JavaScript (ES6)
- Function Constructors
- Prototypes
- Object Prototype Chain

---

# 🚀 How to Run

Clone the repository and run the JavaScript file using Node.js.

```bash
node index.js
```

or execute it directly in your browser's Developer Console.

---

# 👨‍💻 Author

**Erik Piliposyan**

# 📘 JavaScript Function Methods Polyfills

## Overview

This project contains custom implementations of three built-in JavaScript function methods:

* `Function.prototype.call`
* `Function.prototype.apply`
* `Function.prototype.bind`

The goal is to better understand how JavaScript handles function invocation, `this` binding, and argument passing by recreating these methods from scratch.

---

## ✨ Implemented Methods

### `myCall()`

Invokes a function immediately with a specified `this` value and individual arguments.

Example:

```javascript
function greet(city) {
    console.log(`Hello, I'm ${this.name} from ${city}`);
}

const person = { name: "Erik" };

greet.myCall(person, "Yerevan");
```

---

### `myApply()`

Works like `call()`, but accepts the function arguments as an array.

Example:

```javascript
function greet(city, country) {
    console.log(`${this.name} lives in ${city}, ${country}`);
}

const person = { name: "Erik" };

greet.myApply(person, ["Yerevan", "Armenia"]);
```

---

### `myBind()`

Creates and returns a new function with a permanently bound `this` value.

It also supports:

* Partial application (preset arguments)
* Constructor usage with the `new` keyword

Example:

```javascript
function greet(city) {
    console.log(`${this.name} lives in ${city}`);
}

const person = { name: "Erik" };

const sayHello = greet.myBind(person);

sayHello("Yerevan");
```

---

## 🛠️ How It Works

### Temporary Property

Both `myCall()` and `myApply()` temporarily attach the function to the target object using a unique `Symbol`.

```javascript
const temp = Symbol();

obj[temp] = fn;

obj[temp](...args);

delete obj[temp];
```

Using `Symbol` guarantees that no existing object properties are overwritten.

---

### Primitive Values

If the provided `this` value is a primitive (`number`, `string`, `boolean`, etc.), it is converted into its corresponding object wrapper using `Object()`.

Example:

```javascript
Object("hello")
Object(42)
Object(true)
```

This matches the behavior of the native JavaScript methods.

---

### Null and Undefined

When `thisArg` is `null` or `undefined`, the implementation falls back to `globalThis`, following the behavior of non-strict mode.

---

### Partial Application

`myBind()` stores the initial arguments and combines them with any arguments provided when the bound function is called.

```javascript
const bound = fn.myBind(obj, 1, 2);

bound(3, 4);
```

The original function receives:

```text
1, 2, 3, 4
```

---

### Constructor Support

If the bound function is invoked using the `new` keyword, the newly created object becomes the `this` value instead of the bound object.

This preserves the behavior of the native `bind()` method.

---

## 📂 Files

```text
myCall.js
myApply.js
myBind.js
```

or

```text
index.js
README.md
```

depending on your project structure.

---

## 📚 Concepts Demonstrated

* Function invocation
* The `this` keyword
* `call()`
* `apply()`
* `bind()`
* Symbols
* Prototype extension
* Primitive boxing
* Rest parameters
* Spread syntax
* Constructor behavior

---

## 🎯 Learning Goal

This project was created as a learning exercise to explore how JavaScript internally handles function context and invocation.

Reimplementing these methods from scratch provides a deeper understanding of one of the language's most important concepts.


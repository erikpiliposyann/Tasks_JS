# 🚀 Custom Array Methods in JavaScript

A collection of custom implementations of JavaScript's most commonly used array methods, built from scratch to better understand how they work behind the scenes.

> 💡 Learning JavaScript is not only about using methods—it's about understanding how they are built.

---

## 📖 About the Project

This project recreates several native `Array.prototype` methods without relying on their built-in implementations.

The goal was to dive deeper into JavaScript internals, strengthen problem-solving skills, and gain practical experience working with prototypes, callbacks, and array manipulation algorithms.

---

## ✨ Implemented Methods

### 🔧 Array Manipulation

* `myLength()`
* `myPush()`
* `myPop()`
* `myShift()`
* `myUnshift()`

### 🔄 Array Transformation

* `myMap()`
* `myFilter()`
* `mySlice()`
* `mySplice()`

### 🔍 Searching & Testing

* `myFind()`
* `myFindIndex()`
* `myIncludes()`
* `mySome()`
* `myEvery()`

### 📊 Iteration & Aggregation

* `myForEach()`
* `myReduce()`

---

## 🎯 Why I Built This

I wanted to move beyond simply using JavaScript methods and understand what actually happens under the hood.

This project helped me:

✅ Understand prototypes more deeply

✅ Improve algorithmic thinking

✅ Practice working with callbacks

✅ Learn how array methods handle edge cases

✅ Gain confidence writing low-level JavaScript logic

---

## 💻 Example Usage

```javascript
const numbers = [1, 2, 3, 4];

console.log(numbers.myMap(num => num * 2));
// [2, 4, 6, 8]

console.log(numbers.myFilter(num => num % 2 === 0));
// [2, 4]

console.log(numbers.myReduce((sum, num) => sum + num, 0));
// 10

numbers.myPush(5);

console.log(numbers);
// [1, 2, 3, 4, 5]
```

---

## 🧠 Concepts Practiced

During this project I worked with:

* Prototype inheritance
* Callback functions
* Context binding (`call`)
* Sparse arrays
* Array-like objects
* Iteration patterns
* Internal array mechanics
* Algorithm design
* Time & space complexity

---

## 📈 Future Improvements

Planned implementations:

* `myFlat()`
* `myFlatMap()`
* `myReverse()`
* `mySort()`
* `myJoin()`
* `myConcat()`

🎯 Long-term goal: achieve behavior as close as possible to the official ECMAScript specification.

---

## ⚠️ Disclaimer

These implementations are intended for **educational purposes**.

While they closely mimic the behavior of native methods, they are designed primarily to explore and understand the underlying logic rather than serve as production-ready polyfills.

---

## 🙌 What I Learned

Building these methods from scratch gave me a much deeper understanding of JavaScript than simply reading documentation.

Every method revealed new details about how arrays, prototypes, callbacks, and edge cases work internally.

This project was one of the most valuable hands-on exercises in my JavaScript learning journey.

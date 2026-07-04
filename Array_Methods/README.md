# Custom Array Methods in JavaScript

## Overview

This project is a collection of custom implementations of some of JavaScript's most commonly used `Array.prototype` methods.

The main goal was to better understand how native array methods work internally by recreating their core behavior from scratch without relying on the built-in implementations.

Implemented methods include:

* `myLength`
* `myPush`
* `myPop`
* `myShift`
* `myUnshift`
* `myMap`
* `myFilter`
* `myReduce`
* `myForEach`
* `myFind`
* `myFindIndex`
* `myIncludes`
* `mySome`
* `myEvery`
* `mySlice`
* `mySplice`

---

## Why I Built This

While learning JavaScript, I realized that using array methods is easy, but understanding what happens behind the scenes is much more valuable.

This project was created as a practical exercise to:

* Strengthen my understanding of JavaScript arrays
* Practice working with prototypes
* Improve algorithmic thinking
* Explore edge cases and native method behavior
* Gain deeper knowledge of how JavaScript internally manipulates arrays

---

## Features

### Array Manipulation

* Add elements with `myPush`
* Remove elements with `myPop`
* Remove the first element with `myShift`
* Insert elements at the beginning with `myUnshift`

### Array Transformation

* Transform arrays using `myMap`
* Filter values using `myFilter`
* Extract portions of arrays with `mySlice`
* Modify arrays in place using `mySplice`

### Searching and Testing

* Find elements with `myFind`
* Find element indexes with `myFindIndex`
* Check existence using `myIncludes`
* Test conditions with `mySome`
* Validate all elements using `myEvery`

### Iteration and Aggregation

* Iterate through arrays with `myForEach`
* Accumulate values with `myReduce`

---

## Example Usage

```javascript
const arr = [1, 2, 3, 4];

console.log(arr.myMap(x => x * 2));
// [2, 4, 6, 8]

console.log(arr.myFilter(x => x % 2 === 0));
// [2, 4]

console.log(arr.myReduce((sum, num) => sum + num, 0));
// 10

arr.myPush(5);
console.log(arr);
// [1, 2, 3, 4, 5]
```

---

## Notes

These implementations are intended for educational purposes and may not reproduce every edge case of the official ECMAScript specification.

The focus of the project is understanding the underlying logic behind JavaScript array methods rather than creating a production-ready polyfill library.

---

## What I Learned

Through this project I gained hands-on experience with:

* JavaScript prototypes
* Callback functions
* Array-like behavior
* Sparse arrays
* Context binding with `call`
* Time and space complexity considerations
* Internal mechanics of native array operations

---

## Future Improvements

Possible additions include:

* `myFlat`
* `myFlatMap`
* `myReverse`
* `mySort`
* `myJoin`
* `myConcat`
* Full ECMAScript edge-case compatibility

---

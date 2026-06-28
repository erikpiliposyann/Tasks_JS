//1
const items = [100, 200, 300];

let [first , second] = items;

console.log(first);
console.log(second);

//2
const data = ['apple', 'banana', 'orange', 'pear'];

let [fruit1 , , fruit3] = data;

console.log(fruit1);
console.log(fruit3);

//3
const numbers = [1, 2, 3, 4, 5];

let [a, b, ...rest] = numbers;

console.log(a);
console.log(b);
console.log(rest);

//4
let x = 10; 
let y = 20;

[x, y ] = [y, x];

console.log(x);
console.log(y);

//5
let arr = [10, 20, 30, 40];

[arr[0], arr[1]] = [arr[1], arr[0]];
[arr[2], arr[3]] = [arr[3], arr[2]];

console.log(arr);

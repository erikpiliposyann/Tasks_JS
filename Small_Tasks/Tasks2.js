function sum(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else {
        return "Invalid input";
    }
}

console.log(sum(5, 10));
console.log(sum(5, "10"));
console.log(sum(true, 3));
console.log(sum(null, 5));

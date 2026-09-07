// 3)Fibonacci Number Generator: Implement an infinite fibonacci() generator 
// that yields Fibonacci numbers one at a time.

function* fibonacci() {
    let first = 1;
    let second = 1;

    while (true) {
        yield first;

        const current = first + second;
        first = second;
        second = current;
    }
}

const gen = fibonacci();
console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 

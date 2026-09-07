// 1)Basic Sequence Generator: Write a generator function numberGenerator(start,
// end) that yields all integers sequentially from start to end inclusive.

function* numberGenerator(start, end) {
    for(let i = start; i <= end; ++i) {
        yield i;
    }
}

const gen = numberGenerator(1, 5);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

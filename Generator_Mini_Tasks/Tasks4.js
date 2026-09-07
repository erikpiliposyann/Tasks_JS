// 4)Pagination via Generator: Write a generator function paginate(array, 
// pageSize) that takes an array and a page size, then yields chunks of data on each .next() call.

function* paginate(array, pageSize) {
    let i = 0;
    while(i < array.length) {
        yield array.slice(i, i + pageSize);
        i += pageSize;
    }
}

const gen = paginate([1, 2, 3, 4, 5, 6, 7], 3);

console.log(gen.next());
console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 

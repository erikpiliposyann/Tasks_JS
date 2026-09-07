// 5)Data Passing to Generator (.next(val)): Create a storeGenerator() generator that 
//accepts an initial value, stores it, and when the .next(newValue) method is called, updates the 
//current value and yields the doubled result.

function* storeGenerator(initVal) {
    let current = initVal;
    while(true) {
        let val = yield  current * 2;
        current = val;
    }
}

const gen = storeGenerator(6);
console.log(gen.next()); 
console.log(gen.next(4));
console.log(gen.next(5)); 

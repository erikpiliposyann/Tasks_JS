const worker = new Worker('./worker.js');

const buffer = new ArrayBuffer(20);
const numbers = new Uint32Array(buffer);

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = (i + 1) * 10;
}

console.log(numbers);
// Uint32Array(5) [10, 20, 30, 40, 50]

worker.postMessage(buffer, [buffer]);

worker.onmessage = (event) => {
    const returnedBuffer = event.data;
    const result = new Uint32Array(returnedBuffer);

    for (const number of result) {
        console.log(number);
    }
};

const worker = new Worker('./worker.js');

//1
worker.postMessage("Hello from Main Thread");

worker.onmessage = (event) => {
   console.log(event.data);
};

//2

const numbers = [12, 45, 7, 89, 23, 56, 91, 3, 67];

worker.postMessage(numbers);

worker.onmessage = (event) => {
    console.log(event.data);
};
 
//3

const worker = new Worker('./worker.js');

const sharedBuffer = new SharedArrayBuffer(16);
const numberss = new Uint32Array(sharedBuffer);

numbers.set([10, 20, 30, 40]);

worker.postMessage(sharedBuffer);

worker.onmessage = (event) => {
    if (event.data === 'done') {
        console.log(numberss);
        // Uint32Array(4) [20, 40, 60, 80]
    }
};

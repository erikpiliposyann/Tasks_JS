//1
self.onmessage = (event) => {
    self.postMessage("Hello from Worker");
};

//2

self.onmessage = (event) => {
    const array = event.data;
    const max = Math.max(...array);

    self.postMessage(max)
;}

//3

self.onmessage = (event) => {
    const sharedBuffer = event.data;
    const numbers = new Uint32Array(sharedBuffer);

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] *= 2;
    }

    self.postMessage('done');
};

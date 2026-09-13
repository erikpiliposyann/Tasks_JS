self.onmessage = (event) => {
    const buffer = event.data;
    const numbers = new Uint32Array(buffer);

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] *= 2;
    }

    self.postMessage(buffer, [buffer]);
};

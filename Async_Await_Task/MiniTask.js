// TASK 1 — Rewrite using async/await

// function getNumber() {
//     return new Promise((resolve) => {
//         resolve(10);
//     });
// }

// getNumber()
//     .then((number) => {
//         console.log(number * 2);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

async function getNumber() {
    try {
        const number = await Promise.resolve(10);

        console.log(number * 2);
    } catch (error) {
        console.log(error);
    }
}

// TASK 2 — Rewrite using async/await

// function getMessage() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hello!");
//         }, 1000);
//     });
// }

// getMessage()
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

async function getMessage() {
    try {
        const message = await new Promise((resolve) => {
            setTimeout(() => {
                resolve("Hello!");
            }, 1000);
        });
        console.log(message);
    }
    catch (error) {
        console.log(error);
    }
}

// TASK 3 — Rewrite using async/await

// function getName() {
//     return Promise.resolve("Albert");
// }

// function getAge() {
//     return Promise.resolve(23);
// }

// getName()
//     .then((name) => {
//         console.log(name);

//         return getAge();
//     })
//     .then((age) => {
//         console.log(age);
//     });

async function getAge() {
    return await Promise.resolve(23);
}

async function getName() {
    try {
        const name = await Promise.resolve("Albert");
        console.log(name);

        const age = await getAge();
        console.log(age);
    } catch (error) {
        console.log(error);
    }
}

// TASK 4 — Rewrite using Promises

// function getNumber2() {
//     return Promise.resolve(5);
// }

// async function calculate() {
//     const number = await getNumber2();

//     console.log(number * 3);
// }

// calculate();

function getNumber2() {
    return Promise.resolve(5);
}

function calculate() {
    return getNumber2()
        .then((number) => {
            console.log(number * 3);
        });
}

// TASK 5 — Rewrite using Promises

// function getName2() {
//     return Promise.resolve("John");
// }

// async function showName() {
//     const name = await getName2();

//     console.log("Hello", name);
// }

// showName();


function getName2() {
    return Promise.resolve("John");
}

function showName() {
    return getName2()
        .then((name) => {
            console.log("hello", name);
        });
}

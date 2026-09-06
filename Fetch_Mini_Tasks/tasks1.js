/**
API: https://jsonplaceholder.typicode.com/users
Print only the names of all users to the console
Print only the emails of all users
Find the user whose username === 'Bret', and print that user's full object
*/

const data = fetch('https://jsonplaceholder.typicode.com/users');

data
    .then((response) => response.json())
    .then((users) => {
        for (const user of users) {
            console.log(`User name: ${user.name}`);
            console.log(`User email: ${user.email}`);
        }
        for (const user of users) {
            if(user.username === 'Bret') {
                console.log(user);
            }
        }
    })
    .catch((error) => {
        console.log(error);
    });

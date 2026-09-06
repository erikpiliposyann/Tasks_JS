
/**
API: https://randomuser.me/api/?results=20 (20 random people at once)
Each object has a dob.age field — the person's age.
Print only the people older than 18 (filter)
Count how many people are older than 30
Print the names of all people younger than 25
*/

const data = fetch("https://randomuser.me/api/?results=20");


data
    .then((response) => response.json())
    .then((people) => {
        console.log(
            people.results.filter((person) => person.dob.age > 18)
        );
        let count = 0;
        for(let person of people.results) {
            if(person.dob.age > 30) {
                count++;
            }
        }
        console.log(count);

        for(let person of people.results) {
            console.log(
                `${person.name.first} ${person.name.last}`
            );
        }
    })
    .catch((error) => {
        console.log(error);
    });

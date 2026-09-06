
/** 
Assignment 5 — Combined (harder)
API: https://jsonplaceholder.typicode.com/todos?userId=3
Each item is a task with a completed field (true/false).
Print only the completed tasks (completed === true)
Print only the incomplete tasks
Count the total number of tasks and how many are completed, formatted as: "Completed 7 of 20"
 */

const data = fetch('https://jsonplaceholder.typicode.com/todos?userId=3');

data
    .then((response) => response.json())
    .then((todos) => {
        let count = 0;
        let countCompleted = 0;
        for(let todo of todos) {
            if(todo.completed) {
                console.log(todo);
                countCompleted++;
            }
            count++;
        }
        for(let todo of todos) {
            if(!todo.completed) {
                console.log(todo);
            }
        }
        console.log(`Completed ${countCompleted} of" ${count}`);

    })
    .catch((error) => {
        console.log(error);
    });

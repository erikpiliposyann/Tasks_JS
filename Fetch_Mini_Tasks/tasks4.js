
/**
Assignment 4 — Posts by one user
API: https://jsonplaceholder.typicode.com/posts?userId=2
Print the number of posts this user has
Print only the titles of the posts
Find the post with id === 15 (if it doesn't exist — print "not found")
*/
const data = fetch('https://jsonplaceholder.typicode.com/posts?userId=2');

data
    .then((response) => response.json())
    .then((posts) => {
        let count = 0;
        for(let post of posts) {
            console.log(post.title);
            count++;
        }
        console.log(count);

        let flag = true;
        for(let post of posts) {
            if(post.id === 15) {
                console.log(post);
                flag = false;
            }
        }
        if(flag) {
            console.log("Not found");
        }
    })
    .catch((error) => {
        console.log(error);
    });


/**
API: https://fakestoreapi.com/products
Print the names of products that cost less than $50
Find the most expensive product (reduce or sorting)
Print only products from the "electronics" category
Calculate the average price of all products
 */


const data = fetch('https://fakestoreapi.com/products');

data
    .then((response) => response.json())
    .then((products) => {
        for(let product of products) {
            if(product.price < 50) {
                console.log(product.title);
            }
        }
        const sortProducts =  [...products].sort((a, b) => b.price - a.price); 
        console.log(sortProducts[0]);

        let countProducts = 0;
        let pricePriducts = 0;

        for(let product of products) {
            if(product.category === "electronics") {
                console.log(product);
            }
            countProducts++;
            pricePriducts += product.price;
        }
        console.log(pricePriducts / countProducts);
    })
    .catch((error) => {
        console.log(error);
    });

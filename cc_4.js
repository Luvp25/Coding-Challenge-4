// Array for all product information

let products = [

{
    Name: "Soccer Ball",
    category: "Sports",
    price: 25,
    inventory: 54 
},
{   Name: "Football",
    category: "Sports",
    price: 20,
    inventory: 24 
},
{   Name: "Bread",
    category: "Groceries",
    price: 20,
    inventory: 56 
},
{   Name: "Volleyball",
    category: "Sports",
    price: 15,
    inventory: 76 
},
{   Name: "iPhone",
    category: "Electronics",
    price: 23,
    inventory: 892 
}
];

// For loop to apply dynamic discount

for (let product of products) {
    let discount = 0
    switch (product.category){
        case "Electronics":
            discount = 0.20;
            break;

        case "Apparel":
            discount = 0.15;
            break;

        case "Groceries":
            discount = 0.10;
            break;
        
        case "Household":
            discount = 0.10;
            break;
        
        default:
            discount = 0;
    }

    product.price -= (product.price * discount);

    // console.log(`Product: ${product.Name} | New Price: $${product.price.toFixed(2)}`);

    }
    

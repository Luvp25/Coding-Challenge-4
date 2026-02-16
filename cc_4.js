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


// Array to create customerType
let customerType = ["regular", "student", "senior"];

//for loop to simulate a checkout process for 3 customers.
for (let i = 0; i < 3; i++){
    let customersType = customerType[i]
    let extraDiscount = 0;
    if(customerType == "regular"){
            extraDiscount = 0;
    }else if(customerType == "student"){
            extraDiscount = 0.05;
    }else if(customerType == "senior"){
            extraDiscount = 0.07;
    }
    //calculate discounted total, reduced product count, and customer number and cost
    let totalCost = 0;
    for (let product of products){
        if(product.inventory > 0){
            let finalPrice = product.price * (1-extraDiscount);

            totalCost += finalPrice;
            product.inventory--;

            console.log(`Customer ${i + 1} (${customerType}): Total Cost: $${totalCost.toFixed(2)}`);

        }
    }
}


    

    

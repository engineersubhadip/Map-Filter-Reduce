const products = [
{ name: "Product 1", price: 20, category: "Electronics" },
{ name: "Product 2", price: 30, category: "Clothes" },
{ name: "Product 3", price: 40, category: "Electronics" },
{ name: "Product 4", price: 50, category: "Clothes" },
{ name: "Product 5", price: 60, category: "Clothes" },
{ name: "Product 6", price: 70, category: "Electronics" },
{ name: "Product 7", price: 80, category: "Clothes" },
{ name: "Product 8", price: 90, category: "Electronics" },
];

// CLubbing the categories and their respective prices :-

const resultOne = products.reduce(function(acc,curr){
    let currentPrice = curr["price"];
    let currentCategory = curr["category"];

    if (acc[currentCategory] == undefined){
        acc[currentCategory] = [currentPrice];
    }else{
        acc[currentCategory].push(currentPrice);
    }

    return acc;
},{});


const resultTwo = Object.keys(resultOne).reduce(function(acc,curr){
    let currentCategory = curr;
    let currentPrices = resultOne[currentCategory].reduce(function(acc1,curr1){
        acc1 = acc1 + curr1;
        return acc1;
    },0);

    let currentAverage = currentPrices/resultOne[currentCategory].length;

    if (currentAverage > 50){
        acc.push({category:currentCategory, average:currentAverage});
    }

    return acc;
},[]);

console.log(resultTwo);
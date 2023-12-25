const transactions = [
{ type: "purchase", amount: 25, price: 10 },
{ type: "purchase", amount: 15, price: 5 },
{ type: "refund", amount: 5, price: 10 },
{ type: "purchase", amount: 10, price: 8 },
];


const result = transactions.reduce(function(acc,curr){
    let currAmount = curr["amount"];
    let currPrice = curr["price"];

    acc = acc + (currAmount*currPrice);
    return acc;
},0);

console.log(result);
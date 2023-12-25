const numbers = [2, 3, 4, 5];

const result = numbers.reduce(function(acc,curr){
    acc = acc *curr;
    return acc;
},1);

console.log(result);
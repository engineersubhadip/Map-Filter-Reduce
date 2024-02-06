// * Sum of every positive numbers

const input = [1, -4, 12, 0, -3, 29, -150];

let result = input.filter(function(ele){
    return ele > 0;
});

let output = result.reduce(function(acc,curr){
    return acc+curr;
},0);

console.log(output);

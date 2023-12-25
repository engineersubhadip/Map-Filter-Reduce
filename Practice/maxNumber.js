const numbers = [8, 3, 12, 5, 9];

const result = numbers.reduce(function(acc,curr){
    if (acc < curr){
        acc = curr;
    }
    return acc;
},-1e9);

console.log(result);
const nestedArrays = [[1, 2, 3], [4, 5], [6, 7, 8]];

const result = nestedArrays.reduce(function(acc,curr){
    acc = acc.concat(curr);
    return acc;
},[]);

console.log(result);
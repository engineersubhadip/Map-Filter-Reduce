const strings = ["apple", "banana", "orange"];

const result = strings.reduce(function(acc,curr){
    acc.push({name:curr});
    return acc;
},[]);

console.log(result);
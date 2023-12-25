const users = [
{ name: "Alice", age: 25 },
{ name: "Bob", age: 17 },
{ name: "Charlie", age: 30 },
{ name: "David", age: 20 },
];


let result = users.reduce(function(acc,curr){
    let currName = curr["name"];
    let currAge = curr["age"];

    if (currAge > 18){
        acc.push({name:currName, age:currAge});
    }
    return acc;
    
},[]);

console.log(result);
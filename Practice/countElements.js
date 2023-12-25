const input = [
["a", "b", "c"],
["c", "d", "f"],
["d", "f", "g"],
];


let sampleInput = input.reduce(function(acc,curr){
    acc.push(curr);
    return acc;
},[]);

sampleInput = sampleInput.flat();

let result = sampleInput.reduce(function(acc,curr){
    
    if (acc[curr] == undefined){
        acc[curr] = 1;
    }else{
        acc[curr] += 1;
    }
    return acc;
},{});

console.log(result);



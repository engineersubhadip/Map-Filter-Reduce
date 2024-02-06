// * Count elements in array of arrays

const input = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
  ];

let result = input.flat().reduce(function(acc,curr){
    if (acc[curr] == undefined){
        acc[curr]=1;
    }else{
        acc[curr]+=1
    }
    return acc;
},{});

console.log(result);
    
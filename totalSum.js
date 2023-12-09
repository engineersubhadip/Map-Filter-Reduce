// Calculate the total Sum of the array.

const array = [5,1,3,2,6];

let result = array.reduce(function(accumulator,current){
      accumulator = accumulator + current;
      return accumulator;
},0)

console.log(result);
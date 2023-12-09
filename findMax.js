// Finding the Max Value in the Array:-

const array = [5,1,3,2,6,12,3,31];

let result = array.reduce(function (accumulator,current){
      accumulator = Math.max(accumulator,current);
      return accumulator;
},-1e9);

console.log(result);
const input = "George Raymond Richard Martin";

// The expected output is "GRRM";

let result = input.split(" ").reduce(function (accumulator,current){
      accumulator = accumulator + current[0];
      return accumulator;
},"");

console.log(result);
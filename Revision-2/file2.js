// * Getting name initials

const input = "George Raymond Richard Martin";

let result = input.split(" ").reduce(function(acc,curr){
    acc = acc + curr[0];
    return acc;
},"")

console.log(result);
const input = [
      ['a','a','c'],
      ['c','d','f'],
      ['d','f','a'],
      ['b','a','g']
]

// Expected output is :- {a:1, b:2, c:2,...}

let result = input.flat().reduce(function (accumulator,current){
      if (accumulator[current]){
            accumulator[current] += 1;
      }else{
            accumulator[current] = 1;
      }
      return accumulator;
},{})

console.log(result);
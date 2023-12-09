const students = [
      {name : "Alice", scores:[90,89,92]},
      {name : "Bob", scores:[75,80,85]},
      {name : "Charles", scores:[90,95,85]},
      {name : "David", scores:[100,100,100]}
];

// Return an array of Objects containing only the students who has an average score of above 90.

let result = students.reduce(function(accumulator,current){
      let name = current.name;
      let totalScore = current.scores.reduce(function(acc,curr){
            acc = acc + curr;
            return acc;
      },0)

      accumulator[name] = totalScore/current.scores.length;

      return accumulator;
},{})

// {"A":40, "B":65,...}

let resultTwo = Object.keys(result).reduce(function(acc1,curr1){
      let currentName = curr1;
      let currentScore = result[curr1];

      if (currentScore > 90){
            acc1.push({"name":currentName,"score":currentScore});
      }

      return acc1;
},[]);

console.log(resultTwo);
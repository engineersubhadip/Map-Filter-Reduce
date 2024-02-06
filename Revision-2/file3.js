// * Difference between Oldest and Youngest Age -> [13, 67, 54];

const input = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jennifer",
      age: 65,
    },
  ];

let youngestAge = input.reduce(function(acc,curr){
    if (acc > curr.age){
        acc = curr.age;
    }
    return acc;
},1e9);

let oldestAge = input.reduce(function(acc,curr){
    if (acc < curr.age){
        acc = curr.age;
    }
    return acc;
},-1e9);


let finalArray = [youngestAge,oldestAge,oldestAge-youngestAge];

console.log(finalArray);
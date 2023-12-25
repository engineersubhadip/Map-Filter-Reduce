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

  
  const oldestCustomerAge = input.reduce(function(acc,curr){
    let currentAge = curr.age;
    if (currentAge > acc){
        acc = currentAge;
    }
    return acc;
  },-1e9);

  
  const youngestCustomerAge = input.reduce(function(acc,curr){
    let currentAge = curr.age;
    if (currentAge < acc){
        acc = currentAge;
    }
    return acc;
  },1e9);

  const result = [youngestCustomerAge,oldestCustomerAge,oldestCustomerAge-youngestCustomerAge];

  console.log(result);


// Task is to return an array of firstNames of users whose age is less than 30


const users = [
      {firstName : "Subhadip", lastName: "Das", age:29},
      {firstName : "Dhrishti", lastName: "Mukherjee", age:27},
      {firstName : "Rhea", lastName: "Ganguly", age:31},
      {firstName : "Tanmay", lastName: "Basu", age:30}
]

// Lets first filter out the data based on age.

let filteredResult = users.filter(function(data){
      if (data.age < 30){
            return true;
      }else{
            return false;
      }
});


// Now we will have something like [{fistName:X, lastName:Y, age:29}...]

let finalResult = filteredResult.map(function(data){
      return data.firstName;
});

console.log(finalResult);
// The task is to create an array having merged first and lastNames

const users = [
      {firstName : "Subhadip", lastName: "Das", age:29},
      {firstName : "Dhrishti", lastName: "Mukherjee", age:27},
      {firstName : "Rhea", lastName: "Ganguly", age:31},
      {firstName : "Tanmay", lastName: "Basu", age:28}
]

function mergeName(data){
      let firstName = data.firstName;
      let lastName = data.lastName;
      let result = firstName+" "+lastName;
      return result;
}

let finalOutput = users.map(mergeName);

console.log(finalOutput);
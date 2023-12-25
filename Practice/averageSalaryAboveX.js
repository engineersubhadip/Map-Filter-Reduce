const employees = [
{ name: "John", salary: 50000, department: "IT" },
{ name: "Jane", salary: 60000, department: "HR" },
{ name: "Bob", salary: 55000, department: "IT" },
{ name: "Sophie", salary: 75000, department: "HR" },
{ name: "Mike", salary: 65000, department: "IT" },
{ name: "Emily", salary: 80000, department: "HR" },
{ name: "David", salary: 70000, department: "IT" },
];

// For every department club the salaries:-

const resultOne = employees.reduce(function(acc,curr){
    let currentSalary = curr["salary"];
    let currentDepartment = curr["department"];

    if (acc[currentDepartment] == undefined){
        acc[currentDepartment] = [currentSalary];
    }else{
        acc[currentDepartment].push(currentSalary);
    }

    return acc;
},{});


const resultTwo = Object.keys(resultOne).reduce(function(acc,curr){
    let currentDepartment = curr;
    let currentSalary = resultOne[currentDepartment].reduce(function(acc1,curr1){
        acc1 = acc1 + curr1;
        return acc1;
    },0);
    let currentAverage = Math.floor(currentSalary/resultOne[currentDepartment].length,0);

    if (currentAverage > 65000){
        acc.push({department:currentDepartment, average:currentAverage});
    }
    return acc;
},[]);

console.log(resultTwo);
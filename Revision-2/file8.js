// * return an array of objects containing only the departments that have an average salary above 65000.

const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
  ];

let result = employees.reduce(function(acc,curr){
    let currDept = curr.department;
    let currSal = curr.salary;

    if (acc[currDept] == undefined){
        acc[currDept] = [currSal];
    }else{
        acc[currDept].push(currSal);
    }

    return acc;
},{});

let result2 = Object.keys(result).reduce(function(acc,curr){
    let currDept = curr;
    let currSal = result[curr].reduce(function(acc1,curr1){
        return acc1+curr1;
    },0);
    let currAvg = Math.floor(currSal/result[curr].length,0);

    if (currAvg > 65000){
        acc.push([currDept,currAvg]);
    }

    return acc;
},[]);

let finalObj = result2.reduce(function(acc,curr){
    acc.push({department:curr[0],average:curr[1]});
    return acc;
},[]);

console.log(finalObj);
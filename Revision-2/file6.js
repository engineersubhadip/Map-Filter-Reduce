const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "Jack", scores: [100, 100, 100] }
  ];

let result = students.reduce(function(acc,curr){
    let currName = curr.name;
    let currScore = curr.scores.reduce(function(acc1,curr1){
        acc1 = acc1+curr1;
        return acc1;
    },0);

    acc.push({name:currName,average:currScore/3});
    return acc;
},[]);

let result2 = result.filter(function(ele){
    if (ele.average > 90){
        return true;
    }
});

console.log(result2);
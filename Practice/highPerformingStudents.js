const students = [
{ name: "Alice", scores: [90, 85, 92] },
{ name: "Bob", scores: [75, 80, 85] },
{ name: "Charlie", scores: [90, 95, 85] },
{ name: "Jack", scores: [100, 100, 100] }
];

// Figuring out the Averages:-

const resultOne = students.reduce(function(acc,curr){
    let currentName = curr["name"];
    let currentTotal = curr["scores"].reduce(function(acc1,curr1){
        acc1 = acc1+curr1;
        return acc1;
    },0);
    let currentAverage = currentTotal/3;

    acc.push({"name":currentName,"scores":currentAverage});
    return acc;
},[]);


// Filter out the results :-

const resultTwo = resultOne.filter(function(element){
    let currentScore = element["scores"];
    if (currentScore > 90){
        return true;
    }else{
        return false;
    }
});

console.log(resultTwo);
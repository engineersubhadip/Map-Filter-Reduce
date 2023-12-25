const input = [1, -4, 12, 0, -3, 29, -150];

const resultOne = input.filter(function(element){
    if (element > 0){
        return true;
    }else{
        return false;
    }
});

const resultTwo = resultOne.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
},0);

console.log(resultTwo);
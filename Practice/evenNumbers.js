const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.filter(function(element){
    if (element % 2 == 0){
        return true;
    }else{
        return false;
    }
});

console.log(result);
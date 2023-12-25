const words = ["apple", "banana", "orange", "kiwi"];

const resultOne = words.reduce(function(acc,curr){
    let currentWord = curr.split("").filter(function(ele){
        if(ele == "a" || ele == "e" || ele == "i" || ele == "o" || ele == "u"){
            return false;
        }else{
            return true;
        };
    });

    let finalWord = currentWord.reduce(function(acc1,curr1){
        acc1 = acc1 + curr1;
        return acc1;
    },"");

    acc.push(finalWord);
    return acc;

},[]);

console.log(resultOne);
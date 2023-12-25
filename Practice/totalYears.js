var employees = [

{

    id: 111,

    name: "Chelsea Foster",

    years: 7,

},

{

    id: 102,

    name: "Aggie Sparling",

    years: 13,

},

{

    id: 123,

    name: "Timmy Matthews",

    years: 23,

},

{

    id: 119,

    name: "Emmet Foster",

    years: 22,

}

];

const result = employees.reduce(function(acc,curr){
    let currentAge = curr["years"];
    acc = acc + currentAge;
    return acc;
},0);

console.log(result);
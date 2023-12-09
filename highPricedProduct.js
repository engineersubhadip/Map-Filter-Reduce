const products = [
      {name:"product1",price:20,category:"Electronics"},
      {name:"product2",price:30,category:"Clothes"},
      {name:"product3",price:40,category:"Electronics"},
      {name:"product4",price:50,category:"Clothes"},
      {name:"product5",price:760,category:"Electronics"},
      {name:"product6",price:210,category:"Clothes"},
      {name:"product7",price:90,category:"Electronics"},
      {name:"product8",price:70,category:"Clothes"},
      {name:"product9",price:80,category:"Electronics"}
]

// Return an array of Objects containing only the categories that have an average price above 85.

let resultOne = products.reduce(function(acc1,curr1){
      let currCategory = curr1.category;
      let currPrice = curr1.price;

      if (acc1[currCategory]){
            acc1[currCategory].push(currPrice);
      }else{
            acc1[currCategory] = [currPrice];
      }

      return acc1;
},{});


let resultTwo = Object.keys(resultOne).reduce(function(acc2,curr2){
      let currCategory = curr2;
      let totalPrice = resultOne[curr2].reduce(function(acc3,curr3){
            acc3 = acc3+curr3;
            return acc3;
      },0);

      acc2[currCategory] = totalPrice/resultOne[curr2].length;
      return acc2;
},{});


let resultThree = Object.keys(resultTwo).reduce(function(acc4,curr4){
      let category = curr4;
      let price = resultTwo[curr4];

      if (price > 91){
            acc4.push({"category":category,"average":price});
      };

      return acc4;
},[]);

console.log(resultThree);
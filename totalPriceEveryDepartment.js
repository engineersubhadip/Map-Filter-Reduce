const products = [
      {name : "product1", price:20, category:"Electronics"},
      {name : "product2", price:40, category:"Clothes"},
      {name : "product3", price:20, category:"Electronics"},
      {name : "product4", price:80, category:"Clothes"},
      {name : "product5", price:35, category:"Electronics"}
]

// Expected output is {Electronics : X, Clothes : Y};

let resultOne = products.reduce(function(accumulator,current){
      let searchParam = current.category;
      let searchPrice = current.price;

      if (accumulator[searchParam]){
            accumulator[searchParam].push(searchPrice);
      }else{
            accumulator[searchParam] = [searchPrice];
      }

      return accumulator;
},{});

// The above will give me something like {Electronics : [12,13,14], Clothes : [20,31]..}

let resultTwo = Object.keys(resultOne).reduce(function(acc,curr){
      let priceConjugation = resultOne[curr].reduce(function(acc1,curr1){
            acc1 = acc1 + curr1;
            return acc1;
      },0);

      acc[curr] = priceConjugation;
      return acc;
},{});


console.log(resultTwo);

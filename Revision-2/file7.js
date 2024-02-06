// * High Priced Products:-

const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
  ];

let result = products.reduce(function(acc,curr){
  let currCategory = curr.category;
  let currPrice = curr.price;

  if (acc[currCategory] == undefined){
    acc[currCategory] = [currPrice];
  }else{
    acc[currCategory].push(currPrice);
  }

  return acc;
},{});


let output = Object.keys(result).reduce(function(acc,curr){
  let currCategory = curr;
  let currPrice = result[curr].reduce(function(acc1,curr1){
    return acc1+curr1;
  },0);
  acc.push([currCategory,currPrice/result[curr].length]);
  return acc;
},[]);


let finalOutput = output.reduce(function(acc,curr){
  let currCategory = curr[0];
  let currPrice = curr[1];

  if (currPrice > 50){
    acc.push({category:currCategory,average:currPrice});
  }
  return acc;

},[]);

console.log(finalOutput);

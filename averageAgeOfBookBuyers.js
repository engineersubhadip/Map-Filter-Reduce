let customers = [
      {
         'id': 1,
         'f_name': 'Abby',
         'l_name': 'Thomas',
         'gender': 'M',
         'married': true,
         'age': 32,
         'expense': 500,
         'purchased': ['Shampoo', 'Toys', 'Book']
      },
      {
         'id': 2,
         'f_name': 'Jerry',
         'l_name': 'Tom',
         'gender': 'M',
         'married': true,
         'age': 64,
         'expense': 100,
         'purchased': ['Stick', 'Blade']
      },
      {
         'id': 3,
         'f_name': 'Dianna',
         'l_name': 'Cherry',
         'gender': 'F',
         'married': true,
         'age': 22,
         'expense': 1500,
         'purchased': ['Lipstick', 'Nail Polish', 'Bag', 'Book']
      },
      {
         'id': 4,
         'f_name': 'Dev',
         'l_name': 'Currian',
         'gender': 'M',
         'married': true,
         'age': 82,
         'expense': 90,
         'purchased': ['Book']
      },
      {
         'id': 5,
         'f_name': 'Maria',
         'l_name': 'Gomes',
         'gender': 'F',
         'married': false,
         'age': 7,
         'expense': 300,
         'purchased': ['Toys']
      }
   ];


// Lets filter out the Book buying customers first.

let res = customers.filter(function(data){
   let isBookPurchased = data.purchased.includes("Book");

   if (isBookPurchased == true){
      return true;
   }else{
      return false;
   }
});

console.log(res);

let result1 = res.reduce(function(acc,curr){
	acc = acc + 1;
	return acc
},0);

let result2 = res.reduce(function(acc,curr){
	const currAge = curr.age;
	acc = acc + currAge;

	return acc;
},0);

console.log(result2/result1);
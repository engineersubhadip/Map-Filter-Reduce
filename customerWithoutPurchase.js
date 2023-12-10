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
         'purchased': ['Lipstik', 'Nail Polish', 'Bag', 'Book']
      },
      {
         'id': 4,
         'f_name': 'Dev',
         'l_name': 'Currian',
         'gender': 'M',
         'married': true,
         'age': 82,
         'expense': 90,
         'purchased': []
      },
      {
         'id': 5,
         'f_name': 'Maria',
         'l_name': 'Gomes',
         'gender': 'F',
         'married': false,
         'age': 7,
         'expense': 300,
         'purchased': ["football"]
      }
   ];

   let result = customers.reduce(function(acc,curr){
      let currList = curr.purchased;

      if (currList.length == 0){
            acc += 1;
      }

      return acc;
   },0)

   if (result > 0){
      console.log(true);
   }else{
      console.log(false);
   }
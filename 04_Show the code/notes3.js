//1) Key Props :-

// Whenever we use map() or any other loops to iterate in list items in React to create components or to do any other task

// Then we must pass a prop which will act as a key in the JSX tag inside loop (also every <li> tag inside JSX should have this unique 'key' prop too)

//That is , Every list item should be uniquely represented (it must also be applied for every <li> tags inside <ul> tag)

//The value of the 'key' prop must be unique for every component we make using loops on each iteration

//This key is a reserved keyword, and its value must be written inside curly braces '{}' to give dynamic unique key in every iteration instead of hardcoded key value, which will be same for all components

resList.map((restuarant) => (
  <RestaurantCard key={restuarant.id} resData={restuarant} />
))


//Hence whenever we loop in React, we must define a key prop in every component we are looping onto




//********************************************************************************************************************************************************************************************************************************************************************************************* */

// Why key props :-
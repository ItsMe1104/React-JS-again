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
// ==> React optimizes its render cycles
// ==> When there are components at the same level, they must be given different key props
// ==> So that if there is a similar new component which came in at the same level at any position among them (first,last or in middle), React could uniquely identify the newly created component, else
// ==> React would have to re render all the components again inside that container
// ==> if we pass key props in the components, then React could uniqely identify the new component as well as the position it needs to be put in, hence it will just render the new component only




//Unique Keys which can be used:-
// a) Use unique id's from JSON array passed in every object
// b) Use array indexes where the second parmeter of map(), gives the index, where this index keeps on increasing at every iteration of map

resList.map((item, index) => {
  return <RestaurantCard key={index} resData={item} />
})

//NOT RECOMMENDED :- Since there are major issues using array/ map indexes as keys, hence React itself warns us about it,
//Hence use it as a last resort
//Problem :- Index as a key is an anti-pattern

// Link :-


// Not using keys (not acceptable) <<<< indexes as key <<<<<<<< unique ID (Best practice)
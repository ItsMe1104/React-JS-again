//1) PROPS in React
// --> shortform of properties
// --> like passing arguments to the function while calling it
// --> it is passing properties to components




//Use of props ?
// => To pass data dynamically to the component


// ***********************************************************************************************************************************************************************************************************************************


//2) Passing props to a component



// a) For JSX tags :-

// i) ==> normally as we define attributes to an HTML tag

/*
<RestaurantCard name="Meghana Foods" cuisine="Biryani, Asian" />

<RestaurantCard name="KFC" cuisine = "Burger" />
*/




// 2) For JS functions :-
// ==> we have to pass the arguments in form of objects

// ==> using JS function is JS, hence we need to use curly braces "{}" inside JSX to use JS function as a component
<div className="res-container">
  {
    RestaurantCard({
      name: "KFC",
      cuisine: "Burger, Fast Food"
    })
  }
  {
    RestaurantCard({
      name: "Meghana Foods",
      cuisine: "Biryani, Asian"
    })
  }
</div>






//*************************************************************************************************************************************************************************************************************************** */

// 3) Receiving props inside Component

// ==> React takes all the props/ arguments passed and wrap it inside an object
// ==> This object can be received as the first parameter in the component function with any name
// ==> Generally we name it as "props"

// ==> Since its an object , hence we have to use "." operator to access the value of any of the specific prop values

// ==> Inorder to use the object values, inside JSX, we have to use curly braces {}, since that object is a JS variable only

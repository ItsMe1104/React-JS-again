// 1) Higher Order Components :-
// --> It is a normal JS function that takes a component and returns a component
// --> It acts like an enhancer, it takes in a component as input and then enhances it with some extra features and then returns it




// ***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************


// 2) Using Higher Order Functions in our app
// --> For e.g :- some of our restaurant cards should have a "promoted" label in their top left corner based on whether in the api data they have the promoted field set as true or not.
// --> The promoted restaurant cards will be just same like the other restaurant cards but just with an added promoted label

// --> Hence, instead of making a new card or modifying the current Restaurant card, we will just add a Higher Order component that will just add a promoted label to all the promoted restaurants





// STEPS :-

// --> a) First, create a Higher Order Component in the Restaurant Card component itself

// Input :- RestaurantCard component/function
// Output :- an enhanced Restaurant card component / function (hence, the inside function will also have a returning statement) 

// --> We will not make any changes to the input that is the RestaurantCard component but just add some things beside it and make a new component

// --> export this as a named export

export const withPromotedLabel = (RestaurantCard) => {

  //returning a function / component
  return () => {

    return (
      <>
        <label>Promoted</label>
        <RestaurantCard ></RestaurantCard>
      </>
    )
  }
}




// --> b) Secondly, go to the parent component where we are rendering the original <RestaurantCard /> component Tag
// --> In our case it is <Body /> component


// i) First, import the Higher Order Component as named import in the Parent component (Body)


import { withPromotedLabel } from "./RestaurantCard"
import RestaurantCard from "./src/components/RestaurantCard"


// ii) Now create a variable and initialize it with the Higher Order Component call, inside the Parent component only (Before the return statement and useEffect())
// --> while calling the Higher Order Function, remember to pass the argument that is our original RestaurantCard component


const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)


// iii) Now in Parent Component, wherever we are rendering the original component, put it inside a ternary operator or if-else statement
// --> Based on condition render either of the two components
// --> Our condition --> if(restaurant.promoted === true)


RestaurantCardPromoted.promoted ? <RestaurantCardPromoted></RestaurantCardPromoted> : <RestaurantCard resData={restaurant}></RestaurantCard>


// iv) if we are passing any props to the original component while rendering the original component
// --> For e.g :- here we are passing "resData"
// --> Copy the exact same prop and pass it inside our Higher Order component tag too inside the ternary operator


RestaurantCardPromoted.promoted ? <RestaurantCardPromoted resData={restaurant}></RestaurantCardPromoted> : <RestaurantCard resData={restaurant}></RestaurantCard>







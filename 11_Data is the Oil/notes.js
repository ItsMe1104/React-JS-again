// 1) Higher Order Components (VVI for interviews) :-
// --> It is a normal JS function that takes a component and returns a component
// --> It acts like an enhancer, it takes in a component as input and then enhances it with some extra features and then returns it
// --> These are pure functions which do not change or modify the code of the original component 




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


import { withPromotedLabel } from "./src/components/RestaurantCard"
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


// v) Where will the props be received in the higher order function / How to read the props in higher order function?
// --> we will receive it in the component function which is returned from the higher Order function
// --> Pass it again to our original component tag inside the higher order function in the form of spread operator {...props} inside the original component tag 
// --> Spread operator is used tobundle all the props in a single object while passing 
// e.g :- <RestaurantCard {...props} />



export const withPromotedLabell = (RestaurantCard) => {

  //returning a function / component
  // here the props will be received
  return (props) => {

    return (
      <>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </>
    )
  }
}





//*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 2) Making the promoted Label beautiful using Tailwind inside the higher order function

// --> a) To make the label overlap over the card component
// --> Use the css position property of absolute
// --> className = "absolute"


// --> b) Make it black in background color and set the font colour to white
// --> className = "bg-white"
// --> className = "text-white"


// --> c) Giving some margin, padding
// --> className = "m-2 p-2"


// --> d) Giving rounded corners
// --> className = "rounded-lg"








//*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 3) UI layer and Data Layer

// --> Every React Application has two layers :- UI layer and Data Layer
// --> UI layer is powered by Data Layer
// --> UI layer is the code that we write inside jsx
// --> The Data Layer consist of your states, props, local variables, code we write inside {}, whatever data is present in our app
// --> If we manage our data correctly in React Applications, our applications will become super fast and performant






//*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


//4) Extracting required objects from an array of objects

// --> For e.g :-if we want to extract some objects from an API
// --> we only want to extract some required objects from the Array of Objects



//STEPS :-

// --> Hence first find some property which is specific only in those objects we want to extract
// e.g :- all our required objects have the value of "Item.Category" in the "card.card.@type" property
// --> Now use the filter() method, to extract the required objects in a shorter array and store it in some variable

// --> Let's say we have the array name as :-
resInfo?.cards[2]?.groupedCard.cards


const itemCategory = resInfo?.cards[2]?.groupedCard.cards.filter(category => category?.card?.card?.["@type"] === "Item.Category");

// --> We have to use [] with "" for the @type category, as JS doesnt allow a variable or a property name to start with a special category like @
// --> Remember to use Optional chaining else it the above syntax wont work

card?.["@type"]

// --> We can even wrap any property like this despite of any special characters (but remember to use optional chaining before that)

category?.card?.["card"]?.["@type"] === "Item.Category"



// NOTE : In our mockData, we dont need the above scenario right now, as our categories array contain the required objects only





//*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 5) Building ACCORDIAN :-

// --> An Accordian is a card type UI which can expand and collapse
// --> There are always two parts of ACCORDIAN
// a) Accordian Header
// b) Accordian Data


// --> In the Accordian Header, we have to print the "Veg" or the "Non-veg" and inside the Accordian Data we will have the list items of both the categories




// For each category (i.e veg and non-veg), we will build the accordian item





//*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 6) Accordian Header :-


// --> For APIs :-
// --> Create a new component namely RestaurantCategory.jsx and use it inside RestaurantMenu.jsx
// --> We can simply use the API data and pass as props inside RestaurantCategory.jsx in RestaurantMenu.jsx
// --> Use the map function to loop in the categories and use them as accordian header


// --> For Mock data :-
// --> Create a new component namely RestaurantCategory.jsx and use it inside RestaurantMenu.jsx
// --> For each restaurant we will have two accordian header namely "veg" and "non-veg"
// --> Hence pass an array containing the two strings "veg" and "non-veg" as props inside RestaurantCategory.jsx , or directly make an array in the ItemList.jsx only and then use map function to loop and create two div for veg and non-veg


// NOTE :- Whenever we need to loop in an object, then use :- 
Object.entries(obj_name).map((item) => {
  // key = item[0];
  // value = item[1];
})






//*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 7) Accordian Data :-
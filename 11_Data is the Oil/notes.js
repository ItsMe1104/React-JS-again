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


//********************************** */

// ii) Now create a variable and initialize it with the Higher Order Component (as it is a pure function returning a component which inturn returns some JSX)
// ==> It will be done inside the Parent component only (in our case Body component) (Before the return statement and useEffect())
// NOTE :- while calling the Higher Order Function, remember to pass the argument that is our original RestaurantCard component


const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)


// ***********************************

// iii) Now in Parent Component, wherever we are rendering the original component, put it inside a ternary operator or if-else statement
// --> Based on condition render either of the two components
// --> Our condition --> if(restaurant.promoted === true)


RestaurantCardPromoted.promoted ? <RestaurantCardPromoted></RestaurantCardPromoted> : <RestaurantCard resData={restaurant}></RestaurantCard>


//************************************* */

// iv) if we are passing any props to the original component while rendering the original component
// --> For e.g :- here we are passing "resData"
// --> Copy the exact same prop and pass it inside our Higher Order component tag too inside the ternary operator


RestaurantCardPromoted.promoted ? <RestaurantCardPromoted resData={restaurant}></RestaurantCardPromoted> : <RestaurantCard resData={restaurant}></RestaurantCard>


//************************************ */

// v) Where will the props be received in the higher order function / How to read the props in higher order function?

// --> we will receive it in the component function which is returned from the higher Order function
// --> Pass it again to our original component tag inside the higher order function in the form of spread operator {...props} inside the original component tag 
// --> Spread operator is used to bundle all the props in a single object while passing (as Higher Order Component will receive all the original props in form of an object only)

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
// --> UI layer is the static code that we write inside jsx
// --> The Data Layer consist of your states, props, local variables, code we write inside {}, whatever data is present in our app
// --> If we manage our data correctly in React Applications, our applications will become super fast and performant






//*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


//4) Extracting required objects from an array of objects

// --> For e.g :-if we want to extract some objects from an API
// --> we only want to extract some required objects having a specific property from the Array of Objects



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


// (RestaurantMenu --> Is the page where every restaurant shows its menu)
// (RestaurantCategory --> Is the whole Accordian for one whole category like Recommended, Biryanis, Chinese, etc)


//************************************ */

// --> For APIs :-

// # STEP 1 :-
// ==> Create a new component namely RestaurantCategory.jsx and use it inside RestaurantMenu.jsx
// ==> We can simply use the API data and extract the data of all categories of that restaurant

// ==> Use the map function to loop in the categories and for each category create an accordian <RestaurantCategory />
// ==> Pass all the food items present in that category as props in accordian component <RestaurantCategory />



// # STEP 2
// ==> Go to the Accordian Component (RestaurantCategory.jsx), and use the props received to show the data for the Accordian Header



// RestaurantMenu.jsx

const categories_arr = API_DATA.cards.category
categories_arr.map((category, index) => {
  return <RestaurantCategory category={category} />
})

// RestaurantCategory.jsx

const RestaurantCategory = (props) => {
  // Accordian Header
  <h1>{props.category_name}</h1>
  // Accordian Body
}




//************************************* */


// --> For our Mock data :-

// # STEP 1  :-
// ==> Create a new component namely RestaurantCategory.jsx and use it inside RestaurantMenu.jsx
// ==> For each restaurant we will have two accordian header namely "veg" and "non-veg" for now.
// ==> Since, we dont have separate APIs for different restaurants, hence first we need to find the restaurant whose items we want to see 
// ==> For that we will match the inout id with the ids of all the restaurant in our mock data

let current_idx = 0;
for (let idx = 0; idx < API_data.length; idx++) {
  if (API_data[idx].id == resId) {
    current_idx = idx;
    break;
  }
}


// ==> Since our mock data is structured in such a way that it does not we have a nested object structure for each restaurant specifying veg and non-veg items.

/*
  categories: {
    veg: {
      "Indian Spicy Roll": 400,
      "Paneer Zinger Burger": 208,
    },
  
    non_veg: {
      "Classic Chicken Rice Bowlz": 229,
      "Single Chicken Roll": 119,
    }
  }
*/

// ==> Hence first extract the "veg" and the "non_veg" objects using object destructuring.

const { veg, non_veg } = API_data[current_idx].category;

// ==> Since all our Restaurant Menus will have only two Accordians
// ==> Therefore, create two Accrodian Components and pass veg and non_veg objects as props
// ==> As well as pass the title of the Accordian as props

<>
  <RestaurantCategory category={veg} title={"Veg Food"} />
  <RestaurantCategory category={non_veg} title={"Non-Veg Food"} />
</>



// # STEP 2 :-
// ==> Go to the RestaurantCategory.jsx, and use the props received to show the data for the Accordian Header
// ==> To get the number of items in each veg and non-veg category, we have to first convert the veg / non_veg object into an array just to find its length
// ==> We can use Object.keys() 


const RestaurantCategory1 = (props) => {
  // Accordian Header
  <>
    <span>{props.title}</span>
    <span>{Object.keys(props.category).lenght}</span>
  </>
  // Accordian Body
}




//*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 7) Accordian Data / Body :-

// a) For APIs :-

// STEP 1 :-
// --> Create another component called ItemList.jsx which will show all the items of a particular category
// --> Use this component inside the Accordian Container only just below Accordian Header
// --> Try adjusting using CSS
// --> Pass the api data of that category's items inside the ItemList.jsx



// STEP 2 :-

// --> Inside Items.jsx (items in one category) use the map() to loop and print the food items (name, price, description, image) for each category's items
// --> Use Tailwind to adjust the CSS such that the pic comes on right, while the name, price and description come down on the left one after the other


// RestaurantCategory.jsx
const RestaurantCategory2 = (props) => {
  // Accordian Header

  // Accordian Body
  <ItemList items={props.category.items} />
}



// ItemList.jsx
const ItemList = (items) => {
  return (
    items.map((item, idx) => {
      <div key={idx}>
        <div>{item.pic}</div>
        <div>{item.name}</div>
      </div>
    })
  )
}



//*************************** */

// b) For our mock data :-


// STEP 1 :-
// --> Create another component called ItemList.jsx which will show all the items of a particular category
// --> Use this component inside the Accordian Container only just below Accordian Header
// --> Try adjusting using CSS
// --> Pass the veg or the non_veg object received as props in the Accordian component (RestaurantMenu.js) as props to <ItemList> component to show the items in the veg / non_veg category



// STEP 2 :-
// --> Since we received objects as props, we need to convert it to array using Object.entries() inorder to use map() on it
// --> Inside Items.jsx (items in one category) use the map() to loop and print the food items (name, price, description, image) for each category's items
// --> Use Tailwind to adjust the CSS such that the pic comes on right, while the name, price and description come down on the left one after the other


// RestaurantCategory.jsx
const RestaurantCategory3 = (props) => {
  // Accordian Header

  // Accordian Body
  <ItemList items={props.category} />
}


// ItemList.jsx
const ItemList2 = (items) => {

  const items_arr = Object.entries(items);
  return (
    items_arr.map((item, idx) => {
      <div key={idx}>
        <div>{item[0]}</div>  // Item_name
        <div>{item[1]}</div>  // Item price
      </div>
    })
  )
}


//*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 8) Expanding and Collapsing Accordian Body :-

// --> When we click on the the Accordian Header, we should be able to Expand and collapse our Accordian Body.
// --> Put an onClick() handler on the Accordian Header
// --> Inside it pass the clickHandle() function
// --> Use a variable which will control if our accordion Body will show or not.




// #) Process :-

// --> Note:- If we try to hide / collapse the Accordian body, we have to rerender the whole component as the DOM needs to be updated.
// --> Hence, we will use a UseState variable to show or hide our Acccordian Body
// --> So that it also rerenders the component simultaneously


// ==> At starting since, we don't want to show our Accordian body, hence set the iitial value of our State variable as "false"
// ==> On every click on the Accordian Body, we will update the variable to opposite of itself

// ==> We will only render our Accordian Body, if our State variable is turned "true" else we will show an empty <div> using ternary Operator



const RestaurantCategory4 = (props) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  }
  return (
    <>
      {/*  Accordian Header */}
      <div onClick={handleClick} >
      </div>

      {/* Accordian Body */}
      {showItems === true ? <ItemList items={veg} /> : <div></div>}
    </>
  )
}


// 1:34:00
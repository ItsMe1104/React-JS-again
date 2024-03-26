// Install JSON viewer by Developer Tools in Chrome extensions
// :- It helps to simplify and clean JSON data



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
// ==> We can pass as many number of props s many we want
// ==> This object can be received as the first parameter in the component function with any name
// ==> Generally we name it as "props"

// ==> Since its an object , hence we have to use "." operator to access the value of any of the specific prop  properties

// ==> Inorder to use the object values, inside JSX, we have to use curly braces {}, since that object is a JS variable only


const RestaurantCard = (props) => {

  console.log(props);    // will give an object of props passed as an argument
  return (

    // one restaurant card 
    <div className="res-card">
      <h3> {props.name} </h3>
      <h4> {props.cuisine} </h4>
    </div>
  )
}



//************************************************************************************************************************************************************************************************************************************************************************************************** */

// 4) Different representation of props inside our component :-


// a) Normal props object representation (seen above also) :-

const RestaurantCard2 = (props) => {

  return (
    // one restaurant card 
    <div className="res-card">
      <h3> {props.name} </h3>
      <h4> {props.cuisine} </h4>
    </div>
  )
}





// b) Destructuring props on the fly (inside parameter only)
// This is normal JS
// hence instead of using props.name, etc we can directly use 'name' to get its dynamic value

const RestaurantCard3 = ({ name, cuisine }) => {

  return (
    // one restaurant card 
    <div className="res-card">
      <h3> {name} </h3>
      <h4> {cuisine} </h4>
    </div>
  )
}


// c) Destructuring props inside component 
// Syntax :- const {a,b,c} = props;
// a,b,c = properties
// Similarly Destruturing of array we will see in useState hook

const RestaurantCard4 = (props) => {

  const { name, cuisine } = props;

  return (
    // one restaurant card 
    <div className="res-card">
      <h3> {name} </h3>
      <h4> {cuisine} </h4>
    </div>
  )
}




//************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// Config Driven UI :- Website will be driven by data / UI.
// Controlling our UI using data i.e config which comes from backend
// UI is powered by Data
// There are two layers :- UI layer and Data layer, which together makes a frontend app




//********************************************************************************************************************************************************************************************************************************************************************************************************************************* */


// 4) Dealing with props and JSON data from backend :-

//If we get some data in form of Json in backend :-
// ==> Hence we cannot pass all the properties inside this JSON object one by one as an argument in the component tag
// ==> Instead we pass the JSON object directly as a value (mapped with any key, but generally same as the name of object) in the arguments
// ==> Since we are passing JSON object, which is JS, hence instead of string value, we have to pass it inside braces

//i.e :-
<RestaurantCard resData={resData} />



//e.g :-

//JSON
const resObj = {
  "data": {
    "restaurantId": "324568",
    "name": "Medhna Foods",
    "cuisine": ["North Indian", "Biryani", "South Indian"],
    "deliveryTime": 36,
    "Cost": 4000
  }
}

/*
< div className = "res-container2" >
    < RestaurantCard
       resData = {resObj}
    />
</div>
*/





//Receiving props (passed as a JSON object directly) inside Component

// ==> the JSON object passed will be received inside the first parameter of the component as props
// ==>  we destructure it directly in form of an object (name should be same as the name of the key used while passing)

// const {abc} = props; 
// abc ==>  < RestaurantCard  abc = {resData} />


// e.g :-

const RestaurantCard5 = (props) => {

  const { resData } = props;

  return (
    // one restaurant card 
    <div className="res-card">

      {/* our required properties are inside another properties named 'data' inside the JSON object*/}
      <h3> {resData.data.name} </h3>
      <h3> {resData.data.cuisine.join(", ")} </h3>   //converting cuisine array to cuisine string where elements are separated by comma ','
      <h3> {resData.data.deliveryTime} </h3>
      <h3> {resData.data.cost / 100} For TWO</h3>

    </div>
  )
}


// Till 1:36:00


//NOTE :-
// How to convert an array to a string where its elements are separated by any character

// use '.join()'

//Syntax :-
// const str = arr.join("a")
// a ==> any character


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



//********************************************************************************************************************************************************************************************************************************************************************************************************************************* */




// 5) Receiving props (passed as a JSON object directly) inside Component

// ==> the JSON object passed will be received inside the first parameter of the component as props
// ==> props would be an object inside which there would be another object 
// ==> Hence, we need to destructure it

/* props ==> 
{
  abc : {
      ...JSON_Object..
  }
}
*/

// ==>  we destructure it directly in form of an object (name should be same as the name of the key used while passing)

// const { abc } = props; 
// abc ==>  < RestaurantCard  abc = {resData} />


//Now we can use the properties of 'abc' object using dot '.' operator 



//*********************************************************************************************************************************************************************************************************************************************************************** */




// 6) Double Destructuring :-

//Since 'abc' is an object in itself, if we have properties inside 'abc' as further objects
// We can destructure "abc" further.


const { def, hij, klm } = abc?.jkl;
// def, hij, klm ==> are properties
// The '?' inside is known as optional chaining

// e.g :-

const RestaurantCard5 = (props) => {

  const { resData } = props;

  //further destructuring resData
  const {
    restaurantId, cuisine, cost
  } = resData?.data;

  return (
    // one restaurant card 
    <div className="res-card">

      {/* our required properties are inside another properties named 'data' inside the JSON object*/}
      <h3> {restaurantId} </h3>
      <h3> {cuisine.join(", ")} </h3>   //converting cuisine array to cuisine string where elements are separated by comma ','
      <h3> {cost / 100} For TWO</h3>

    </div>
  )
}




//NOTE :-
// How to convert an array to a string where its elements are separated by any character

// use '.join()'

//Syntax :-
// const str = arr.join("a")
// a ==> any character





//***************************************************************************************************************************************************************************************************************************************************************************************** */

//Cloudinary Image :- Al images are put/hosted in the CDN



//***************************************************************************************************************************************************************************************************************************************************************************************** */


// 7) Using map for array of objects in JSON :-


// Every index in the array contains an object containing the dynamic data of a separate component.

//If we get an array of obejcts as JSON, then instead of making same components again and again manually in our file one by one and passing data dynamically by using JSON array's indexes to get the objects inside it

/*
<RestaurantCard resData={resList[0]} />
<RestaurantCard resData={resList[1]} />
<RestaurantCard resData={resList[2]} />
<RestaurantCard resData={resList[3]} />
*/


//We can use map (best industrial practice to use functional programming like map, filter, reduce) to loop in the JSON array and create our components using the loop.
//This map since written inside JSX, can return JSX also
//Hence it will return a component tag made using JSX

// This concept will help us in making reuseable components


//Task :- Loop over this array and create a component with dynamic data one by one using map



//a) While passing props as arguments and creating a component for each object inside JSON array using map:-

/*
    const resList = [
    {},
    {},
    {}
  ]
*/

<div className="res-container">
  {
    resList.map((restaurant) => {
      return <RestaurantCard resData={restaurant} />
    })
  }
</div>





//b) While using props under components :-
// Arguments received will be under an object 
// Hence 'prop' would contain an object under object
// Destructure 'prop' with the name of key used for sending props
// At last from the destructure object, use your required properties using dot operator "."

const RestaurantCard6 = (props) => {
  const { resData } = props;
  return (
    // one restaurant card 
    <div className="res-card">
      <h3> {resData.name} </h3>
      <h4> {resData.cuisine} </h4>
    </div>
  )
}





//***************************************************************************************************************************************************************************************************************************************************************************************** */

// NOTE :-
//Even if we are doing string concatenation that too inside JSX, then we have to put it under curly braces '{}'

//e.g :-
const RestaurantCard7 = () => {
  return (
    <img src={"abcd" + "abc"} alt="" srcset="" />
  )
}

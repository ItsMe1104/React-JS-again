// CLASS BASED COMPONENTS :-

import { useState } from "react";

// Why Important?
// --> Asked alot in interviews due to legacy code and older projects
// --> Understanding of React becomes more stronger


// We will experiment with class based components with the AboutUs Page



//********************************************************************************************************************************************************************************************************************************************************************** */



// A) What are Class Based Components?
// ==> These are normal JS class returning some JSX



//********************************************************************************************************************************************************************************************************************************************************************** */




// B) Creation of Class-Based Components

// ==> Use the keyword class followed by name of the Component (same as the name of the file)
// ==> To make this a component use Inheritance
// ==> Use "extends React.Component"
// ==> It makes React know that it is a component
// ==> import React from "react"  --> to import the parent class (React.Component) from react package
// ==> or use a named-import to only import 'Component' from "react" 

import { Component } from "react";

// ==> export the component in the same way as in functional components


// --> extends : Use for inheritance
// --> React.component : Parent class that we want to inherit

class UserClass1 extends React.Component {

}

or

//For named import
class UserClass1 extends Component {

}





//********************************************************************************************************************************************************************************************************************************************************************** */




// C) Returning JSX from Class-Based Components


// ==> To return jsx in class-based components, use a render() method
// ==> Whatever jsx the render() method returns will be shown into the UI


class UserClass1 extends React.Component {
  render() {
    return <div className=""></div>
  }
}



//Difference between Functional components and Class-Based Components :-

// ==> Functional Components are Js functions which return a piece of JSX
// ==> Class-based components are JS class that extends React.Component and has a render() method which returns a piece of jsx




//********************************************************************************************************************************************************************************************************************************************************************** */




// D) Using props in class based components


// i) Passing props :-
// ==> Passing props is same in both functional and class components
// ==> In the main component where we are using tags of our cmponent, pass it like attributes in HTML

// <User name={"Hrithik Shaw (function)"} />
// <UserClass name={"Hrithik Shaw (class)"} />




// ii) Receiving props :-

// a) FUNCTIONAL COMPONENTS :-
// --> Same as like reciving parameters in the component function
// --> It is the first parameter in the component function
// --> It is in object form
// --> How to use it?
//      i) Give the parameter name as props and use '.' operator to access its properties
//      ii) Destrucutre it on the fly

// e.g :-
const User = ({ name, location }) => {
  return <div className="user-card">
  </div>
}

//      iii) Destructure it normally
/* e.g :-
 const User = (props) => {

   const {name, location} = props;
   return <div className="user-card"> </div>
 } */






// b) Class-Based Components
// --> Create a constructor inside class above render()
// --> The constructor will receive the props in the same way functional components did
// --> Use the method super(props) inside the Constructor to actually receive the props


// QUESTION :- Why to use super() or super(props)?
// ==> `super(props)` is used to inherit the properties and access of variables of the React parent class when we initialize our component.
// ==> Whenever the an instance of the class is created, the constructor will be called and the props will be extracted from parent class


// ==> super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then "Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor" is thrown in the console.
// ==> The main difference between super() and super(props) is that this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.
// ==> Hence in super() , we can use this.props everywhere except inside the constructor, while in super(props) we can access the props anywhere.
// ==> Note we can directly access the props using 'this.props.abcd' if we didnt make any constructor and that will work fine as we directly use the props from the parent class since it we inherited it. But if we make a constructor, then we cannot access the 'this' keyword without using super() or super(props)




// QUESTION :- How to use the props?
// ==>  i) Use 'this.props.abcd' to access 'abcd' prop passed by the parent component.
// --> Always use 'this' keyword so that the prop can be accessed anywhere inside the class

// ==> ii) Destructure inside the render() method before the return statement using this.props

const { name, location } = this.props;
/*
e.g :-
render(){
  const { name, location } = this.props;
  return (
    <div>
      <h2>{name}</h2>
      <h2>{location}</h2>
    </div>
  )
}
*/


//VVI NOTE :--
// --> props are read only in the component that receives it, that is, we cannot update the props in the component that receives it.
// --> props can only be updated in the parent component that sends it.




//********************************************************************************************************************************************************************************************************************************************************************** */



// E) Creating State variables in Class-Based Components


// --> Rendering a functional component :-
// == mounting/invoking that function to load into the webpage


// --> Creating a new instance of a class :- 
// == loading the class returned jsx into the webpage


// a) In functional components :-
// --> We used useState() hook
// --> We have to create all the State variables separately
// --> Behind the scenes all these State variables are put together in a single object by React
//
const [count1, setCount1] = useState(1);
const [count2, setCount2] = useState(2);




// b) In class-based components :-
// --> State variables were created whenever an instance of a class was created
// --> As when the instance is created, the first thing that gets called is the constructor, hence the best place to define state variables is inside constructor
// --> We make an object inside the constructor known as "this.state"
// --> It contains an object where we specify all the State variables along with their initial value in key-value format
// --> here we define all the state variables

constructor(props)
{

  super(props);
  this.state = {
    count1: 1,
    count2: 2
  }
}




//********************************************************************************************************************************************************************************************************************************************************************** */

//F) Using the State variables :-

// --> Both in functional and class components, we use the State variables inside the curly braces {} 
// --> In functional components we directly use the variable name
// --> In class based components, we use this.state.variable_name or we have to destructure it inside render() before the returning statement to use the variable directly 

// a) Functional Component
<div>
  <h2>{count1}</h2>
  <h2>{count2}</h2>
</div>


// b) Class-based Component

/*
constructor(props) {
  super(props);
  this.state = {
    count1: 1,
    count2: 2,
    count3: 3
  }
}

render() {

  const { count1, count2 } = this.state

  return <div className="user-card">
    <h1>{count1}</h1>
    <h1>{count2}</h1>
    <h1>{this.state.count3}</h1>
  </div >
}
*/





//********************************************************************************************************************************************************************************************************************************************************************** */

// G) Updating State variables in Class based components :-

/*
  In functional component, we just created the set() while initialization, and whenever we needed to update the State Variable, we passed the updated value in the set function



  In class-based component, we dont have any set function
    --> this.state.count = this.state.count + 1 (WON'TTTT WORK)
    --> NEVER UPDATE STATE VARIABLES DIRECTLY with equal to (=)

    --> React gives us a special function called setState()
    --> We access it using this.setState()
    --> We pass an object containing the updated State variables along with their values inside the setState()

    this.setState({
        count1: count1 + 1,
      } )

    --> Dont create separate setState() functions for updating different State variables at a single event, put them together in the same object inside the setState() 
    --> Only the State variables mentioned in setState() will be updated, rest will remain same
    --> Once the State variable is updated, as usual React re-renders the component and updates the required part only

  */

//For e.g, if we want to update the State variables in the UI on a button click,

{
  <div>
    <button onClick={() => {
      this.setState({
        count1: count1 + 1,
        count2: this.state.count2 + 1    //another way to increment if we dont destructure
      })
    }}></button>

  </div>
}
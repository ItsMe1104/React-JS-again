// CLASS BASED COMPONENTS :-

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
// ==> export the component in the same way as in functional components


// --> extends : Use for inheritance
// --> React.component : Parent class that we want to inherit

class UserClass1 extends React.Component {

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

// a) Functional Components :-
// --> Same as like reciving parameters in the component function
// --> It is the first parameter in the component function
// --> It is in object form
// --> How to use it?
//      i) Give the parameter name as props and use '.' operator to access its properties
//      ii) Destrucutre it on the fly
            /* e.g :- 
            const User = ({name, location}) => {
              return <div className="user-card">
            </div>
            } */

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



// Final Time Question :- Why React is fast?
// ==> React is fast an efficient in DOM manipulation
// ==> UI and Data layers work in sync



//  Definition :-

// i) Rendering :- Process through which the components defined by the programmer gets broken down into React elements (JS objects), gets attached in the virtual DOM and updated into the actual DOM so that we get the actual UI.



// ii) Re-rendering :- Whenever a STATE varible gets modified, React refreshes the component (along with child components). This is called Re-RENDERING. It then, uses the reconciliation to update the actual DOM and the UI with minimum efforts.  

// ==> Whenever, a STATE variable updates, React will rerenders the whole component in which the State variable is present.




//1) Event Handlers :-

// How to add Event Handlers on our elements :-
// --> We use the Event Handlers as special attributes in our element tags
//mainly they are same as JS event_names with an 'on' before them.
// All events we have in JS, we have some event handlers for that in React, e.g =>
// click --> onClick
// mouseOver --> onMouseOver


//Syntax :-
// onEvent_name = {callback_function()}


// here the callback_function(), doesn't return anything instead does something like changing of variables, updating UI, etc
//hence we don't need to use the return keyword
//Unlike in map(), filter(), reduce(), where the callback functions instead returns something always



// e.g :-
//==> Using Event Handler for 'CLICK' event on a button

// <button onClick = { ()=> {...} } > Click Me <button>

/*
<button onClick = { ()=> {
      console.log("Clicked")
    }
   } >
   Click Me
  < button >
*/




// e.g :-
//==> Using Event Handler for 'HOVER' event on a button

// <button onMouseOver = { ()=> {...} } > Hovered <button>

/*
<button onMouseOver = { ()=> {
      console.log("Hovered")
    }
   } >
   Click Me
  < button >
*/




//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */




//2) useState() hook :-

//What are hooks?
// --> Normal prebuilt JS functions written by React developers, which gives us various super powers. These are utility functions given by React, whose code is written inside the react durectory, inside node_modules.
// --> Mostly used hooks (99% times):- useState(), useEffect()





// i) Importing React hooks into our component file

// ==> We always import the React hooks from "react" directory directly without giving any path.
// ==> We always import them inside object braces as named import, since they have been name exported in their original source files
// ==> unlike 'react' which has been default imported.

// e.g :-
import { useState } from "react";
import { useEffect } from "react";
import { useState, useEffect } from "react";





// ii) Normal JS variable vs React State Variable

// *) Normal JS variable :-
// let a = "abc",
// const abc = [1,true,56];


// *) React State Variable :-
// ==> These are super powerful variables
// ==> It can also behave like normal JS variables
// ==> Can be created by React's useState() hook only
// ==> It helps the UI layer to be in sync with the DATA layer. Normal JS variables cannot update our UI.
// Local State Variable ==> state variable whose scope is within the component





// iii) useState() hook :-
// ==> It maintains the state of our component
// ==> Try to always create local State variable


// How to create State variables
// ==> can be let,const or var
// Declaration and initialization are both done in same lines


//Declaration :-
// ==> const [var_name] = useState();


//Initialization :-
// ==> const [var_name] = useState(Initial_value);

//e.g :- Initializing an array  State variable
const [listOfRestaurants] = useState([1, 2, 3]);



//Actual Syntax :-
// const [a,b] = useState(initial_value)
// a => State variable name
// b => function_name to modify the variable

//Convention of naming 'b' above
// ==> Can be given any name but
// ==> Whatever the name of variable is, we add 'set' before that (Good Practice)
// ==> a = name
// ==> b = setName

// ==> a = age
// ==> b = setAge

//e.g :-
const [age, setAge] = useState(24);



// Modifying the value of State Variable:-

// ==> We cannot modify the value of State Variable directly using '=' sign.
// ==>Instead we use the second parameter of the array in State Variable.
// ==> As its the function name which helps in modifying the value.
// ==> Hence just call the function and pass the updated value.

// Syntax :-
// set_func(updated_value);



//e.g :-
//Creation and initialization
const [name, setName] = useState("Hrithik");

// Modification
setName("Ritzzz");




//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 3) Behind the scenes :-

// ==> React keeps a track of all the State Variables only
// ==> Whenever we call the set() function of any State Variable to update the value, React gets a trigger and it rerenders the whole component (along with its children component) in which that State Variable is present. This is called re-RENDERING.

// ==> Hence, whenever a STATE varible gets modified, React updates the UI and refreshes the component (along with the child components). This is called RENDERING.

// ==> This is the actual power of State Variable






//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// Why do React components rerender?
// --> Else we would see the same UI and it would be equal to a static page



// When does a React Component Re-render?
// --> When its state changes or props passed to it changes (Not accurate reason) , unless we use other hooks like React.memo()

// ==> Only the component whose state got changed along with its children needs to be re-Rendered, and not the parents of that component
// ==> All Child component also rerenders when parent component renders because React assumes all components are not pure, means their rendered output doesnt only depend on the inputs provided to it.
// ==> Maybe some child component needs to call an API which depends on something from the parent component which got rerendered



// Q) Then will the performance get a huge hit, if there is a huge nested component (component with large number of children)
// ==> Even though React will render all the children components multiple times, due to React's reconciliation algorithm, the whole DOM is not painted from scratch rather only the required updates are refected on the DOM with the help of actual DOM


//==> Using React.memo() hook on a component we can tell React that its render will only be dependent on the props it receives rather than the states changed in its parent component
// 1) Some notes about useEffect() :-

import { useEffect } from "react"


// a) UseEffect : Use to produce sideeffects of component render :-

// Syntax :-
// useEffect(a,b)
// a --> callback function (Mandatory)
// b --> dependency array  (Optional)



//When is useEffect() called?
// --> After every render of the component
// --> But the dependency array can change the behaviour of default behaviour of useEffect




// Effect of dependency array is
// i) --> not present :- useEffect is called on every component render
useEffect(() => {
  return {};
})

// ii) --> empty array [] :- useEffect is called only on first render / initial render of the component (that is the time when the page loads, the component also loads)
// No calls of useEffect on rerenders
useEffect(() => {
  return {};
}, [])

// iii) --> local State Variable  of React :- It will render when the dependency will change. That is everytime that local State Variable is updated using set() of useState()

useEffect(() => {
  return {};
}, [j, k, l])

//Hence whenever either of the the State variables, j,k,l gets updated by set(), useEffect() will be called





//***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */

// 2) Some good practices about useState() :-

// a) Never create state variables using useState() outside of component, else it will give error
// --> useState() is always used to create local State variables
// b) Always define local State Variables at the starting of the component function to avoid inconsistency, as JS is a single threaded synchronous language hence code will always run line by line
// c) Never define local State Variables inside if-else, forLoops, or inner functions although it wont give any error. (Written in documentation)
// --> It can create inconsistencies in our code.







//***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */

// 3) React-router-DOM :-

// ==> use to create different routes inside our applications


//a) Installation
// ==> npm install react-router-dom


//b) Go to the root level comonent :-
// ==> App component


//c) Importing :-
// ==> import as named import
// ==> import {createBrowserRouter} from "react-router-dom"


//d) Create routing configuration :-
//  configuration :- info which will define what will happen on a specific route/path

//Syntax :-
//  const appRouter = createBrowserRouter(a);
// --> a = list of paths
// --> path is an object with two key-value pairs (path and element)


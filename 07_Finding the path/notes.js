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

//Syntax (Developing a router) :-
//  const appRouter = createBrowserRouter(a);
// --> a = list of paths
// --> path is an object with two compulsary key-value pairs (path and element)

// path : "/page_name"
// element : Component for that page (Make sure it is already imported in App.js for using it)

[
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <About />
  }
]


//Whole Syntax :-
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <About />
  }
])




// e) Rendering the Configuration :-
//==> Once the configuration is created it should be provided to render

//**** import "RouterProvider" also as named import from "react-router-dom"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

// ==> This RouterProvider is a component give by react-router-dom
// ==> It provides the routing configuration to our app


//****   Now instead of rendering <App> or <AppLayout> directly inside root.render()
//****   We will reder <RouterProvider> component
//****   it will have an attribute named as 'router' which will take the value of our appRouter that we created
//****   since our appRouter is a JS variable, it will come inside curly braces

root.render(<RouterProvider router={appRouter} />)




//NOTE :- There are different types of routers that reactRouter.com provides us
// ==> But react personally says that "createBrowserRouter" is the recommended router for react projects




//*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/


//4) Error Handling in routing :-

// ==> What if someone entered a random URL path which was not specified in the list of paths that we gave.
// ==> It should show a 404 error (unexpected Application Error)
// ==> react-router-dom itself handles the error and creates an error page for you
// ==> we can also create our own error page like "Oops something went wrong"


//To give our desired Error page while routing to a random URL

// ==> create a Error component which will show the error page
// ==> In the list of paths, in the first element which gives the path to our <App /> component when we use "/"
// Always use it only in the first element as <App /> component is our main component
// ==> Just add an extra key-value pair :-
errorElement: <Error />



// i.e :-

[
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path: "/about",
    element: <About />
  }
]
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
// ==> NPM JS library
// ==> use to create different routes inside our applications


//a) Installation
// ==> npm install react-router-dom


//b) Go to the root level comonent :-
// ==> App component


//c) Importing :-
// ==> import as named import
// ==> import {createBrowserRouter} from "react-router-dom"        //for creating routing configuation


//d) Create routing configuration to create routes:-
//  configuration :- info which will define the Browser Router that what will happen on a specific route/path

//Syntax (Developing a router) :-
//  const appRouter = createBrowserRouter(a);
// --> a = list of paths  (list of objects)
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
  },
  {
    path: "/contact",
    element: <Contact />
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
// ==> But react personally says that "createBrowserRouter" is the recommended router for react projects as it uses the DOM History API to update the URL




//*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/


//4) Error Handling in routing :-

// ==> What if someone entered a random URL path which was not specified in the list of paths that we gave.
// ==> It should show a 404 error (unexpected Application Error)
// ==> react-router-dom itself handles the error and creates an error page for you
// ==> we can also create our own error page like "Oops something went wrong"


//* a) To give our own Error page while routing to a random URL

// ==> create a Error component which will show the error page
// ==> In the list of paths, in the first element which gives the path to our <App /> component when we use "/"
// Always use it only in the first element as <App /> component is our main component
// ==> Just add an extra key-value pair :-
errorElement: <Error />
// ==> Create a error page using the <Error /> component



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




//* b) Using useRouteError() hook provided by react-router-dom

// ==> Whenever we find something starting with 'use', it is surely a hook in React
// ==> react-router-dom also provides a hook named as 'useRouteError()' which gives us more info regarding any routing or network error




// --> Import it as a named import from 'react-route-dom' inside the Error component
import { useRouteError } from "react-router-dom";

// --> Store its return value as a local variable in the Error component
const err = useRouteError();
console.log(err);

// --> use .status and .statusText to show in the wbpage
<h3>{err.status} : {err.statusText}</h3>






//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */

// 5) Children Routes :-

//==> The above concept will work well if we want to have completely different pages w.r.t to the routes but,

// ==> If we want that some part of our component (mostly <App />) remains intact for some other paths while only some part of it changes according to the path
// e.g :- If we want in our About and Contact pages, we have the same Header as the App component page, just our App's body (lower portion) gets replaced by the content of the About or Contact page


//To get this functionality we have to create CHILDREN ROUTES

//Parent :- App component with "/" route (since its header will be same in the Contact and About pages)

//Children :- Component from Parent Component which will change (here <Body />) + Components which will have some part intact from the Parent and some part will change. Here the <Body />, <About /> and <Contact /> components are children with the routes "/" , "/about" and "/contact"




//*************  PROCESS 1 :-  *******************

// a) hence in the path (object) specified for "/", we would have to add a 'key' as 'children' and its value will be a list of paths (objects) of the children routes

const appRouter4 = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,

    children: [
      //children routes ...
      {
        path: "/",
        element: <Body />
      }
    ]
  }
])



// b)  Add the path (object) for Component from ParentComponent that will change in the parent route "/" inside the children key. That is here the <Body /> will be changed in the "/" route

const appRouter5 = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,

    children: [
      //children routes ...
      {
        path: "/",
        element: <Body />
      }
    ]
  }
])



// c) Just CUT the path (object) of the children routes that is the "/about" and "/contact" from the earlier code and put it as the value of the "children" attribute of the parent route "/"


/* EARLIER CODE

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
  
  
  /***********  TO BE CUT **************
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  }
  /***************************
   
])

*/


//NEW CODE
const appRouter2 = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,

    children: [

      {
        path: "/",
        element: <Body />
      },

      //Pasted Content from above code
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  },
])





//*************  PROCESS 2 :-  ********************************************************

//Put some conditions in the Parent component (here <AppLayout>), so that the upper part remains intact while the lower part automatically changes according to the route

/* i.e

  <Header />

  //***** if path is "/"
  <Body />

  //***** if path is "/about"
  <About />

  //***** if path is "/about"
  <Contact />

*/


//Instead of writing the tedious JS code involving if-else
// ==> React-router-dom gives us a component named "Outlet"
// ==> Whenever there is a change in the path the <Outlet /> compnent will be filled with the children according to the elements specified in the children routes automatically

//Step 1:-
// --> Import it as a named import from 'react-route-dom' inside the Parent Component
import { Outlet } from "react-router-dom";


//Step 2 :-
// --> In the Parent Component <AppLayout>
// --> instead of rendering the component which will change in the Parent component (here <Body />)
// --> Replace it with the <Outlet /> component


const App = () => {
  return (
    <div>
      {/* Intact Part */}
      <Header />

      {/* Part that will change */}
      <Outlet />
    </div>
  )
}





//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// Q) Will we see the <Outlet /> component inside HTML file?
// ==> No, the <Outlet /> component is actually replaced by the child component according to the child route
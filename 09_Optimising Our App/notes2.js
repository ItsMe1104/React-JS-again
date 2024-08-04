// Chunking
// Code Splitting
// Lazy Loading
// Dynamic Bundling



// --> Whenever we develop large scale big apps, the performance start to decrease
// --> Any bundler like vite, parcel tries to bundle our code in single html, css and JS files
// --> Which means it bundles all our component and other js files into one js file
// --> Although during production mode, it will compress and minify more, etc
// --> Hence, there is just one JS file that is loaded onto the browser.
// --> Still if there are thousands of components and otherJS files in our app, the bundled JS file becomes very large in size (the size in production build will be much smaller than in development build, but still will create performance issues)
// --> Hence, large scale production ready application tend to become slow, if all our JS code is bundled into single JS file
// --> Hence, the loading time will increase
// --> We do want bundling because we dont want thousand separate JS files to load in our Browser so that the performance of browser decreases by making thousand calls
// --> We also dont want thousand JS files in one file through single bundling




// To avoid the above scenario, we introduced the concept of LAZY LOADING or CHUNKING :-
// Also known as :-
// Code Splitting
// Dynamic Bundling
// On Demand Loading
// Dynamic import



// --> We will make smaller bundles of these files, and load them into the browser only when required
// --> For e.g :- In MakeMyTrip website, there are so many verticals, like Flights booking, Hotels booking, Trains booking, etc
// --> Logical separation of our bundles, that is a bundle should have enough code for a feature , and then we can split our bundles into logical chunks
// --> Hence in MakeMyTrip :- we can make a bundle of components just for FLIGHTS, another bundle of components for hotels and so on
// --> Hence we can break the whole large application into smaller applications so that there is not enough load on a single bundle





//***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/



// B)  How to do Lazy loding in our app?

// --> Let's say if our app not only delivers food but also has a vertical of delivering groceries, like swiggy's instamart, zomato's blinkit
// --> Grocery Delivery was a separate entity altogether, containing its own 100 child components inside it like Grocery homepage, grocery menu items, grocery order page,
// --> Hence, we will make different bundle for groceries which will be loaded into our browser only when the user wants to go to the grocery section




//STEPS :-

// A) Creating the Grocery Vertical :-

// --> First make a Grocery component (Assume its a big component which has alot of sub and child components)
// --> Then in the Header Component, add a new list item "Grocery" and link it with the Grocery component
// --> In the routing configuration in App.js, add a new object just like other urls inside the children array so that the Header still stays entact


/*
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

      ...

      {
        path: "/grocery",
        element: <Grocery />
      },

      ...
    ],
    errorElement: <Error />
  },
])
*/





//***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/



// C) How to inroduce LAZY LOADING to our Grocery component?

// --> Till now our Grocery component comes under the same single bundle of JS file
// --> We have to make grocery and all its components come under a different bundle



//STEPS :-
// --> In the App.JS  (wherever i am importing grocery)
// --> We will not import it directly
// --> We will import our grocery using Lazy Loading
// --> When our app will load initially, it will not load the code for grocery, only when i go to my Grocery page,then only the grocery code will be brought in the browser for our app

// --> Create a variable with same name as the component 'Grocery'
// --> initialize that variable with 'lazy(x)'
// --> x = callback function which contains the import(y) function
// --> y = path of the component, we want to lazyLoad
// --> The import function is different from the import statement that we write

const Grocery = lazy(() => import("./components/Grocery"))

// --> 'lazy()' is a function which comes from REACT package
// --> We have to import it as a named import like useState() and useEffect()

import React, { lazy } from "react";



// --> We might be able to load grocery bundle in our broswer after we try to go on the Grocery page (lazy load)
// --> Hence we have made two bundled JS files, where one loads at the starting, while the other loads into the browser only after we try to go the grocery page
// --> But it will give still give ERROR in the webpage
// --> This is because the Grocery bundled JS code took some time to load into the browser, but since React is so fast, it tried to load the Grocery component which was not there and hence it suspended the rendering





//**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// C) Solving the Suspended Error while Lazy Loading :-

// --> We have to import the <Suspense /> component from "react" package as a named import just like 'lazy'

import React, { lazy, Suspense } from "react";


// --> In the routing configuration, in the path object of Grocery, just wrap the <Grocery /> component inside the element field with the <Suspense> </Suspense> component
// --> Do not use it like a self closing tag else we cannot use it to wrap
// --> Give a placeholder/attribute named 'fallback' to the <Suspense > component
// --> Give a jsx in {} to this placeholder about what will React render till the Grocery bundle JS file loads.
// --> For e.g :- Give a <h1> tag showing Loading


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // ...
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}> <Grocery /></Suspense>
      },
      // ...
    ],
    errorElement: <Error />
  },
])




// To check the "Loading" h1 tag before the Grocery bundle loads :-
// --> just refresh the whole app
// --> Go to the network tab
// --> in the throtling tab select slow 3G or 3G
// --> Then go to the Grocery page



// H.W :- Try to lazy load the AboutUs page, even though it is a small component, but just for practice
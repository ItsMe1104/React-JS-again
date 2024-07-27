// 1) Creating links for routing to a specific page / component

//e.g --> a About button or a list item names "About" in the navbar should take us to the <About /> component or the "About Us" Page
// That is on clicking the About button, it should take us to the /about route


// ****  1st Way (Not Recommended in React) ***
// --> Create an <a> tag and use the "href" attribute to link the page with the tag
//We can use both relative URL as well as the actual URL
// It refreshes the whole page

// --> e.g :- 
<a href="/about"> About </a>



// **** 2nd Way (Recomended) ***
// ==> Use the <Link /> component provided by react-router-dom
// ==> It works exactly the same as <a> tag


// --> STEPS :-
// a) First, import it as a named import

import { Link } from "react-router-dom"


// b) Second, Use it as an alternative tag along with the "to" attribute
// ==> here "to" attribute works exactly same as the "href" attribute
// ==>Just like in "href", provide the relative or absolute path inside the "to" attribute


<Link to="/contact">Contact Us</Link>


// When we use React and we want to route to some other page, we never ever use the <a> tag and the href attribute
// As it reloads the whole page

// Instead we can navigate to a new page without reloading the whole page using the <Link /> and the "to" attribute
// It just refreshes and replaces the required components using the Reconciliation algorithm

// This is the reason React Applications are known as Single Page Applications (SPA)
// Because its a whole single page with only one HTML file and all new pages are only the components interchanging themselves.
//Hence the Browser will not reload the Website







//******************************************************************************************************************************************************************************************************************************************************************************************************** */


// 2) Types of Routing

// a) Server Side Routing :-
// There would be many HTML pages like index.html, about.html, contact.html
// Whenever we click on an anchor tag, it reloads the whole webpage, sends a network call to get the page connected with that route, fetches that html page and renders it on the webpage
// ==> That is for routing to different pages, it sends a network call, fetches that page and then renders it on the webpage



// b) Client Side Routing (Used in React and Single Page Applications)
// We dont make any network calls while we are moving to some other page
// As all the components / pages are already loaded into our app when we loaded it for the first time
// whenever we change the routes, it just replaces and reuses the components to make the new page wrt to the route
// We only make a network call while fetching data from the API. We do not fetch the entire HTML page from the server



//******************************************************************************************************************************************************************************************************************************************************************************************************** */



// 3) DYNAMIC ROUTING

// The small change in the URL should change the route based on some id or some other info
// The major part of the URL will remain same, rather only last few words will change the whole route based on some id or other info
// An api call will be made and data will be populated after we navigate to that route
// Hence, In every route there will be some dynamic content that will be loaded

// Difference :- Static routing uses a single preconfigured route to send traffic to its destination, while dynamic routing provides multiple available routes to the destination.


// e.g :-
// Here we will use unique routes whenever we have unique restaurants





//******************************************************************************************************************************************************************************************************************************************************************************************************** */



//4) For Creating Dynamic Routes


// --> If "id" is used to define the dynamic route
// --> Use /:id in the URL of the path element of the path object, defined in createBrowserRouter()
// --> /: signifies for dynamic route


const appRouter = createBrowserRouter([
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/restaurant/:resId",
    element: <RestaurantMenu />
  }
])


// We can use this path object in the children routes as well


const appRouter2 = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },
])





//******************************************************************************************************************************************************************************************************* */

// 5) Setting up component for dynamic routing :-

// --> We know that de to dynamic routing whenever we reach this route, an API call will be made and then the data will be populated for that route dynamically

// --> We have to reuse the same page for every restaurant with just different data coming from that API based on the id of the restaurant


//STEPS :-

// 1) First make a common component for all the restaurant pages

// 2) Use useEffect() hook and async functions in the component to make an API call (Use an empty dependency array as we dont want to make an API call on every render)
// 3) Till the data loads show the SHIMMER UI


const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);


  const fetchMenu = async () => {
    const data = await fetch("URL");
    const json = await data.json();
    setResInfo(json.data);
  }


  return (resInfo === null) ? (<Shimmer />) : (
    <div className='menu'>
    </div>
  )
}

export default RestaurantMenu;

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

import { Link, useParams } from "react-router-dom"


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
// Use state variables from useState to copy the API data and update UI regarding restaurant name, cuisines etc
// Remember to use optional chaining


const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);

  //Use dependency array for initial render only
  useEffect(() => {
    fetchMenu();
  }, []);


  const fetchMenu = async () => {
    const data = await fetch("URL");
    const json = await data.json();
    setResInfo(json.data);
  }


  if (resInfo === null) return <Shimmer />
  //here the ternary operator wont work and give error as initially the resInfo is null hence we cant destructure its elements, therefore we have to use the 'if' statement to return the <Shimmer /> component before the object destructuring


  //Using object destructuring
  const { name, cuisines, costForTwo } = resInfo?.cards[0]?.card?.card?.info;



  return (
    <div className='menu'>
      <h1>{name}</h1>
    </div>
  )
}

export default RestaurantMenu;




//BUT
//Since Swiggy api is not accessible now due to CORS policy, hence we are using our own mock data

const RestaurantMenu2 = () => {

  const [resInfo, setResInfo] = useState(null);


  useEffect(() => {

    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    setTimeout(() => {
      setResInfo(resList)
    }, 500);
  }


  //Since, we have the restaurant infos also integrated in our main API unlike having separate apis for separate restaurants, hence we need to search which restaurant we are searching about and get its index by comparing the 'id' of all restaurants with the given id
  let current_idx = 0;
  if (resInfo === null) return <Shimmer></Shimmer>
  for (let idx = 0; idx < resInfo.length; idx++) {
    if (resInfo[idx].id == resId) {
      current_idx = idx;
      break;
    }
  }


  if (resInfo === null) return <Shimmer />
  //here the ternary operator wont work and give error as initially the resInfo is null hence we cant destructure its elements before, therefore we have to use the 'if' statement to return the <Shimmer /> component before the object destructuring




  //Destructing veg and non_veg elements from our api
  //Rememnber while destructing we just have to get one level above of our required element, hence we didnt add .veg or .non_veg in RHS below
  const { veg, non_veg } = resInfo[current_idx]?.categories


  return (
    <div className='menu'>
      <h1>{resInfo[current_idx].resName}</h1>
    </div>
  )

}




//******************************************************************************************************************************************************************************************************* */

// 6) Iterating in API to get the list of items in the restaurant


// ==> Use map to iterate
// ==> For every item create a list item and show the details of the item to the UI
// ==> Always use a key while iterating and creating elements using map
// ==> But map only iterates in arrays and not objects

/*
  To use map in an object, we need to use :-
       Object.entries(obj_name).map((iterator)=>{

        let key = iterator[0];
        let value = iterator[1];


        return <h3> {key + "->" + value} </h3>
       }

    Remember the "obj_name" is the object we want to iterate

    Using Object.entries returns the object in form of an array with subarrays containing two elements
    1st element --> key
    2nd element --> value

    { key1 : value1, key2 : value2 }   --> [[key1,value1],[key2,value2]]
*/


//Here we need to iterate in destructured veg, non_veg objects

/*
 a) With Swiggy's api :-

==> Incase the object we are iterating have the price value in 'price' key for some elements while some have the price value in 'default_Price'
==> Hence use an OR operator to solve the issue (below in the 2nd map option)


    <h1>Menu</h1>
    <ul>
       {itemsCard.map((item) => <li key={ }>{item.category[1].info.price || item.category[1].info.default_price}</li>)}
    </ul>





b) With our mock data :-

      <h2> Veg :-</h2>
      {Object.entries(veg).map((items,idx) => {
        let key = items[0];
        let value = items[1];

        return <h3>{key + " -> " + value}</h3>
      })}

      <h2> Non-Veg :-</h2>
      {Object.entries(non_veg).map((items,idx) => {
        let key = items[0];
        let value = items[1];

        return <h3 key = {resInfo[itr].id} + idx> {key + " -> " + value}</h3>
      })}



      ==> Remember to pass key in all the elements generated by the map() function
      ==> The ids should be unique among the group
      generated by that particular map() function
      ==> In our case we cannot use the restaurant id directly as a key as all the created elements for menu items belong to the same restaurant, hence they will have same id
      ==> Instead use a mixture of restaurant id and the index generated by map
*/




//*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */

// 7.) Fetching passed resId from dynamic routes to our component page


// ==> How to read the 'ids' present in the route address in our component page so that we can fetch the api of that particular restaurant?

// ==> React Router DOM gives a hook known as 'useParams'
// ==> import it as a named import
// ==> It returns an object containing the part of the route after '/:' as specified while creating dynamic routes
// The key is the variable name of the restaurant id we passed in dynamic route after "/:"
//The value will be the actual value of the id e.g :- 124

{ resId: "121" }

// ==> Here we have ids after '/:'
// ==> Just destructure the 'id' part from the returned object like we destructure Array in useState()
// ==> The destructured id's name should be same as the one we used while creating dynamic routes. (here resId)

const { resId } = useParams();

//This resId can be used to identify which restaurant in our mock data and then do the operations as there is no separate APIs for different restaurants
//Note all the API urls should be placed in the constants.js folder



//******************************************************************************************************************************************************************************************************** */


//8) Connecting the Restaurant Cards along with RestaurantMenu component


// ==> So that whenever we click on that RestaurantCard we can dynamically route to the RestaurantMenu component and fetch the api of the required restaurant

// ==> Make the "Restaurant Cards" clickable using the 'Link' component
// ==> Then use 'to' attribute to set the route location

//e.g :-
/*
className = "res-container" >
{
   <div className="res-container">
          {newList.map((restaurant) => {
            return (
              <Link to={"/restaurants/" + restaurant.id} key={restaurant.id}>
                <RestaurantCard

                  resData={restaurant}
                ></RestaurantCard>
              </Link>
            );
          })}
        </div>
}


Provide the key to the last parent element that has been created using map()

*/






/*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */

//9) FACTS about LINK tag provided by React router DOM

// ==> <Link> is a component given by react-router DOM
// It is a special component
// Behind the scenes, the <Link> is converted to <a> tag using React router DOM as it keeps a track of the <Link> component
// <Link> is a wrapper over <a> tag
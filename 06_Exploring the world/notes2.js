//Improving the UX during step 2 of:-
//LOADS --> RENDER --> API --> RENDER

import { useEffect, useState } from "react"


// Since the component will render with empty list hence there will be an empty page till the time the second Render is called
//This blank page is not good UX

//To improve UX, we use conditional rendering and
// i) Loader
// ii) Shimmer UI




//CONDITIONAL RENDERING :-
// ==> rendering on the basis of some condition is known as condiional rendering
// ==> either use if-else statement (not good practice)
// ==> Use ternary operator (Industry Good Practice)

// e.g (Using if-else) :-
const Component = () => {
  if (condition) {
    return <Component2 />
  }
  else {
    return <Component3 />
  }
}



// e.g (Using if-else) :-
const Comp = () => {
  return (condition) ? <Component2 /> : (
    <div>
      <h1>Rendered using conditional rendering</h1>
      <h3>  Hii  </h3>
      <h4>  There  </h4>
    </div>
  )
}




//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************ */




// 1) loader (not a good way) :-

// ==> since we know that in the first Render of the component, the list is empty
// ==> In the second Render, the list is populated with the fetched Data
// ==> Hence in the first render i.e when the list is empty, instead of showing the blank screen, we can add a loader (spinning image or Loading Text)
// ==> During the second Render, the list will not be empty, hence the above condition will automatically fail and React will render the component with fetched data


const Body = () => {

  useEffect(() => {
    // fetch data
    // rerender the component with fetched data  
  }, [])

  if (list.size() === 0)
    return (<h1>Loading ...</h1>)    // or add a spinning image from internet

  return (
    <div>

    </div>
  )
}





//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************ */




// 2) Shimmer UI (New and Good Way):-
// It resembles the page's actual UI so that users will understand how quickly the web app will load before the content has shown up.
// It is like loading a fake page / skeleton until we load actual data from the api.
// E.g:- see in Swiggy or Youtube, how the skeleton UI is seen bfore the actual data loads up


//Creating Shimmer UI
// ==> Make a new component known as Shimmer
// ==> Create the design (fake cards, etc) using jsx
// ==> Style the component using css to make them look like our actual card structure
// ==> In our main component (Body), when the list is empty, that is during first render, instead of showing loader, show the Shimmer component


// e.g :-
// i) Shimmer.jsx

const Shimmer = () => {
  return (
    <div className='shimmer-container'>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
    </div>
  )
}

export default Shimmer;




/*
* ii) style.css

.shimmer-card-container{
        display: flex;
      flex-wrap: wrap;
}

      .shimmer-card{
        width: 300px;
      height: 400px;
      background-color: #D9D9D9;
      margin: 10px;
}

      */




//iii) Body1.jsx 

const Body1 = () => {
  useEffect(() => {
    // fetch data
    // rerender the component with fetched data  
  }, [])

  return list.size() === 0 ? <Shimmer /> : (
    <div>
      <h1>Hiii</h1>
      <h3>There</h3>
    </div>
  )
}




//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************ */



// Why do we need local State variables instead of normal variables?
// On getting changed using set(), state variables also refresh / rerender the component so that the new value of that variable is updated in the UI






//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************ */



// 3) SEARCH FUNCTIONALITY :-

// ==> Have an input box and a search button
// ==> whatever word we search in the input box and click on search button, we should get back those cards whose name includes the word / words we searched for

<>
  <input type="text" />
  <button></button>
</>


//Steps :-
// ==> Since our cards are managed by our list
// ==> Hence just like while filtering top rated restaurants, if we can just filter our list with only those cards which includes the searched words, then we could get the our required restaurants




// 1) Getting the searched word from the input box
// ==> to get the value of the text entered in the input box


//a) add a 'value' attribute to the input box

//b) VVI :- create a new local state variable and initialize it with empty string. Now bind it with the value attribute with the help of braces '{}', since we will use JS/React variable inside jsx

/*
const [searchText, setSearchText] = useState("");

< input type="text" value={searchText} />
*/


// Note :- Now whatever we type we cannot see in the input field
// ==> because the 'value' attribute of the input field is binded with the new local State variable which is already empty, hence, till that local State variable is empty we cannot change the value of the input field even if we type.




//c) To solve this problem, we add an onChange{} handler in the input tag and at every change try to update the local variable with the total entered text (till that point) in the input field with the help of event object

// Q) How to get the text entered till now in input field
// ==> Use "e.target.value" to get whatever text is present in the input field till that exact moment

const [searchText, setSearchText] = useState("");

< input type="text" value={searchText}
  onChange={(e) => {
    setSearchText(e.target.value);
  }} />


// Hence, at Last, after the user has typed the whole text in the input box, the local Variable will have the whole text as its valu



//NOTE :-
// ==> Hence, now for every time we type in the input box
// ==> the set() to set the local State variable will be called inside onChange = {}
// ==> React will trigger its reconcilliation process for every letter we type , but the algorithm is so efficient , we dont feel anything






// 2) Using the updated Searched word to filter the list

//==> Get an onClick={} handler in the search button
//==> Inside it define a callback function such that the list gets filtered using filter()

// ==> Use the filter method to only include those elements in the list whose name includes the search word
// ==> Use the .includes() for finding if a string contains a particular word or not.

// ==> Update the list to the filtered list using useState() like we did while searching the top rated resturants

/*

<button onClick={
  ()=>
  {

    //**** Filter the restaurant cards
    const filtered_list = listOfRestaurants.filter((restaurants)=>
      {
        return restaurants.resName.includes(searchText);
      }
    )

    //**** update the UI
    setListofRestaurants(filteredList);
  }
}></button>

*/



//**************************************************************************************************************************************************** */



//PROBLEMS with above ALGO :-


// 1) What if the the search text "case" does not match with the "case" in the list's element even if the searched word is present

// ==> convert both of them to a particular case using .toLowerCase()
// ==> Then, do the filtering

/*

<button onClick={
  ()=>
  {

    //**** Filter the restaurant cards
    const filtered_list = listOfRestaurants.filter((restaurants)=>
      {
        return restaurants.resName.toLowerCase().includes(searchText.toLowerCase());
      }
    )

    //**** update the UI
    setListofRestaurants(filteredList);
  }
}></button>

*/







// 2) For the first search it will work, but then from the next search our code will break

//Reason :- Once we have searched one item, our original list got filtered to a lesser search space and hence the second search will have to within those lesser elements let in the original list

//e.g :- if after first search our list got updated to two items, hence our next search will have to be within those two items only, since our original list got updated



//Solve the error :-
// ==> Maintain a new State variable which will always be used to render in the UI
// ==> Initialize it as empty just like our original List
// ==> Use this list to render all the cards / etc in the UI instead of original List

const [newList, setNewList] = useState([]);

// ==> Now update it with original data from API inside useEffect() jut when we update our original list with the API data

// ==> The original list will always be used to calculate the filtered list (always) whether while searching or top rated filters, etc
// ==> The new list will be used to render the filterd list in the UI (always)

// eg :-



const Body3 = () => {

  const [originalList, setOriginalList] = useState([]);
  const [newList, setNewList] = useState([]);

  useEffect(() => {

    //fetch data
    setOriginalList(fetchedData);
    setNewList(fetchedData);
  }, [])



  return (
    <>

      {/* Search Functionality  */}

      <button onClick={() => {
        //Calculate the filtered list using original List variable
        filteredList = originalList.filter(
          (restaurant) => {
            return restaurant.resName.includes(searchWord)
          })

        //Update UI using newList variable
        setNewList(filteredList)
      }}> Search </button>



      {/* Top Rated Functionality */}

      <button onClick={() => {
        //Calculate the filtered list using original List variable
        filteredList = listOfRestaurants.filter((restaurant) => {
          return restaurant.stars > 4.0;
        });

        //Update UI using newList variable
        setNewList(filteredList);

      }}></button>
    </>
  )
}
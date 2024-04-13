//Improving the UX during step 2 of:-
//LOADS --> RENDER --> API --> RENDER

import { useEffect } from "react"


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
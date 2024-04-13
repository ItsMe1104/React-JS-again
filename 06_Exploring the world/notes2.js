//Improving the UX during step 2 of:-
//LOADS --> RENDER --> API --> RENDER

import { useEffect } from "react"


// Since the component will render with empty list hence there will be an empty page till the time the second Render is called
//This blank page is not good UX

//To improve UX, we use conditional rendering and
// i) Loader
// ii) Shimmer UI





//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************ */


// 1) How to add loader :-

// ==> since we know that in the first Render of the component, the list is empty
// ==> In the second Render, the list is populated with the fetched Data
// ==> Hence in the first render i.e when the list is empty, instead of showing the blank screen, we can add a loader (spinning image or Loading Text)
// ==> During the second Render, the list will not be empty, hence the above condition will automatically fail and React will render the component with fetched data


const Body = () => {

  useEffect(() => {
    // fetch data
    // rerender the component  
  }, [])

  if (list.size() === 0)
    return (<h1>Loading ...</h1>)    // or add a spinning image from internet

  return (
    <div>

    </div>
  )
}

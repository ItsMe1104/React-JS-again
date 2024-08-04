// A) SINGLE RESPONSIBILITY PRINCIPLE :-
// --> Any single entity like a function, or a class of our code should have a single responsibility

import { useEffect } from "react";

// --> Hence, Each component should have a single responsibility to make the components reusable, testable and maintainable




//********************************************************************************************************************************************************************************************************************************************************************************************************************************************* */



// B) CUSTOM HOOKS :-
// --> Special javascript functions which can be designed by us. Hooks are like utility functions
// --> We will take out some responsibilty from our component and extract it to some hook so that our hook and our component becomes more modular, readable and reuseable.




// How to make Custom hooks ?

// --> For e.g :- if some component is doing two responsibilities like fetching the data and displaying the data.
// --> Make a custom hook which will be responsible for fetching the data so that the component is only responsible for displaying the data
// --> This hook will be responsible for fetching the data using useEffect() and fetch() api and updating the data in some State variable.
// --> At the end it should return the api data
// --> Inside the component we will only store the returned data from our custom hook in a variable and use it to display the info



//Inside component :-
const resInfo = useRestaurantMenu()


//Making a custom hook named "useRestaurantMenu"
// --> Go to the utils folder since hooks are utility functions only.
// --> Always make a separate file for a separate hook
// --> Name the file exactly the same name of the hook mentioned in our component with the extension as .js
// --> Naming convention is that always start the custom hook name with 'use'


// Inside the file :-
// --> Make a normal JS function same as file name
// --> Inside that use the useEffect() hook and fetch api , to fetch the api data
// --> Store it in some state variable
// --> Just like in components, we can also create local State variables inside our custom hooks
// --> return the state variable
// Remember to export it as default export
// --> This is the same work that we did inside our component
// --> Remember to import the custom hook in our component



const useRestaurantMenu = (resID) => {

  // local state variable
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch(URL + resID);
    const json = await data.json();

    //set the required object data in our resInfo using set()
    setResInfo(json.abc.def);
  }

  return resInfo;
}

//This is how useParam() was made by react-router-dom








// For our mock Data we made the custom hook like this

const useRestaurantMenu1 = () => {

  const [resInfo, setResInfo] = useState(null);
  // Use empty array inside useEffect() as we only want an api call to be made during initial render
  useEffect(() => {

    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    setTimeout(() => {
      setResInfo(resList)
    }, 500);
  }


  return resInfo;
}





//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/




// C) ONLINE / OFFLINE Feature :-

// --> a custom hook that can give me the status of my internet
// --> That is it should indicate to the user whether he is online or offline
// --> It is used in Facebook's chat window, slack window, etc
// We will use it in our main page , though we should use it in every page of our app
// --> It will work as if whenever we get offline, it should show us a page whenever we try to move to some other page, that "we are offline"



// We will make a hook known as 'useOnlineStatus()' inside utils folder


// SOME IMPORTANT INFO WHILE CREATING A HOOK :-
// --> Whenever we make a hook, always first finalize the contract ,that is, think about the input and output of that hook and then start designing



// --> In our hook, we dont need any input, as we will check everything using brwoser api, and we will return a boolean.
// --> To check online/offline, there is an eventListener() that the browser provides
// --> 'online' will be the first parameter for the event listener

window.addEventListener("online", () => {
  //...
})

window.addEventListener("offline", () => {
  //...
})



// --> We need to add the eventListener() to our custom hook, only once and tigger them, hence we will use them inside useEffect() with empty dependency array
// --> then use a state variable to track and update the boolean value that needs to be returned

// --> Then export it



const useOnlineStatus = () => {

  const [onlineStatus, setOnlineStatus] = useState(true)
  useEffect(() => {

    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    })

    // window.addEventListener("online", () => {
    //   setOnlineStatus(true);
    // })

    return onlineStatus;
  }, [])
}





//In Body Component :-

// import the custom hook
// Just use this custom hook and get the boolean value
// Before the actual return statement of the component use an if-else Statement
// --> where we will check if the the boolean value is false, then return an h1 tag showing u are offline

const onlineStatus = useOnlineStatus();

if (onlineStatus === false) return <h1>Look's like you're offline. Please check your Internet connection.</h1>



// You can check the performance during offline in developer tools
// --> Go to network and in the dropdown of 'no throtling' --> select offline.


// This is when we can put a dino game, so that the user is engaged on our website till the internet returns





//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/



// D) Online Offline symbol for chat :-

// --> When we are online, it will turn green
// --> When we are offline, it will turn red
// --> Very useful for chat application


// --> In the Header component
// --> Store the boolean in a variable
// --> And use a ternary operator in the list item based on the value of that boolean


const onlineStat = useOnlineStatus();

return (
  <div>
    {/* Navbar-items */}
    <div className="nav-items">
      <ul>
        <li className="item">
          Online Status : {onlineStat === true ? '🟢' : '🔴'}
        </li>
      </ul>
    </div>
  </div>
)




// H.W :- Make a component and design the offline page and render it when the user is offline






//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/


// E) Some conventions :-
// --> It is not mandatory to start the name of the custom hook with 'use' but it is a way of differentiating between React hooks with normal functions
// --> The reader of the code now knows that it is a custom React hook and will have its own React logic like State, lifecycle, etc
// --> Neither it is mandatory to start the name of the Component with CAPS
// --> It is recommended by react official docs and is just used as a convention
// --> Sometimes in React projects a linter is used which will start throwing errors if the convention is not followed






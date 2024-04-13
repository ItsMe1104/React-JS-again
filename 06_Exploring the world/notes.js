// Monolith vs Microservice Architecture :-

const { useEffect } = require("react");

// i) Monolith :-
// ==> Traitionally all the apps were developed using the monolith architecture
// ==> There was a huge project and inside that all the different services code were present
// ==> like API, UI, Authntication, DB connection, SMS sending, etc
// ==> Every depeloper had to work in the same repository
// ==> Hence, for doing any minor change in one of the service, we would have to compile and deploy the whole bulky code altogether
// ==> In monolith architecture, the same tech stack had to be used for all the services




// ii) Microservices :-
// ==> In today's time, world is moving towards microservice architecture
// ==> All services were independent
// ==> All micro services combined together formed the big app.
// ==> This is known as "separation of concerns" and "single responsibility principle", where each and every service has its own job
// ==> All the teams work on their own independent service
// ==> All the services iteract with each other inorder for the app to work
// ==> Our React project is just a small UI microservice
// ==> We can have different tech stacks for different services
// ==> How the services are connected ?
// ==> All the services run on their own specific ports
// ==> e.g :-
// --> 1234 == UI
// --> 1000 == Backend
// --> 1279 == DB connection

// ==> All these ports are mapped to Domain Name
// --> Backend :- /api
// --> UI :- /
// --> DB connedction :- / db

// ==> How do they interact?
// --> They make a call to the required URL



//**************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



//In this chapter :- we will see how React / UI app talk to different microservices like backend, etc



// There are two approaches how webapps fetch the data from backend


// 1) Approach 1 (POOR UX) :- When our app loads, we make an API call and we wait till we get back the data and then we render the UI
//   LOADS --> API ---> Render


// 2) Approach 2 (Better UX) :- )When our app loads, we will render our UI, then we make an API call and as soon as we get back the data from API, we will now rerender our app with the new data
//    LOADS --> Render (skeleton) --->  API  ----> Render (with actual data)




// NOTE :- In REACT we always use the second approach, even though we overcomplicated the process
// Reason :- Better UX as the user can atleast see the skeleton on the page and then slowly the website loads
// React has one of the best and fast render mechanisms with very fast render cycles and hence we dont bother about an extra render





//*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */




// 1) UseEffect() hook :-

// Hook :- normal JS function with specific usecase



// i) Importing useEffect() hook
// --> It is imported as named import from 'react' directory same as useState() hook
// --> It can be imported together with useState() hook

//e.g :-
// import { useState, useEffect } from "react";




//ii) USE :-
// --> This hook helps us to execute some code after our whole component has rendered
// --> Hence if we have to do something after rendering the component, we have to use the useEffect() hook
// --> As the component gts rendered line by line, whenever it sees the useEffect() hook, React puts its callback function in the wait queue and after the whole component is rendered, React executes the callback function
// --> Hence it helps to apply Approach 2 of fetching data



// iii) Syntax :-

// useEffect(a,b)
// a --> callback function
// b --> dependency array which tells about when to execute the callback

useEffect(() => {
  // ... 
}, [])







//*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



// 2) UseEffect() hook and fetching Data

// We fetch the data from the api inside the callback function of the useEffect() hook by simply using the :-
// a) fetch() api directly which JS engine / Browsers gives us
// b) creating our own function which calls the fetch() api and calling that function inside th useEffect() hook


//How to use fetch() :-
// Try to use it with async/ await for simple syntax :-
// create a function for fetching data
// Use the 'async' keyword infront of its name 
// call the fetch api inside the function using :-
fetch("URL_LINK")
// use the 'await' keyword infront of the fetch()
// since the fetch() api returns a promise, store it in a variable

//Try to convert the data received by the promise in json using .json()
// use 'await' keyword before the method
// store the json data in a variable



useEffect(() => {
  fetchData();       //function to call the api
}, [])

const fetchData = async () => {
  const data = await fetch("https://api.github.com/users/ItsMe1104");
}

const json = await data.json();



// VVVIIIII NOTE :-
// We might be aple to call some apis from localhost, but many websites (like swiggy, zomato) won't allow it due to the CORS policy
// Our browsers block us from calling apis from one origin to other origin
// If there is a origin mismatch, Browser blocks that api call




//Question :- How to bypass this CORS
// Go in chrome or other browsers and search for the extension :- "Allow CORS" by Productivity
// Turn it on
// This extension helps us to bypass the cors error
// But nowadays its not working with new versions of browsers
// Hence the only solution is to fix it at the backend or use publc apis



//NOTE :-
//Swiggy doesn't provide a public API for accessing their data. They do not officially expose an API for third-party use.
//Either use a chrome extension to bypass CORS or use some proxies to bypass this while writing backend (but they also dont work now)




//******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */


//3) Using fetched Data to use in our component

// ==> Till now we are in step 3 of :-
// ==> Loads --> Render --> API --> Render

// Explanation :-
// Our page loads :- step 1
// Our components are rendered with empty structures or loaders or shimmering UI  :- step 2
// We called the API to fetch the data :- step 3


// Now we need to perform step 4
// --> that is to render the component once again with the fetched data
// --> Hence, we will again update our list with the new fetched data using useState() inside the useEffect() hook
// --> The list which is responsible for making cards using map() will be updated
// Note :- we have to search in the api to get our correct structure of json, and then we have to destructure it into the set() directly or into a new object and then into the set()

//Always destructure it using 'OPTIONAL CHAINING' else if some property is not found in API, the whole app will crash instead of just not showing data
// Simply add '?' infront of every dot  (.)
// e.g :- json1?.cards[2]?.data?.data?.cards

useEffect(() => {
  fetchData();       //function to call the api
}, [])

const fetchData1 = async () => {
  const data = await fetch("https://api.github.com/users/ItsMe1104");
  const json1 = await data.json();


  //Using the fetched data to update our list

  setList(json1?.cards[2]?.data?.data?.cards);
}










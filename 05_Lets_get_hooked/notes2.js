// Final Time Question :- Why React is fast?
// ==> React is fast an efficient in DOM manipulation
// ==> UI and Data layers work in sync



//1) Event Handlers :-

// How to add Event Handlers on our elements :-
// --> We use the Event Handlers as special attributes in our element tags
//mainly they are same as JS event_names with an 'on' before them.
// All events we have in JS, we have some event handlers for that in React, e.g =>
// click --> onClick
// mouseOver --> onMouseOver

//Syntax :-
// onEvent_name = {callback_function()}

// here the callback_function(), doesn't return anything instead does something like changing of variables, updating UI, etc
//hence we don't need to use the return keyword
//Unlike in map(), filter(), reduce(), where the callback functions instead returns something always



// e.g :-
//==> Using Event Handler for 'CLICK' event on a button

// <button onClick = { ()=> {...} } > Click Me <button>

/*
<button onClick = { ()=> {
      console.log("Clicked")
    }
   } >
   Click Me
  < button >
*/




// e.g :-
//==> Using Event Handler for 'HOVER' event on a button

// <button onMouseOver = { ()=> {...} } > Hovered <button>

/*
<button onMouseOver = { ()=> {
      console.log("Hovered")
    }
   } >
   Click Me
  < button >
*/




//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



//2) useState() hook :-

//What are hooks?
// --> Normal prebuilt JS functions written by React developers, which gives us various super powers. These are utility functions given by React, whose code is written inside the react durectory, inside node_modules.
// --> Mostly used hooks (99% times):- useState(), useEffect()





// i) Importing React hooks into our component file

// ==> We always import the React hooks from "react" directory directly without giving any path.
// ==> We always import them inside object braces as named import, since they have been name exported in their original source files
// ==> unlike 'react' which has been default imported.

// e.g :-
import { useState } from "react";
import { useEffect } from "react";
import { useState, useEffect } from "react";




// ii) Normal JS variable vs React State Variable

// *) Normal JS variable :-
// let a = "abc",
// const abc = [1,true,56];

// *) React State Variable :-
// ==> These are super powerful variables
// ==> Can be created by React's useState() hook only






// useState() hook :-
// ==> It maintains the state of our component



//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */

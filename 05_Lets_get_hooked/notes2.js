//1) Event Handlers :-

// How to add Event Handlers on our elements :-
// --> We use the Event Handlers as special attributes in our element tags
//mainly they are same as JS event_names with an 'on' before them.
// All events we have in JS, we have some event handlers for that in React, e.g =>
// click --> onClick
// mouseOver --> onMouseOver

//Syntax :-
// onEvent_name = {callback_function()}



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


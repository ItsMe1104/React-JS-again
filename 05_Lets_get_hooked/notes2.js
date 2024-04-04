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





//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */

//2) useState() hook :-

//What are hooks?
// --> Normal JS functions written by React developers, which gives us various super powers
// --> Mostly used hooks :- useState(), useEffect()





//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */

// 3) Filtering of lists / cards :-

// We have to filter the cards in UI on happening of an event :-


// LOGIC :-
// since the lists and cards are coming from the list , array of JSON objects, etc
// If we pass an empty list then, the whole UI will be bank with no cards
// The UI layer will display what the data layer passes it.


// WORK :-
// hence on the happening of the event ( inside Event Handlers)
// -->  we must filter the list from where the data is coming
// --> and then, rerender the UI again so that we render the filtered cards




// i) Filtering the list

// ==> Use filter method on the list inside eventListener
// ==> Apply it to reinitialize the list itself
// Syntax :-  resList.filter(callback())

// e.g :- Filter the list on click of a button

<button onClick={
  () => {
    resList = resList.filter((card) => card.data.stars > 4.0);
  }
}>
  Click Me
</button>




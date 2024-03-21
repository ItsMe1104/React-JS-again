// For any app :-
// most necessary three components :
// i) Header
// ii) Body
// iii) Footer





//Our app planning :-
/**
 * Header
 * - Logo
 * - nav Items
 * Body
 * - Search
 * - RestaurantCard Container
 *    - Restaurant Card
 *       -Img
 *       -Name of Restaurant, Star Rating, cuisines, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 *
 */




//******************************************************************************************************************************************************************************************************************************************************************************** */

// 1) Ways to use CSS in our component file
// i) using classes to style in separate style.css file
// ii) using Tailwind/Bootstrap/Material UI
// iii) inline css (inside the jsx tag only)



//******************************************************************************************************************************************************************************************************************************************************************************** */



//2) INLINE CSS in jsx tag :- (Very BAD PRACTICE)

//--> in html element for inline css we use a string as value

style = "background-color: black; color: white;"

//e.g :-
/*
< div style = "background-color: black; color: white;">
  Hello Everyone
</ div >
*/



//--> in jsx element for inline css we use a object as value
//--> we write the css properties in camelcase unlike in normal css where we use "-" in between
style = {
  backgroundColor: "black",
  color: "white"
}


//Question ==> How to inject style attribute in jsx?

// --> since we are injecting a JS object inside jsx, we have to use curly braces {} as object is also 
//--> Hence don't get confused with double braces, one {} is for some JS inside jsx and other is for JS object syntax


/*
<div style = {{ backgroundColor: "black", color : "white" }}>
Hello Everyone
</div>
*/



//In clean code :- we declare the style object outside and pass it as a variable in style attribute

const div_style = {
  backgroundColor: "black",
  color: "white"
}

/*
<div style = { div_style } >
    Hello Everyone
</div>
*/



//*********************************************************************************************************************************************************************************************************************************************************************** */





//Some important notes about our app :-
// i) Always try to wrap every bunch of elements in a div, so that we can style them easily

// ii) Always try to wrap an image in a div, so that we can style it easily

// iii) Since a component is a JS function only, and the task of the function is to resuse it to do repitive task , hence whenever we see similar UI items , make one item of that UI as a separate component and use that component again and again

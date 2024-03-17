import React from "react"
import ReactDOM from "react-dom/client"

//create a div element using JS 
const div_ele = document.createElement("div");

//Attach the div in body
document.body.appendChild(div_ele);

//creating a React element of type "h1"
const heading = React.createElement("h1", { id: "heading" }, "Hello World From React 2 🚀🚀");

//Creating root of virtual DOM
const root = ReactDOM.createRoot(div_ele);

//rendering the heading inside root
root.render(heading);





//Practice with nested structures

// 1) Children
/*
  <div id = "parent">
       <h1> Hello World <h1>
    </div>
*/

//children can be passed as a new React.createElement() in the third parameter of its parent

const parent = React.createElement(
  "div",
  {
    id: "parent"
  },
  React.createElement(
    "h1",
    {
      id: "heading"
    },
    "Hello World from React 2"

  )
)




// 2) Nested Children
/*
<div id = "parent">
    <div id = "child">
       <h1> Hello World <h1>
    </div>
</div>

//Nesting elements

div(parent)  -->  div(child)  -->  h1
*/

//Nesting of children can be done by passing the children as new React.createElement() in third parameter of each parent level

const parent2 = React.createElement(
  "div",
  {
    id: "parent"
  },
  React.createElement(
    "div",
    {
      id: "child"
    },
    React.createElement(
      "h1",
      {
        id: "heading"
      },
      "Hello World from React 2"
    )
  )
)




// 3) Siblings
/*
<div id = "parent">
    <div id = "child">
       <h1> Hello World from h1<h1>
       <h2> Hello World from h1<h1>
    </div>
</div>


//Here h1 and h2 are siblings
*/

//For siblings 
// --> (content + children ) or 
// --> (children + children )

//we can pass an array with the siblings order we want, as the third parameter of the parent's React.createElement() function


/*
React.createElement(
  "a",
  {b},
  [sibling1, sibling2]
)


//NOTE :- whenever we pass siblings in an array as third argument, React will give warning to pass keys along with the siblings
*/

const parent3 = React.createElement
  (
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" },
      [
        React.createElement("h1", { id: "sibling1" }, "Hello World from React 2")
        ,
        React.createElement("h2", { id: "sibling2" }, "Hello World from React 2")
      ]
    )
  )


// 4) Parent- Siblings along with child siblings

/*
<div id = "grandparent">
    <div id = "parent1">
       <h1> Hello World from h1<h1>
       <h2> Hello World from h1<h1>
    </div>

    <div id = "parent2">
       <h1> Hello World from h1<h1>
       <h2> Hello World from h1<h1>
    </div>
</div>

*/


const grand_parent = React.createElement(
  "div", { id: "grandparent" },
  [
    React.createElement(
      "div", { id: "parent1" },
      [
        React.createElement("h1", {}, "Hello World from h1"),

        React.createElement("h2", {}, "Hello World from h2")
      ]
    ),

    React.createElement(
      "div", { id: "parent2" },
      [
        React.createElement("h1", {}, "Hello World from h1"),

        React.createElement("h2", {}, "Hello World from h2")
      ]
    ),
  ]
)

//******************************************************************************************************************************************************************************************************************************

/*
NOTES :-

1) React was built with the philosophy that we will always manipulate our DOM using JS only, whether it was creating new elements or updating the existing ones
  --> Hence React avoids creating layouts using HTML, but it uses JS to create them.

  --> This is done inorder to optimize DOM manipulation using the special methods that React gives.

  -->Because any DOM operation repaints the entire DOM again and again which hits large scale apps. But using React methods we will only update and repaint parts of the DOM that got modified
*/




// 2) How to give attributes to our React elements while creating them

// e.g : - give the attributes to our h1 tag
// i) id = "heading"
// ii) xyz = "abc"


//Use the second argument of React.createElement() --> {attributes}
const heading2 = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React2"
)




// 3) React element-- -> object

// --> React.createElement() creates an object and not an HTML element directly, inorder to structure its virtual DOM

// --> .render() method is responsible for taking this object and converting it to an HTML element which browser understands and put it under the root

// --> ReactElement(Object) => HTML(Browser Understands)

// --> This JS object also contains props
// (props : - children + attributes that we pass in)


// e.g : -
const heading3 = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React2"
)

console.log(heading3);





//4) Practice with nested structures

// a) children
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




// b) //Nesting of children
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




// c) Siblings
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


// d)Parent- Siblings along with child siblings

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



//Instead of this React code, normal HTML is much easy, then why do we use this syntax?

//We will use jsx instead of this syntax to create tags which will make our life more easy

//Hence, React is not only written inside jsx, but also inside JS file itself
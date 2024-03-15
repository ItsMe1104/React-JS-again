
/*

index.html :- create a heading tag using html
index2.html :- create a heading tag using js
index3.html :- create a heading tag using React
index4.html :- create a heading tag using React but from a separate JS file 

*/




//index.html file is to create a heading tag using html

/*
<body>
  <div id="root">
    <h1>Hello World using HTML!!!</h1>
  </div>
</body>


--> For emmet we can also type html:5 
*/



//**********************************************************************************************************************************************************************



//index2.js file is to create a heading tag using js


<body>

  <script>

    //creating div element
    const root = document.createElement("div");

    //adding id to it using setAttribute()
    root.setAttribute("id", "root");

    //attaching the div to the body
    document.body.appendChild(root);

    //creating the h1 element
    const heading = document.createElement("h1");

    //adding text to the h1 element
    heading.innerHTML = "Hello World From Javascript!";

    //attaching the h1 tag to the div tag
    root.appendChild(heading);

  </script>
</body>


// for injecting JS we have to inject the script tag inside body
// these elements are created just like in HTML , but they are created via manipulation of DOM
// they will also appear as normal html elements in the source code inside developer tools



//Steps :-
//a) Create the element using createElement()
//b) setting attributes to it using setAttribute()
//c) setting its content using innerHTML
//d) attaching it with its parent using appendChild()


//these APIs or methods are already present as superpowers in the browsers which have a JS engine inside them which executes these functions




//**********************************************************************************************************************************************************************


//index3.js file is to create a heading tag using React

/*
--> The browser doesnt know or understand React unlike vanilla JS
--> Hence first we have to get react in our project and then configure it such that the browser understands it


--> First method to add React to our project is via "cdn"
*) Type "cdn react" in google
*) Go to reactjs.org link
*) Copy the two cdn links of React and React-DOM
*) These are basically inside script tags
*) Paste them as the first script tags (after all the HTML content of body)inside body tag (<body>)


//If we go to the links present inside the script tag, we will get plain JS code that is used behind React 
//Hence we import that JS code in our project

*******************
//After we use the cdn links, we now have React and React-DOM objects with many properties and methods


//CDN = Content Delivery Networks
CDN stands for Content Delivery Network. 
*) It is a network that helps to speed up web page loading for web users. 
*) It is spread all over the world as usage of the internet is everywhere. 
*) It is basically a distributed system of servers that stores the data by the use of Amazon Web services or Google Cloud storage, and it serves that data to the user via the nearest server so that the loading or buffering of web pages is low.

//These are the website where React has been hosted and we just need to pull react from there into our project



//crossorigin 
*)The crossorigin attribute sets the mode of the request to an HTTP CORS Request.
*)Web pages often make requests to load resources on other servers. Here is where CORS comes in.
*)A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.
*)CORS is used to manage cross-origin requests.
*)CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain.
*)It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request.



//Question ?
--> Why two files (React and React-DOM) and why not one?

//Solution ?
//React (1st file) --> core of React algos
//React-DOM (2nd file) --> React library useful for DOM operations and to modift the actual DOM using virtual DOM

//React doesnt only work on Browsers but also on various other platforms like Mobile applications (React Native) hence for React native the 2nd file would be different as React-DOM is made as a bridge for Browsers only.

*/





//*************************************************************************************************************************************************************************** */




// Steps to create a heading tag using React :-

// a) First use another script tag after the two cdn script tags. Inside that script tag we will write our React code



// ***********************************************************************************



// b) i) How to create root element?
// --> root element will serve as root of our virtual DOM which react creates inorder to do all the DOM stuff
// --> Inside this root all the React code like components, other elements will come in where they will get rendered
// --> For simplicity we always take the root as a "div"

// --> Use ReactDOM.createRoot( a );
// a = element we want to create as root (in our case a div)

//NOTE:- "a" should already be an element inside HTML else create and attach it in HTML using JS before using as root


// *) It comes from the ReactDOM library


//First create the div element in HTML using JS (or create a div inside body in HTML itself)
const div_ele = document.createelement("div");

//Now attach that div into HTML document using JS
document.body.appendChild(div_ele);

//Now make that div inside HTML as the root of virtal DOM         
const root = ReactDOM.createRoot(div_ele);



//SUMMARY :-
const div_ele2 = document.createelement("div");
document.body.appendChild(div_ele2);
const root2 = ReactDOM.createRoot(div_ele);



// ***********************************************************************************




// ii) How to create React element(in our case an "h1" heading) ?

// --> Use React.createElement("a", { b }, "c")
// *) a = name of tag we want to create(h1, div, p, etc)
// *) b = object containing all the properties(attributes) of that tag
// *) c = children that goes inside out tag(mostly the content inside this tag)


// --> It creates a JS object and not an HTML element
// --> It comes from the core algo of React and not ReactDOM




// e.g: -
const heading = React.createElement("h1", { id: "heading" }, "Hello World from React");

// --> just like in JS where we used document.createElement(); (though it takes only one arugment)




// ***********************************************************************************



// iii)  How to render the heading inside root element ?

// --> Use React.render(a)
// *) a = HTML element we want to render(in our case the heading)


// e.g : -
root.render(heading);


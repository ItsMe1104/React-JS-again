//1) Using scripts to shorten our commands

// --> Instead of writing long commands again and again to make a production or development build
// --> we can define scripts in package.json and map some manmade commands with our long commands

//STEPS :-
// Go to the the package.json file
// --> Inside the "scripts" key
// --> map the our commands as keys with initial commands as values
// no need to use npm or npx in both key and value

//for development build (by coding convention)
// -->  "start": "parcel index.html"

//for production build (by coding convention)
// --> "build" : "parcel build index.html"



// NOTE :- In industry projects always inorder to run the project, go to the package.json and try executing the script commands




//********************************************************************************************************************************************************************************************************* */




// 2) Executing our scripts to run the commands

// --> for every command we have to type
// --> npm run + name_of_script


//e.g :- for development build
// type ==> "npm run start"

//NOTE :- for development build only, we can skip "run" from our command as a shortcut
// --> npm is still needed
// --> all other builds must have "run"
// --> npm start


//e.g :- for production build
// type ==> "npm run build"


// These script commands behind the scenes run the old commands onlybecause we have configured that in our package.json




//********************************************************************************************************************************************************************************************************* */

// 3) React replaces everything inside the root div once it starts rendering.

// Hence, it is good practice to put that div's content inside html as "Not rendered"
// so that if React is not able to render anything in that root div due to a bug, the div's content will not get replaced and it will give us the notice



//********************************************************************************************************************************************************************************************************* */



// 4) JSX :- Javascript XML
//JSX was developed by Facebook omly

// React Element is just an object and not an HTML element
// when we render this object in the DOM, it becomes an HTML element


//But creating React Element (which at last is converted into html element using render()) is a painful method due to its syntax

//Hence we, can create a React Element directly using JSX instead of using traditional React.createElement()

//React can be written without JSX in traditional way but JSX makes life more easy


//Syntax :-
const jsxHeading = <h1 id="heading"> React Heading using jsx 🚀🚀</h1>

//The above tag is not html but JSX
//It is not html inside JS
// JSX is not HTML but an HTML like syntax

// JSX is not converted into HTML element but into a React element instead
console.log(jsxHeading);

//While execution it is converted to a React element which in turn is converted to an object
// Now this object is converted to HTMl element using render()


// JSX (using Babel) --> React element --> JS object (using React algo) --> HTML element (using render())





//WHY JSX :-
// We write code for humans or machines?
// -->  Both
// --> First for humans then for machines
// --> First it must be understoodby developers and then by machines, else we would have used binary.
// --> Hence, JSX made the life of humans easy



// NOTES :-
// JSX is not a valid pure JS as JS engine doesnt understand JSX (use developer console any JSX and )
// JS engine understands ECMA script (standard pure JS)



//***************************************************************************************************************************************************************************************************** */


//5) JSX till BROWSER

//--> JSX is transpiled before it reaches the Browser using Babel
//--> Babel is bydefault installed by parcel.
// --> Babel transpiles the JSX code into the JS object which represents the React element as soon as we save the file

//Babel :- An open-source javascript compiler or transpiler


//Earlier :-

//React.createElement ==> React element (JS object) ==> render(React element) ==> HTML element


//Using JSX :-

//JSX ==> React.createElement (transpiled using Babel) ==> React element (JS object) ==> render(React element) ==> HTML element





// Some other features of Babel: -

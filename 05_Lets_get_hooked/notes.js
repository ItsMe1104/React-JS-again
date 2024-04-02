//Everything React or any framework can do, we can do it using normal HTML, CSS, JS also.

//Why React?
//It makes our developer experience easy
//It makes us write less code and do more on the webpage
//React gives us superpowers so that we can build large production ready-applications
//React makes our coding experience very fast and also optimizes behind the scenes in the web page
//Thee superpowers are React hooks




//******************************************************************************************************************************************************************************************************************************************************************************************************************* */




//1) Industry practices :-

// a) Best practice is to make different files for different components


// b) Make a src folder and inside that a components folder and keep all your components inside it excluding App.js which will be inside 'src' folder (Don't forget to change the path inside script tag of index.html)


// c) Always name the file exactly as same as the component name starting with Caps
// We can give .js or .jsx, any extension



// d) Never keep any hardcoded data (like json data, website URLs, etc) in any of the component files
// ==> Always make a separete folder inside 'src' directory
// ==> Name it as 'utils' or 'common'
// ==> create a file with suitable name like 'constants.js   or   config.js   or   utils.js' for all constants, jsonData. We can also make 'mockData.js  or  jsonData.js' separately for json data

// For all the constants inside constants file always name their variables with CAPS with '_' between two words (snake case)

// ==> put all the hardcoded data there, and export them using named exports
// ==> import the required hardcoded data in the respective component files

//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */




//2) Making a separate component file :-

// a) Name the file same as component name starting with caps.
// b) Extension can be either js or jsx.
// c) Either type 'rafce' to get the prototype of your component
// d) After completing your component, import al the files, components required by your component in the same file
// e) Export the component so that other components can import it. (Either use default export or named exports)
// f) Import the components in other files where it is required










//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */

// 3) Exports

// First we need to export, then only we can import it.
// Use 'export' keyword



// i) Exports :-
// ==> There are mainly two exports

// a) Default Export :- When we need to export only one component / variable, etc from one file, we use 'default export'

// ==> There can only be one default export in one file 
// ==> Always write it at the end of component file

//Syntax :- 
// export default component_name;

// e.g :-

const Jarvis = () => {
  return (
    <h5> Hi I am JARVIS. </h5>
  )
}

export default Jarvis;





//b) Named exports :- When we need to export more than one components / variables, etc, we use 'named export' from same file

//==> Just add the 'export keyword' infront of the component /variables we want to export

// Syntax :-

export const abc = "123abc"    //exporting string variable

export const Abc = () => {
  return (
    <h1> Hi I am using named EXPORT </h1>
  )
}




// c) Default and Named Exports together :-

// In one file / module, we can use one default export and as many named exorts as we want

/*
  export const abc = "123abc"    //exporting string variable

  export const Abc = () => {
    return (
      <h1> Hi I am using named EXPORT </h1>
    )
  }

  const DEF = () =>{
    return (
      <h3> Hello I will use DEFAULT EXPORT </h3>
    )
  }

  export default DEF;
*/



//Note :- REACT QUESTION
// ==> We can use both named, default exports on the same component / variable
// ==> It will not throw an error but it will be of no use as whatever method we have have used in our import based on that the export will work


//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// 3) IMPORTS
// use 'import' keywords

// a) For Default exports

// Syntax :-
// import component_name/variable_name from "path wrt current file directory"

//No need to give the extension of the end file although we can, since React will always treat it as a JS file

/*
e.g :-
  import Header from "./components/Header"
*/





// b) For Named exports
// extract in terms of an object

// Syntax :-
// import {component_1, variable_1, ... , var_n} from "path wrt current file directory"

//No need to give the extension of the end file although we can, since React will always treat it as a JS file

/*
e.g :-
  import {Header, Body, abc} from "./components/App"
*/
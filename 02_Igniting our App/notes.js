//React cannot itself build a fast-production ready app
//lots of other packages, library required to make our production ready app
// --> like removing comments, whitespaces, making our app light-weight,no console.log(),  etc
// minifying the code and bundle as well compressing the code
// optimising the images
//code splitting

//Hence we would have to do lots of processing in our local before pushing our app for production


// NOTE :- when we use "npx create-react-app", it creates a scaffold for us which gives a basic react app already optimised and ready for production.



//****************************************************************************************************************************************************************************************** */

// 2) N P M :-

//To build a fast production ready APP, we use many other packages, libraries, code written by others
//Hence, React makes our app fast to an extent but we need other packages to make it more scalable and fast


//npm = node package manager (wrong xxxxxx)
//npm = everything else except node package manager
//Its full form is not node package manager

//npm behind the scenes works as a node package manager

//npm is a standard repository for all the packages
//Its one of the biggest package manager + all the packages, libraries, utilities are hosted over there

// app through "create-react-app" automatically has npm inside in it, hence we dont need to configure it




//***************************************************************************************************************************************************************************************************************************************** */

//Inorder to use raw "npm" and configure it

// i) use command "npm init" and answer the questions
// for test commands :- type "jest"
// A new file named package.json file will be created


// Package.json :- A configuration file for our npm in json structure

/*
Why package.json is needed?
--> npm will manage all the packages which we will install in our system
--> these packages are also called dependencies (the packages our project is dependent on)
--> npm will take care of the versions of that package inside package.json

*/






// ii) Install the bundler (most important dependency)

// --> Our code (html,css,js) files needs to be bundled together, minified , cached, compressed, cleaned before it can be production ready
// bundler helps us to all these things
// e.g :- webpack, parcel, vite
//They have almost the same functionalities but with different algorithms behind the scenes

// create-react-app behind the scenes uses "webpack" bundler

// We are using parcel (its my choice)
// parcel also comes as a package, hence install it using npm

// use "npm install -D parcel"
// --> There are always two types of dependencies
//      a) dev dependencies :- required in development phase
//      b) normal dependencies :- used in development as well as production also

//since we need to make our code production ready in development phase hence we are installing dev dependencies only
// --> -D = dev dependencies


//hence, now parcel would be installed as a devDependency in package.json along with its version

//
//        "devDependencies":
//        {
//          "parcel": "^2.12.0"
//        }


// ^ (carat) :- automatically updates the dependency in our app on minor upgrade of that dependency
// ~ (tilde) :- automatically updates the dependency in our app on major upgrade of that dependency

// NOTE: - always it is safe to use ^ (carat) so that the dependency updates level by level through minor upgrades, else if we directly update the dependency on major upgrade, then many things might crash in our app





//*********************************************************************************************************************************************************************************************************************************************************** */



//Package.json   vs   Package-lock.json

//--> When we install parcel, we also get package-lock.json

//package.json :- a configuration of npm

//package-lock.json :- keeps a track of exact version that is being installed for every dependency as inside the package.json due to ^ (carat) the dependencies get updated on the inside on every minor upgrade, but package.json still shows the one time installed version with the carat sign only

//package.json :- approx version due to ^ or ~
//package-lock.json :- exact version




//******************************************************************************************************************************************************************************* */
// What  is integrity inside every dependency in package-lock.json

// integrity :- a SHA512 hash to make sure whatever dependencies are there in local machine, the same version is there deployed during production




//********************************************************************************************************************************************************************************************************************************************************/

//Node-modules :-

// It is a collection of dependencies

// -> on installing parcel, all the exact code of parcel as well as all the dependencies it required was fetched and put inside node-modules

// -> our project required parcel as a dependency, parcel might have some own dev and normal dependencies like babel, etc -> those dependencies might have other dependencies
//This is known as transitive dependency

//Every dependency is a separate package in npm
// -> The code of all these dependencies are present inside node modules


//NOTE :- Just like our project has a package.json, every dependency inside node modules has a package.json for itself which contains all the dependencies required for that package




//******************************************************************************************************************************************************************************************************************************************************************************************* */

//NODE MODULES AND GITHUB :-

//Node modules should never be put into github while hoisting our project in the repository
//Because of two reasons
// --> node modules is too bulky
// --> we can re-generate the entire dependencies along with the node modules directory by simply using the command :-  "npm install"

//After the package.json and package-lock.json have already been configured
// --> we can generate the required dependencies and node_modules anytime using "npm i"
// --> all the dependencies which are only present in package.json and package-lock.json will be installed


//NOTE :- Hence it is always important to put our package.json and package-lock.json in GITHUB





//HOW to ignore files from going to production or git:-

// --> Create a file named ".gitignore"
// --> put the location of all files we want to ignore wrt the location of  ".gitignore" file

//e.g :- Inside .gitignore
// --> /node_modules


//********************************************************************************************************************************************************* */
/*
Summary :-
i) use "npm init"
 --> for test commands :- type "jest"
ii) use npm i -D parcel
iii) remove the cdn links from body of html tag
iv) Use "npm i react" as a normal dependency
v) USE "npm i react-dom"
vi) Create a file named ".gitignore"
vii) --> put "/node_modules" inside it


ix) In our js file
a) --> import React from "react"
b) --> import ReactDOM from "react-dom"


x) In our index.html file
a) --> add ( type = "module") in the script tag to change it to a module



xi) For DEVELOPMENT build
a) use --> "npx parcel src_file_name"
--> src_file_name = index.html



xii) For PRODUCTION build
b) use --> "npx parcel build src_file_name"  (for production build)
--> src_file_name = index.html


ERROR FIX :-

i.e remove ( "main": "App.js" ) from package.json
--> then run the production command again


xiii) Put .parcel-cache and dist directory in .gitignore file since we can regenerate it 
--> /.parcel-cache
--> /dist


xiii) Add a key-value pair for browserslist in package.json
--> Mostly recommended

"browserslist" : [ "last 2 versions"]

*/



// IGNITING our react app using parcel
// --> using parcel in our app / code files




// 1) use command "npx parcel source_file"

// *) source_file = index.html (here)
// *) npx = node package executor :- to execute a package


//parcel will create a server for us and our app will be hosted in a localhost port.

//parcel goes to the source file, (here index.html) and builds a development build and hosts it in the localhost server





//****************************************************************************************************************************************************************************************************************** */




// 2) Remove all the cdn links (script tags) from html inside body tag

// --> not a good practice to fetch react and react-dom from cdn links
// --> since its a costly operation to fetch from cdns as we have to make a network call to get React into our app
// --> we will have to keep changing the url of cdn links since a specific version of package (here react) is present on them
// --> If we want to upgrade the package, we would have to keep updating the urls

//Hence, it is preferred to manage react and react-DOM as one of the dependencies under package.json and package-lock.json ,with its actual code inside node-modules


// USE "npm i react"
// to install react as a normal dependency with carat (^)


// USE "npm i react-dom"
// to install react-dom as a normal dependency with carat (^)




//****************************************************************************************************************************************************************************************************************** */




// 3) Use React and ReactDOM into your js file from node_modules
// --> import is mainly designed for files under node_modules

// --> import React from "react"
// --> import ReactDOM from "react-dom"

// --> "react" refers to the file from node modules
// --> "react-dom" refers to the file from node modules



// ERROR :- BROWSER SCRIPTS cannot have import / export





//******************************************************************************************************************************************************************************************************************* */


// 4) Change JS file from a a browser script to a module

// --> since we are injecting our js file as a script tag in html, hence the browser thinks our js file as a browser script (normal JS file)


// To remove this error, in index.html, change the script tag in index.html from browser script to module

// --> use ( type = "module") attribute in script tag
<script type="module" src="App.js"></script>





// 5) For creating builds

// a) For creating a DEVELOPMENT build
//use --> "npx parcel src_file_name"
// src_file_name = index.html

// --> all the code will be minified and three main files (html, css & js) will be put under dist folder after merging all the files of same type and from there the sever will load our files in localhost
//VVI :- server loads our files from dist folder and not our written code files



// b) For creating a PRODUCTION build
//use --> "npx parcel build src_file_name"  (for production build)
// src_file_name = index.html


// ERROR FIX :-
// since in command we use index.html as our entry point
// but in package.json, our entry-point under "main" is "App.js"
//hence it conflicts
// hence, remove entire <key-value> pair from package.json
// i.e remove ( "main": "App.js" ) from package.json
//then run the above command



// During production :-
// --> all the code will be minified and merged . Three main files (html, css & js) will be put under dist folder after merging all the files of same type




//***************************************************************************************************************************************************************************************************************** */

/* 6) Serve , Code and Github

--> Code is put in the Github repository
--> This Code is deployed to the server as the server fetches this code from github
--> The app is then hosted to the end user

All the commands we write in our local ( npm install,  npm parcel, etc ) will also be executed inside server also

--> Hence we will put package.json in github which will contain all our dependencies
--> Since server will fetch all the code from github , it will get our package.json and again regenerate a copy of our required node_modules
--> simiarly server will generate its separate dist directory for production code, hence we dont have to push our dist folder in github
*/




//***************************************************************************************************************************************************************************************************************** */


/*
7) Compatibility for older browsers
 --> we will use browserslist package from node_modules which comes by default under parcel


--> we have to tell our project in what browsers our apps should be supported in


IN package.json add a key-value pair at the last
--> key = "browserslist"
--> value = an array of string of versions of browser


"browserslist" : [
  "last 10 Chrome versions",
  "last 2 Firefox versions"
]


//values :-
i) "last 2 Chrome versions" = it will 100% work in latest two Chrome version, it might or might not work in other versions or browsers

ii) "last 2 versions" = it will 100% work in latest two versions of all browsers

NOTE :- govt websites should work in the oldest of browsers even hence use "last 10 versions"


NOTE :- more versions we define, more extra code by parcel is incorporated inside bundles, which make our app more heavy


*/





//***************************************************************************************************************************************************************************************************************** */



// Benefits of parcel :-
// Same answer for What makes our React app fast



// i)  Dev Build
// ii) Sets up a Local Server

// iii) HMR :- Hot Module Replacement using Hot Reloading :-

// whenever we do any changes to our code in any file, and just save it, it automatically shows up in the webpage
// --> Hot Module Replacement is done using "FILE WATCHING ALGORITHM" which is written in Cpp
// Hence it builds the app again if we save on doing chages in any of the file




// iv)  Caching for faster builds (Main reason why parcel is fast)

// -> parcel also caches the files to give us a faster build everytime we save the files intead of building them from scratch

// inside ".parcel-cache" directory
// it is developed on the first time we build our app
// Everytime we delete the cache, it will be regenerated on the next build




// v) Image Optimization
// --> To load images in our app is a really costly operation in web browser




// vi) Minification, Bundling, compressing of files
// --> When we do a production build instead of development build, parcel will minify, compress our files by
// --> removing white spaces, comments, etc
// --> pack all our JS files in a bundle and ship it for production




//vii) Consistent Hashing :-
// --> Consistent hashing is a distributed hashing technique used in computer science and distributed systems to achieve load balancing and minimize the need for rehashing when the number of nodes in a system changes.



//viii) Code Splitting :-
// --> create multiple bundles that can be dynamically loaded at runtime.
// --> When multiple parts of your application depend on the same common modules, they are automatically deduplicated into a separate bundle. This allows commonly used dependencies to be loaded in parallel with your application code and cached separately by the browser!



//ix) Differential Bundling :-
// To have different bundles for different types of browsers (especially older browsers)
// When we use <script type="module">, Parcel automatically generates a nomodule fallback for old browsers as well, depending on our browser targets.
// This results in much smaller bundles for a majority of users in modern browsers, while still supporting older browsers as well!



// x) Diagnostics and Error Handling :-
// --> To diagnose the error in our code and show it on the webpage along with the browser console



// xi) Allows to host in HTTPs
// --> normally our app is hosted in normal http local server
// hence we normally dont need https
// If we want to test something which only works on https only
// Use 'npx parcel source_file --https'



// xii) Different dev and production bundles :-
// --> production build due to more optimizations take a little more time than dev build

//use --> "npx parcel build src_file_name"  (for production build)
// src_file_name = index.html





// xii) Tree Shaking :-
// --> It statically analyzes the imports and exports of each module and removes unused code from the files which is not used





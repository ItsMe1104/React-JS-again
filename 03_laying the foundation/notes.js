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
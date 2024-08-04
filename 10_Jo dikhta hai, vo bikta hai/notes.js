// A) How can we add CSS to React projects :-

// 1)
// --> Use a style.css file and put all the css code into this file
// --> We use to have classes (className) inside our jsx or HTML tags, and we use to have selectors to style them in our style.css file


// 2)
// --> To use Sass and Scss :- writing css with superpowers and writing css becomes more advanced and easy
// --> Not a recommended way to write CSS, when our app goes big, these writing style does not scale well and are not usd in production ready application



// 3)
// --> styled components :- Mostly used by big companies



// 4)
// --> Using libraries and frameworks like Material UI, Bootstrap, Chakra UI, Ant design, Tailwind CSS
// --> They give us pre-styled components orother elements like buttons, etc which already are beautiful
// --> Also used in big companies




//******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/



// B) Tailwind CSS :-

// --> Primary CSS framework to customize our app
// --> It is based on the main concept that we dont have to leave our HTML / jsx and switch files to provide CSS
// --> It not only works with React but with all the frameworks available
// --> Its a very generic CSS framework


// Configure our Tailwind CSS into our project :-
// --> Go to their website
// --> Click on "Get Started"
// --> Switch to Framework Guides
// --> Select Parcel or any other bundler that we are using
// --> Copy the commands of "Install Tailwind CSS"
// --> It installs two packages for us :- Tailwind CSS and PostCSS
// --> PostCSS is a way to transform CSS inside Javascript
// --> Tailwind CSS uses PostCSS behind the scenes


// "npx tailwind init" :-
// --> npx :- Executing Tailwind CSS
// --> init :- Initializing Tailwind CSS into our repository
// --> It creates a new file known as tailwind.config.js
// --> This is the configuration file for our Tailwind CSS



//Configuration file for PostCSS
// --> Create a ".postcssrc" file in root directory just like we created a ".gitignore" file
// --> It is a configuration file for postcss
// --> Add an object given in the website beside configuring postcss

//              {
//                "plugins" : {
//                  "tailwindcss" : { }
//                }
//              }


// --> It tells postcssrc that we are using tailwind
// --> Parcel will use postcssrc to understand tailwind
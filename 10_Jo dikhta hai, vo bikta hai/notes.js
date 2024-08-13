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
// --> It helps to provide CSS on the fly that is at the time of creating the element itself
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

//                {
//                  "plugins": {
//                    "tailwindcss": { }
//                  }
//                }

// --> It tells postcssrc that we are using tailwind
// --> Parcel will use postcssrc to understand tailwind






// Configuration file for tailwind css
// --> Replace the existing content with this content in tailwind.config.js file

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// --> Inside the content key in the modules.exports object, we added a configuration
// --> It means the array takes the list of all the files where we can use our tailwind css
// --> Any file inside our src folder and have the extension of html, js, ts, jsx, tsx can use tailwind
// --> We can omit tx, tsx as we are not using those languages in our project






// Adding the Tailwind directives to our style.css file
// --> Delete all the previous cntent in our style.css file
// --> Add the following content in our style.css file

// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// --> It means we are importing our tailwind css into our css file
// --> Now we dont have to even open style.css file in our project





//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */



// C) Using Tailwind CSS :-


// --> We will put CSS using classnames
// --> Tailwind CSS gives pre-bulit classnames foralmost every CSS we can think of
// --> Thought process while styling should work exactly the same while adding normal css in our elements




// 1) For making any container flex :-
// --> Remove all the unnecessary classNames that were just use to style using normal css
// --> e.g :- Making Header component as flexbox
// --> className = "flex"

// <div className="flex">
// <ul className = "flex">

// Tailwind CSS utomatically added "display:flex" to it






// 2) To decrease / increase the width of an element:-
// --> e.g :- Decreasing the width of logo
// --> className = "w-4"

// --> 4 => 1 rem => 16px
// --> 56 => 14 rem ==> 224px






// 3) How to have space between two divs in a flexbox
// --> Just like we used to do { justify-content : space-between } in normal css

// --> className = "justify-between"
// --> Remember the className already should have flex because flexbox can only use the justify-content property






// 4) Giving padding, margin to any element
// --> e.g :- give padding and margin to the ul in all sides
// --> Same like we give in width

//--> Padding
//--> className = "p-4"      (4 => 1 rem => 16px)

//--> Margin
//--> className = "m-4"      (4 => 1 rem => 16px)





// 5) To give padding or margin on specific sides
// --> e.g :- giving padding and margin to only the bottom side of an element

//--> Padding
//--> className = "pb-4"      (4 => 1 rem => 16px)

//--> Margin
//--> className = "mb-4"      (4 => 1 rem => 16px)

// top --> t                   (mt or pt)
// bottom --> b                (mb or pb)
// left --> l                  (ml or pl)
// right --> r                 (mr or pr)
// x-axis (left + right)       (mx or px)
// y-axis (top + bottom)       (my or py)


// Either search for the css tags in the tailwind website or as the initial learning curve of tailwind progresses we will most probably remember all these classNames
// --> Use the extension :- Tailwind CSS IntelliSense by Tailwind Labs
// --> We will get tailwind class suggestions, as and when we are writing the code inside className
// --> If the suggestions automatically don't come, use CTRL+Space








// 6) To give background to an element
// --> e.g :- giving pink-background to our header

//--> className = "bg-pink-100"
// (shades start from 50 and goes on from lightest to darkest)





// 7) To give shadow to an element
// --> e.g :- giving shadow to our header

//--> className = "shadow-sm"
// (shades start from sm and goes on to 2xl from lightest to darkest)

// sm --> small
// md --> medium
// lg --> large
// xl --> extra large
// 2xl --> double extra large





// 8) To make the items align centre vertically
// --> e.g :- making all our list items of the ul, centrally align vertically
// --> Same as how we used to centrally allign vertically inside flexbox using align-items
// --> Remember the align-items property only works if the container is itself a flexbox
// --> never use it in the 'ul', rather make a div and put the ul inside it and then make that div a flexbox
//--> className = "flex items-center"





// 9) To make the text alignment as centre horizontally in its parent div 
// --> e.g :- to make the <h1> tag centrally aligned in a div
//--> className = "text-center"





// 10) To make the text alignment as left horizontally in its parent div 
// --> e.g :- to make the <h1> tag left-aligned in a div
//--> className = "text-left"




// 11) To make the text alignment as right horizontally in its parent div 
// --> e.g :- to make the <h1> tag right-aligned in a div
//--> className = "text-right"





// 12) To make the text bold
// --> e.g :- to make the text inside <h1> tag bold 
//--> className = "font-bold"





// 13) To give borders to an element
// --> e.g :- giving a border to our input box

// --> className = "border border-solid border-black"

// --> border :- gives the border
// --> border-solid :- gives the border a solid texture
// --> border-black :- gives the colour of the border
// --> All three attributes need to be givem






//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */



// D) IMPORTANT NOTE :-

// --> A button tries to take full width of the parent, hence, always wrap it inside a div whenever using a button and then try to shape that div instead according to our requirements





//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************* */




// E) Tailwind CSS continued :-


// 14) To give round corners to an element
// --> e.g :- giving a rounded corner to our search button

// --> className = "rounded-lg"

// sm --> small
// md --> medium
// lg --> large
// xl --> extra large
// 2xl --> double extra large
// ...






// 15) Giving 200px exact width to an element :-
// --> e.g :- giving a 200px width to an image
// --> we have w-48 --> 192px
// --> we have w-52 --> 208px
// --> to give hardcoded 200px value, we have to use []
// --> className = "w-[200px]"





// 16) How to make the elements flex-wrap inside our flexbox

// --> e.g :- making our restaurand card container flex-wrap so that all the restaurant cards do not come horizontally.
// --> Remember inorder to use flex-wrap, the flex property should be present in our container already

// --> classname = "flex-wrap"
// --> Total
// --> className = "flex flex wrap"





// 17) How to make the font of an element as BOLD
// --> e.g :- making the text of an <h1> tag bold

// --> classname = "font-bold"





// 18) How to make the font-size of an element large
// --> e.g :- making the text of an <h1> tag large

// --> classname = "text-xl"

// sm --> small
// md --> medium
// lg --> large
// xl --> extra large
// 2xl --> double extra large
// 3xl --> Three times large






// 19) How to access hover class like the way we use to have pseudo classes in tailwind
// --> e.g :- when we hover onto some element, it should change the colour to dark gray, etc

// --> classname = "hover:bg-gray-400"
// --> classname = "hover:text-2xl"




// 20) To make the width of the component as half of its parent
// --> e.g :- To make a div take half of the screen
// --> Tailwing divides the parent into 12 pieces. We can use fraction to determine the width

// --> classname = "w-6/12"





// 21) To make an element to come at the centre of its parent
// --> e.g :- To make a div come at the centre of the screen

// --> className = "m-auto"       (meaning equal margin from all sides)






// 22) Media queries
// sm  --> small devices (mobile phones)
// md  --> medium devices (tablets)
// lg  --> large devices (desktops)

// --> Always done for higher side
// --> Like if my device size is greater than sm, then do something, till "sm" it will have the default written css
// --> classname = "sm: bg-yellow-50"  (any device greater than sm will have yellow)


// --> Like if my device size is greater than lg, then do something
// --> classname = "lg: bg-yellow-50" (any device greater than lg will have yellow)




// Altogether :-
classname = "bg-pink-50 sm: bg-yellow-50 lg: bg-green-50"

// means  0 --> sm == pink
// means sm --> lg == yellow
// means lg --> end == green




// 23)  Very easy to make the app in dark mode using "dark:"
// --> e.g :- classname = "text-slate-500 dark:text-slate-400"


//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */




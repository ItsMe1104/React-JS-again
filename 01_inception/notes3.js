// 1) 

<body>

  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

  <script src="App4.js"></script>

</body>


//does the order of these script tags matter?

// --> Yes since we first have to import REACT and REACT DOM, then only we can use it in our other JS files

//Since HTML executes line by line, hence by the time it has reached our JS file which requires React to execute, it should have already got the imported React files




//2) Question :-
// What if some content was already present inside the div in HTML document which we are trying to make the root of our React project?

// e.g:-

//HTML document

/*
<body>
    <div id = "root">  
      <h1> Hello!! I am already in this div </h1>
    </div>

</body>

*/


//App.js (React Code)

//creating a React element of type "h1"
const heading = React.createElement("h1", { id: "heading" }, "Hello World From React 2");

//Creating root of virtual DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

//rendering the heading inside root
root.render(heading);



// SOLUTION :-
// --> React will replace all the children of that div from HTML which it made to be the root
// -->  It will only show its own elements (here heading h1 tag) which is rendered by root.render()


//When the browser reads line by line the HTML document, it will first print the HTML content inside that div,
//Just when the JS files with React and ReactDOM loads up in our app, within milli seconds, those HTML content will be replaced by the elements rendered by React

//Hence React took control over the div





//3) Question :-
// What if some content was present above and below the div in HTML document which we are trying to make the root of our React project?

// e.g:-

//HTML document

<>
  <h1> I am above root. </h1>
  <div id="root">
    <h1> Hello!! I am already in this div </h1>
  </div>
  <h2> I am below root. </h2>
</>


//Solution :-
// The other elements will be present in our layout as they are according to our HTML stucture
//React can only take control of the "root" div and replace its content with the one it is rendering using root.render()
//React is only working inside div with id = "root" while the other portion of HTML will work the same


//This is why React is a library and not a framework
// --> React can be applied to a small portion of the document itself
// --> It can work independently in a mall portion of our app itself
// --> It can only work in header, or footer , or sidebar
// --> React only works in the place we make the root as.

// Unlike framework with comes with alot of baggage and the whole document should follow the rules of that framework

//Hence, React can work with existing apps, while frameworks require us to develop the whole app in that framework





//NOTE :- React Element is just a JS object at the end of the day


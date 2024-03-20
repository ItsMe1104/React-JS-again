// NOTE :- Always name a component with a capital Letter else it will throw error
// Its a React way to know it is a component


//1) React Components :-

//--> Everything is a component in React
//--> It is just a normal JS function



//There are two types of Components :-
//--> Class Based Components (old way --> no one uses now)
//--> Functional Components (new way)


//Class Based components uses JS classes, Functional components use JS functions





//************************************************************************************************************************************************************************************************************ */


// 2) Functional Components :-

//a) Definition
//  ==> A Functional Component is a normal JS function which returns jsx or bunch of nexted jsx elements
// ==> A function which returns a React Element
// ==> It can be a normal JS function or an arrow function

const Func = function () {
  return <h1>React's Functional Component</h1>
}

//or 

const HeadingComponent = () => {
  return <h1>React's Functional Component</h1>
}


//Using arrow function in JS, we can
// ==> ommit return statement and directly return in one line (only one line)

const HeadingComponent2 = () => <h1>React's Functional Component</h1>


// ==> omit return and use braces () to return in multiple lines

const HeadingComponent3 = () => (<h1>
  React's Functional Component
</h1>
)


// ==> If we used normal braces, then we would have to use the return statement with it
// ==> If its a bunch of JSX nested together, we can use braces () with return statement

const Heading_Component = () => {
  return (
    <div className="">
      <h1 className="head n ing">
        React's Functional Component
      </h1>
    </div>
  );
}





// b) Nested jsx side functional components

const HeadingComponent4 = () => (
  <div className="">
    <h1 className="head n ing">
      React's Functional Component
    </h1>
  </div>
);




//c) Changing react element (in jsx) to React component

// --> First use the name starting in caps 
// --> Then just put "() =>" after "="

const react_ele_jsx = (
  <h1 className="e_g">
    React_ele in JSX
  </h1>
);

const React_ele_func = () => (
  <h1 className="e_g">
    React_ele in JSX
  </h1>
);




// d) How to call this functional component?

//--> In Js, we call a function using ()
//e.g :- abc()


//--> In Jsx, we call the function like
// i) a self closing tag
<React_ele_func />

// ii) normal HTML-like tag
// <React_ele_func></React_ele_func> 

// ii) a normal JS function call (since afterall its a function)
React_ele_func();




//hence while rendering if we want to render the jsx
// --> root.render(react_ele_jsx);

//but while rendering if we want to render the jsx returned by functional component, we use
// --> root.render(<React_ele_func />)



//This self closing tag for functiona components is because Babel understands it that way inorder to identify it.




//**************************************************************************************************************************************************************************************************************** */


// 3) Component Composition :-

// --> One component inside another
// --> Two components composed into one another
// we call one component in another, so that the jsx or bunch of jsx returned by a component is merged to the jsx of other component

// --> We can compose a component as many times as we want inside a component

//component 1
const Title = () => (
  <div className="">
    <h1 className="head" tabIndex="5">
      Component 1
    </h1>
  </div>
)


//component 2
//using component 1 inside component 2

const HeadingComponent5 = () => (
  <div className="">
    <h1 className="head n ing">
      React's Functional Component
    </h1>
    <Title />
    <Title />
    <Title />
  </div>
);



//HTML doesnt even know about these components
//Babel is transpiling behind the scenes all the JSX code to React Element which inturn is turned into HTML elements



//***************************************************************************************************************************************************************************** */



// 4) //Using JS expression inside JSX

// --> Inside jsx tags, we can write JS expression inside curly braces {}
// --> NOTE :- We can only use evaluated JS expressions , function calls and console.log() only inside {}
// --> We cannot write if-else, loops, or declare variables inside them


//e.g1 :- Using {} inside jsx
let num = 126457;
const example = <h2> Hello I am Hrithik. {num}</h2>


//e.g2 :- Using {} inside jsx within component

let
const HeadingComponent6 = () => (
  <div className="">
    {123 * 52345}
    {console.log("Hi Everyone")}
    <h1 className="head n ing">
      React's Functional Component
    </h1>
    <Title />
  </div>
);




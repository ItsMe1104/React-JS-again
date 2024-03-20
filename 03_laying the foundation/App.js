import React from "react";
import ReactDOM from "react-dom/client";



// const heading = React.createElement(
//   "h1",
//   { id: "root" },
//   "This is React through ReactElement"
// );


//React Element 
const heading_jsx = <h1>This is React through jsxxxx</h1>




//Functional component (normal function or arrow function)
const HeadingComponent = () => {
  return <h1 className="heading" >React's Functional Component</h1>
}

//Shorthand 1 :- single line
const HeadingComponent2 = () => <h1 className="heading" >React's Functional Component</h1>

//Shorthand 2 :- multiple line
const HeadingComponent3 = () => (
  <div className="">
    <h1 className="heading">
      React's Functional Component
    </h1>
  </div>
);


//new React element
const ele = <div className="ele">
  <h1>
    This is ele1.
  </h1>
</div>


//Putting element inside Component using {}
const NewComponent = () =>
(
  <div className="newComponent">
    <h2>
      We are inside the new component.
      {ele}
    </h2>
  </div>
)


//Component Composition :- One component used inside another
const Title = () => (
  <div className="">
    <h1 className="head" tabIndex="5">
      I am from component 1 (using jsx)
    </h1>
  </div>
)

//Title inside HeadingComponent4
const HeadingComponent4 = () => (
  <div className="">
    {12345 * 12345}
    {console.log("Hi veryone")}
    <h1 className="heading">
      React's Functional Component
    </h1>
    <Title />
    <Title />
    <Title />
    <h1>Now I am inside component 2</h1>

    <NewComponent />
  </div>
);



const div = document.getElementById("root");

const root = ReactDOM.createRoot(div);

root.render(<HeadingComponent4 />);
// root.render(<HeadingComponent4></HeadingComponent4>);
// root.render(HeadingComponent4());
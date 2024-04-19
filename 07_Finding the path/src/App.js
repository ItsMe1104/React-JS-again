import React from "react";
import ReactDOM from "react-dom/client"
import Header from "../src/components/Header"
import Body from "../src/components/Body";

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}



const div = document.getElementById("root");
const root = ReactDOM.createRoot(div);
root.render(<App />);



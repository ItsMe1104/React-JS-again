import React from "react";
import ReactDOM from "react-dom/client";



const heading_jsx = <h1>This is React through jsx</h1>

const div = document.getElementById("root");

const root = ReactDOM.createRoot(div);
root.render(heading_jsx);
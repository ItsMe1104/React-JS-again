import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "root" },
  "This is React through ReactElement"
);

const heading_jsx = <h1>This is React through jsxxxx</h1>

const div = document.getElementById("root");

const root = ReactDOM.createRoot(div);

root.render(heading);
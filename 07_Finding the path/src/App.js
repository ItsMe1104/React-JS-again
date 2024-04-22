import React from "react";
import ReactDOM from "react-dom/client"
import Header from "../src/components/Header"
import Body from "../src/components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  }
])


const div = document.getElementById("root");
const root = ReactDOM.createRoot(div);
root.render(<RouterProvider router={appRouter} />);



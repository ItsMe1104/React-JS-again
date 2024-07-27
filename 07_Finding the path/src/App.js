import React from "react";
import ReactDOM from "react-dom/client"
import Header from "../src/components/Header"
import Body from "../src/components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },
])


const div = document.getElementById("root");
const root = ReactDOM.createRoot(div);
root.render(<RouterProvider router={appRouter} />);



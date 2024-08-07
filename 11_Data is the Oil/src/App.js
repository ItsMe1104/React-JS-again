import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client"
import Header from "../src/components/Header"
import Body from "../src/components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";


const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import("./components/About"))


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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        )
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        )
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



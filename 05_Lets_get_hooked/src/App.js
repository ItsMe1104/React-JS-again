import React from "react"
import ReactDom from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"



/**
 * Header
 * - Logo
 * - nav Items
 * Body
 * - Search 
 * - RestaurantCard Container
 *    - Restaurant Card
 *       -Img
 *       -Name of Restaurant, Star Rating, cuisines, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 * 
 */


const AppLayout = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Body */}
      <Body />

    </>
  )

}


const div = document.getElementById("root");

const root = ReactDom.createRoot(div);
root.render(<AppLayout />)
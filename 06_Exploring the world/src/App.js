import React from 'react'
import ReactDOM from 'react-dom/client'
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



const App = () => {
  return (
    <>
      <Header />

      <Body />
    </>
  )
}





const div = document.getElementById("root");
const root = ReactDOM.createRoot(div);

root.render(<App />)

export default App

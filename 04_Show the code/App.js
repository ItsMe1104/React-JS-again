import React from "react"
import ReactDom from "react-dom/client"



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

const Header = () => {
  return (
    <div className="header">

      {/* LOGO */}
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="" />
      </div>

      {/* Navbar-items */}
      <div className="nav-items">
        <ul>
          <li className="item">Home</li>
          <li className="item">About Us</li>
          <li className="item">Contact Us</li>
          <li className="item">Cart</li>
        </ul>
      </div>
    </div>
  )
}


// style for restaurant card
const styleCard = {
  backgroundColor: "#f0f0f0",
}


const RestaurantCard = (props) => {
  //Destructuring props 
  const { resData } = props;

  return (

    // one restaurant card 
    <div className="res-card" style={styleCard}>
      <img className="res-logo"
        src="https://th.bing.com/th/id/OIF.EpiMfKFDBcJFMWHPCIPU8A?w=319&h=180&c=7&r=0&o=5&pid=1.7" alt="restaurant-logo" srcset="" />
      <h3>{resData.resName}</h3>
      <h4>{resData.cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  )
}


const resList = [
  {
    resName: "KFC",
    cuisine: ["Burger", "Fried Food"],
    stars: "3.9⭐",
    costForTwo: 40000
  },
  {
    resName: "Gupta Brothers",
    cuisine: ["South Indian", "Fast Food"],
    stars: "4.1⭐",
    costForTwo: 30000
  },
  {
    resName: "Alishan",
    cuisine: ["Biryani", "Chicken-items"],
    stars: "4.0⭐",
    costForTwo: 30000
  },
  {
    resName: "Santa Delivers",
    cuisine: ["North Indian", "Fast Food", "Chinese"],
    stars: "4.2⭐",
    costForTwo: 60000
  },
  {
    resName: "Pizza Hut",
    cuisine: ["Pizza"],
    stars: "3.5⭐",
    costForTwo: 80000
  },
  {
    resName: "Chennai Express",
    cuisine: ["South Indian"],
    stars: "3.8⭐",
    costForTwo: 40000
  },
  {
    resName: "6 Ballygunge Place",
    cuisine: ["Bengali-Food, North Indian"],
    stars: "4.5⭐",
    costForTwo: 1500000
  },
  {
    resName: "Kake Di Hatti",
    cuisine: ["North Indian", "South Indian"],
    stars: "4.2⭐",
    costForTwo: 60000
  }
]





const Body = () => {

  return (
    <div className="body">

      {/* Search Bar */}
      <div className="search">
        Search
      </div>

      {/* Restaurant Container */}
      <div className="res-container">

        {
          // RestaurantCard :- since it will be reused again and again
          // <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian" />

          //using normal JS function syntax */}
          // RestaurantCard({ resName: "KFC", cuisine: "Burger, Fast food" })
        }
        {

          resList.map((restuarant) => (
            <RestaurantCard resData={restuarant} />
          ))

        }
      </div>
    </div>
  )
}

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

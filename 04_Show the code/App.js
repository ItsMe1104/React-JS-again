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
  //resData is the key
  const { resData } = props;

  return (

    // one restaurant card 
    <div className="res-card" style={styleCard}>
      <img className="res-logo"
        src={resData.image_src} alt="restaurant-logo" srcset="" />
      <h3>{resData.resName}</h3>
      <h4>{resData.cuisine.join(" , ")}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  )
}

//Try to get the data in some other file and import it here
const resList = [
  {
    resName: "KFC",
    cuisine: ["Burger", "Fried Food"],
    stars: "3.9⭐",
    costForTwo: 40000,
    image_src: "https://th.bing.com/th/id/OIP.aKRjaJ8vHDf0FTADAtcOAgHaHa?w=191&h=185&c=7&r=0&o=5&pid=1.7"
  },
  {
    resName: "Gupta Brothers",
    cuisine: ["South Indian", "Fast Food"],
    stars: "4.1⭐",
    costForTwo: 30000,
    image_src: "https://c.ndtvimg.com/2021-05/j7satrco_indian-food_625x300_22_May_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675"
  },
  {
    resName: "Alishan",
    cuisine: ["Biryani", "Chicken-items"],
    stars: "4.0⭐",
    costForTwo: 30000,
    image_src: "https://th.bing.com/th/id/OIP.FFZRw7cRmoXeB4OzwsQEYwHaFO?w=276&h=195&c=7&r=0&o=5&pid=1.7"
  },
  {
    resName: "Santa Delivers",
    cuisine: ["North Indian", "Fast Food", "Chinese"],
    stars: "4.2⭐",
    costForTwo: 60000,
    image_src: "https://th.bing.com/th/id/OIP.hlpZZOrAeVz6Y2ZrQJsaXgHaE8?w=243&h=180&c=7&r=0&o=5&pid=1.7"
  },
  {
    resName: "Pizza Hut",
    cuisine: ["Pizza"],
    stars: "3.5⭐",
    costForTwo: 80000,
    image_src: "https://www.briflynews.com/sites/default/files/styles/large/public/article/2020-12/zfd.jpg?itok=viFd4Uwg"
  },
  {
    resName: "Chennai Express",
    cuisine: ["South Indian"],
    stars: "3.8⭐",
    costForTwo: 40000,
    image_src: "https://hospibuz.com/wp-content/uploads/2019/01/Zomato-1.jpg"
  },
  {
    resName: "6 Ballygunge Place",
    cuisine: ["Bengali-Food, North Indian"],
    stars: "4.5⭐",
    costForTwo: 1500000,
    image_src: "https://b.zmtcdn.com/data/pictures/chains/2/19669112/fd7d206af7d89fc359ede7763e6ade13.jpg"
  },
  {
    resName: "Cakes",
    cuisine: ["Cakes, Chocolates"],
    stars: "3.9⭐",
    costForTwo: 10000,
    image_src: "https://th.bing.com/th/id/OIP._7tB6pMPJperQyMiHrTiFwHaFj?rs=1&pid=ImgDetMain"
  },
  {
    resName: "Keventers",
    cuisine: ["Shakes", "Ice creams"],
    stars: "4.0⭐",
    costForTwo: 50000,
    image_src: "https://th.bing.com/th/id/OIP.FRqHRxmXuO-5kzhtRpMtNgHaD9?w=294&h=180&c=7&r=0&o=5&pid=1.7"
  },
  {
    resName: "Uncle Peter",
    cuisine: ["Pancakes", "Snacks"],
    stars: "4.4⭐",
    costForTwo: 50000,
    image_src: "https://th.bing.com/th/id/OIP.LypNx39ze9zLhTYZ48n5QAHaE7?w=256&h=180&c=7&r=0&o=5&pid=1.7"
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
          //One way to get Components with props

          // RestaurantCard :- since it will be reused again and again
          // <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian" />


          //using normal JS function syntax for using props :-
          // RestaurantCard({ resName: "KFC", cuisine: "Burger, Fast food" })
        }
        {

          //Mostly used when data is in the form of array of objects
          //With each object containing dynamic data of one complete component.

          //Just use map and keep on creating Restaurant card for the number of objects using map

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

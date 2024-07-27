//Try to get the data in some other file and import it here
const resList =
  [
    {
      id: 123,
      resName: "KFC",
      cuisine: ["Burger", "Fried Food"],
      stars: 3.9,
      categories: {
        veg: {
          "Indian Spicy Roll": 400,
          "Paneer Zinger Burger": 208,
          "Veg Zinger Burger": 213,
          "Veg Rice Bowlz": 199,
          "Veg Box Meal": 399,
          "2 pc Veg Patty": 155,
          "French Fries": 119,
          "Chocolate Lava Cake": 109
        },

        non_veg: {
          "Classic Chicken Rice Bowlz": 229,
          "Single Chicken Roll": 119,
          "Chicken Longer Burger & 2 Strips Combo": 219,
          "Regular Chicken Popcorn": 109,
          "Caribbean Spicy Zinger Burger": 219,
          "Mexican Zinger Pro Burger": 239,
          "Chicken & Fries Bucket": 299,
          "8 pc Hot & Crispy Chicken": 768
        }
      },
      costForTwo: 40000,
      deliveryTime: "38 mins",
      image_src: "https://th.bing.com/th/id/OIP.aKRjaJ8vHDf0FTADAtcOAgHaHa?w=191&h=185&c=7&r=0&o=5&pid=1.7"
    },

    {
      id: 345,
      resName: "Gupta Brothers",
      cuisine: ["South Indian", "Fast Food", "Chinese"],
      stars: 4.1,
      categories: {
        veg: {
          "Puran Puri (2pcs) With Paneer Sabji": 170,
          "Radhaballavi With Aloo Dum": 90,
          "Sattu Paratha (2pcs) With Sabji": 169,
          "Rice With Dal Makhani": 170,
          "Veg Fried Rice With Chilli Paneer": 170,
          "Mixed Veg": 190,
          "Chilli Potato": 140,
          "Chinese Bhel": 90
        },

        non_veg: {
          "Chicken Butter Masala": 250,
          "Chicken Do Pyaza": 260,
          "Egg Bhurji": 75,
          "Egg Curry": 120,
          "Mixed Fried Rice": 265,
          "Chilli Prawn": 420,
          "Egg Chowmin": 130,
          "Chilli Fish": 350
        }
      },
      costForTwo: 30000,
      deliveryTime: "45 mins",
      image_src: "https://c.ndtvimg.com/2021-05/j7satrco_indian-food_625x300_22_May_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675"
    },
    {
      id: 678,
      resName: "Alishan",
      cuisine: ["Biryani", "Chicken-items"],
      stars: 4.0,
      categories: {
        veg: {
          "Veg Biryani": 100,
          "Aloo Dum": 80,
          "Paneer Butter Masala": 120,
          "Firni": 70,
          "Paneer Butter Masala": 289,
          "Biriyani Rice": 254,
          "Paneer hariyali Kebab": 379,
          "Paneer Tikka Kebab(4pcs)": 399,
          "Tandoori Aloo(8 pcs)": 399,
          "Tandoori mashroom(10 pcs)": 374
        },

        non_veg: {
          "Chicken Biryani": 120,
          "Mutton Biryani": 150,
          "Chicken Chaap": 120,
          "Chicken Tikka Masala": 165,
          "Chicken Tangri Kebab": 289,
          "Chicken Tandoori Masala": 354,
          "Mutton Boti Kebab": 459,
          "Arsalan Biriyani": 399,
          "Mutton Pasinda": 384
        }
      },
      costForTwo: 30000,
      deliveryTime: "20 mins",
      image_src: "https://th.bing.com/th/id/OIP.FFZRw7cRmoXeB4OzwsQEYwHaFO?w=276&h=195&c=7&r=0&o=5&pid=1.7"
    },
    {
      id: 910,
      resName: "Santa Delivers",
      cuisine: ["North Indian", "Fast Food", "Chinese"],
      stars: 4.2,
      categories: {
        veg: {
          "Dal Makhani Naan TurnOver(2 Pockets)": 295,
          "Kadhai Paneer": 219,
          "Dilli Ka Paneer Makhani": 229,
          "Paneer Tikka Masala": 229,
          "Khichdi Alur Dom Combo": 199,
          "Tandoori Soya Chaap(8 pieces)": 289,
          "Amritsari Chana Masala": 165,
          "Dal Makhani Combo": 239,
          "Yellow Dal Tadka Fry": 195
        },

        non_veg: {
          "Dilli Ka Butter Chicken(Chef's Special)": 289,
          "Kolkata Chicken Bharta(Chef's Special)": 245,
          "Basanti Pulao and Chicken Kosha Combo": 299,
          "Chicken Tangri Kebab": 249,
          "Delhi Chicken Makhani Naan Turnover(2 Pockets)": 299,
          "Egg Tadka": 225,
          "Chicken Kosha": 225,
          "Reshmi Chicken Butter Masala": 295,
          "Kadhai Chicken": 225
        }
      }
      ,
      costForTwo: 60000,
      deliveryTime: "40 mins",
      image_src: "https://th.bing.com/th/id/OIP.hlpZZOrAeVz6Y2ZrQJsaXgHaE8?w=243&h=180&c=7&r=0&o=5&pid=1.7"
    }
    ,

    {
      id: 101,
      resName: "Pizza Hut",
      cuisine: ["Pizza"],
      stars: 3.5,
      categories: {
        veg: {
          "Tomato Pizza": 145,
          "Onion Pizza": 120,
          "Capsicum Pizza": 130,
          "Pineapple Pizza": 110,
          "8 cheese Pizza": 170,
          "Peppy Paneer Pizza": 165,
          "Garden High Pizza": 155,
          "Maharaja Special Pizza": 195,
          "Morrocon Pasta Pizza": 160,
        },

        non_veg: {
          "Barbeque Chicken Pizza": 145,
          "Chicken Sausage Pizza": 120,
          "Chicken Loaded Pizza": 130,
          "Garlic Prawn Pizza": 110,
          "Cheesy Fish Pizza": 170,
          "Chicken Wings (5pcs)": 165,
          "Murg Malai Chicken Pizza": 155,
          "Chicken Pepperoni Pizza": 195,
          "Tandoori Murg Pasta": 160,
        }
      },
      costForTwo: 80000,
      deliveryTime: "25 mins",
      image_src: "https://www.ilatou-sarthe.com/media/2583/big/pizza-hut.jpg"
    },
    {
      id: 102,
      resName: "Chennai Express",
      cuisine: ["South Indian"],
      stars: 3.8,
      categories: {
        veg: {
          "Plain Dosa": 100,
          "1 Paper Masala Dosa": 160,
          "Masala Dosa": 130,
          "Paneer Masala Dosa": 200,
          "1 Cheese Masala Dosa": 130,
          "Onion Dosa": 130,
          "Butter Dosa": 140,
          "Podi Dosa": 140
        },

        non_veg: {
          "Chicken Dosa": 200,
          "Fish Masala Dosa": 140,
          "Prawns Kuzhambu": 220,
          "Chicken Masala Dosa": 140,
          "Chicken Vindaloo": 200,
          "Coconut Curry Chicken": 240,
          "Chicken Jalfrezi": 200,
          "Kelara Karimeen Fry": 100
        }
      },

      costForTwo: 40000,
      deliveryTime: "30 mins",
      image_src: "https://hospibuz.com/wp-content/uploads/2019/01/Zomato-1.jpg"
    },
    {
      id: 103,
      resName: "6 Ballygunge Place",
      cuisine: ["Bengali-Food, North Indian"],
      stars: 4.5,
      categories: {
        veg: {
          "Posto Narkel Bora(6 pcs)": 145,
          "Aloo Posto": 120,
          "Dhokar Dalna": 130,
          "Mochar Ghonto": 110,
          "Phulkopir Roast": 170,
          "Shuktoni": 165,
          "Cholar Dal": 155,
          "Moong Mohan Dal": 195,
          "Badshahi Pulao": 160,
        },
        non_veg: {
          "Fish Fry": 145,
          "Bhetki Paturi": 120,
          "Fried Pomfret": 130,
          "Bagda Chingri Salma": 110,
          "Fish Kabiraji": 170,
          "Bhuna Mangsho": 165,
          "Mutton Rogan Josh": 155,
          "Prawn Cutlet": 195,
          "Murgir Jhol": 160,
        }
      },
      costForTwo: 1500000,
      deliveryTime: "55 mins",
      image_src: "https://b.zmtcdn.com/data/pictures/chains/2/19669112/fd7d206af7d89fc359ede7763e6ade13.jpg"
    },
    {
      id: 104,
      resName: "Mio Amore",
      cuisine: ["Cakes, Chocolates"],
      stars: 3.9,
      categories: {
        veg: {
          "Vegetable Manchurian": 145,
          "Veg Pizza": 120,
          "Veg Patties": 130,
          "Cheese Corn Roll": 110,
          "Paneer Tikka Masala Roll": 170,
          "Paneer Puff Pizza": 165,
          "Cheese Sandwich": 155,
          "Choco Chips Muffin": 195,
          "Choco Volcano": 160,
        },

        non_veg: {
          "Chicken Internet": 145,
          "Creamy Chicken Roll": 120,
          "Fish Chop": 130,
          "Chicken 65 Roll": 110,
          "Cheesy Egg Chop": 170,
          "Chunky Chicken Burger": 165,
          "Chicken Lasagne": 155,
          "Chicken Patties": 195,
          "Chicken Sandwich": 160,
        }
      },
      costForTwo: 10000,
      deliveryTime: "20 mins",
      image_src: "https://th.bing.com/th/id/OIP._7tB6pMPJperQyMiHrTiFwHaFj?rs=1&pid=ImgDetMain"
    },

    {
      id: 114,
      resName: "7 Eleven",
      cuisine: ["Fast Food", "Pasta", "Desserts"],
      stars: 4.0,
      categories: {
        veg: {
          "Cheese Garlic Bread": 159,
          "Veg Sandwich": 129,
          "Paneer Tikka Sandwich": 169,
          "Paneer Tikka": 179,
          "Veg Pasta": 219,
          "Cheesy Fries": 139,
          "Veg Pan Fried Momo": 169,
          "Veg Wrap": 139
        },

        non_veg: {
          "Chicken Sandwich": 199,
          "Chicken Mayo Wrap": 149,
          "Chicken Cheese Steamed Momo": 139,
          "Chicken Tikka Wrap": 179,
          "Chicken and Mayo Sandwich": 159,
          "Egg and Mayo Sandwich": 149,
          "Chicken Pasta": 249,
          "Chicken Salad": 149
        }
      },

      costForTwo: 50000,
      deliveryTime: "40 mins",
      image_src: "https://th.bing.com/th/id/OIP.FRqHRxmXuO-5kzhtRpMtNgHaD9?w=294&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
      id: 105,
      resName: "Uncle Peter Pancakes",
      cuisine: ["Pancakes", "Snacks"],
      stars: 4.4,
      categories: {
        veg: {
          "Nutella Filled Pancakes": 299,
          "Tiramisu Pancakes": 279,
          "Death By Chocolate": 285,
          "Cookie Crumble Pancakes": 265,
          "Blueberry Garden Pancakes": 299,
          "Mango & Cream Cheese Pancakes": 319,
          "Mango Tiramisu Pancakes": 305,
          "Berries and Cream Cheese Crepes": 299
        },

        non_veg: {
          "Creamy Chicken Omelette": 249,
          "Creamy Chicken And Mushroom Crepe": 310,
          "Chicken Tikka Sandwich": 269,
          "Spinach Cheese Ommelette": 148,
          "Chicken Sausages": 199,
          "Creamy Chicken Grilled Sandwich": 269,
          "Pesto Chicken Crepe": 299,
          "Butter Garlic Prawn French Fries": 299
        }
      },
      costForTwo: 50000,
      deliveryTime: "50 mins",
      image_src: "https://th.bing.com/th/id/OIP.LypNx39ze9zLhTYZ48n5QAHaE7?w=256&h=180&c=7&r=0&o=5&pid=1.7"
    },

    {
      id: 108,
      resName: "Naturals",
      cuisine: ["Ice Cream, Snacks"],
      stars: 4.7,
      categories: {
        veg: {
          "Tender Coconut Ice Cream": 85,
          "Mango Ice Cream": 80,
          "Chocobite Ice Cream": 80,
          "Roasted Almond Ice ": 95,
          "Kesar Pista Ice Cream": 90,
          "Lychee Ice Cream": 95,
          "Orange Pistachio Ice Cream": 105,
          "Raspberry Ice Cream": 75,
          "Veg Cheesy Sandwich": 145,
        },

        non_veg: {
          "Chicken Mixed Sauce Pasta": 160,
          "Chicken Sandwich": 125,
          "Chicken Mayo Sandwich": 140,
          "Egg Mayo Sandwich": 90,
          "Chicken Burger": 120,
          "Chicken Hot Wings (5pcs)": 140,
          "Egg Noodles": 90,
          "Mixed Noodles": 150,
        }
      },
      costForTwo: 20000,
      deliveryTime: "40 mins",
      image_src: "https://th.bing.com/th/id/OIP.qB5j3domZwZH5wgrGgKuJAHaFj?rs=1&pid=ImgDetMain"
    },

    {
      id: 109,
      resName: "Eagle Bites",
      cuisine: ["Pancakes", "Snacks"],
      stars: 4.0,
      categories: {
        veg: {
          "French Fries": 120,
          "Margherita": 150,
          "Country Style Pizza": 230,
          "Merry Paneer Pizza": 210,
          "Veg Lovers Pizza": 220,
          "Aussie's Favourite Veg": 299,
          "White Sauce Pasta": 160,
          "Cheesy Mushroom Garlic Bread": 180
        },

        non_veg: {
          "Cheesy Chicken Pizza": 220,
          "Bbq Chicken Pizza": 280,
          "Chicken Sausage Pizza": 300,
          "Chicken Keema Pizza": 300,
          "Prawn Pasta": 190,
          "Masala Chicken Popcorn (12 pcs)": 130,
          "Chicken Nuggets (6pcs)": 140,
          "Chicken Keema Garlic Bread (4 Pcs)": 199
        }
      },
      costForTwo: 45000,
      deliveryTime: "30 mins",
      image_src: "https://th.bing.com/th/id/OIP.h-ndJRYl8n3HGcgaud9OwAHaE8?rs=1&pid=ImgDetMain"
    },
    {
      id: 111,
      resName: "Fire House",
      cuisine: ["Snacks", "Burgers", "Fried Food"],
      stars: 4.7,
      categories: {
        veg: {
          "Veg Burger": 95,
          "French Fries": 90,
          "Crispy Fried Potato": 60,
          "Veg Cheesy Burger": 110,
          "Veg Momos": 50,
          "Crispy Fried Potato": 60,
          "Veg Sandwich": 70,
          "Cheese Vada Paw": 40
        },

        non_veg: {
          "Chicken Chest": 75,
          "Chicken Nuggets": 110,
          "Chicken Wings": 70,
          "Chicken Leg Piece": 80,
          "Chicken Popcorn Regular": 75,
          "Chicken Popcorn Large": 120,
          "Chicken Cheese Burger": 100,
          "Chicken Strips": 135
        }
      },
      costForTwo: 25000,
      deliveryTime: "25 mins",
      image_src: "https://i0.wp.com/www.atbp.ph/wp-content/uploads/2016/06/img_576759c5abb69.jpg?fit=1920%2C1080&ssl=1"
    },
    {
      id: 112,
      resName: "The Wall",
      cuisine: ["Continental"],
      stars: 3.7,

      categories: {
        veg: {
          "Jasmine Rice": 300,
          "Chilli Garlic Mushroom": 400,
          "Darshan": 250,
          "Wall Tom Yum Soup": 225,
          "Veg Lemon Coriander Soup": 215,
          "Wall Stir Fried Veg": 450,
          "Wall Dan Dan Noodles": 330,
          "Water Chestnut Celery": 210
        },

        non_veg: {
          "Nasi Goreng": 390,
          "Mixed Fried Rice": 350,
          "Crispy Fish in Chinese Sauce": 470,
          "Golden Fried Prawn": 510,
          "Chicken And Egg Drop Soup": 240,
          "Fish In Black Bean Sause": 480,
          "Chicken Red Curry": 530,
          "Wall Prawn Green Curry": 590
        }
      },
      costForTwo: 100000,
      deliveryTime: "1 hour",
      image_src: "https://th.bing.com/th/id/OIP.cOiUqe84m90EJQ1-VSy9swHaE8?rs=1&pid=ImgDetMain"
    }]

export default resList;
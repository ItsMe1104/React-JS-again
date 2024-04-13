import { LOGO_URL } from "../utils/constants";

import React from "react";

const Header = () => {
  return (
    <div>
      <div className="header">
        {/* LOGO */}
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="" />
        </div>

        {/* Navbar-items */}
        <div className="nav-items">
          <ul>
            <li className="item">Home</li>
            <li className="item">About Us</li>
            <li className="item">Contact Us</li>
            <li className="item">Cart</li>
            <button className="login">Login</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

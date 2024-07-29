import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

const Header = () => {

  const [login, setLogin] = useState("Login");

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
            <li className="item">
              <Link to="/" >Home</Link>
            </li>
            <li className="item">
              <Link to="/about" >About</Link>
            </li>
            <li className="item">
              <Link to="/contact" >Contact Us</Link>
            </li>
            <li className="item">
              <Link to="/cart"></Link>
            </li>
            <button
              className="login"
              onClick={() => {
                login === "Login"
                  ? setLogin("Logout")
                  : setLogin("Login");

              }}>{login}</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {

  const [login, setLogin] = useState("Login");
  const onlineStat = useOnlineStatus();

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
              Online Status : {onlineStat === true ? '🟢' : '🔴'}
            </li>
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
              <Link to="/grocery" >Grocery</Link>
            </li>
            <li className="item">
              <Link to="/cart"> Cart </Link>
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

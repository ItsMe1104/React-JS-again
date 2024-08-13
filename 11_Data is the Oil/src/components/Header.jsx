import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {

  const [login, setLogin] = useState("Login");
  const onlineStat = useOnlineStatus();

  return (
    <>
      <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-50 lg:bg-green-50">
        {/* LOGO */}
        <div className="bg-white px-8 py-4">
          <img className="w-40" src={LOGO_URL} alt="" />
        </div>

        {/* Navbar-items */}
        <div className="nav-items flex items-center">
          <ul className="flex mx-24 my-auto p-4 text-xl font-bold">
            <li className="px-4">
              Online Status : {onlineStat === true ? '🟢' : '🔴'}
            </li>
            <li className="px-4">
              <Link to="/" >Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about" >About</Link>
            </li>
            <li className="px-4">
              <Link to="/contact" >Contact Us</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery" >Grocery</Link>
            </li>
            <li className="px-4">
              <Link to="/cart"> Cart </Link>
            </li>
            <button
              className="px-4"
              onClick={() => {
                login === "Login"
                  ? setLogin("Logout")
                  : setLogin("Login");

              }}>{login}</button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

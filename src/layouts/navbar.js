import React from "react";
import "../assets/app.css";

import { Link, NavLink } from "react-router-dom";

function Navbar() {
  let activeStyle = {
    color: "#db9f2b",
  };
  return (
    <div className="lg:px-16 w-full px-6 bg-secondry border-primary border-b-2 p-2 flex flex-wrap items-center lg:py-0 z-20">
      <div className="flex-1 flex justify-between items-center">
        <Link to="/" className="ml-3 text-4xl text-white font-bold">
          Shoe<span className="text-primary">Store</span>
        </Link>
      </div>
      <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
        <svg
          className="fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>

      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div
        className="hidden lg:flex lg:items-center lg:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="lg:flex items-center justify-between text-base text-white pt-4 lg:pt-0">
            <li>
              <NavLink
                to="/"
                end
                className="lg:p-4 py-3 px-0 hover:text-primary block border-b-2 border-transparent lg:hover:border-transparent hover:border-primary cursor-pointer"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle={activeStyle}
                to="/shop"
                className="lg:p-4 py-3 px-0 hover:text-primary block border-b-2 border-transparent lg:hover:border-transparent hover:border-primary cursor-pointer"
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle={activeStyle}
                to="/contact"
                className="lg:p-4 py-3 px-0 hover:text-primary block border-b-2 border-transparent lg:hover:border-transparent hover:border-primary cursor-pointer lg:mb-0 mb-2"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

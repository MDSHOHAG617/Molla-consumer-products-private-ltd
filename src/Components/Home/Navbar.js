import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
const Navbar = () => {
  return (
    <div>
      <div class="navbar bg-base-200 p-4">
        <div class="navbar-start lg:mx-8">
          <div class="dropdown">
            <label tabindex="0" class=" btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          {/* <a class="flex justify-center items-center  normal-case text-xl from-neutral-content">
            <img className="w-32 h-32" src={logo} alt="" />
            consumer private Ltd
          </a> */}

          <div className="logo flex items-center">
            <img className="w-20 lg:w-28" src={logo} alt="" />
            <p className=" ml-2 lg:ml-4  lg:font-semibold ">
              Molla Consumer Products(pvt).Ltd
            </p>
          </div>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div class="navbar-end lg:mx-8">
          <Link to="/login" className="flex items-center ">
            <span className="hidden md:block lg:block ">Login</span>
            <img
              className="w-14 ml-2 "
              src="https://img.icons8.com/color/344/in-app-messaging.png"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

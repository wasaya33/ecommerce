import React, { useState } from "react";
import "./../../../src/index.css";
import { FiHeart, FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Sale Banner */}
      <div className="bg-black flex justify-center items-center text-center">
        <p className="text-white py-2 font-poppins text-[14px] leading-[21px] font-normal tracking-[0%]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!  
          <a href="">  ShopNow</a>
        </p>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 pl-[6%] pr-[6%] flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-inter  text-[24px] leading-[24px] tracking-[0.03em] font-bold">Exclusive</h1>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex space-x-6 absolute lg:static bg-white w-full lg:w-auto left-0 top-24 lg:top-auto p-4 lg:p-0 shadow-md lg:shadow-none transition-transform ${
            menuOpen ? "block" : "hidden lg:flex"
          }`}
        >
          <li className="relative pb-2"><a href="#">Home</a></li>
          <li><a href="#" className="hover:text-gray-600">Contact</a></li>
          <li><a href="#" className="hover:text-gray-600">About</a></li>
          <li><a href="#sign-up" className="hover:text-gray-600">Sign Up</a></li>
        </ul>

        {/* Search and Icons */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="relative">
            <input type="text" placeholder="What are you looking for?" className="border px-6 py-1 rounded bg-gray-100 text-sm" />
            <FiSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <FiHeart className="text-xl cursor-pointer" />
          <FiShoppingCart className="text-xl cursor-pointer" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

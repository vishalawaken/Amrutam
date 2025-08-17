import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";

const Navbar = () => {
  const {cartItems} = useContext(ShopContext);
  return (
    <>
      <div className="grid grid-cols-3 items-center bg-[#fff7e5] text-[#3b6a46] px-4 py-2">
        {/* Left */}
        <p className="flex items-center gap-2 text-sm">
          <FontAwesomeIcon icon={faPhone} /> +91 9826352321
        </p>

        {/* Center */}
        <h1 className="text-lg font-bold tracking-[0.4em] text-center">
          AMRUTAM
        </h1>
      </div>

      {/* Bottom Navbar */}
      <div className="navbar_bottom flex bg-[#fff7e2] justify-center items-center relative px-6 py-4 shadow-sm">
        {/* Navigation Links */}
        <div className="navigation">
          <ul className="flex items-center space-x-8 text-[#3b6a46] font-medium">
            <Link to="/" className="hover:text-[#2d5235] transition-colors">
              <li className="cursor-pointer">Home</li>
            </Link>
            <Link
              to="/find-doctors"
              className="hover:text-[#2d5235] transition-colors"
            >
              <li className="cursor-pointer">Find Doctors</li>
            </Link>
            <Link
              to="/lab-test"
              className="hover:text-[#2d5235] transition-colors"
            >
              <li className="cursor-pointer">Lab Tests</li>
            </Link>
            <Link to="/shop" className="hover:text-[#2d5235] transition-colors">
              <li className="cursor-pointer">Shop</li>
            </Link>
            <Link
              to="/forum"
              className="hover:text-[#2d5235] transition-colors"
            >
              <li className="cursor-pointer">Forum</li>
            </Link>
            <Link
              to="/about"
              className="hover:text-[#2d5235] transition-colors"
            >
              <li className="cursor-pointer">About Us</li>
            </Link>
          </ul>
        </div>

        {/* Icons */}
        <div className="icons flex items-center space-x-4 absolute right-6">
          <div className="wallet relative p-2 hover:bg-gray-100 bg-[#d2d9d2] rounded-full transition-colors cursor-pointer">
            <img
              src="/Navbar_icons/Frame 1171275545.png"
              alt="wallet"
              className="w-6 h-6"
            />
            <span className="absolute px-3 -top-1 -right-1 bg-green-600 bg-[#3a643c] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              $20
            </span>
          </div>
          <div className="cart relative p-2 hover:bg-gray-100 bg-[#d2d9d2] rounded-full transition-colors cursor-pointer">
            <img
              src="/Navbar_icons/cart_icon.png"
              alt="cart"
              className="w-6 h-6"
            />
            <span className="absolute -top-1 -right-1 bg-green-600 bg-[#3a643c] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </div>
          <div className="notification_bell p-2 hover:bg-gray-100 bg-[#d2d9d2] rounded-full transition-colors cursor-pointer">
            <img
              src="/Navbar_icons/notification_bell.png"
              alt="notifications"
              className="w-6 h-6"
            />
          </div>
          <div className="account_icon p-2 hover:bg-gray-100 bg-[#d2d9d2] rounded-full transition-colors cursor-pointer">
            <img
              src="/Navbar_icons/account_icon.png"
              alt="account"
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

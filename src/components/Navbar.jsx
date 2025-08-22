import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";

const Navbar = () => {
  const { getCartCount } = useContext(ShopContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      {/* Top bar - hidden on mobile */}
      <div className="hidden md:grid grid-cols-3 items-center bg-[#fff7e5] text-[#3b6a46] px-4 py-2">
        {/* Left */}
        <p className="flex items-center gap-2 text-sm">
          <FontAwesomeIcon icon={faPhone} /> +91 9826352321
        </p>

        {/* Center */}
        <h1 className="text-lg font-bold tracking-[0.4em] text-center">
          AMRUTAM
        </h1>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#fff7e2] shadow-sm">
        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between px-4 py-3">
          {/* Hamburger Menu */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-[#3b6a46] hover:bg-gray-100 rounded-lg"
          >
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>

          {/* Center Logo */}
          <h1 className="text-lg font-bold tracking-[0.4em] text-[#3b6a46]">
            AMRUTAM
          </h1>

          {/* Right Icons */}
          <div className="flex items-center space-x-2">
            <div className="wallet relative p-2 bg-[#d2d9d2] rounded-full cursor-pointer">
              <img
                src="/Navbar_icons/Frame 1171275545.png"
                alt="wallet"
                className="w-5 h-5"
              />
              <span className="absolute -top-1 -right-1 bg-[#3a643c] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                $20
              </span>
            </div>
            <Link
              to="/cart"
              className="cart relative p-2 bg-[#d2d9d2] rounded-full cursor-pointer"
            >
              <img
                src="/Navbar_icons/cart_icon.png"
                alt="cart"
                className="w-5 h-5"
              />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#3a643c] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                  {getCartCount()}
                </span>
              )}
            </Link>
            <button className="bg-[#3a643c] text-white px-3 py-1 rounded-full text-sm font-medium">
              Login
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex justify-center items-center relative px-6 py-4">
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
              <Link
                to="/shop"
                className="hover:text-[#2d5235] transition-colors"
              >
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

          {/* Desktop Icons */}
          <div className="icons flex items-center space-x-4 absolute right-6">
            <div className="wallet relative p-2 hover:bg-gray-100 bg-[#d2d9d2] rounded-full transition-colors cursor-pointer">
              <img
                src="/Navbar_icons/Frame 1171275545.png"
                alt="wallet"
                className="w-6 h-6"
              />
              <span className="absolute px-3 -top-1 -right-1 bg-[#3a643c] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                $20
              </span>
            </div>
            <Link
              to="/cart"
              className="cart relative p-2 hover:bg-gray-100 bg-[#d2d9d2] rounded-full transition-colors cursor-pointer"
            >
              <img
                src="/Navbar_icons/cart_icon.png"
                alt="cart"
                className="w-6 h-6"
              />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#3a643c] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
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

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#fff7e2] border-t border-gray-200">
            <div className="px-4 py-3 space-y-3">
              <Link
                to="/"
                className="block text-[#3b6a46] font-medium py-2 hover:text-[#2d5235] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/find-doctors"
                className="block text-[#3b6a46] font-medium py-2 hover:text-[#2d5235] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Find Doctors
              </Link>
              <Link
                to="/lab-test"
                className="block text-[#3b6a46] font-medium py-2 hover:text-[#2d5235] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Lab Tests
              </Link>
              <Link
                to="/shop"
                className="block text-[#3b6a46] font-medium py-2 hover:text-[#2d5235] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/forum"
                className="block text-[#3b6a46] font-medium py-2 hover:text-[#2d5235] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Forum
              </Link>
              <Link
                to="/about"
                className="block text-[#3b6a46] font-medium py-2 hover:text-[#2d5235] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-[#dbe3dc] py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
        {/* First Column - Contact Info */}
        <div className="space-y-4">
          <h2 className="text-[#5a7a5c] text-lg font-semibold mb-6">
            Get in touch
          </h2>
          <p className="text-[#4a5c4c] text-sm">support@amrutam.global</p>
          <div className="text-[#4a5c4c] text-sm space-y-1">
            <p>Amrutam Pharmaceuticals Pvt Ltd.,</p>
            <p>chitragupt ganj, Nai Sadak, Lashkar,</p>
            <p>Gwalior - 474001</p>
          </div>
          <p className="text-[#4a5c4c] text-sm">+91 9713171999</p>

          {/* Social Media Icons */}
          <div className="flex gap-3 mt-6">
            <a
              href="https://www.facebook.com/AmrutamOfficial/"
              className="w-10 h-10  rounded-full flex items-center justify-center hover:bg-[#4a6a4c] transition-colors p-2"
            >
              <img
                src="/Footer/facebook 1.png"
                alt="Facebook"
                className="w-full h-full object-contain"
              />
            </a>
            <a
              href="https://www.instagram.com/amrutamofficial/?hl=en"
              className="w-10 h-10  rounded-full flex items-center justify-center hover:bg-[#4a6a4c] transition-colors p-2"
            >
              <img
                src="/Footer/instagram 1.png"
                alt="Instagram"
                className="w-full h-full object-contain"
              />
            </a>
            <a
              href="https://www.youtube.com/c/AmrutamOfficial"
              className="w-10 h-10  rounded-full flex items-center justify-center hover:bg-[#4a6a4c] transition-colors p-2"
            >
              <img
                src="/Footer/youtube 1.png"
                alt="YouTube"
                className="w-full h-full object-contain"
              />
            </a>
            <a
              href="https://x.com/amrutamofficial"
              className="w-10 h-10  rounded-full flex items-center justify-center hover:bg-[#4a6a4c] transition-colors p-2"
            >
              <img
                src="/Footer/twitter (1) 1.png"
                alt="Twitter/X"
                className="w-full h-full object-contain"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/amrutamofficial/?originalSubdomain=in"
              className="w-10 h-10  rounded-full flex items-center justify-center hover:bg-[#4a6a4c] transition-colors p-2"
            >
              <img
                src="/Footer/linkedin 1.png"
                alt="LinkedIn"
                className="w-full h-full object-contain"
              />
            </a>
            <a
              href="https://in.pinterest.com/amrutamofficial/"
              className="w-10 h-10  rounded-full flex items-center justify-center hover:bg-[#4a6a4c] transition-colors p-2"
            >
              <img
                src="/Footer/pinterest 1.png"
                alt="Pinterest"
                className="w-full h-full object-contain"
              />
            </a>
          </div>
        </div>

        {/* Second Column - Information Links */}
        <div className="space-y-4">
          <h2 className="text-[#5a7a5c] text-lg font-semibold mb-6">
            Information
          </h2>
          <div className="flex flex-col space-y-3">
            <Link
              to="/about-us"
              className="text-[#4a5c4c] text-sm hover:text-[#5a7a5c] transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-[#4a5c4c] text-sm hover:text-[#5a7a5c] transition-colors"
            >
              Terms and Conditions
            </Link>
            <Link
              to="/privacy-policy"
              className="text-[#4a5c4c] text-sm hover:text-[#5a7a5c] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/privacy-policy-mobile"
              className="text-[#4a5c4c] text-sm hover:text-[#5a7a5c] transition-colors"
            >
              Privacy Policy for Mobile Apps
            </Link>
            <Link
              to="/shipping-return-cancellation"
              className="text-[#4a5c4c] text-sm hover:text-[#5a7a5c] transition-colors"
            >
              Shipping, return and cancellation Policy
            </Link>
            <Link
              to="/international-delivery"
              className="text-[#4a5c4c] text-sm hover:text-[#5a7a5c] transition-colors"
            >
              International Delivery
            </Link>
            <Link
              to="/business-hotels-resorts"
              className="text-[#4a5c4c] text-sm hover:text-[#5a7a5c] transition-colors"
            >
              For Businesses, Hotels, and Resorts
            </Link>
          </div>
        </div>

        {/* Third Column - Newsletter */}
        <div className="space-y-4">
          <h2 className="text-[#5a7a5c] text-lg font-semibold mb-2">
            Subscribe to our Newsletter and join
          </h2>
          <h2 className="text-[#5a7a5c] text-lg font-semibold mb-6">
            Amrutam Family today!
          </h2>

          <div className="flex flex-col sm:flex-row gap-2 max-w-md">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5a7a5c] focus:border-transparent text-sm"
            />
            <button className="bg-black text-white px-6 py-3 rounded-r-md hover:bg-gray-800 transition-colors text-sm font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

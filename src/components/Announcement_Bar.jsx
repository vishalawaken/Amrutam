import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Announcement_Bar = () => {
  return (
    <div className="w-full bg-[#373636] text-white py-2 px-4">
      {/* Mobile Layout - Stacked */}
      <div className="flex flex-col gap-3 items-center text-center sm:hidden">
        <p className="text-sm">Your first 5 minutes instant call is free</p>
        <div className="bg-[#3a643b] rounded-md py-2 px-4">
          <a href="" className="text-white text-sm">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            Try Instant Free Call Now
          </a>
        </div>
      </div>

      {/* Desktop/Tablet Layout - Horizontal */}
      <div className="hidden sm:flex justify-center items-center gap-6">
        <p className="text-sm">Your first 5 minutes instant call is free</p>
        <div className="bg-[#3a643b] rounded-md py-2 px-6">
          <a href="" className="text-white text-sm">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            Try Instant Free Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Announcement_Bar;

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Announcement_Bar = () => {
  return (
    <div
className=" w-full gap-7 bg-[#373636] text-white
  grid sm:flex sm:justify-center
  sm:grid-rows-1 grid-rows-2 py-2 text-sm items-center">
      <div className="">
        <p>Your first 5 minutes instant call is free</p>
      </div>
      <div className="bg-[#3a643b] rounded-md py-2 px-7">
        <a href="" className="text-white">
          <FontAwesomeIcon icon={faPhone} /> Try Instant Free Call Now
        </a>
      </div>
    </div>
  );
};

export default Announcement_Bar;

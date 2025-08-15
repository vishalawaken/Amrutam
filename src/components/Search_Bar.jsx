import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const Search_Bar = () => {
  return (
    <div className='w-full bg-[url("../public/Search_Bar/search_bar_bg.png")]  flex flex-col justify-center items-center border-box'>
      <h1 className="text-black font-bold mb-8 mt-3 text-2xl">Store</h1>
      <div className="flex gap-3 mb-5">
      <div className="flex gap-2 bg-white rounded-lg items-center">
        <span className="pl-3">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      <input
        type="text"
        placeholder="Search for medicines..."
        className="px-4 py-2 rounded-lg  bg-white focus:outline-none focus:ring-2 focus:ring-green-500 w-120"
      />
      
      </div>
      <span className="" ><img src="../public/Search_Bar/search_icon.png" alt="" />
      </span>
      </div>
     
    </div>
  );
};

export default Search_Bar;

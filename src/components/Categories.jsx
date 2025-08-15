import React from "react";
import { Link } from "react-router-dom";

const categories = () => {
  return (
    <div>
      <div className="flex justify-center bg-[#FFF7E2] py-4">
        <ul className="flex gap-20 items-end">
          <li className="flex flex-col items-center">
            <Link
              to="/"
              className="flex flex-col items-center text-center group transition-opacity"
            >
              <div className="bg-[#e0e8e2] p-4 rounded-full mb-2 flex items-center justify-center w-16 h-16 group-hover:border-4 group-hover:border-white transition-all duration-300">
                <span>
                  <img
                    src="../public/categories_icons/All_.png"
                    alt=""
                    className="w-8 h-8 object-contain"
                  />
                </span>
              </div>
              <span className="text-sm">All</span>
            </Link>
          </li>
          <li className="flex flex-col items-center">
            <Link
              to="/"
              className="flex flex-col items-center text-center group transition-opacity"
            >
              <div className="bg-[#e0e8e2] p-4 rounded-full mb-2 flex items-center justify-center w-16 h-16 group-hover:border-4 group-hover:border-white transition-all duration-300">
                <span>
                  <img
                    src="../public/categories_icons/Hair.svg"
                    alt=""
                    className="w-8 h-8 object-contain"
                  />
                </span>
              </div>
              <span className="text-sm">Hair</span>
            </Link>
          </li>
          <li className="flex flex-col items-center">
            <Link
              to="/"
              className="flex flex-col items-center text-center group transition-opacity"
            >
              <div className="bg-[#e0e8e2] p-4 rounded-full mb-2 flex items-center justify-center w-16 h-16 group-hover:border-4 group-hover:border-white transition-all duration-300">
                <span>
                  <img
                    src="../public/categories_icons/skin.png"
                    alt=""
                    className="w-8 h-8 object-contain"
                  />
                </span>
              </div>
              <span className="text-sm">Skin</span>
            </Link>
          </li>
          <li className="flex flex-col items-center">
            <Link
              to="/"
              className="flex flex-col items-center text-center group transition-opacity"
            >
              <div className="bg-[#e0e8e2] p-4 rounded-full mb-2 flex items-center justify-center w-16 h-16 group-hover:border-4 group-hover:border-white transition-all duration-300">
                <span>
                  <img
                    src="../public/categories_icons/digestion.png"
                    alt=""
                    className="w-8 h-8 object-contain"
                  />
                </span>
              </div>
              <span className="text-sm">Digestion</span>
            </Link>
          </li>
          <li className="flex flex-col items-center">
            <Link
              to="/"
              className="flex flex-col items-center text-center group transition-opacity"
            >
              <div className="bg-[#e0e8e2] p-4 rounded-full mb-2 flex items-center justify-center w-16 h-16 group-hover:border-4 group-hover:border-white transition-all duration-300">
                <span>
                  <img
                    src="../public/categories_icons/joints.png"
                    alt=""
                    className="w-8 h-8 object-contain"
                  />
                </span>
              </div>
              <span className="text-sm">Bones</span>
            </Link>
          </li>
          <li className="flex flex-col items-center">
            <Link
              to="/"
              className="flex flex-col items-center text-center group transition-opacity"
            >
              <div className="bg-[#e0e8e2] p-4 rounded-full mb-2 flex items-center justify-center w-16 h-16 group-hover:border-4 group-hover:border-white transition-all duration-300">
                <span>
                  <img
                    src="../public/categories_icons/immunity.png"
                    alt=""
                    className="w-8 h-8 object-contain"
                  />
                </span>
              </div>
              <span className="text-sm">Immunity</span>
            </Link>
          </li>
          <li className="flex flex-col items-center">
            <Link
              to="/"
              className="flex flex-col items-center text-center group transition-opacity"
            >
              <div className="bg-[#e0e8e2] p-4 rounded-full mb-2 flex items-center justify-center w-16 h-16 group-hover:border-4 group-hover:border-white transition-all duration-300">
                <span>
                  <img
                    src="../public/categories_icons/arrow.png"
                    alt=""
                    className="w-5 h-5 object-contain"
                  />
                </span>
              </div>
              <span className="text-sm">More</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default categories;

import React from "react";

const Play_Store = () => {
  return (
    <div className="w-full flex bg-[#FFF7E2] px-15 pt-20 pb-20">
      <div className="left_section w-[50%]">
        <h1 className="text-[#3B6A46] text-3xl mb-6">
          Download Amrutam Ayurveda App Now
        </h1>
        <p className="mb-10 text-lg">
          The Amrutma Ayurveda App is your one stop for app for all things
          Ayurveda. Apart from mimicking the website this app has added benefits
        </p>
        <div className="blocks">
          <div className="row1 flex gap-6 mb-3">
            <img src="../public/Play_store_images/block1.png" alt="" />
            <img src="../public/Play_store_images/block2.png" alt="" />
          </div>

          <div className="row2 flex gap-6">
            <img src="../public/Play_store_images/block3.png" alt="" />
            <img src="../public/Play_store_images/block4.png" alt="" />
          </div>

          <div className="row-3 flex gap-3 mt-10">
            <a href=""><img src="../public/Play_store_images/playstore.png" alt="" /></a>
            <a href=""><img src="../public/Play_store_images/appstore.png" alt="" /></a>
            
          </div>
        </div>
      </div>

      <div className="right-section w-[50%]">
        <div className="first-row flex">
          <img
            className="w-50 h-35 mt-40"
            src="../public/Play_store_images/Frame 1000007067.png"
            alt=""
          />
          <img
            className="w-20 h-20 mt-20"
            src="../public/Play_store_images/left_Arrow.png"
            alt=""
          />
          <img
            className=""
            src="../public/Play_store_images/Frame 1000007060.png"
            alt=""
          />
        </div>
        <div className="flex">
          <img
            className="ml-30 w-50 h-37"
            src="../public/Play_store_images/Frame 1000007061.png"
            alt=""
          />
          <img
            className="w-15 h-15 ml-5 mt-5"
            src="../public/Play_store_images/left_Arrow_2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Play_Store;

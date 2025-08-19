import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../../Product_info.json";
import Related_Products from "../components/Related_Products";

const Product = () => {
  const { productId } = useParams();
  const product = productsData.products.find(
    (item) => item.id === parseInt(productId)
  );
  console.log("Found product:", product);
  console.log("URL ID:", productId);
  const [quantity, setQuantity] = useState(0);
  const [selectedImage, setSelectedImage] = useState(product.image);
  return (
    <div classname="w-full">
      <div className="1st-block flex w-full px-20 py-8 gap-12 max-w-7xl mx-auto bg-[#FFF7E2]">
        {/* Product Image */}
        <div className="Product_Image w-[50%]">
          <div className="Main_Image mb-4">
            <img
              src={selectedImage}
              alt={product.productName}
              className="w-full h-[500px] object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="sub_images flex gap-3 justify-between">
            <div
              onClick={(event) => setSelectedImage(event.target.src)}
              className="sub_image cursor-pointer border-2 border-gray-200 rounded-lg overflow-hidden hover:border-green-500 transition-colors"
            >
              <img
                className="h-40 w-40 object-cover"
                src={product.image}
                alt=""
              />
            </div>
            <div
              onClick={(event) => setSelectedImage(event.target.src)}
              className="sub_image cursor-pointer border-2 border-gray-200 rounded-lg overflow-hidden hover:border-green-500 transition-colors"
            >
              <img
                className="h-40 w-40 object-cover"
                src={product.image}
                alt=""
              />
            </div>
            <div
              onClick={(event) => setSelectedImage(event.target.src)}
              className="sub_image cursor-pointer border-2 border-gray-200 rounded-lg overflow-hidden hover:border-green-500 transition-colors"
            >
              <img
                className="h-40 w-40 object-cover"
                src={product.image}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="Product_Info w-[50%] pl-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
            {product.productName}
          </h1>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={
                    i < product.ratings ? "text-yellow-400" : "text-gray-300"
                  }
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-gray-600 text-sm">(204 reviews)</span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <span className="text-3xl font-bold text-gray-800">
              ₹ {product.price}
            </span>
          </div>

          {/* Quantity Options */}
          <div className="mb-6">
            <div className="flex gap-3">
              <button className="px-4 py-2 border-2 border-gray-300 text-gray-600 rounded-md font-medium hover:bg-gray-50 transition-colors">
                {product.quantity}
              </button>
            </div>
          </div>

          {/* Quantity Selector and Add to Cart */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center border-2 border-gray-300 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(0, quantity - 1))}
                className="px-4 py-3 text-xl font-bold text-gray-600 hover:bg-gray-100 transition-colors"
              >
                −
              </button>
              <span className="px-6 py-3 text-lg font-medium border-x border-gray-300">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-3 text-xl font-bold text-gray-600 hover:bg-gray-100 transition-colors"
              >
                +
              </button>
            </div>
            <button className="flex-1 bg-green-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Add to cart
            </button>
          </div>

          {/* Description */}
          <div className="text-gray-700 leading-relaxed mb-5">
            <p>{product.description}</p>
          </div>

          {/* Product Highlights */}
          <div>
            <div className="flex  gap-2 items-center mb-3 ">
              <img src="../public/Product/jzoZqS0I 1.png" alt="" />
              <h1 className="text-xl font-bold text-gray-800 ">
                Product Highlights
              </h1>
            </div>
            <div className="flex gap-3">
              {product.highlights.map((item, index) => {
                return (
                  <div
                    className="bg-[#fdead2] rounded-lg text-[12px] px-2 pt-[120px] pb-3 w-[120px]"
                    key={index}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Key Ingredients */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-3 items-center">
                <div className="w-12 h-12 bg-gradient-to-br  rounded-full flex items-center justify-center ">
                  <img src="/Product/jzoZqS0I 1.png" alt="Ingredients Icon" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  Key Ingredients
                </h2>
              </div>
              <button className="text-green-600 font-medium hover:text-green-700 transition-colors">
                View All Ingredients
              </button>
            </div>

            {/* 2x2 Grid of ingredients */}
            <div className="grid grid-cols-2 gap-4">
              {product.ingredients.map((ingredient, index) => (
                <div
                  key={index}
                  className="bg-[#FDEAD2] rounded-lg px-2 py-4 flex items-center gap-5 hover:shadow-md transition-shadow cursor-pointer group border border-orange-100"
                >
                  {/* Ingredient Image */}
                  <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-white shadow-sm">
                    <img
                      src={ingredient.image}
                      alt={ingredient.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Ingredient Info */}
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-800">
                      {ingredient.name}
                    </h3>
                    <p className="text-gray-600 text-[10px] leading-snug">
                      {ingredient.description}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How To Use */}
          <div className="mt-8">
            <h1 className="text-lg font-bold mb-4">How To Use</h1>
            <p className="bg-[#FDEAD2] px-2 py-3 rounded-lg text-[15px]">
              {product.how_to_use}
            </p>
          </div>

          {/* General Instructions */}
          <div className="mt-8">
            <h1 className="text-lg font-bold mb-4">General Instructions</h1>
            <p className="bg-[#FDEAD2] px-2 py-3 rounded-lg text-[15px]">
              {product.instructions}
            </p>
          </div>

          {/* FAQ Section */}
          <div className="mt-8">
            <h1 className="text-lg font-bold mb-4">Commonly asked Questions</h1>
            <div className="space-y-3">
              {product.questions?.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#FDEAD2] rounded-lg overflow-hidden"
                >
                  <div className="px-4 py-3 border-b border-orange-200">
                    <h3 className="text-[15px] font-semibold text-gray-800">
                      Q{index + 1}: {faq.question}
                    </h3>
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-[14px] text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div className="mt-4">
            <h1 className="my-3">Trust The Voice</h1>
            <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/88684rNzsdg"
                title="I tried this product 5 days and this happened | AMRUTAM FACE CLEANUP | ShivShakti Sachdev"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* 2ND BLOCK */}
      <div className="w-full 2nd_block bg-[#FFF7E2] py-16 px-20">
        {/* Reviews and Ratings Section */}
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Reviews and Ratings
          </h1>

          {/* Rating Summary and Buttons */}
          <div className="flex justify-between items-center mb-8">
            {/* Rating Box */}
            <div className="bg-[#FDEAD2] rounded-lg p-6 flex-shrink-0">
              <div className="flex items-end gap-2 mb-2">
                <h2 className="text-4xl font-bold text-gray-800">
                  {product.ratings}.0
                </h2>
                <div className="flex mb-1">
                  {Array.from({ length: product.ratings }).map((_, index) => (
                    <span key={index} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Based on {product.reviews.length} reviews
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="px-6 py-3 border-2 text-green-700 border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                See More Reviews
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 text-green-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Write a review
              </button>
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-6">
            {product.reviews.map((review, index) => (
              <div key={index} className="bg-[#FDEAD2] rounded-lg p-6">
                <div className="flex items-start gap-4">
                  {/* User Avatar */}
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-600 font-semibold text-lg">
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </span>
                  </div>

                  {/* Review Content */}
                  <div className="flex-1">
                    <p className="text-gray-800 text-base leading-relaxed mb-3">
                      {review.comment}
                    </p>

                    {/* Review Details */}
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="font-medium">{review.name}</span>
                      <span>•</span>
                      <span>20 January 2023</span>
                      <span>•</span>
                      <div className="flex">
                        {Array.from({ length: review.rating }).map(
                          (_, starIndex) => (
                            <span key={starIndex} className="text-yellow-400">
                              ★
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <Related_Products></Related_Products>
      </div>
    </div>
  );
};

export default Product;

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import productsData from "../../Product_info.json";
import Related_Products from "../components/Related_Products";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { experts, cartItems, addToCart, removeFromCart, updateCartQuantity } =
    useContext(ShopContext);

  const [currentSlide, setCurrentSlide] = useState(0);

  // Responsive experts per slide
  const getExpertsPerSlide = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1; // Mobile: 1 expert
      if (window.innerWidth < 1024) return 2; // Tablet: 2 experts
      return 3; // Desktop: 3 experts
    }
    return 3; // Default fallback
  };

  const [expertsPerSlide, setExpertsPerSlide] = useState(getExpertsPerSlide());
  const totalSlides = Math.ceil(experts.length / expertsPerSlide);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newExpertsPerSlide = getExpertsPerSlide();
      setExpertsPerSlide(newExpertsPerSlide);
      // Reset to first slide when screen size changes
      setCurrentSlide(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { productId } = useParams();
  const product = productsData.products.find(
    (item) => item.id === parseInt(productId)
  );
  console.log("Found product:", product);
  console.log("URL ID:", productId);

  // Get cart quantity for this product, default to 1 if not in cart
  const cartItem = cartItems[productId];
  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 1);
  const [selectedImage, setSelectedImage] = useState(product.image);

  // Update selectedImage when product changes
  useEffect(() => {
    if (product?.image) {
      setSelectedImage(product.image);
    }
  }, [product]);

  // Sync quantity with cart when cart changes
  useEffect(() => {
    const cartItem = cartItems[productId];
    if (cartItem) {
      setQuantity(cartItem.quantity);
    } else {
      setQuantity(1);
    }
  }, [cartItems, productId]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Cart action handlers
  const handleQuantityDecrease = () => {
    const newQuantity = Math.max(1, quantity - 1);
    setQuantity(newQuantity);
    if (cartItems[productId]) {
      updateCartQuantity(productId, newQuantity);
    }
  };

  const handleQuantityIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    if (cartItems[productId]) {
      updateCartQuantity(productId, newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (cartItems[productId]) {
      // Update quantity if already in cart
      updateCartQuantity(productId, quantity);
    } else {
      // Add new item to cart
      addToCart(productId, product, quantity);
    }
  };

  const handleRemoveFromCart = () => {
    removeFromCart(productId);
    setQuantity(1); // Reset quantity to 1 when removed
  };
  return (
    <div className="w-full">
      <div className="1st-block flex flex-col md:flex-row w-full px-4 md:px-20 py-4 md:py-8 gap-6 md:gap-12 max-w-7xl mx-auto bg-[#FFF7E2]">
        {/* Product Image */}
        <div className="Product_Image w-full md:w-[50%]">
          <div className="Main_Image mb-4">
            <img
              src={selectedImage}
              alt={product.productName}
              className="w-full h-[300px] md:h-[500px] object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="sub_images flex gap-2 md:gap-3 justify-center md:justify-between">
            <div
              onClick={(event) => setSelectedImage(event.target.src)}
              className="sub_image cursor-pointer border-2 border-gray-200 rounded-lg overflow-hidden hover:border-green-500 transition-colors"
            >
              <img
                className="h-20 w-20 md:h-40 md:w-40 object-cover"
                src={product.image}
                alt=""
              />
            </div>
            <div
              onClick={(event) => setSelectedImage(event.target.src)}
              className="sub_image cursor-pointer border-2 border-gray-200 rounded-lg overflow-hidden hover:border-green-500 transition-colors"
            >
              <img
                className="h-20 w-20 md:h-40 md:w-40 object-cover"
                src={product.image}
                alt=""
              />
            </div>
            <div
              onClick={(event) => setSelectedImage(event.target.src)}
              className="sub_image cursor-pointer border-2 border-gray-200 rounded-lg overflow-hidden hover:border-green-500 transition-colors"
            >
              <img
                className="h-20 w-20 md:h-40 md:w-40 object-cover"
                src={product.image}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="Product_Info w-full md:w-[50%] md:pl-8">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 leading-tight">
            {product.productName}
          </h1>

          {/* Rating */}
          <div className="flex items-center mb-3 md:mb-4">
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
            <span className="text-gray-600 text-xs md:text-sm">
              (204 reviews)
            </span>
          </div>

          {/* Price */}
          <div className="mb-4 md:mb-6">
            <span className="text-2xl md:text-3xl font-bold text-gray-800">
              ₹ {product.price}
            </span>
            {/* Cart Status Indicator */}
            {cartItems[productId] && (
              <div className="mt-2 flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-600 font-medium text-xs md:text-sm">
                  In Cart ({cartItems[productId].quantity} items)
                </span>
              </div>
            )}
          </div>

          {/* Quantity Options */}
          <div className="mb-4 md:mb-6">
            <div className="flex gap-3">
              <button className="px-3 md:px-4 py-2 border-2 border-gray-300 text-gray-600 rounded-md font-medium hover:bg-gray-50 transition-colors text-sm md:text-base">
                {product.quantity}
              </button>
            </div>
          </div>

          {/* Quantity Selector and Add to Cart */}
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <div className="flex items-center border-2 border-gray-300 rounded-lg">
              <button
                onClick={handleQuantityDecrease}
                className="px-3 md:px-4 py-2 md:py-3 text-lg md:text-xl font-bold text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={quantity <= 1}
              >
                −
              </button>
              <span className="px-4 md:px-6 py-2 md:py-3 text-base md:text-lg font-medium border-x border-gray-300">
                {quantity}
              </span>
              <button
                onClick={handleQuantityIncrease}
                className="px-3 md:px-4 py-2 md:py-3 text-lg md:text-xl font-bold text-gray-600 hover:bg-gray-100 transition-colors"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="w-full sm:flex-1 bg-green-600 text-white py-2 md:py-3 px-6 md:px-8 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm md:text-base"
            >
              {cartItems[productId] ? "Update Cart" : "Add to Cart"}
            </button>

            {/* Remove from Cart button - only show if item is in cart */}
            {cartItems[productId] && (
              <button
                onClick={handleRemoveFromCart}
                className="w-full sm:w-auto bg-red-600 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm md:text-base"
              >
                Remove
              </button>
            )}
          </div>

          {/* Description */}
          <div className="text-gray-700 leading-relaxed mb-4 md:mb-5">
            <p className="text-sm md:text-base">{product.description}</p>
          </div>

          {/* Product Highlights */}
          <div className="mb-6 md:mb-8">
            <div className="flex gap-2 items-center mb-3">
              <img
                src="/Product/jzoZqS0I 1.png"
                alt=""
                className="w-5 h-5 md:w-6 md:h-6"
              />
              <h1 className="text-lg md:text-xl font-bold text-gray-800">
                Product Highlights
              </h1>
            </div>
            <div className="grid grid-cols-2 md:flex gap-2 md:gap-3">
              {product.highlights.map((item, index) => {
                return (
                  <div
                    className="bg-[#fdead2] rounded-lg text-[10px] md:text-[12px] px-2 pt-16 md:pt-[120px] pb-2 md:pb-3 w-full md:w-[120px] text-center"
                    key={index}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Key Ingredients */}
          <div className="mt-6 md:mt-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 md:mb-6 gap-3">
              <div className="flex gap-2 md:gap-3 items-center">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br rounded-full flex items-center justify-center">
                  <img
                    src="/Product/jzoZqS0I 1.png"
                    alt="Ingredients Icon"
                    className="w-4 h-4 md:w-6 md:h-6"
                  />
                </div>
                <h2 className="text-lg md:text-xl font-bold text-gray-800">
                  Key Ingredients
                </h2>
              </div>
              <button className="text-green-600 font-medium hover:text-green-700 transition-colors text-sm md:text-base self-start sm:self-auto">
                View All Ingredients
              </button>
            </div>

            {/* 2x2 Grid of ingredients */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {product.ingredients.map((ingredient, index) => (
                <Link to={`/ingredient/${ingredient.name}`} key={index}>
                  <div className="bg-[#FDEAD2] rounded-lg px-2 py-3 md:py-4 flex items-center gap-3 md:gap-5 hover:shadow-md transition-shadow cursor-pointer group border border-orange-100">
                    {/* Ingredient Image */}
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0 bg-white shadow-sm">
                      <img
                        src={ingredient.image}
                        alt={ingredient.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Ingredient Info */}
                    <div className="flex-1">
                      <h3 className="text-sm md:text-base font-semibold text-gray-800">
                        {ingredient.name}
                      </h3>
                      <p className="text-gray-600 text-[9px] md:text-[10px] leading-snug">
                        {ingredient.description}
                      </p>
                    </div>

                    {/* Arrow Icon */}
                    <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
                      <svg
                        width="14"
                        height="14"
                        className="md:w-[18px] md:h-[18px]"
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
                </Link>
              ))}
            </div>
          </div>

          {/* How To Use */}
          <div className="mt-6 md:mt-8">
            <h1 className="text-base md:text-lg font-bold mb-3 md:mb-4">
              How To Use
            </h1>
            <p className="bg-[#FDEAD2] px-3 md:px-2 py-3 rounded-lg text-sm md:text-[15px]">
              {product.how_to_use}
            </p>
          </div>

          {/* General Instructions */}
          <div className="mt-6 md:mt-8">
            <h1 className="text-base md:text-lg font-bold mb-3 md:mb-4">
              General Instructions
            </h1>
            <p className="bg-[#FDEAD2] px-3 md:px-2 py-3 rounded-lg text-sm md:text-[15px]">
              {product.instructions}
            </p>
          </div>

          {/* FAQ Section */}
          <div className="mt-6 md:mt-8">
            <h1 className="text-base md:text-lg font-bold mb-3 md:mb-4">
              Commonly asked Questions
            </h1>
            <div className="space-y-2 md:space-y-3">
              {product.questions?.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#FDEAD2] rounded-lg overflow-hidden"
                >
                  <div className="px-3 md:px-4 py-2 md:py-3 border-b border-orange-200">
                    <h3 className="text-sm md:text-[15px] font-semibold text-gray-800">
                      Q{index + 1}: {faq.question}
                    </h3>
                  </div>
                  <div className="px-3 md:px-4 py-2 md:py-3">
                    <p className="text-xs md:text-[14px] text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div className="mt-4 md:mt-6">
            <h1 className="my-2 md:my-3 text-base md:text-lg font-bold">
              Trust The Voice
            </h1>
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
      <div className="w-full 2nd_block bg-[#FFF7E2] py-8 md:py-16 px-4 md:px-20">
        {/* Reviews and Ratings Section */}
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">
            Reviews and Ratings
          </h1>

          {/* Rating Summary and Buttons */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 md:mb-8 gap-4">
            {/* Rating Box */}
            <div className="bg-[#FDEAD2] rounded-lg p-4 md:p-6 flex-shrink-0">
              <div className="flex items-end gap-2 mb-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {product.ratings}.0
                </h2>
                <div className="flex mb-1">
                  {Array.from({ length: product.ratings }).map((_, index) => (
                    <span
                      key={index}
                      className="text-yellow-400 text-lg md:text-xl"
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">
                Based on {product.reviews.length} reviews
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button className="px-4 md:px-6 py-2 md:py-3 border-2 text-green-700 border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm md:text-base">
                See More Reviews
              </button>
              <button className="px-4 md:px-6 py-2 md:py-3 border-2 border-gray-300 text-green-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm md:text-base">
                Write a review
              </button>
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-4 md:space-y-6">
            {product.reviews.map((review, index) => (
              <div key={index} className="bg-[#FDEAD2] rounded-lg p-4 md:p-6">
                <div className="flex items-start gap-3 md:gap-4">
                  {/* User Avatar */}
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-600 font-semibold text-sm md:text-lg">
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </span>
                  </div>

                  {/* Review Content */}
                  <div className="flex-1">
                    <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-2 md:mb-3">
                      {review.comment}
                    </p>

                    {/* Review Details */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs md:text-sm text-gray-600">
                      <span className="font-medium">{review.name}</span>
                      <div className="flex items-center gap-2 sm:gap-4">
                        <span className="hidden sm:inline">•</span>
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
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <Related_Products
          currentProduct={product}
          allProducts={productsData.products}
        />

        {/* Meet Our Experts Section */}
        <div className="w-full bg-white py-8 md:py-16 px-4 md:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Meet our Experts
            </h2>

            {/* Experts Carousel */}
            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="#666"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="#666"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Expert Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 md:px-8">
                {(() => {
                  const startIndex = currentSlide * expertsPerSlide;
                  const currentExperts = experts.slice(
                    startIndex,
                    startIndex + expertsPerSlide
                  );
                  return currentExperts.map((expert, index) => (
                    <div
                      key={index}
                      className="bg-[#FFF7E2] rounded-3xl p-4 md:p-8 text-center relative"
                    >
                      {/* Expert Image */}
                      <div className="relative mb-6">
                        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-200">
                          <img
                            src={expert.image}
                            alt={expert.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Rating Badge */}
                        <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-2 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                          <span>4.5</span>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                          </svg>
                        </div>
                      </div>

                      {/* Expert Info */}
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {expert.name}
                      </h3>

                      <p className="text-gray-600 mb-3">{expert.profile}</p>

                      {/* Experience */}
                      <div className="flex items-center justify-center gap-2 mb-3 text-gray-700">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 6L9 17L4 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-sm">{expert.experience}</span>
                      </div>

                      {/* Speciality */}
                      <div className="flex items-center justify-center gap-2 mb-6 text-gray-700">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-sm capitalize">
                          {expert.speciality.replace("-", " ")}
                        </span>
                      </div>

                      {/* Book Session Button */}
                      <button className="w-full bg-[#3A643B] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#2d4f2f] transition-colors">
                        Book a session
                      </button>
                    </div>
                  ));
                })()}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                    index === currentSlide ? "bg-[#3A643B]" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>

            {/* Find More Experts Button */}
            <div className="text-center mt-8">
              <button className="border-2 border-[#3A643B] text-[#3A643B] px-8 py-3 rounded-lg font-medium hover:bg-[#3A643B] hover:text-white transition-colors flex items-center gap-2 mx-auto">
                Find more experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

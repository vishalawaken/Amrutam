import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const Product_Card = ({ product }) => {
  const {addToCart} = useContext(ShopContext);
  const navigate = useNavigate();

  const handleProductClick=()=>{
    navigate(`/product/${product.id}`)
  }

  const handleAddToCart = (event) => {
    event.stopPropagation();
    addToCart(product.id);
    // Optional: Add some feedback like toast notification
    console.log(`Added ${product.productName} to cart!`);
  };

  return (
    <div onClick={handleProductClick} className="bg-[#FDF8E8] cursor-pointer rounded-lg p-4  transition-shadow duration-300 relative max-w-sm">
      {/* Product Image */}
      <div className="relative mb-4">
        <img
          src={product.image}
          alt={product.productName}
          className="w-full h-90 object-cover rounded-lg"
        />
      </div>

      {/* Product Details */}
      <div className="space-y-2 flex flex-col justify-center items-center text-center">
        {/* Product Title */}
        <h3 className="text-gray-800 font-medium text-sm leading-tight">
          {product.productName}
        </h3>

        {/* Price and Volume */}
        <p className="text-gray-700 font-semibold text-base">
          ₹ {product.price.toFixed(2)} • {product.quantity}
        </p>
      </div>

      {/* Add to Cart Button - Bottom Right Corner */}
      <button onClick={handleAddToCart} className="absolute cursor-pointer bottom-4 right-4 bg-[#3A5F3F] hover:bg-[#2d4a32] text-white rounded-medium w-7 h-7 flex items-center justify-center transition-colors duration-200 shadow-lg p-2">
        <FontAwesomeIcon icon={faPlus} className="text-sm" />
      </button>
    </div>
  );
};

export default Product_Card;

import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const {
    cartItems,
    updateCartQuantity,
    removeFromCart,
    getCartTotal,
    getCartCount,
    clearCart,
  } = useContext(ShopContext);

  // Convert cartItems object to array for easier rendering
  const cartItemsArray = Object.entries(cartItems || {})
    .map(([productId, item]) => ({
      productId,
      ...item,
    }))
    .filter((item) => item.product && item.quantity);

  // Debug logging
  console.log("Cart Items:", cartItems);
  console.log("Cart Items Array:", cartItemsArray);

  return (
    <div className="min-h-screen bg-[#fff7e2] py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Cart Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Shopping Cart
          </h1>
          <p className="text-gray-600">
            {getCartCount() > 0
              ? `${getCartCount()} item${
                  getCartCount() > 1 ? "s" : ""
                } in your cart`
              : "Your cart is empty"}
          </p>
        </div>

        {cartItemsArray.length === 0 ? (
          /* Empty Cart State */
          <div className="text-center py-16">
            <div className="mb-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.4-2.4M7 13l-2.4-2.4m15.6 2.4L17 13"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Your cart is empty
              </h2>
              <p className="text-gray-500 mb-6">
                Add some products to get started
              </p>
              <button className="bg-[#3A643B] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2d4f2f] transition-colors">
                Continue Shopping
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {cartItemsArray.map(({ productId, product, quantity }) => (
                  <div
                    key={productId}
                    className="p-4 md:p-6 border-b border-gray-200 last:border-b-0"
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Product Image */}
                      <div className="w-full sm:w-24 md:w-32 h-48 sm:h-24 md:h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.productName}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                          {product.productName}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {product.description}
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-gray-700">
                              Quantity:
                            </span>
                            <div className="flex items-center border border-gray-300 rounded-lg">
                              <button
                                onClick={() =>
                                  updateCartQuantity(productId, quantity - 1)
                                }
                                className="p-2 hover:bg-gray-100 transition-colors disabled:opacity-50"
                                disabled={quantity <= 1}
                              >
                                <FontAwesomeIcon
                                  icon={faMinus}
                                  className="w-3 h-3"
                                />
                              </button>
                              <span className="px-4 py-2 border-x border-gray-300 min-w-[3rem] text-center">
                                {quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateCartQuantity(productId, quantity + 1)
                                }
                                className="p-2 hover:bg-gray-100 transition-colors"
                              >
                                <FontAwesomeIcon
                                  icon={faPlus}
                                  className="w-3 h-3"
                                />
                              </button>
                            </div>
                          </div>

                          {/* Price and Remove */}
                          <div className="flex items-center justify-between sm:justify-end gap-4">
                            <div className="text-right">
                              <p className="text-sm text-gray-600">
                                ₹{product.price || 0} each
                              </p>
                              <p className="text-lg font-bold text-gray-800">
                                ₹
                                {(
                                  (product.price || 0) * (quantity || 0)
                                ).toFixed(2)}
                              </p>
                            </div>
                            <button
                              onClick={() => removeFromCart(productId)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Remove from cart"
                            >
                              <FontAwesomeIcon
                                icon={faTrash}
                                className="w-4 h-4"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Clear Cart Button */}
              {cartItemsArray.length > 0 && (
                <div className="mt-4 text-right">
                  <button
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
                  >
                    Clear entire cart
                  </button>
                </div>
              )}
            </div>

            {/* Cart Summary */}
            <div className="lg:w-80">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({getCartCount() || 0} items)</span>
                    <span>₹{(getCartTotal() || 0).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>₹{((getCartTotal() || 0) * 0.1).toFixed(2)}</span>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="flex justify-between text-lg font-semibold text-gray-800">
                    <span>Total</span>
                    <span>₹{((getCartTotal() || 0) * 1.1).toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full bg-[#3A643B] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#2d4f2f] transition-colors mb-4">
                  Proceed to Checkout
                </button>

                <button className="w-full border border-[#3A643B] text-[#3A643B] py-3 px-6 rounded-lg font-medium hover:bg-[#3A643B] hover:text-white transition-colors">
                  Continue Shopping
                </button>

                {/* Promo Code */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">
                    Have a promo code?
                  </h3>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A643B] focus:border-transparent text-sm"
                    />
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

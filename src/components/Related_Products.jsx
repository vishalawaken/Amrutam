import React from "react";
import { Link } from "react-router-dom";

const Related_Products = ({ currentProduct, allProducts }) => {
  // Create the filtering function
  const getRelatedProducts = (currentProduct, allProducts) => {
    // Get current product's tags
    const currentTags = currentProduct?.tags || [];
    const relatedProducts = [];

    // Loop through all products
    for (let i = 0; i < allProducts.length; i++) {
      const product = allProducts[i];

      // Skip the current product (don't show same product)
      if (product.id === currentProduct.id) {
        continue; // Skip this iteration
      }

      // Check if this product has any matching tags
      const productTags = product.tags || [];
      let hasMatchingTag = false;

      // Check each current product tag against this product's tags
      for (let j = 0; j < currentTags.length; j++) {
        const currentTag = currentTags[j];

        // Step 3F: If this product has the current tag, it's a match!
        if (productTags.includes(currentTag)) {
          hasMatchingTag = true;
          break; // Found a match, no need to check more tags for this product
        }
      }

      // If we found a matching tag, add this product to related products
      if (hasMatchingTag) {
        relatedProducts.push(product);
      }
    }

    // Limit to first 4 products (optional)
    return relatedProducts.slice(0, 4);
  };

  // Step 3: Get the related products
  const relatedProducts = getRelatedProducts(currentProduct, allProducts);

  return (
    <div className="w-full bg-[#FFF7E2] py-16 px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
          People has also bought
        </h1>

        {/* Step 4: Render Related Products */}
        {relatedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {relatedProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
              <div
                className="bg-white cursor-pointer rounded-xl"
              >
                {/* Product Image */}
                <div className="aspect-square overflow-hidden bg-gray-50 rounded-lg">
                  <img
                    src={product.image}
                    alt={product.productName}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 bg-[#FFF7E2]">
                  {/* Product Name */}
                  <h3 className="font-medium text-gray-800 mb-3 text-sm leading-tight line-clamp-2">
                    {product.productName}
                  </h3>

                  {/* Price and Quantity */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-gray-900">
                      ₹ {product.price}.00
                    </span>
                    <span className="text-sm text-gray-500">
                      • {product.quantity}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={
                            i < product.ratings
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({product.reviews?.length || "52"})
                    </span>
                    {/* Add to Cart Button */}
                    <button className="w-10 h-10 bg-[#3a643b] text-white rounded-md flex items-center justify-center hover:bg-green-700 transition-colors ml-auto">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5V19M5 12H19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  </div>

                
                </div>
              </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-600">
              No related products found with matching tags.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Related_Products;

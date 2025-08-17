import React from "react";
import Product_Card from "./Product_Card";
import productData from "../../Product_info.json";

const Product_Carousal = () => {
  return (
    <div className="px-4 py-8 bg-[#FDF8E8]">
      {/* Section Title */}
      <h1 className="text-2xl font-bold ml-13 mb-8 text-gray-800">
        Summer Collection
      </h1>

      {/* Responsive Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {productData.products.map((product) => (
          <Product_Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product_Carousal;

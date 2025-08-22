import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import ingredientsData from "../../Ingredients_info.json";
import productsData from "../../Product_info.json";

const Ingredients = () => {
  const { addToCart } = useContext(ShopContext);
  const { ingredientName } = useParams();

  // Find the specific ingredient from the JSON data
  const ingredient = ingredientsData.ingredients.find(
    (item) => item.name.toLowerCase() === ingredientName?.toLowerCase()
  );

  // Fallback to first ingredient if not found (for testing)
  const currentIngredient = ingredient || ingredientsData.ingredients[4]; // Using Citrak as default

  // Filter products that contain the current ingredient
  const getProductsWithIngredient = () => {
    return productsData.products.filter((product) =>
      product.ingredients.some(
        (ing) => ing.name.toLowerCase() === currentIngredient.name.toLowerCase()
      )
    );
  };

  const relatedProducts = getProductsWithIngredient();
  return (
    <div className="w-full min-h-screen bg-[#fff7e2] py-4 md:py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          {/* Left Column - Image */}
          <div className="w-full md:w-[45%] flex justify-center items-start pt-4 md:pt-8">
            <img
              src={currentIngredient.image}
              alt="Chitrak herb"
              className="w-full max-w-[280px] md:w-[400px] md:h-[400px] object-cover rounded-lg"
            />
          </div>

          {/* Right Column - Content */}
          <div className="w-full md:w-[55%] space-y-6 md:space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">
                {currentIngredient.name} - Plumbago zeylanica
              </h1>
              <h2 className="text-base md:text-xl text-gray-600 mb-3 md:mb-4">
                (Sanskrit - चित्रक)
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {currentIngredient.description}
              </p>
            </div>

            {/* Why This Ingredient */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                Why {currentIngredient.name} ?
              </h3>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-start gap-2 md:gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="bg-[#b0bca0] text-green-800 rounded-full p-1.5 md:p-2 w-3 h-3 md:w-4 md:h-4 mt-1 flex-shrink-0"
                  />
                  <p className="text-sm md:text-base text-gray-700">
                    {currentIngredient.why_to_use}
                  </p>
                </div>
                {currentIngredient.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2 md:gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="bg-[#b0bca0] text-green-800 rounded-full p-1.5 md:p-2 w-3 h-3 md:w-4 md:h-4 mt-1 flex-shrink-0"
                    />
                    <p className="text-sm md:text-base text-gray-700">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Prakriti Impact */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                Prakriti Impact
              </h3>
              <div className="flex flex-row gap-4 md:gap-6 justify-between items-center">
                <div className="text-center">
                  <img
                    src="../public/Ingredients/vata_balanced.png"
                    alt="Vata Balanced"
                    className="w-20 h-20 md:w-40 md:h-45 mx-auto mb-2"
                  />
                  <p className="text-xs md:text-sm text-gray-600">
                    Vata Balanced
                  </p>
                </div>
                <div className="text-center">
                  <img
                    src="../public/Ingredients/kapha_balanced.png"
                    alt="Kapha Balanced"
                    className="w-20 h-20 md:w-40 md:h-45 mx-auto mb-2"
                  />
                  <p className="text-xs md:text-sm text-gray-600">
                    Kapha Balanced
                  </p>
                </div>
                <div className="text-center">
                  <img
                    src="../public/Ingredients/pitta_unbalanced.png"
                    alt="Pitta Unbalanced"
                    className="w-20 h-20 md:w-40 md:h-45 mx-auto mb-2"
                  />
                  <p className="text-xs md:text-sm text-gray-600">
                    Pitta Unbalanced
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                Benefits
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="bg-[#f5e6d3] p-3 md:p-4 rounded-lg">
                  <img
                    src="../public/Benefits/relax.png"
                    alt="Nervous System"
                    className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-3"
                  />
                  <p className="text-xs md:text-sm text-gray-700 font-medium">
                    Calms The Nervous System And Reduces Anxiety.
                  </p>
                </div>
                <div className="bg-[#f5e6d3] p-3 md:p-4 rounded-lg">
                  <img
                    src="../public/Benefits/balance.png"
                    alt="Weight Loss"
                    className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-3"
                  />
                  <p className="text-xs md:text-sm text-gray-700 font-medium">
                    Reduces Cholesterol And Supports Weight Loss.
                  </p>
                </div>
                <div className="bg-[#f5e6d3] p-3 md:p-4 rounded-lg">
                  <img
                    src="../public/Benefits/blood.png"
                    alt="Blood Sugar"
                    className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-3"
                  />
                  <p className="text-xs md:text-sm text-gray-700 font-medium">
                    Manages Diabetes By Lowering Blood Sugar Levels.
                  </p>
                </div>
                <div className="bg-[#f5e6d3] p-3 md:p-4 rounded-lg">
                  <img
                    src="../public/Benefits/medicine.png"
                    alt="Hemorrhoids"
                    className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-3"
                  />
                  <p className="text-xs md:text-sm text-gray-700 font-medium">
                    Beneficial In Hemorrhoids Of Vata Origin.
                  </p>
                </div>
                <div className="bg-[#f5e6d3] p-3 md:p-4 rounded-lg">
                  <img
                    src="../public/Benefits/digestion_new.png"
                    alt="Digestion"
                    className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-3"
                  />
                  <p className="text-xs md:text-sm text-gray-700 font-medium">
                    Improves Digestion And Boosts Metabolism.
                  </p>
                </div>
                <div className="bg-[#f5e6d3] p-3 md:p-4 rounded-lg">
                  <img
                    src="../public/Benefits/Heart.png"
                    alt="Heart Health"
                    className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-3"
                  />
                  <p className="text-xs md:text-sm text-gray-700 font-medium">
                    Prevents Deposits In Arteries, Supporting Heart Health.
                  </p>
                </div>
                <div className="bg-[#f5e6d3] p-3 md:p-4 rounded-lg">
                  <img
                    src="../public/Benefits/plant.png"
                    alt="Skin Health"
                    className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-3"
                  />
                  <p className="text-xs md:text-sm text-gray-700 font-medium">
                    Treats Skin Conditions Like Acne And Dermatitis.
                  </p>
                </div>
                <div className="bg-[#f5e6d3] p-3 md:p-4 rounded-lg">
                  <img
                    src="../public/Benefits/digestion_new.png"
                    alt="Wound Healing"
                    className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-3"
                  />
                  <p className="text-xs md:text-sm text-gray-700 font-medium">
                    Speeds Up Wound Healing And Promotes New Skin Growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Ayurvedic Properties */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                Ayurvedic Properties
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                <div className="text-center">
                  <img
                    src="../public/Ayurvedic_Properties/rasa.png"
                    alt="Rasa"
                    className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2"
                  />
                  <p className="text-xs md:text-sm font-medium text-gray-700">
                    {
                      currentIngredient.ayurvedic_properties.rasa.split(
                        " - "
                      )[0]
                    }
                  </p>
                  <p className="text-xs text-gray-600">
                    {
                      currentIngredient.ayurvedic_properties.rasa.split(
                        " - "
                      )[1]
                    }
                  </p>
                </div>
                <div className="text-center">
                  <img
                    src="../public/Ayurvedic_Properties/Veerya.png"
                    alt="Virya"
                    className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2"
                  />
                  <p className="text-xs md:text-sm font-medium text-gray-700">
                    {
                      currentIngredient.ayurvedic_properties.virya.split(
                        " - "
                      )[0]
                    }
                  </p>
                  <p className="text-xs text-gray-600">
                    {
                      currentIngredient.ayurvedic_properties.virya.split(
                        " - "
                      )[1]
                    }
                  </p>
                </div>
                <div className="text-center">
                  <img
                    src="../public/Ayurvedic_Properties/Guna.png"
                    alt="Guna"
                    className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2"
                  />
                  <p className="text-xs md:text-sm font-medium text-gray-700">
                    {
                      currentIngredient.ayurvedic_properties.guna.split(
                        " - "
                      )[0]
                    }
                  </p>
                  <p className="text-xs text-gray-600">
                    {
                      currentIngredient.ayurvedic_properties.guna.split(
                        " - "
                      )[1]
                    }
                  </p>
                </div>
                <div className="text-center">
                  <img
                    src="../public/Ayurvedic_Properties/Vipaka.png"
                    alt="Vipaka"
                    className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2"
                  />
                  <p className="text-xs md:text-sm font-medium text-gray-700">
                    {
                      currentIngredient.ayurvedic_properties.vipaka.split(
                        " - "
                      )[0]
                    }
                  </p>
                  <p className="text-xs text-gray-600">
                    {
                      currentIngredient.ayurvedic_properties.vipaka.split(
                        " - "
                      )[1]
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Important Formulations */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                Important formulations
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {currentIngredient.important_formulations.map(
                  (formulation, index) => (
                    <div key={index} className="text-center">
                      <img
                        src={`../public/Important_formulations/${formulation
                          .toLowerCase()
                          .replace(/\s+/g, "_")}.png`}
                        alt={formulation}
                        className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2"
                        onError={(e) => {
                          e.target.src =
                            "../public/Important_formulations/chitrak_haritaki.png"; // Fallback image
                        }}
                      />
                      <p className="text-xs md:text-sm font-medium text-gray-700">
                        {formulation}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Therapeutic Uses */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                Therapeutic uses
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
                {currentIngredient.therapeutic_uses.map((use, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={`../public/Therapeutic_uses/${use
                        .toLowerCase()
                        .replace(/\s+/g, "_")}.png`}
                      alt={use}
                      className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2"
                      onError={(e) => {
                        e.target.src =
                          "../public/Therapeutic_uses/agnimandya.png"; // Fallback image
                      }}
                    />
                    <p className="text-xs md:text-sm font-medium text-gray-700">
                      {use}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Plant Parts and Purpose */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                Plant parts and its purpose
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                {Object.entries(currentIngredient.plant_parts).map(
                  ([part, purpose], index) => (
                    <div
                      key={index}
                      className="text-center bg-[#f5e6d3] p-3 md:p-4 rounded-lg"
                    >
                      <img
                        src={`../public/Plant_parts/${part
                          .toLowerCase()
                          .replace(/\s+/g, "_")}.png`}
                        alt={part}
                        className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2"
                        onError={(e) => {
                          e.target.src = "../public/Plant_parts/root.png"; // Fallback image
                        }}
                      />
                      <p className="text-xs md:text-sm font-bold text-gray-700 mb-1">
                        {part}
                      </p>
                      <p className="text-xs text-gray-600">{purpose}</p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Best Combined With */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                Best combined with
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                {currentIngredient.best_combined_with.join(", ")}.
              </p>
            </div>

            {/* Geographical Locations */}
            <div className="space-y-3 md:space-y-4 pb-6 md:pb-8">
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                Geographical locations
              </h3>
              <div className="flex items-start gap-2 md:gap-3">
                <img
                  src="../public/icons/location.png"
                  alt="Location"
                  className="w-3 h-4 mt-1 flex-shrink-0"
                />
                <p className="text-sm md:text-base text-gray-700">
                  {currentIngredient.geographical_locations.join(", ")}.
                </p>
              </div>
            </div>

            {/* Products With Ingredient as Primary Ingredient */}
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                Products with "{currentIngredient.name}" as primary ingredient
              </h3>

              {relatedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {relatedProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      {/* Product Image */}
                      <div className="aspect-square bg-gray-100">
                        <img
                          src={product.image}
                          alt={product.productName}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="p-4">
                        <h4 className="text-base font-semibold text-gray-800 mb-2 line-clamp-2 leading-tight">
                          {product.productName}
                        </h4>

                        {/* Price */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-lg font-bold text-gray-800">
                            ₹ {product.price}
                          </span>
                          {/* Add to Cart Button */}
                          <button
                            onClick={() => addToCart(product.id, product, 1)}
                            className=" bg-[#3A643B] text-white  px-2 rounded-md font-medium hover:bg-[#2d4f2f] transition-colors flex items-center justify-center gap-2"
                          >
                            <span className="text-xl">+</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600">
                    No products found with {currentIngredient.name} as an
                    ingredient.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;

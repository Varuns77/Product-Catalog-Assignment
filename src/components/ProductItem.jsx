import React, { useState } from "react";
// import { Link } from "react-router-dom";
import ProductDetailsModal from "./ProductDetailsModal";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product, addToCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const navigate = useNavigate();
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddToCart = () => {
    if (isAddedToCart) {
      navigate("/cart");
    } else {
      addToCart(product);
      setIsAddedToCart(true);
    }
};

  return (
    <>
      <div className="bg-white flex lg:flex-col items-center transition transform duration-700 hover:shadow-xl hover:border-slate-400 p-4 rounded-lg border max-w-2xl mx-auto">
        {/* Product Image */}
        <img
          className="w-32 h-32 lg:w-72 lg:h-56 mx-auto object-contain"
          src={product.image}
          alt={product.name}
        />

        {/* Product Details */}
        <div className="flex flex-col justify-between w-full ml-4">
          {/* Product Name */}
          <h1 className="text-lg font-bold text-gray-700 text-wrap">
            {product.name}
          </h1>

          {/* Product Price */}
          <h1 className="text-sm text-gray-500">₹ {product.price}</h1>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-3 gap-4">
            {/* View Details */}
            <button
              onClick={openModal}
              className="text-gray-500 underline text-nowrap hover:text-gray-700 text-xs"
            >
              View Details
            </button>

            {/* Add to Cart */}
            <button
              className = {`${
                isAddedToCart ? "bg-green-500" : "bg-blue-500"
              } text-white text-xs px-2 py-2 text-nowrap rounded-md transition hover:opacity-90`}
              onClick={handleAddToCart}
            >
              {isAddedToCart ? "Added to Cart" : "Add to Cart"} 
            </button>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <ProductDetailsModal product={product} onClose={closeModal} />
        )}
      </div>
    </>
  );
};

export default ProductItem;

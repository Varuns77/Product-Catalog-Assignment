import React, { useState } from "react";
// import { Link } from "react-router-dom";
import ProductDetailsModal from "./ProductDetailsModal";

const ProductItem = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
    <div className="bg-white transition transform duration-700 hover:shadow-xl hover:border-slate-400 hover:scale-105 p-3 rounded-lg relative border">
      <img
        className="w-72 h-56 object-contain mx-auto transform transition duration-300 hover:scale-105"
        src={product.image}
        alt={product.name}
      />
      <div className="flex flex-col items-center my-3 space-y-2">
        <h1 className="text-2xl font-bold text-gray-700">{product.name}</h1>
        <h1 className="text-xl text-gray-700">₹ {product.price}</h1>
        <button
          onClick={openModal}
          className="text-gray-500 underline"
        >
          View Details
        </button>

        </div>
    </div>
        {isModalOpen && (
          <ProductDetailsModal product={product} onClose={closeModal} />
        )}
    </>
  );
};

export default ProductItem;

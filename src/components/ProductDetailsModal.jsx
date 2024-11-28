import React from "react";

const ProductDetailsModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
      {/* Darkened background with blur effect */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div className="relative bg-white rounded-lg p-6 w-[90%] md:w-[60%] lg:w-[50%] max-h-[80%] overflow-y-auto shadow-lg">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
        >
          ✕
        </button>

        {/* Product Details */}
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          {product.name}
        </h2>
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-72 h-56 object-contain mx-auto mt-4"
          />
          <p className="text-gray-600 mt-6 text-center">
            {product.description}
          </p>
          <p className="text-lg font-semibold text-gray-800 mt-2 text-center">
            Price: ₹{product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;

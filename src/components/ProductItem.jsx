import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (  
    <div className="bg-white transition transform duration-700 hover:shadow-xl hover:border-slate-400 hover:scale-105 p-3 rounded-lg relative border">
      <img
        className="w-72 h-56 object-contain mx-auto transform transition duration-300 hover:scale-105"
        src={product.image}
        alt={product.name}
      />
      <div className="flex flex-col items-center my-3 space-y-2">
        <h1 className="text-2xl font-bold text-gray-700">
            {product.name}
        </h1>
        <h1 className="text-xl text-gray-700">
          ₹ {product.price}
        </h1>
        <Link
          to={`/products/${product.id}`}
          className="text-gray-500 underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;

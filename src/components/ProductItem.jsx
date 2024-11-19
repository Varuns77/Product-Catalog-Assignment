import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    // <div className="border p-4 rounded shadow">
    //     <img src={product.image} alt={product.name} className="h-40 w-full object-cover" />
    //     <h3 className="text-lg font-bold">{product.name}</h3>
    //     <p>₹ {product.price.toFixed(2)}</p>
    //     <Link to={`/products/${product.id}`} className="text-blue-500 underline">
    //         View Details
    //     </Link>
    // </div>

    <div className="bg-white transition transform duration-700 hover:shadow-xl hover:scale-105 p-2 rounded-lg relative">
      <img
        className="w-72 h-56 object-contain mx-auto transform transition duration-300 hover:scale-105"
        src={product.image}
        alt={product.name}
      />
      <div className="flex flex-col items-center my-3 space-y-2">
        <h1 className="text-gray-900 text-2xl font-bold">
            {product.name}
        </h1>
        <h1 className="text-gray-900 text-2xl font-bold">
          ₹ {product.price.toFixed(2)}
        </h1>
        <Link
          to={`/products/${product.id}`}
          className="text-blue-500 underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;

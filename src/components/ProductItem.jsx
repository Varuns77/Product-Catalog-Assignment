import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
    return (
        <div className="border p-4 rounded shadow">
            <img src={product.image} alt={product.name} className="h-40 w-full object-cover" />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p>₹ {product.price.toFixed(2)}</p>
            <Link to={`/products/${product.id}`} className="text-blue-500 underline">
                View Details
            </Link>
        </div>
    );
};

export default ProductItem;
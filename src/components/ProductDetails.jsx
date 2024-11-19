import React from 'react';

const ProductDetails = ({ product }) => {
    return (
        <div className="p-4">
            <img src={product.image} alt={product.name} className="h-60 w-full object-cover" />
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
        </div>
    );
};

export default ProductDetails;

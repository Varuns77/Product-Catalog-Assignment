import React, { useState } from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, addToCart }) => {

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="lg:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-6">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} addToCart={addToCart}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;

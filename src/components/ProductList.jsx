import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-6">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;

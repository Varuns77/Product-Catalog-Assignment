import React from "react";

const ProductDetails = ({ product }) => {
  return (
    // <div className="p-4">
    //     <img src={product.image} alt={product.name} className="h-60 w-full object-cover" />
    //     <h2 className="text-2xl font-bold">{product.name}</h2>
    //     <p className="text-gray-600">{product.description}</p>
    //     <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
    // </div>

    <main className="max-w-screen-xl mx-auto px-6 my-16">
      {/* <Back /> */}
      <div
        className="flex flex-col justify-center items-center h-screen"
        
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {/* Left side */}
          <div className="order-2 md:order-1 lg:order-1 flex flex-col justify-center">
            <h1 className="text-center md:text-left lg:text-left text-3xl lg:text-4xl font-semibold forum pb-4 text-gray-700 select-none">
              {product.name}
            </h1>
            <p className="text-center forum md:text-left lg:text-left text-md text-gray-500 leading-relaxed select-none">
              {product.description}
            </p>

            {/* Price and add button */}
            <div className="pt-8 mx-auto md:mx-0">
              <h1 className="text-3xl font-bold text-gray-700 select-none">
                ${product.price.toFixed(2)}
              </h1>
            </div>
          </div>
          {/* Right side */}
          <div className="order-1 md:order-2 lg:order-2">
            <img
              src={`../../${product.image}`}
              className="w-3/4 md:w-3/4 lg:w-full mx-auto"
              alt={product.name}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;

import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-4 border rounded-md"
            >
              <div>
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p className="text-gray-600">₹ {item.price}</p>
              </div>
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-contain"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

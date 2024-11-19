import React from "react";

const CategoryFilter = ({ products, setSelectedCategory }) => {
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="flex items-center justify-center gap-4 mt-3">
      <div>
        <label htmlFor="sortOrder" className="mr-2 block">
          Categories
        </label>
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded-md"
        >
          <option value="">Select</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="sortOrder" className="mr-2 block">
          Sort by:
        </label>
        <select
          id="sortOrder"
          //   value={sortOrder}
          //   onChange={(e) => setSortOrder(e.target.value)}
          className="border p-2 rounded-md"
        >
          <option value="default">Default</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default CategoryFilter;

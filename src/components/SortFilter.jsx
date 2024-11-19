import React from "react";

const SortFilter = ({sortOrder, setSortOrder}) => {
  return (
    <div className="mb-4">
      <label htmlFor="sortOrder" className="mr-2">
        Sort by:
      </label>
      <select
        id="sortOrder"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="border p-2"
      >
        <option value="default">Default</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortFilter;

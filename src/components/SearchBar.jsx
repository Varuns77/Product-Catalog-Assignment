import React from "react";

const SearchBar = ({ setSearchQuery }) => {
  return (
    <div className="w-100 bg-red-500 flex items-center justify-center">
      <div className="max-w-full w-[35%]">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 mb-4 mt-4 w-full h-full rounded-md"
        />
      </div>
    </div>
  );
};

export default SearchBar;

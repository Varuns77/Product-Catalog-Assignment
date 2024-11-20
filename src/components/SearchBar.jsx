import React from "react";

const SearchBar = ({ setSearchQuery }) => {
  return (
    <div className="w-100 flex flex-col items-center justify-center">
        <h1 className="text-4xl mt-4 font-bold text-gray-700">Products Catalog</h1>
      <div className="max-w-full w-[35%]">
        <div className="relative">
          <span className="absolute inset-y-0 left-2 flex items-center">
            <svg
              class="feather feather-search"
              fill="none"
              height="20"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" x2="16.65" y1="21" y2="16.65" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 pl-10 mb-4 mt-4 w-full h-full rounded-md border border-gray-300 focus:ring-1 focus:ring-slate-400"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

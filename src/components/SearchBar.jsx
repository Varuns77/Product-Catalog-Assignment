import React from 'react';

const SearchBar = ({ setSearchQuery }) => {
    return (
        <input
            type="text"
            placeholder="Search products..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border p-2 w-full mb-4"
        />
    );
};

export default SearchBar;

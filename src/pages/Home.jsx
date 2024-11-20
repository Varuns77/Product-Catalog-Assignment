import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/Category-SortFilter';
import SortFilter from '../components/SortFilter';

const Home = ({ products }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortOrder, setSortOrder] = useState('default');

    const filteredProducts = products
        .filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
            return matchesSearch && matchesCategory;
        })
        .sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.price - b.price; // Ascending price
            } else if (sortOrder === 'desc') {
                return b.price - a.price; // Descending price
            }
            return 0; // Default order
        });

    return (
        <div className='w-full bg-slate-100 h-full min-h-screen'>
            <SearchBar setSearchQuery={setSearchQuery} />
            <CategoryFilter products={products} setSelectedCategory={setSelectedCategory} sortOrder={sortOrder} setSortOrder={setSortOrder}/>
            {/* <SortFilter sortOrder={sortOrder} setSortOrder={setSortOrder} /> */}
            <ProductList products={filteredProducts} />
        </div>
    );
};

export default Home;

import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';

const Home = ({ products }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    return (
        <div>
            <SearchBar setSearchQuery={setSearchQuery} />
            <CategoryFilter products={products} setSelectedCategory={setSelectedCategory} />
            <ProductList products={filteredProducts} />
        </div>
    );
};

export default Home;

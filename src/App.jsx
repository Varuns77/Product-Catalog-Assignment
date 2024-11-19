import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetailsPage from './pages/ProductDetailsPage';
import productsData from './data/products.json';

const App = () => {
    const [products] = useState(productsData);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home products={products} />} />
                <Route path="/products/:id" element={<ProductDetailsPage products={products} />} />
            </Routes>
        </Router>
    );
};

export default App;

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';

const ProductDetailsPage = ({ products }) => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div>
            <Link to="/" className="text-blue-500 underline">Back to Products</Link>
            <ProductDetails product={product} />
        </div>
    );
};

export default ProductDetailsPage;

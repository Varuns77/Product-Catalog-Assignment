import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';

const ProductDetailsPage = ({ products }) => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div>
            <Link to="/" className="hover:underline forum font-bold text-gray-700 select-none flex items-center space-x-2 relative top-20 ml-6 md:ml-16 bg-white"> <MdOutlineKeyboardBackspace className='mr-1'/> Back to Products</Link>
            <ProductDetails product={product} />
        </div>
    );
};

export default ProductDetailsPage;

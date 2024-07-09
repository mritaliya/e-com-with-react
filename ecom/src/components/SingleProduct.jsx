import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const [product, setProduct] = useState(null); // Initialize with null or {}

    const params = useParams();

    useEffect(() => {
        fetch("product.json")
            .then(response => response.json())
            .then(data => {
                console.log(data); // Verify that data is fetched correctly
                // Assuming data is an array and you want to find the product by ID from params
                const foundProduct = data.find(item => item.id === params.id); // adjust this based on your JSON structure
                setProduct(foundProduct); // Set the product state
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [params.id]); // Add params.id to dependencies if you want to fetch data based on route param changes

    if (!product) {
        return <div>Loading...</div>; // Placeholder for when data is being fetched
    }

    return (
        <div className="container mx-28 mt-12">
            <button className='mb-12 font-bold'>Back</button>
            <div className='flex items-center w-3/4'>
                <img src={`/images/${product.image}`} className='h-44' alt={product.name} />
                <div className='ml-16'>
                    <h1 className='text-xl font-bold'>{product.name}</h1>
                    <div className='text-md'>{product.size}</div>
                    <div className='font-bold mt-2'>{product.price}</div>
                    <button className='bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;

import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';

const SingleProduct = () => {

    const [product,setproduct]=useState([]);
    const params=useParams();
    
    useEffect(()=>{
      fetch("product.json")
      .then(responce=>{
       let newres=responce.json();
       console.log(newres);
       
    })
     
        
      
      
    },[])

    
  return (
    <div className="container mx-28 mt-12">
    <button className='mb-12 font-bold'> Back</button>
    <div className='flex items-center w-3/4'>
      <img src="/images/CHEESE N CORN.png" className='h-44' alt="" srcset="" />
      <div className='ml-16'>
        <h1 className='text-xl font-bold'>productname</h1>
        <div className='text-md'>small</div>
        <div className='font-bold mt-2'>400</div>
        <button  className='bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4 '>Add to Cart</button>
      </div>
    </div>
    </div>
  )
}

export default SingleProduct;

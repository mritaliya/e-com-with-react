import React from 'react'
import { Link } from 'react-router-dom';

const Product = (props) => {
    
  return (
  <Link to={`/products/${props.product.id}`}>
  <div>
        <img src={props.product.image} alt="" srcset="" />
        <div className='text-center'>
        <h2 className='text-sm font-bold py-4 '>{props.product.name}</h2>
        <span className='bg-gray-200 py-2 rounded-full text-sm  font-bold px-4'>{props.product.size}</span>
        </div>
        <div className='flex justify-between items-end mt-4'>
          <span className='font-bold'>{props.product.price}</span>
          <button className='bg-yellow-500 py-1 px-4 rounded-full font-bold'>Add</button>
        </div>
      </div>
      
  </Link>
  )
}

export default Product

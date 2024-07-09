import React,{useState,useEffect} from 'react';
import Product from './Product';

const Products = () => {
  const [product,setproduct]=useState([]);
  useEffect(()=>{
fetch("product.json")
.then(responce=>responce.json())
.then(products=>{
  console.log(products);
 setproduct(products);
})

  },[])
  return (
   <div className="container mx-auto pb-24 ">
    <h1 className='text-lg font-bold my-8 mx-4'>Products</h1>
    <div className='grid grid-cols-4 my-8 gap-24 mx-4 '>
  {
    product.map(product=><Product key={product.id} product={product}/>)
  }
    </div>
   </div>
   
  )
}

export default Products;

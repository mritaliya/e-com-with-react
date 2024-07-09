import React from 'react'
import Products from './Products'

const Home = () => {
  
  return (
    <>
     <div className='hero py-16 mx-4'>
      <div className='container mx-auto items-center  justify-between flex '>
        <div className='w-1/2'>
        <h6 className='text-lg font-semibold '><em>Are U Hungry?</em></h6>
        <h1 className='text-3xl font-bold md:text-6xl'>don't wait!</h1>
        <button className='px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600'>Order Now</button>
        </div>
        <div className='w-1/2'>
        <img className='w-10/12' src="images/pizza.png" alt="" srcset="" />
        </div>
      </div>
     </div>
     <div className='pb-24'>
      <Products/>
     </div>
    </>
  )
}

export default Home

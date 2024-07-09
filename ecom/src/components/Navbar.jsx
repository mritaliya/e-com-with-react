import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='container mx-auto px-4 py-2 flex items-center justify-between' >
        <Link to="/">
        <img src="/images/logo.png" style={{height:45}} alt="" srcset="" />
        </Link>
        <ul className='flex items-center'>
            <li className='font-bold mx-2 ' ><Link to='/'>Home</Link> </li>
            <li className='ml-2 font-bold mx-2' ><Link to='/product'>Product</Link></li>
            <li ><Link to='/cart'>
            <div className='flex items-center mx-2' style={{background:'orange',borderRadius:"50px",padding:"5px",width:"55px"}}>
                <span>10</span>
                <img src="/images/cart.png" alt="" srcset="" />
            </div>
            </Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar

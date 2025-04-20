import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between  items-center px-10 py-5'>
      <div className='flex  gap-20'>
      <h1 className='text-4xl text-[#004149]'>DANTA</h1>
      <div className='flex gap-12 items-center'>
        <Link to='/' className='text-[17px] font-normal' >Home</Link>     
        <Link to='/' className='text-[17px] font-normal' >About Us</Link>     
        <Link to='/' className='text-[17px] font-normal' >Service</Link>     
        <Link to='/' className='text-[17px] font-normal' >Team</Link>     
        <Link to='/' className='text-[17px] font-normal' >Contact</Link>     
      </div>
      </div>
      <div>
        <button className='px-6 py-3 text-[16px] leading-4  bg-[#004149] text-white rounded-md hover:bg-black transition-all duration-300 cursor-pointer'>Appointment Now</button>
      </div>
    </div>
  )
}

export default Navbar

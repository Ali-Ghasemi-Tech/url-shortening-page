import React from 'react'
import Logo from '../images/logo.svg'

const Navbar = () => {
  return (
    <header className='w-[80%] flex justify-between'>
        <div className='flex'>
            <img src={Logo} className='mr-10 h-fit' alt="" />
            <div className='flex gap-5 text-gray-500 text-lg'>
                <a href="">Features</a>
                <a href="">Pricing</a>
                <a href="">Resources</a>
            </div>
        </div>
        <div className='flex gap-10 text-lg'>
            <button className='text-gray-400 font-bold '>Login</button>
            <button className=' bg-teal-400 text-white px-[30px] py-[15px] rounded-full font-bold hover:bg-white hover:text-teal-400 transition-all duration-200'>SignUp</button>
        </div>
    </header>
  )
}

export default Navbar
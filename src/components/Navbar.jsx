import React from 'react'
import Logo from '../images/logo.svg'
import Button from './Button'

const Navbar = () => {
  return (
    <>
    <div className='flex'>
        <img src={Logo} className='mr-10 h-fit' alt="" />
        <div className='flex gap-5 text-gray-500 text-lg'>
            <a href="">Features</a>
            <a href="">Pricing</a>
            <a href="">Resources</a>
        </div>
        </div>
        <div className='flex gap-10 text-lg'>
            <button className='text-gray-400 font-bold navbar-text'>Login</button>
            <Button content={'Sign Up'} fontSize ='clamp(0.1em , 1vw , 1em)' />
        </div>
    </>
        
  )
}

export default Navbar
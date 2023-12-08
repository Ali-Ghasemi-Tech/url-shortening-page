import React, { useEffect, useState } from 'react'
import Logo from '../images/logo.svg'
import Button from './Button'

const Navbar = () => {
  const [isOpen , setIsOpen] = useState(false);

  useEffect(() => {
    const menu = document.getElementById('menu');
    if(menu){

      const handelClick = () => {
        setIsOpen((open) => !open)
        console.log('clicked')
      }
        menu.addEventListener('click' , handelClick)
       
        return() => {
          menu.removeEventListener('click' , handelClick)
        }
    }
  } , []);



  useEffect(() =>{
    const mobileNav = document.getElementById('mobile-nav');
    const navBg = document.getElementById('nav-bg')
    if(mobileNav){
      if(isOpen){
        mobileNav.classList.remove('mobile:hidden');
        navBg.classList.remove('hidden');

      }else{
        
        mobileNav.classList.add('mobile:hidden');
        navBg.classList.add('hidden');
      }
    }
  } , [isOpen] )

  return (
    <>
      <div className='flex w-[15%] items-center'>
        <img src={Logo} className='mr-10 h-fit w-full' alt="" />
      </div>

      <div id='nav-bg' className='fixed left-0 top-0 right-0 bottom-0 opacity-10 bg-black z-20 hidden transition-all duration-300'></div>
   
      <div id='mobile-nav' className='flex justify-between w-[90%] mobile:flex-col mobile:bg-indigo-950 mobile:fixed mobile:left-[36%] mobile:top-[15%] z-20 mobile:hidden  mobile:w-[30%] rounded-lg '>
        <ul  className='nav-list flex justify-center items-center '>
            <li className='flex mobile:flex-col mobile:justify-center mobile:items-center gap-[2vw] mobile:gap-0 mobile:border-b mobile:border-gray-100  mobile:mb-[1.5vw] mobile:w-[50%] text-gray-500 mobile:text-gray-400 mobile:font-bold text-lg nav-text '>
              <a className='hover:text-teal-400 transition-all duration-200' href="">Features</a>
              <a className='hover:text-teal-400 transition-all duration-200' href="">Pricing</a>
              <a className='hover:text-teal-400 transition-all duration-200' href="">Resources</a>
            </li>
          </ul>
        <ul className='nav-list flex justify-center items-center mobile:flex-col'>
          <li className='flex mobile:mb-[2vw] gap-[1.5vw] nav-text mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-[2vw] hover:text-blue-500 transition-all duration-200 mobile:w-[40%] mobile:mt-[1vw]'>
            <button className='text-gray-400 font-bold navbar-text hover:text-teal-400 transition-all duration-200'>Login</button>
             <Button content={'Sign Up'} fontSize ='clamp(0.1em , 1vw , 1em)' />
          </li>
        </ul>
      </div>
      
      <div id='menu' className='hidden mobile:block z-50'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAFRJREFUSEtjZKAxYKSx+QyjFhAM4QEJov8EnYVfAYqjsfmA5hZQ6AFU7QMSB3T3AalxQjCS0X1AcwsoCrKREcnYgghfvJAcyQNiAdERP3IjeQQFEQAGUAYZX8+AJgAAAABJRU5ErkJggg=="/>
      </div>
    </>
        
  )
}

export default Navbar
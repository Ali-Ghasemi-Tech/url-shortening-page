import React, { useEffect, useState } from 'react'
import Logo from '../images/logo.svg'
import Button from './Button'

const Navbar = () => {
  const [isOpen , setIsOpen] = useState(false);

  useEffect(() => {
    const close = document.getElementById('close');
    const menu = document.getElementById('menu');
    if(close || menu){

      const handelClick = () => {
        setIsOpen((open) => !open)
        console.log('clicked')
      }
        close.addEventListener('click' , handelClick);
        menu.addEventListener('click' , handelClick);
       
        return() => {
          close.removeEventListener('click' , handelClick);
          menu.removeEventListener('click' , handelClick);
        }
    }
  } , []);



  useEffect(() =>{
    const mobileNav = document.getElementById('mobile-nav');
    const navBg = document.getElementById('nav-bg');
    const close = document.getElementById('close');
    if(mobileNav){
      if(isOpen){
        mobileNav.classList.remove('mobile:hidden');
        navBg.classList.remove('hidden');
        close.classList.remove('hidden');

      }else{
        
        mobileNav.classList.add('mobile:hidden');
        navBg.classList.add('hidden');
        close.classList.add('hidden');
      }
    }
  } , [isOpen] )

  return (
    <>
      <div className='flex w-[15%] items-center'>
        <img src={Logo} className='mr-10 h-fit w-full' alt="" />
      </div>

      <div id='nav-bg' className='fixed left-0 top-0 right-0 bottom-0 opacity-10 bg-black z-20 hidden transition-all duration-300'></div>
   
      <div id='mobile-nav' className='flex justify-between w-[90%] mobile:flex-col mobile:bg-indigo-950 mobile:fixed mobile:mx-auto mobile:top-[15%] z-20 mobile:hidden  mobile:w-[80%] rounded-lg '>
        <div id='close' className=' absolute top-[2vw] right-[2vw] hidden '>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgba(0, 255, 255, 1)'}}><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
        </div>
              
        <ul  className='nav-list flex justify-center items-center '>
            <li className='flex mobile:flex-col mobile:justify-center mobile:items-center gap-[2vw] mobile:gap-[4vw] mobile:py-[5vw] mobile:border-b mobile:border-gray-100  mobile:mb-[1.5vw] mobile:w-[50%] text-gray-500 mobile:text-gray-400 mobile:font-bold text-lg  nav-text '>
              <a className='hover:text-teal-400 transition-all duration-200' href="">Features</a>
              <a className='hover:text-teal-400 transition-all duration-200' href="">Pricing</a>
              <a className='hover:text-teal-400 transition-all duration-200' href="">Resources</a>
            </li>
          </ul>
        <ul className=' flex justify-center items-center mobile:flex-col'>
          <li className='flex  gap-[1.5vw] mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-[5vw] hover:text-blue-500 transition-all duration-200 mobile:w-[40%] mobile:py-[5vw]'>
            <button className='text-gray-400 font-bold nav-text hover:text-teal-400 transition-all duration-200'>Login</button>
             <Button content={'Sign Up'} fontSize ='clamp(0.8em , 1vw , 1.5em)' />
          </li>
        </ul>
      </div>
      
      <div id='menu' className='hidden mobile:block '>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAFRJREFUSEtjZKAxYKSx+QyjFhAM4QEJov8EnYVfAYqjsfmA5hZQ6AFU7QMSB3T3AalxQjCS0X1AcwsoCrKREcnYgghfvJAcyQNiAdERP3IjeQQFEQAGUAYZX8+AJgAAAABJRU5ErkJggg=="/>
      </div>
    </>
        
  )
}

export default Navbar
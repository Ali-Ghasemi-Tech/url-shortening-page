import React from 'react'
import Button from './Button'
import Hero_img from '../images/illustration-working.svg'
import Input from './Input'

const Hero = () => {
  return (
        <div className='pb-20 relative flex justify-center'>
          <div className=' flex justify-start w-full hero-height'>
            <div className='flex flex-col pt-[5%] items-start hero w-[40%]'>
              <h1 className='font-bold leading-tight mb-2'>More than just shorter links</h1>
              <span className='casual-text mb-10'>Build your brand’s recognition and get detailed insights 
              on how your links are performing.</span>
              <Button content='Get Started' fontSize='clamp(0.1em , 2vw , 1.5em)'/>
            </div>

          <img className=' absolute -right-32 img' src={Hero_img} alt="" /> 

          </div>
          
            <div className='flex justify-center absolute -bottom-[10%] w-full  items-center bg-gray-800 bg-[url(../images/bg-shorten-desktop.svg)] bg-no-repeat h-0 px-[2vw] py-[4vw] bg-cover rounded-xl'>
              <Input/>
            </div>
        </div>
  )
}

export default Hero
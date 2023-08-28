import React from 'react'
import Button from './Button'
import Hero_img from '../images/illustration-working.svg'

const Hero = () => {
  return (
        <div className=' flex justify-start w-full h-[482px]'>
            <div className='flex flex-col pt-[5%] items-start hero w-[40%]'>
                <h1 className='font-bold leading-tight mb-2'>More than just shorter links</h1>
                <span className='casual-text mb-10'>Build your brand’s recognition and get detailed insights 
                on how your links are performing.</span>
                <Button content={<span className='button-text'>Get Started</span>}/>
            </div>

            <img className=' absolute -right-14 img' src={Hero_img} alt="" />

        </div> 
  )
}

export default Hero
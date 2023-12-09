import React from 'react'
import Button from './Button'
import Hero_img from '../images/illustration-working.svg'
import Input from './Input'

const Hero = ({screen}) => {
  return (
        <div className='pb-20 mobile:pb-[35vw] relative flex justify-center h-full'>
          <div className=' flex justify-start w-full h-full hero-height mobile:flex-col-reverse mobile:justify-center mobile:items-center gap-6'>
            <div className='flex flex-col h-auto  pt-[5%] items-start mobile:items-center mobile:text-center hero w-[50%] mobile:w-full'>
              <h1 className='font-bold leading-tight mb-2'>More than just shorter links</h1>
              <span className='casual-text mb-[2vw] mobile:mb-[3vw]'>Build your brand’s recognition and get detailed insights 
              on how your links are performing.</span>
              <Button padding={screen ?'1.5vw 2em' : null} content='Get Started' fontSize='clamp(0.1em , 2vw , 1.8em) ' />
            </div>

            <img className=' absolute -right-32 img mobile:relative mobile:right-0 mobile:scale-150' src={Hero_img} alt="" /> 

          </div>
          
            <div className='flex justify-center absolute -bottom-[10%] w-full  items-center bg-gray-800 bg-[url(../images/bg-shorten-desktop.svg)] bg-no-repeat h-auto px-[2vw] py-[2vw]  bg-cover rounded-xl mobile:rounded-sm'>
              <Input/>
            </div>
        </div>
  )
}

export default Hero
import React from 'react'
import Button from './Button'


const GetStarted = () => {
  return (
    <div className='flex flex-col justify-center items-center py-[4%] gap-[4vw] bg-[url(../images/bg-boost-desktop.svg)] bg-no-repeat bg-cover' >
        <h2 className='statistics-text font-bold text-white'>Boost your links today</h2>
        <Button content='Get Started' fontSize='clamp(0.6em , 2vw , 1.5em)'/>
    </div>
  )
}

export default GetStarted
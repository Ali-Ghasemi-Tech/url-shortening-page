import React from 'react'
import image from '../images/icon-fully-customizable.svg'
// add style to the cards and make them general for all contents 
const Statistics_card = ({title , text , img , position}) => {
  return (
    <div className='w-[25vw] h-[18vw] absolute z-10 bg-white flex justify-center items-center rounded-md' style={position}>
        <div className='p-[6%] rounded-full bg-gray-800 inline-block absolute -top-[14%] left-[12%]'>
            <img className='card-img' src={image} alt="" />
        </div>
        <div className='w-[80%] flex flex-col justify-center items-start mt-14'>
          <h2 className='card-title font-bold whitespace-nowrap overflow-hidden'>Brand Recognition</h2>
          <span className='py-[4%] text-gray-400 card-text'>Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.</span>
        </div>
    </div>
  )
}

export default Statistics_card
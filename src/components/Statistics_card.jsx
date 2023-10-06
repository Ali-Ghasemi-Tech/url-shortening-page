import React from 'react'

// add style to the cards and make them general for all contents 
const Statistics_card = ({img ,content , position}) => {

  return (
    <div className='w-[25vw] h-[18vw] absolute z-10 bg-white flex justify-center items-center rounded-md' style={position}>
        <div className='p-[6%] rounded-full bg-gray-800 inline-block absolute -top-[14%] left-[12%]'>
            <img className='card-img' src={img} alt="" />
        </div>
        <div className='w-[80%] flex flex-col justify-center items-start mt-14'>
          <h2 className='card-title font-bold whitespace-nowrap overflow-hidden'>{content.title}</h2>
          <span className='py-[4%] text-gray-400 card-text'>{content.text}</span>
        </div>
    </div>
  )
}

export default Statistics_card
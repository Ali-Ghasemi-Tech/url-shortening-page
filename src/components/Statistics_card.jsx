import React from 'react'

// add style to the cards and make them general for all contents 
const Statistics_card = ({img ,content , position}) => {

  return (
    <div className='w-[25vw] h-[18vw] mobile:w-[80vw] mobile:h-[55vw] absolute z-10 bg-white flex justify-center items-center rounded-md' style={position}>
        <div className='p-[6%]  rounded-full bg-gray-800 inline-block absolute mobile:left-[39.2%] -top-[15%] left-[12%]'>
            <img className='card-img' src={img} alt="" />
        </div>
        <div className='w-[80%] flex flex-col mobile:items-center justify-center items-start mt-[3vw] mobile:mt-[7vw]'>
          <h2 className='card-title font-bold whitespace-nowrap overflow-hidden'>{content.title}</h2>
          <span className='py-[4%] text-gray-400 mobile:text-center card-text'>{content.text}</span>
        </div>
    </div>
  )
}

export default Statistics_card
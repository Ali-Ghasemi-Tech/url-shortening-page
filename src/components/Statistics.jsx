import React from 'react'
import Statistics_card from './Statistics_card'

const Statistics = () => {
  const brandRecognition = {
    top :'-10vw',
    left : '0px'
  }
  const detailedRecords = {
    top : '-8vw',
    left: '27.5vw'
  }
  const fullyCustomizable = {
    top: '-6vw',
    right:'0px'
  }
  return (
    <>
        <div className='flex flex-col justify-center items-center w-[35%] text-center mt-[13%] mb-[5%]'>
            <h1 className='font-bold statistics-text whitespace-nowrap overflow-hidden pb-2'>Advanced Statistics</h1>
            <span className='casual-text text-gray-500'>Track how your links are performing across the web with our advanced statistics dashboard</span>
        </div>
        <div className='w-[80%] bg-teal-400 h-2 mt-[10%] mb-[20%] relative'>
        <Statistics_card position={brandRecognition} />
        <Statistics_card position={detailedRecords}/>
        <Statistics_card position={fullyCustomizable}/>

        </div>
    </>
  )
}

export default Statistics
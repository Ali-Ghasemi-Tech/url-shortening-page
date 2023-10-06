import React from 'react'
import Statistics_card from './Statistics_card'
import brandRecognitionimg from '../images/icon-brand-recognition.svg'
import detailedRecordsimg from '../images/icon-detailed-records.svg'
import fullyCustomizableimg from '../images/icon-fully-customizable.svg'

const brandRecognitionContent = {
  title:"Brand Recognition" , 
  text:`Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.`,
};

const detailedRecordsContent = {
  title :'Detailed Records',
  text: `Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.`
};

const fullyCustomizableContent ={
  title: 'Fully Customizable',
  text: `Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.`
}

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
  console.log(brandRecognitionContent);
  return (
    <>
        <div className='flex flex-col justify-center items-center w-[35%] text-center mt-[13%] mb-[5%]'>
            <h1 className='font-bold statistics-text whitespace-nowrap overflow-hidden pb-2'>Advanced Statistics</h1>
            <span className='casual-text text-gray-500'>Track how your links are performing across the web with our advanced statistics dashboard</span>
        </div>
        <div className='w-[80%] bg-teal-400 h-2 mt-[10%] mb-[20%] relative'>
        <Statistics_card
          img={brandRecognitionimg}
          content={brandRecognitionContent}
          position={brandRecognition} />
        <Statistics_card 
          img={detailedRecordsimg}
          content={detailedRecordsContent}
          position={detailedRecords}/>
        <Statistics_card
          img={fullyCustomizableimg}
          content={fullyCustomizableContent} 
          position={fullyCustomizable}/>

        </div>
    </>
  )
}

export default Statistics
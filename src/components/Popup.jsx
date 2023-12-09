import React, { useState } from 'react'

const Popup = ({input , result , style , onClick}) => {

    
  const handelCopy = async () =>{
    try {
      await navigator.clipboard.writeText(result);
      console.log('Content copied to clipboard');
      const copyPopup = document.getElementById('copy-popup');
      copyPopup.classList.add('opacity-100')
      setTimeout(() => {
        copyPopup.classList.remove('opacity-100')
      }, 2000);
      
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
  return (
    <div style={style} className=' w-[80%] overflow-hidden mx-auto fixed bg-indigo-900 z-30 px-[4vw] pt-[3vw] mobile:pt-[8vw] pb-[2vw] pr-[5vw] rounded-xl top-[30%]'>
        <div onClick = {onClick}  className=' absolute top-2 right-2 hover:cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)'}}><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
        </div>
        <div className='font-serif card-text text-gray-100 pb-5 font-bold break-words'>
            <span className='text-teal-400'>provided Url:  </span>
            {input}
        </div>
        <div className='font-serif flex w-full card-text text-gray-100 font-bold break-words'>
            <span className=' whitespace-nowrap text-teal-400'>shortened Url:  </span>
            {result}
        </div>

        <div className=' w-full mobile:mt-[5vw]' onClick={handelCopy}>
              <svg className='mx-auto w-[2vw] mobile:w-[5vw] hover:cursor-pointer' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path></svg>
        </div>
         <div id='copy-popup' className=' fixed bottom-[5vw] left-0 right-0 text-center w-screen opacity-0 transition-opacity duration-500'>
          <span className='rounded-full bg-gray-700 text-white copied p-[1vw] mobile:p-[3vw] shadow-md'>copied to clipboard</span>
        </div>
        
        
        
    </div>

  )
}

export default Popup
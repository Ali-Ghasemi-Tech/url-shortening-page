import React from 'react'

const Popup = ({input , result , style , onClick}) => {
    
  return (
    <div  style={style} className='mx-auto fixed bg-teal-400 z-30 p-[5vw] rounded-xl top-[30%] '>
        <div onClick = {onClick}  className=' absolute top-2 right-2 hover:cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)'}}><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
        </div>
        <div className='font-serif card-title text-gray-100 pb-5 font-bold'>
            <span className='text-gray-200'>provided Url:  </span>
            {input}
        </div>
        <div className='font-serif card-title text-gray-100 font-bold'>
            <span className='text-gray-200'>shortened Url:  </span>
            {result}
        </div>
        
    </div>
  )
}

export default Popup
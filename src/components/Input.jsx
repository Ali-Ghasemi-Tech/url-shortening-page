import React from 'react'
import Button from './Button'

function Input() {
  const inputStyle ={
    fontSize: 'clamp(0.1em ,1.3vw ,1.4em)', 
  }
  return (
    <>
        <div className='flex w-full gap-3 justify-center items-center'>
            <input className=' flex-1 py-[0.49em] pl-8 rounded-lg' style={inputStyle} type="text" placeholder='Shorten a link here...' />
            <Button content={'Shorten it!'} fontSize={'clamp(0.1em ,1.4vw ,1.4em)'} border = '8px'/>
        </div>
    </>
  )
}

export default Input
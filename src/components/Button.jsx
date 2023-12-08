import React from 'react'

const Button = ({content , fontSize , border , onClick ,screen , padding }) => {
 
  const customCss = {
    fontSize : fontSize,
    borderRadius : screen ? '1vw' : border,
    width: screen ? '100%' : 'auto',
    padding: screen ? '1vw 2em' :padding || '0.6vw 2em',
  };

  return (
    <button onClick={onClick} className=' bg-teal-400 text-white  rounded-full font-bold hover:bg-white hover:text-teal-400 transition-all duration-200 whitespace-nowrap overflow-hidden flex items-center justify-center ' style={{...customCss }}>{content}</button>
  )
}

export default Button
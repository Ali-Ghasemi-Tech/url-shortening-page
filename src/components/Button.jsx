import React from 'react'

const Button = ({content , fontSize , border , onClick}) => {
  const customCss = {
    fontSize : fontSize,
    borderRadius : border,
  };
  return (
    <button onClick={onClick} className=' bg-teal-400 text-white px-[2em] py-[0.5em] rounded-full font-bold hover:bg-white hover:text-teal-400 transition-all duration-200 whitespace-nowrap overflow-hidden flex items-center justify-center' style={customCss}>{content}</button>
  )
}

export default Button
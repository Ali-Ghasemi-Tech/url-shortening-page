import React from 'react'

const Button = ({content}) => {
  return (
    <button className=' bg-teal-400 text-white px-[2em] py-[1em] rounded-full font-bold hover:bg-white hover:text-teal-400 transition-all duration-200'>{content}</button>
  )
}

export default Button
import React from 'react'
import Button from './Button'
import { useState } from 'react'


function Input() {
  const [inputValue , setInputValue] = useState('');

  const inputStyle ={
    fontSize: 'clamp(0.1em ,1.3vw ,1.4em)', 
  }

  function handleChange(e){
    setInputValue(e.target.value);
  }

  async function getInputValue() {
    const url = 'https://url-shortener-service.p.rapidapi.com/shorten';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'b99456bc94mshd73362348322d0ep12674ajsn1ca375f6a290',
        'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
      },
      body: new URLSearchParams({
        url: (inputValue)
      })
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
   return (
        <div className='flex w-full gap-3 justify-center items-center'>
            <input onChange={handleChange} id='input' className=' flex-1 py-[1%] pl-8 rounded-lg' style={inputStyle} type="text" placeholder='Shorten a link here...' ></input>
          
            <Button onClick={getInputValue} content={'Shorten it!'} fontSize={'clamp(0.1em ,1.4vw ,1.8em)'} border = '8px'/>
        </div>
          )
  }


export default Input ;

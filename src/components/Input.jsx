import React, { useEffect } from 'react'
import Button from './Button'
import { useState } from 'react'
import Popup from './Popup';
import { useMedia } from 'react-media-hook';



function Input() {
  const [inputValue , setInputValue] = useState('');
  const [result , setResult] = useState();
  const [isPopupDisplayed , setIsPopupDisplayed] = useState(false);

  const isSmallScreen = useMedia('(max-width:500px)');

  const inputStyle ={
    fontSize: 'clamp(0.5em ,1.3vw ,1.4em)', 
  }
  const popupHidden = {
    display : "none"
  }

  const popupDisplayed = {
   display : "block",
  }

  function handleChange(e){
    setInputValue(e.target.value);
  }

    async function callApi() {
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
          const data = await response.json();
           setResult (data.result_url);
           if(result){
            setIsPopupDisplayed(true);           
            clearInput();
            document.getElementById('input').classList.remove('error');
            document.getElementById('error-text').classList.add('hidden');
           }else{
            document.getElementById('input').classList.add('error');
            document.getElementById('error-text').classList.remove('hidden');
           }
          

        } catch (error) {
          document.getElementById('input').classList.add('error');
          document.getElementById('error-text').classList.remove('hidden');
          console.error(error);
        }
  }

  function clearInput(){
    document.getElementById("input").value = '';
  }

  function handelClick() {
    setIsPopupDisplayed(false);
  }

  
  return (
    <>
      <div className='flex mobile:flex-col  w-full gap-[1vw] justify-center items-center'>
          <input onChange={handleChange} id='input' className=' flex-1 py-[1%] mobile:py-[2%] pl-[1vw] rounded-lg relative mobile:w-full mobile:rounded-sm' style={inputStyle} type="text" placeholder='Shorten a link here...' >
          </input>            
          <span id='error-text' className=' absolute left-[2vw] bottom-[0.5vw] card-text text-orange-500 hidden'>please add a link</span>
        
          <Button onClick={callApi} content={'Shorten it!'} fontSize={'clamp(0.5em ,1.4vw ,1.8em)'} border = '8px' screen={isSmallScreen ? isSmallScreen.matches: null}/>
          
      </div>
      <Popup onClick={handelClick} id = "popup" style = {isPopupDisplayed ? popupDisplayed : popupHidden} input = {inputValue} result={result}/>
      <div id='popupBg' style={isPopupDisplayed ? popupDisplayed : popupHidden} className='w-screen h-screen z-20 bg-black fixed left-0 top-0 opacity-40'></div>
    </>
    )
  }


export default Input ;

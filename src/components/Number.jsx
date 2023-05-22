import { useState, useContext } from 'react'

import { InputContext } from '../utils/InputContext'

function Number({text}) {
  let {input, setInput} = useContext(InputContext)  
  
  function handleClick(){
    if(input.length === 1){      
      if(input[0] === "0"){
        setInput(input = text)        
      }else{
        setInput(input += text )
      }           
    }else{     
      setInput(input += text )
    }            
  }
  return (
    <>
      <div  className='col-3 h-15 p-3' onClick={handleClick}>
        {text}
      </div>
      
    </>
  )
}

export default Number
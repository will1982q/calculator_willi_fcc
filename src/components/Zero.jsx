import { useState, useContext } from 'react'
import { InputContext } from '../utils/InputContext'

function Zero({text}) {
  let {input, setInput} = useContext(InputContext)  
  
  function handleClick(){
    if(input.length === 1){      
        if(input[0] === "0"){
          setInput(input = text)          
        }else{
          setInput(input += text )
        } 
            
    }else{ //     
      
      let lastChar = input[input.length-1] // last digited character
      let isOperator = false
      if(input[input.length-2] === '/' || input[input.length-2] === 'X' || input[input.length-2] === '-' || input[input.length-2] === '+'){
        isOperator = true
      }
      if(lastChar === '0' && isOperator){
        
      }else{
        setInput(input += text )//continue here
      }     
      
    }            
  }

  return (
    <>
      <div  className='col-3 h-15 p-3 fw-bold text-primary-emphasis bg-primary border border-primary-subtle' onClick={handleClick}>
        {text}
      </div>
      
    </>
  )
}

export default Zero
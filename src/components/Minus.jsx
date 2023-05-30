import { useState, useContext } from 'react'

import { InputContext } from '../utils/InputContext'

function Minus({text}) {
  let {input, setInput} = useContext(InputContext)
  
  function handleClick(){
    let lastChar = input[input.length-1]
    
    if(input.length === 1){// the first character
        if(input[0] === '0'){
            setInput(input = text)
        }else if(lastChar !== '-'){
            setInput(input += text)
        }         
    }else{ // more than one character
        if(lastChar === '/' || lastChar === 'X' || lastChar === '+' || lastChar === '-'){
          if(input[input.length-2] === '/' || input[input.length-2] === 'X' || input[input.length-2] === '+' || input[input.length-2] === '-'){

          }else{
            setInput(input += text)            
          }
          
          
          
        }else if(lastChar === '.'){

        }else{
            setInput(input += text)
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

export default Minus
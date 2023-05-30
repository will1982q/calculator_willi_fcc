import { useState, useContext } from 'react'

import { InputContext } from '../utils/InputContext'

function Operator({text}) {
  let {input, setInput} = useContext(InputContext)

  function handleClick(){
    let lastChar = input[input.length-1]
    if(lastChar === '/' || lastChar === 'X' || lastChar === '+'){
      setInput(input = input.substring(0,input.length-1) + text)      
    }else if(lastChar !== '.' && lastChar !== '-'){
      setInput(input += text)
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

export default Operator
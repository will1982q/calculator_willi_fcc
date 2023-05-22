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
        if(lastChar === '/' || lastChar === 'X' || lastChar === '+'){
            setInput(input += text)
        }else if(lastChar === '.' || lastChar === '-'){

        }else{
            setInput(input += text)
        }
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

export default Minus
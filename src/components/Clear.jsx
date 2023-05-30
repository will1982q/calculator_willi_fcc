import { useState, useContext } from 'react'

import { InputContext } from '../utils/InputContext'


function Clear({text}) {
  let {input, setInput, result, setResult} = useContext(InputContext)
   

  function handleClick(){
    setInput(input ="0")
    setResult(result ="0")
  }

  return (
    <>
      <div  className='col-6 h-15 p-3 fw-bold text-primary-emphasis bg-primary border border-primary-subtle' onClick={handleClick}>
        {text}
      </div>
      
    </>
  )
}

export default Clear
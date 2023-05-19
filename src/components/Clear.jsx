import { useState, useContext } from 'react'

import { InputContext } from '../utils/InputContext'


function Clear({text}) {
  let {input, setInput} = useContext(InputContext)

  function handleClick(){
    setInput(input ="0")
  }

  return (
    <>
      <div  className='col-6 h-15 p-3' onClick={handleClick}>
        {text}
      </div>
      
    </>
  )
}

export default Clear
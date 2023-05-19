import { useState, useContext } from 'react'

import { InputContext } from '../utils/InputContext'

function Operator({text}) {
  let {input, setInput} = useContext(InputContext)

  function handleClick(){
    setInput(input += text)
  }

  return (
    <>
      <div  className='col-3 h-15 p-3' onClick={handleClick}>
        {text}
      </div>
      
    </>
  )
}

export default Operator
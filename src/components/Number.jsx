import { useState, useContext } from 'react'
//import { useContext } from 'react'
import { InputContext } from '../utils/InputContext'

function Number({value}) {
  let {input, setInput} = useContext(InputContext)
  
  
  function handleClick(){
    setInput(input += value ) //works    
  }

  return (
    <>
      <div  className='col-3 h-15 p-3' onClick={handleClick}>
        {value}
      </div>
      
    </>
  )
}

export default Number
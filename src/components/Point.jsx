import { useState, useContext } from 'react'

import { InputContext } from '../utils/InputContext'

function Point({text}) {
  let {input, setInput} = useContext(InputContext)

  function  handleClick(){
    let lastChar = input[input.length-1] // last digited character   

    if(!(lastChar === '.' || lastChar === '/' || lastChar === 'X' || lastChar === '-' || lastChar === '+')){

      let conStart = 0
      for(let i=input.length-1;i>= 0; i--){
        if(input[i] === '.'){
          conStart++        
        }
      }
      if(conStart === 0){
        setInput(input += text)        
      }

      let conOperator = 0
      let j= input.length-1
      console.log(j)
      while(input[j] !== '/' && input[j] !== 'X' && input[j] !== '-' && input[j] !== '+' && j>=0){
        if(input[j] === '.'){
          conOperator++
          console.log(conOperator)        
        }
        j--
        console.log('j',j)
      }
      if(conOperator === 0){
        setInput(input += text)      
      }
            
    }    
  }
  
  return (
    <>
      <div  className='col-6 h-15 p-3' onClick={handleClick}>
        {text}
      </div>
      
    </>
  )
}

export default Point
import { useState, useContext } from 'react'
import { InputContext } from '../utils/InputContext'

function Zero({text}) {
  let {input, setInput} = useContext(InputContext)  
  
  function handleClick(){
    if(input.length === 1){      
        if(input[0] === "0"){
          setInput(input = text)
          console.log('L13',input)
        }else{
          setInput(input += text )
        } 
            
    }else{ //
      // let conOperator = 0 //HERE
      // let j= input.length-1      
      // while(input[j] !== '/' && input[j] !== 'X' && input[j] !== '-' && input[j] !== '+' && j>=0){
      //   if(input[j] === '0'){
      //     conOperator++                  
      //   }
      //   j--        
      // }
      // console.log('conOpetrator', conOperator)
      // if(conOperator === 0){
      //   setInput(input += text)      
      // }     
      
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
      <div  className='col-3 h-15 p-3' onClick={handleClick}>
        {text}
      </div>
      
    </>
  )
}

export default Zero
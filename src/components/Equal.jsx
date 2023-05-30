import { useState, useContext } from 'react'

import { InputContext } from '../utils/InputContext'

function Equal({text}) {
  let {input, setInput, result, setResult} = useContext(InputContext)

  function handleClick(){
    if(validateInput()){
      calculateResult()
    }
    
  }
  function calculateResult(){
    let num = ""
    let operator = ""
    let operationsAr = []
    let cont = 0

    for(let i=0;i<input.length;i++){  // to create array of {number}, {operator}
      if(input[i] === '0' || input[i] === '1' || input[i] === '2' || input[i] === '3' || input[i] === '4' || input[i] === '5' || input[i] === '6' || input[i] === '7' || input[i] === '8' || input[i] === '9' || input[i] === '.' || input[i] === '-'){ // before  === '-'
        if(operator !== ""){
          operationsAr.push(operator)
        }
        operator = ""
        
        if(input[i] === '-'){
          if(num !== "" && num[0] !== '-'){
            operationsAr.push(parseFloat(num)) // this to add a last positive number
            num = ""
          }
          cont++          
        }

        if(cont === 0){ // positive number
          num += input[i]
          
        }else if(cont === 1){ // negative number
          
          num += input[i]
        }else if(cont > 1 && input[i] === input[i-1]){ // change of number
            operationsAr.push('-')
            cont = 0
        }else if(cont > 1){
          operationsAr.push(parseFloat(num))          
          num = "-" //because the next number is negative          
          cont = 1 //because the next number is negative
        }
        
        
        if(i === input.length-1){
          operationsAr.push(parseFloat(num))
          num = ""
          
          cont = 0
        }
        
               
      }else{  // operators     
        if(num !== "" ){
          operationsAr.push(parseFloat(num))
          num = ""
          cont = 0
        }
        num = ""

        operator += input[i]      
      }
    }
    
    for(let i=0;i<operationsAr.length;i++){
      if(operationsAr[i] === 'X'){
        operationsAr.splice(i-1,3,operationsAr[i-1] * operationsAr[i+1])
        i--  
      }
    }

    for(let i=0;i<operationsAr.length;i++){
      if(operationsAr[i] === '/'){
        operationsAr.splice(i-1,3,operationsAr[i-1] / operationsAr[i+1])
        i--  
      }
    }

    if(operationsAr[0] === '-'){
      operationsAr.unshift(0)
    }
    for(let i=0;i<operationsAr.length;i++){       
      if(operationsAr[i] === '-'){
        operationsAr.splice(i-1,3,operationsAr[i-1] - operationsAr[i+1])
        i--
      }
    }

    for(let i=0;i<operationsAr.length;i++){ 
      if(operationsAr[i] === '+'){
        operationsAr.splice(i-1,3,operationsAr[i-1] + operationsAr[i+1]) 
        i-- 
      }
    }
    
    if(operationsAr.length > 1){
      for(let i=1;i<operationsAr.length;i++){ 
        if(operationsAr[i] < 0 &&  !Number.isNaN(operationsAr[i]-1)){
          operationsAr.splice(i-1,2,operationsAr[i-1] + operationsAr[i]) 
          i-- 
        }
      }
    } 
    
    setInput(input = operationsAr[0])

    let index = operationsAr[0].toString().indexOf('.')
    let decimal
    if(index){
      decimal = operationsAr[0].toString().substring(index)
    }

    if(decimal.length > 4){
      setResult(result = operationsAr[0].toFixed(4))
    }else{
      setResult(result = operationsAr[0])
    }
    
  }

  function validateInput(){
    //console.log('L69')
    for(let i=0;i<input.length-1;i++){
      if(input[i] === '/' || input[i] === 'X' || input[i] === '+' || input[i] === '-'){
        return true
      }
    }
    if(input[input.length-1] === '/' || input[input.length-1] === 'X' || input[input.length-1] === '+' || input[input.length-1] === '-' || input[input.length-1] === '.'){
      input = input.substring(0,input.length-1)
    }
    return false
  }

  return (
    <>
      <div className='col-6 h-15 p-3 fw-bold text-primary-emphasis bg-primary border border-primary-subtle' onClick={handleClick}>
        {text}
      </div>
      
    </>
  )
}

export default Equal
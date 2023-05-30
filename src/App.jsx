import { useState } from 'react'
import Number from './components/Number.jsx'
import Zero from './components/Zero.jsx'
import Equal from './components/Equal.jsx'
import Clear from './components/Clear.jsx'
import Operator from './components/Operator.jsx'
import Minus from './components/Minus.jsx'
import Point from './components/Point.jsx'

import Display from './components/Display.jsx'

import './App.css'
import { InputContext } from './utils/InputContext.js'

function App() {
  const [input, setInput] = useState("0")
  const [result, setResult] = useState(0)

  return (
    <>
      <div id='container' className='container text-center border border-black'>
        <InputContext.Provider value={{input, setInput, result, setResult}}>
          <div className ='row' id='display'>
            <Display />
          </div>        
          <div className ='row'>
            <Clear id='clear' text={"AC"} />
            <Equal id='equals' text={"="} />
          </div>        
          <div className ='row'>          
            <Number id='seven' text={"7"} />
            <Number id='eigth' text={"8"} />
            <Number id='nine' text={"9"}  />
            <Operator id='divide' text={"/"} /> 
          </div>
          <div className ='row'>
            <Number id='four' text={"4"} />
            <Number id='five' text={"5"} />
            <Number id='six' text={"6"} />
            <Operator id='multiply' text={"X"} />
          </div>
          <div className ='row'>
            <Number id='one' text={"1"} />
            <Number id='two' text={"2"} />
            <Number id='three' text={"3"} />
            <Minus id='subtract' text={"-"} />
          </div>      
          <div className ='row'>
            <Zero id='zero' text={"0"} />
            <Point id='decimal' text={"."} />
            <Operator id='add' text={"+"} />        
          </div>
        </InputContext.Provider>         
      </div>     
    </>
  )
}

export default App

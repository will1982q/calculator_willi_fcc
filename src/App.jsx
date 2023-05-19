import { useState } from 'react'
import Number from './components/Number.jsx'
import Equal from './components/Equal.jsx'
import Clear from './components/Clear.jsx'
import Operator from './components/Operator.jsx'
import Point from './components/Point.jsx'

import Display from './components/Display.jsx'

import './App.css'
import { InputContext } from './utils/InputContext.js'

function App() {
  const [input, setInput] = useState("0")

  return (
    <>
      <div id='container' className='container text-center'>
        <InputContext.Provider value={{input, setInput}}>
          <div className ='row' id='display' >
            <Display />
          </div>        
          <div className ='row'>
            <Clear id='clear' text={"AC"} />
            <Equal id='equals' text={"="} />
          </div>        
          <div className ='row'>          
            <Number id='seven' value={7} />
            <Number id='eigth' value={8} />
            <Number id='nine' value={9}  />
            <Operator id='divide' text={"/"} /> 
          </div>
          <div className ='row'>
            <Number id='four' value={4} />
            <Number id='five' value={5} />
            <Number id='six' value={6} />
            <Operator id='multiply' text={"X"} />
          </div>
          <div className ='row'>
            <Number id='one' value={1} />
            <Number id='two' value={2} />
            <Number id='three' value={3} />
            <Operator id='subtract' text={"-"} />
          </div>      
          <div className ='row'>
            <Number id='zero' value={0} />
            <Point id='decimal' text={"."} />
            <Operator id='add' text={"+"} />        
          </div>
        </InputContext.Provider>         
      </div>     
    </>
  )
}

export default App

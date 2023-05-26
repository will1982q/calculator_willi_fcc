import { useContext } from 'react'
import { InputContext } from '../utils/InputContext'

function Display() {
  let {input, result} = useContext(InputContext)

  return (
    <>
      <div  className='col-12'>
        {input}               
      </div>
      <div className='col-12 p-2'> 
        {result}
      </div>      
    </>
  )
}

export default Display
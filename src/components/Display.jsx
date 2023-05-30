import { useContext } from 'react'
import { InputContext } from '../utils/InputContext'

function Display() {
  let {input, result} = useContext(InputContext)

  return (
    <>
      <div  className='col-12 text-white bg-dark border border-black'>
        {input}               
      </div>
      <div className='col-12 p-2 text-white bg-dark border border-black'> 
        {result}
      </div>      
    </>
  )
}

export default Display
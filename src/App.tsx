import { useState } from 'react'
import './App.css'
import Calculator from './components/Calculator'
import Result from './components/Result'
import TableIMC from './components/TableIMC'

function App() {
  const [values,setValues] = useState<{peso:string ,altura:string}>({peso:"",altura:""})

  return (
    <div className='bg-white p-10'>
    <Calculator values={values} setValues={setValues}/>
    <Result values={values}/>
    <TableIMC/>
    </div>
  )
}

export default App

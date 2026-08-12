import { useState } from 'react'
import reactLogo from './assets/react.svg'


function App() {
    let [Counter,setCounter] = useState(10)

  // let Counter = 14;

  const addValue = ()=>{
      setCounter(Counter+1)
      setCounter(Counter+1)
      setCounter(Counter+1)
      setCounter(Counter+1)
    
}
  const removeValue =()=>{
      setCounter(Counter -1)
}
  return (
    <>
    <h1>simple line</h1>
    <h2>Counter value : {Counter}</h2>
    <button
    onClick={addValue}
    >Add value{Counter}</button>
    <br/>
    <button 
    onClick={removeValue}
    >Remove value{Counter}</button>
    <p>simple work{Counter}</p>
    </>
  )
}
export default App

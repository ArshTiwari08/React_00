import { useState } from 'react'
import Todos from './components/todo'
import AddTodo from './components/addTodo'

function App() {
  
  return (
    <>
      <h1>Simple TODO using  REACT_REDUX</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
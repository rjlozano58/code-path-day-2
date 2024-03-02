import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [count, setCount] = useState(0)

  function handleCount(){
    setCount(count+1);
    if (count === 5){
      setCount(0);
    }
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleCount} >Set Count</button>
    </>
  )
}

export default App

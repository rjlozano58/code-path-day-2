import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const [multiplier,setMult] = useState(1);


  function updateCount(){
    setCount(count + multiplier)
  }

  function doubleStuffed(){
    if(count >= 10){
      setMult(2);
    }
  }

  function partyPack(){
    if (count >= 100 ){
      setMult(5);
    }
  }

  function fullFeast(){
    if (count >= 1000){
      setMult(10);
    }

  }

  return (
    <div className='App'>
      <div className='header'>
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img onClick={updateCount} className="samosa" src="https://www.shakaharry.com/cdn/shop/products/samosanew.png?v=1665414081"/>
      </div>

      <div className='container'>
      <div className='upgrade'>
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click</p>
          <button onClick={doubleStuffed}>10 somosas</button>
        </div>
        <div className='upgrade'>
          <h3>Party Pack 🎉</h3>
          <p>5x per click</p>
          <button onClick={partyPack}>100 somosas</button>
        </div>
        <div className='upgrade'>
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p>10x per click</p>
          <button onClick={fullFeast}>1000 somosas</button>
        </div>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    if (counter < 20){
      setCounter(counter + 1)
    } else {
      console.log("Limit Reached!");
    }
  }

  const removeValue = () => {
    if (counter > 0){
      setCounter(counter - 1)
    } else {
      console.log("No Negative Support!");
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: 5</h2>

    <button
    onClick={addValue}
    >Add value {counter}</button>
    <br />
    <button
    onClick={removeValue}
    >Remove value {counter}</button>
    <footer>{counter}</footer>
    </>
  )
}

export default App

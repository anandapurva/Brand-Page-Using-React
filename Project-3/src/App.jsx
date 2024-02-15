import { useState } from 'react'
import BgChanger from './components/BgChanger';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <BgChanger />
   </>
  )
}

export default App

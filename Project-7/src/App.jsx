import { useState } from 'react'
import Products from './components/Products/Products'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Products />
    </>
  )
}

export default App

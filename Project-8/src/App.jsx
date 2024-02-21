import { useState } from 'react'
import AppleCounter from './components/AppleCounter/AppleCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppleCounter />
    </>
  )
}

export default App

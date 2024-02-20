import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Header and footer remains same and in between them i.e outlet, the things changes like about page, home page etc. */}
     <Header />  
     <Outlet />
     <Footer /> 
    </>
  )
}

export default App

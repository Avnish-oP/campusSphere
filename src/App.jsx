import { useState } from 'react'
import Homepage from './homepage'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage />

    </>
  )
}

export default App

import { useState } from 'react'
import Index from './index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import LoginForm from './components/LoginForm'
import Homepage from './homepage'
import Sidebar from './components/Sidebar'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>    
    </Router>
  )
}

export default App
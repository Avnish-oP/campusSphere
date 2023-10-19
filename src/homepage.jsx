import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import './App.css'  
import Academic from './components/academic';

export default function Homepage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
        };

  return (
    <div>
      <Navbar onSidebarToggle={handleSidebarToggle} />
      <div className='flex gap-4'>
      {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} />}
      <Academic/>
      </div>
    </div>
  )
}

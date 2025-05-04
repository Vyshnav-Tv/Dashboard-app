import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login'
import SideBar from './components/SideBar'
import Overview from './components/OverViewPage'
import DashLayout from './components/DashLayout'
import Settings from './components/Settings'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashLayout />}/>
                  <Route path="/settings" element={<Settings/>} />
                    <Route path="/overview" element={<Overview />} />
                  
                
                
            </Routes>
    
    
    </BrowserRouter>
   </>
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login'
import SideBar from './components/SideBar'
import Overview from './components/OverViewPage'
import DashLayout from './components/DashLayout'
import Settings from './components/Settings'
import Users from './components/Users';

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashLayout />}>
                <Route path="user" element={<Users />}/>
                  <Route path="settings" element={<Settings/>} />
                    <Route path="overview" element={<Overview />} />
                    </Route>
                    
                  
                
                
            </Routes>
    
    
    </BrowserRouter>
   </>
  )
}

export default App

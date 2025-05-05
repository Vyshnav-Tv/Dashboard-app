import React from 'react'
import SideBar from './SideBar'
import Header from './Header'
import Overview from './OverViewPage'
import { Outlet } from 'react-router'

function DashLayout() {
  return (
    <div className="flex flex-col h-screen">
    <Header/>
    <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
    <SideBar  />
    
    <div className='flex-1 p-4 overflow-y-auto'>

    
    <Outlet/>
    </div>
   

    </div>

</div>  )
}

export default DashLayout
import React from 'react'
import SideBar from './SideBar'
import Header from './Header'
import Overview from './OverViewPage'

function DashLayout() {
  return (
    <div className="flex flex-col h-screen">
    <Header/>
    <div className='flex flex-1'>
    <SideBar  />
    
    <div className='flex-1 p-4 overflow-y-auto'>

    
    <Overview/>
    </div>
    </div>
</div>  )
}

export default DashLayout
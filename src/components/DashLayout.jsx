import React from 'react'
import SideBar from './SideBar'
import Header from './Header'

function DashLayout() {
  return (
    <div className="flex flex-col h-screen">
    <Header/>
    <SideBar />

</div>  )
}

export default DashLayout
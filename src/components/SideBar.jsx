import React from 'react'

function SideBar() {
    


  return (
    <div className=' space-y-4 w-64 min-h-screen bg-gray-800 text-white p-6 '>
        <div className='w-full p-4 hover:outline hover:outline-2 hover:outline-black-500  ' > Welcome User</div>
<div className='w-full p-4 hover:outline hover:outline-2 hover:outline-black-500  ' > OverView</div>
<div className='w-full p-4 hover:outline hover:outline-2 hover:outline-black-500'> Users</div>
<div className='w-full p-4 hover:outline hover:outline-2 hover:outline-black-500'> settings</div>


    </div>
  )
}

export default SideBar
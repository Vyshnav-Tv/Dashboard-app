import React from 'react'
import { useNavigate } from 'react-router';


function SideBar() {
    const navigate = useNavigate();
    


  return (
    <div className=' space-y-4 w-64 min-h-screen bg-gray-800 text-white p-6 '>
        <div className='w-full p-4 hover:outline hover:outline-2 hover:outline-black-500  ' > Welcome User</div>
<div className='w-full p-4 hover:outline hover:outline-2 hover:outline-black-500  ' onClick={() =>
                 navigate("/overview")}> OverView</div>
<div className='w-full p-4 hover:outline hover:outline-2 hover:outline-black-500'> Users</div>
<div className='w-full p-4 hover:outline hover:outline-2 hover:outline-black-500'  onClick={() =>
                 navigate("/settings")}> settings</div>


    </div>
  )
}

export default SideBar
import React from 'react'
import { useNavigate } from 'react-router';


function SideBar() {
    const navigate = useNavigate();
    


  return (
    <div className='w-full md:w-64 bg-gray-800 text-white flex md:flex-col justify-around md:justify-start p-4 md:space-y-4 space-x-4 md:space-x-0'>
        <div className='w-full p-4 hover:outline hover:outline-2 hover:outline-black-500  ' > Welcome User</div>
<div className='w-full p-4 hover:outline hover:outline-2 hover:outline-black-500  ' onClick={() =>
                 navigate("/dashboard/overview")}> OverView</div>
<div className='w-full p-4 hover:outline hover:outline-2 hover:outline-black-500'  onClick={() =>
                 navigate("/dashboard/user")}> Users</div>
<div className='w-full p-4 hover:outline hover:outline-2 hover:outline-black-500'  onClick={() =>
                 navigate("/dashboard/settings")}> settings</div>


    </div>
  )
}

export default SideBar
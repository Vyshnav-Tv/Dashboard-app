import React from 'react'

function LoginPage() {
  return (
    <div className="  h-screen flex flex-col items-center justify-center pt-5 items-center justify-center bg-red outline-2 outline-blue-500/100 text-left bg-gray-200 ">
<p className=' text-xl font-bold font-sans   '  > Login</p>

        <div className=' rounded-lg space-y-4 w-[500px]  '>
            <label className='text-xl  font-sans'>email</label>
        <input className= 'flex h-10 w-full rounded-md border border-gray-700/50 bg-transparent px-2 pt-2' type='email'placeholder='abcd@gmail.com'/>
        <label className='text-xl  font-sans'>password</label>
        <input className= 'flex h-10 w-full rounded-md border border-gray-700/50 bg-transparent px-2 pt-2' type='password' placeholder='12345566'/>
       <div className='flex justify-center-safe pt-3 pb-2'>
       <button className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'>Submit</button>
       
        </div>
        </div>
  </div>
  )
}

export default LoginPage
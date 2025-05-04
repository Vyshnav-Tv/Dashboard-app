import React from 'react'

function LoginPage() {
  return (
 
    <div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <form  className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <input
              type="email"
              placeholder="Email"
              
              className="w-full p-2 border rounded mb-4"
            />
            <input
              type="password"
              placeholder="Password"
           
              className="w-full p-2 border rounded mb-4"
            />
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">Submit</button>
          </form>
    </div>
    </div>
  )
}

export default LoginPage

import  { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


function Settings() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      
      if (!email || !password||!name) {
        toast.error("Please fill in all fields!");
        return;
      }
  
      
      toast.success("Form submitted successfully!");
    };

  return (

    <div>
   <button
  onClick={() => navigate('/dashboard')}
  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4 pt-2 mt-2 ml-2"
>
  ← Back to Dashboard
</button>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Update Profile</h2>
            <input
              type="name"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            />
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Submit</button>
          </form>
    
          
          <ToastContainer position="top-right" autoClose={3000} />
        </div></div>
        
    )
  
}

export default Settings
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import authbanner from '../assets/authbanner.jpg'

const Login = () => {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const handleUserId = (e) => {
        setUserId(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/signup')
    }

      useEffect(() => {
        const isLoggedIn = localStorage.getItem("userId") && localStorage.getItem("number");
        if (isLoggedIn) {
            navigate('/dashboard');
        }
    }, [navigate]);

    const handleSubmit = async (e) => {

        e.preventDefault();

        try{
            const formData = {userId, password}

            const res = await fetch('http://localhost:5000/api/login', {
                method: "POST",
                headers: {"content-type": 'application/json'},
                body: JSON.stringify(formData),
                credentials: "include"
            })

            const data = await res.json();

              if (!res.ok) {
                    alert(data.message || "Invalid credentials");
                    return;
                }

                localStorage.setItem("userId", data.userId);
                localStorage.setItem("number", data.number);

                window.dispatchEvent(new Event("user-logged-in"));
                navigate('/dashboard');
        }
        catch(err){
            console.error("Login Error:", err);
            alert(data.message || "Invalid credentials");
        }
    }

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-br from-white to-blue-50 p-6">
        
        <div className='hidden md:block mb-8 md:mb-0'>
            <img src={authbanner} alt="Login Banner" className="w-[300px] md:w-[450px] h-auto rounded-xl shadow-lg object-cover"/>
        </div>

        <form className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md space-y-6 border border-gray-200 h-[680px]">

            <h2 className="text-2xl font-bold text-center text-gray-800">Login to ProLinker</h2>

            <div>
                <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-1">Enter UserId</label>
                <input 
                    type="text" 
                    name='uid'
                    id='userId' 
                    required  
                    onChange={handleUserId} 
                    className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"  />
            </div>
            
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Enter Password</label>
                <input 
                    type="password" 
                    name='password2'
                    id='password' 
                    required  
                    onChange={handlePassword} 
                    className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"/>
            </div>
            
            <button 
                onClick={handleSubmit} 
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-semibold">
                    Login
            </button>

            <button 
                onClick={handleSignUp} 
                className="w-full text-blue-600 hover:underline text-sm mt-2 text-center">
                    New User? SignUp
            </button>
        </form>

    </div>
  )
}

export default Login
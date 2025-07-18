import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import authbanner from '../assets/authbanner.jpg';

const SignUp = () => {

    const [userId, setUserId] = useState("");
    const[email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleUserId = (e) => {
        setUserId(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    }

    const handleSubmit = async(e) => {

        e.preventDefault();

         if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        const formData = {userId, email, password};

        try{
            const res = await fetch("https://prolinker-backend.onrender.com/api/signup", {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
                credentials: "include"
            })
            console.log(res);

            const data = await res.json();

            if (!res.ok) {
                setErrorMessage(data.message || "Signup failed");
                return;
            }
            setErrorMessage("");

            localStorage.setItem("userId", data.userId);
            window.dispatchEvent(new Event("user-logged-in"));
            navigate('/profilecreate');
            
        }
        catch(err){
            console.log(err);
            setErrorMessage("Something went wrong. Please try again later.");
        }   
    }

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-br from-white to-blue-50">

         <div className="hidden md:block mb-8 md:mb-0">
            <img
            src={authbanner}
            alt="Sign Up Banner"
            className="w-[300px] md:w-[450px] h-[680px] rounded-xl shadow-lg object-cover"
            />
        </div>


        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl p-8 w-full h-[680px] max-w-md space-y-6 border border-gray-200">
            
            <h2 className="text-2xl font-bold text-center text-gray-800">Create Your Account</h2>

            <div>
                <label htmlFor="uid" 
                        className="block text-sm font-medium text-gray-700 mb-1">Create UserId</label>
                <input type="text" name='uid'  required onChange={handleUserId}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"  />

            </div>

            
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Enter E-mail</label>
                <input type="text" name='email' required onChange={handleEmail}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"  />
            </div>

            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Create Password</label>
                <input type="password" name='password' required onChange={(e) => setPassword(e.target.value)}
                         className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
            </div>

            <div>
                <label htmlFor="password2" className="block text-sm font-medium text-gray-700 mb-1">Re-Enter Password</label>
                <input type="password" name='password2' required onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
            </div>

            {errorMessage && (
                <p className="text-red-600 text-sm font-semibold text-center">{errorMessage}</p>
            )}


            <button type="submit" 
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-semibold">Sign Up</button>

            <button onClick={handleLogin} className="w-full text-blue-600 hover:underline text-sm text-center">Already a User? Login</button>

        </form>
        

    </div>
  )
}

export default SignUp
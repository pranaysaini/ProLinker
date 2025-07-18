import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import startBanner from '../assets/startBanner.png'

const GetStart = () => {

  const navigate = useNavigate();

  const handleStartSignUp = () => {
    
    const uid = typeof window !== "undefined" ? localStorage.getItem('userId') : null;

    if(uid){
      navigate('/dashboard')
    }
    else{
      navigate('/signup');
    }
  }

  return (
    <div className='relative flex justify-center items-center'>
        <button 
          onClick={handleStartSignUp} 
          className="absolute bg-[#009400] hover:bg-green-700 transition-all duration-300 md:px-10 px-2 py-1 md:py-4 rounded-lg text-white font-bold md:text-lg text-sm mr-10"
    style={{ bottom: '10%', left: '50%', transform: 'translateX(-50%)' }} >
                  Proceed
        </button>

        <img src={startBanner} alt="start" onClick={handleStartSignUp}  />
    </div>
  )
}

export default GetStart
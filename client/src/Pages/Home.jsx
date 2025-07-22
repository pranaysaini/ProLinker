import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import banner from '../assets/futureBanner.png'

const categories = [
  "Software development", "Website Development", "Wordpress Development",
  "WooCommerce Development", "Shopify Development", "Other E-Commerce Development",
  "Graphic Designing", "Video Editing","App Development", "UI/UX Designing",
  "Meta Ads", "Google Ads", "LinkedIn Ads", "X Ads", "WhatsApp Marketing", 
  "CAD Designing", "Word/PPT Services", "Excel Services", "Blog Writing", "Others"
];

const Home = () => {
  const categoriesRef = useRef(null);

  const handleFindService = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='pb-32'>
      <img src={banner} alt="banner" className="md:ml-60 w-full max-w-5xl " />

      <div className="flex justify-center mt-6">
        <button
          onClick={handleFindService}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
        >
          Find Service
        </button>
      </div>

      <h1
        ref={categoriesRef}
        className='flex justify-center items-center text-3xl font-[salsa] font-bold mt-10'
      >
        Explore Categories
      </h1>

      <ul className='grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-y-20 md:gap-x-10 mt-8'>
        {
          categories.map((cat, index) => (
            <li key={index} >
              <Link to={`/${encodeURIComponent(cat)}`} className="block hover:cursor-pointer bg-white rounded-xl shadow-md p-4 text-center text-sm md:text-lg font-semibold hover:bg-green-100 hover:scale-105 transition-transform duration-300 border border-gray-200" >
                    {cat}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Home
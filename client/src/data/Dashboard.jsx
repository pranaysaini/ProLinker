import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


const Dashboard = () => {

    const location = useLocation();
    const [seller, setSeller] = useState(null);

    //const contactNumber = new URLSearchParams(location.search).get("number");
    const contactNumber = localStorage.getItem("number");
    const userId = localStorage.getItem("userId");

    useEffect(() => {
            const fetchData = async () => {

                const isLoggedIn = localStorage.getItem("userId");
                if (!isLoggedIn) {
                  alert("Login required.");
                  navigate("/login");
                  return;
                }

                const res = await fetch(`https://prolinker-backend.onrender.com/api/createprofile/dashboard/${userId}`, {
                     method: "GET",
                     credentials: "include",
                    
                });

                    if (res.status === 401 || res.status === 403) {
                      alert("You must be logged in to access the dashboard.");
                      localStorage.clear();
                      navigate("/login");
                      return;
                    }

                if (!res.ok) {
                  console.error("Failed to fetch seller from API");
                  alert(`Failed to fetch seller: ${res.status}`);
                  return;
                }

                const data = await res.json();
                setSeller(data);
            };

            if (userId) {
                fetchData();
            }
    }, [userId]);

    const [showGigForm, setShowGigForm ] = useState(false);
    const [gigCategory, setGigCategory] = useState('');
    const[gigPrice, setGigPrice] = useState('');
    const [gigDescription, setGigDescription] = useState('');

    const submitForm = async () => {

      const response = await fetch('https://prolinker-backend.onrender.com/api/creategig', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          number:seller?.number,
          category: gigCategory,
          price: gigPrice,
          description: gigDescription
        })
      })

      const data = await response.json();
      alert(data.message || 'Gig created!');
      setShowGigForm(false);
    }

    const navigate = useNavigate();
    
    const toNavigate = () => {
        navigate(`/currentservices?contactnumber=${seller.number}`)
    }

  if (!seller) return <div>Loading...</div>;

  const categories = [
     "Software development", "Website Development", "Wordpress Development",
    "WooCommerce Development", "Shopify Development", "Other E-Commerce Development", 
    "App Development", "Graphic Designing", "Video Editing", "UI/UX Designing", 
    "Meta Ads", "Google Ads", "LinkedIn Ads", "X Ads", "WhatsApp Marketing", 
    "CAD Designing", "Word/PPT Services", "Excel Services", "Blog Writing", "Others"
  ];
  
  
    return (

    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-center text-black">Welcome, {seller.name}</h1>
        <div className="text-center text-gray-700 space-y-2">
          <p><strong>Email:</strong> {seller.email}</p>
          <p><strong>Phone:</strong> {seller.number}</p>
          <a href={seller.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            Your Website
          </a>
          <br />
          <button
            onClick={() => window.open(`https://prolinker-backend.onrender.com/portfolios/portfolio-${seller.number}.pdf`, "_blank")}
            className="mt-3 border-2 border-green-700 hover:bg-green-200 text-green-700 px-4 py-2 rounded-md shadow-md transition"
          >
            View Portfolio
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => setShowGigForm(true)}
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg shadow-md transition"
          >
            Create Service
          </button>
          <button
            onClick={toNavigate}
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg shadow-md transition"
          >
            Running Services
          </button>
        </div>

        {/* Service Form */}
        {showGigForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white w-full max-w-lg mx-4 rounded-lg shadow-lg p-6 relative animate-fade-in">
              <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">Create a New Service</h2>

              <button
                className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
                onClick={() => setShowGigForm(false)}
              >
                ×
              </button>

              <div className="space-y-4">
                <div>
                  <label className="block font-medium mb-1">Category:</label>
                  <select
                    value={gigCategory}
                    onChange={(e) => setGigCategory(e.target.value)}
                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 
                              focus:ring-blue-500"
                  >
                    <option value="">Select Category</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-medium mb-1">Price (₹):</label>
                  <input
                    type="number"
                    value={gigPrice}
                    onChange={(e) => setGigPrice(e.target.value)}
                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none 
                              focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">Description:</label>
                  <textarea
                    value={gigDescription}
                    onChange={(e) => setGigDescription(e.target.value)}
                    rows={4}
                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none 
                                focus:ring-2 focus:ring-blue-500 resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-center gap-4 mt-4">
                  <button
                    onClick={submitForm}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md shadow-md transition"
                  >
                    Submit
                  </button>
                  <button
                    onClick={() => setShowGigForm(false)}
                    className="border-2 border-green-700  text-green-700 hover:bg-green-200 px-6 py-2 rounded-md shadow-md transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    
  )
}

export default Dashboard
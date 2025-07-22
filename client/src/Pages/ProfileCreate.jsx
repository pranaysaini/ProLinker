import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProfileCreate = () => {

  const [userId, setUserId] = useState('');
  const [profileName, setProfileName] = useState("");
  const [profileEmail, setProfileEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [websiteLink, setWebsiteLink] = useState("")
  const [pdfFile, setPdfFile] = useState(null);

  const navigate = useNavigate();


    // On Form Submission
    const handleSubmit = async(e) => {

          e.preventDefault();

          const userIdFromStorage = localStorage.getItem("userId");
          if (!userIdFromStorage) {
            alert("Please login first.");
            navigate("/login");
            return;
          }

        const formData = new FormData();
        
        formData.append('userId', userIdFromStorage);
        formData.append('profileName', profileName);
        formData.append('profileEmail', profileEmail);
        formData.append('contactNumber', contactNumber);
        formData.append('websiteLink', websiteLink);
        formData.append('pdf', pdfFile);

        try{
            const res = await fetch("https://prolinker-backend.onrender.com/api/createprofile", {
                method: "POST",
                // headers: {'Content-Type': 'application/json'},
                // body: JSON.stringify(formData),
                body: formData,
            })

              console.log(res);
          
              const data = await res.json();

              if (!res.ok) {
                alert(data.message || "Failed to create profile.");
                return;
              }

              navigate(`/dashboard?number=${data.seller.number}`);

        }
        catch(err){
            console.error("Error occurred:", err);
            alert("Error Occured", err);
        }
    }
    
  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white shadow-lg rounded-xl p-8 space-y-6"
        encType="multipart/form-data"
      >
        <h2 className="text-3xl font-bold text-center text-blue-800">Create Your Profile</h2>

        <div className="flex flex-col">
          <label htmlFor="uid" className="mb-1 font-medium text-gray-700">User ID</label>
          <input
            type="text"
            name="uid"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="nameP" className="mb-1 font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            name="nameP"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setProfileName(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="emailP" className="mb-1 font-medium text-gray-700">Work Email</label>
          <input
            type="email"
            name="emailP"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setProfileEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="numberP" className="mb-1 font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="numberP"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="websiteLink" className="mb-1 font-medium text-gray-700">Website Link</label>
          <input
            type="url"
            name="websiteLink"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setWebsiteLink(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700 cursor-pointer">Upload Portfolio (PDF)</label>
          <input
            type="file"
            accept="application/pdf"
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            onChange={(e) => setPdfFile(e.target.files[0])}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
        >
           Get Started
        </button>
      </form>
  </div>
    
  )
}

export default ProfileCreate
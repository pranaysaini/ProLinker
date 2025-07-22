import React from 'react'
import connectImg from '../assets/banner.jpg';
import missionImg from '../assets/bannner2.jpg';
import offerImg from '../assets/startBanner.png';
import futureImg from '../assets/futureBanner.png';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 py-10 px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col gap-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-green-700 mb-4">About Us – <span className="text-blue-700">Prolinker</span></h1>
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-2">🔗 Connecting Skills with Needs</h2>
        <p className="text-lg md:text-xl text-gray-700 text-center mb-6">Welcome to <span className="font-semibold text-green-700">Prolinker</span> — your all-in-one destination where talent meets opportunity. Whether you're an individual offering professional services or a business searching for the perfect solution, Prolinker is here to make that connection seamless, secure, and scalable.</p>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <img src={connectImg} alt="Connecting Skills" className="w-full md:w-1/2 rounded-xl shadow-md object-cover" />
          <div>
            <h2 className="text-2xl font-bold text-green-700 mb-2">🚀 Our Mission</h2>
            <p className="text-gray-700 mb-2">To empower freelancers, agencies, and clients by building a platform that simplifies the way services are offered, discovered, and delivered. We aim to eliminate barriers — be it technical, geographical, or financial — and create a community where skills find value.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mt-8">
          <img src={offerImg} alt="What We Offer" className="w-full md:w-1/2 rounded-xl shadow-md object-cover" />
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-2">💡 What We Offer</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><span className="font-semibold">🎯 Diverse Categories:</span> From Software & Web Development, UI/UX Design, Digital Marketing, CAD, Video Editing, to Word/PPT Services — we’ve got it all.</li>
              <li><span className="font-semibold">🤝 Seamless Connection:</span> Businesses and service providers can communicate, collaborate, and grow together under one digital roof.</li>
              <li><span className="font-semibold">🔒 Secure & Verified:</span> We value trust. Profiles, portfolios, and user interactions are moderated to ensure reliability and authenticity.</li>
              <li><span className="font-semibold">📂 Portfolio Uploads:</span> Service providers can showcase their best work to attract more clients and build credibility.</li>
              <li><span className="font-semibold">🧭 Smart Discovery:</span> Users can explore categories or search tailored services that match their project needs with ease.</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
          <img src={missionImg} alt="Who Is It For" className="w-full md:w-1/2 rounded-xl shadow-md object-cover" />
          <div>
            <h2 className="text-2xl font-bold text-green-700 mb-2">👥 Who Is It For?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Freelancers and independent creators</li>
              <li>Businesses looking for reliable partners</li>
              <li>Agencies expanding their client base</li>
              <li>Students and professionals growing their digital presence</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">🛠️ Built for You</h2>
          <p className="text-gray-700 text-lg">Prolinker is designed with a user-first mindset — fast, clean, and mobile-friendly. Whether you’re browsing on your phone or managing projects on desktop, the experience stays consistent and smooth.</p>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mt-8">
          <img src={futureImg} alt="The Future of Freelancing" className="w-full md:w-1/2 rounded-xl shadow-md object-cover" />
          <div>
            <h2 className="text-2xl font-bold text-green-700 mb-2">📈 The Future of Freelancing</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Create a community-driven ecosystem</li>
              <li>Offer skill certifications & badges</li>
              <li>Provide built-in tools for project collaboration</li>
              <li>Launch smart dashboards for performance tracking</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">📞 Let’s Connect</h2>
          <p className="text-gray-700 text-lg">Have questions, feedback, or ideas?<br />We’re always listening. Drop us a message, and let’s build something great — together.</p>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-2">🔗 Join Prolinker Today</h2>
          <p className="text-gray-700 text-lg">Whether you're here to offer or hire, your journey starts now.<br />Create your profile, post your service, or explore talent — all in one place.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
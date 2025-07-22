import React from 'react'
import bridgeImg from '../assets/banner.jpg';
import providerImg from '../assets/startBanner.png';
import seekerImg from '../assets/futureBanner.png';

const WhyUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 py-10 px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col gap-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-green-700 mb-4"> Why Choose <span className="text-blue-700">Prolinker</span> ?</h1>
        <p className="text-lg md:text-xl text-gray-700 text-center mb-6">In today's digital world, finding the right service provider can be overwhelming. Likewise, talented professionals often struggle to showcase their skills and connect with genuine clients. That’s where <span className="font-semibold text-green-700">Prolinker</span> steps in.</p>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <img src={bridgeImg} alt="Bridging Talent and Opportunity" className="w-full md:w-1/2 rounded-xl shadow-md object-cover" />
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🤝 Bridging Talent and Opportunity</h2>
            <p className="text-gray-700 mb-2">Prolinker is more than just a platform — it's a digital marketplace designed to seamlessly connect freelancers and service-based professionals with people and businesses looking for reliable digital services. Whether you’re a developer, designer, marketer, or creator, Prolinker gives you the stage to shine.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mt-8">
          <img src={providerImg} alt="For Service Providers" className="w-full md:w-1/2 rounded-xl shadow-md object-cover" />
          <div>
            <h2 className="text-2xl font-bold text-green-700 mb-2">🚀 For Service Providers</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Create a professional profile</li>
              <li>Showcase your portfolio</li>
              <li>Get discovered by potential clients</li>
              <li>Build trust and grow your client base</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
          <img src={seekerImg} alt="For Service Seekers" className="w-full md:w-1/2 rounded-xl shadow-md object-cover" />
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-2">🔍 For Service Seekers</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Find verified service providers quickly</li>
              <li>Explore detailed profiles and past work</li>
              <li>Connect and hire directly on the platform</li>
              <li>Save time and ensure quality results</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-2">🌐 Simple. Transparent. Powerful.</h2>
          <p className="text-gray-700 text-lg">Prolinker brings everything under one roof. It eliminates the chaos of searching, filtering, and guessing — and replaces it with clarity, trust, and results. Whether you're a startup, business owner, student, or entrepreneur — Prolinker helps you turn ideas into reality by connecting you to the right experts.</p>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">✨ Join the Future of Work</h2>
          <p className="text-gray-700 text-lg">The gig economy is growing, and digital services are more important than ever. With Prolinker, you're not just hiring or getting hired — you're becoming part of a community that believes in quality, collaboration, and progress.</p>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
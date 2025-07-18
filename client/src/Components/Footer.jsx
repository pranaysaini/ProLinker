import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">ProLinker</h2>
          <p className="text-sm text-gray-300">
            ProLinker helps you find top freelance talent across web development, design, and creative services. Connect. Collaborate. Grow.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">Find Talent</li>
            <li className="hover:text-white cursor-pointer">Sell Services</li>
            <li className="hover:text-white cursor-pointer">Career Resources</li>
            <li className="hover:text-white cursor-pointer">Why ProLinker</li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-[#6a329f]"><Facebook size={22} /></a>
            <a href="#" className="hover:text-[#6a329f]"><Twitter size={22} /></a>
            <a href="#" className="hover:text-[#6a329f]"><Instagram size={22} /></a>
            <a href="#" className="hover:text-[#6a329f]"><Linkedin size={22} /></a>
          </div>
          <p className="text-gray-400 text-sm">Email: support@prolinker.com</p>
          <p className="text-gray-400 text-sm">Phone: +91-9876543210</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} ProLinker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

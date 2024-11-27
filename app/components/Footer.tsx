"use client"
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 md:items-center space-y-8 md:space-y-0">
        <div>
          <h3 className="text-lg font-bold">Services</h3>
          <p className="text-sm mt-2">Expert web design, SEO, and IT solutions.</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-xl hover:text-gray-300">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-xl hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-xl hover:text-gray-300">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="#" className="text-xl hover:text-gray-300">
              <i className="fas fa-times"></i>
            </a>
          </div>
          <p className="text-sm mt-4">&copy; 2024. All rights reserved.</p>
        </div>

        <div>
          <h3 className="text-lg font-bold">Freelancer</h3>
          <p className="text-sm mt-2">(475) 349-1632</p>
          <p className="text-sm mt-1">JASONJARRELLLLC@outlook.com</p>
        </div>

        <div className='sm:max-w-72'>
          <h3 className="text-lg font-bold">Local</h3>
          <form className="mt-4">
            <label htmlFor="email" className="block text-sm">
              Your Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email here"
              className="mt-2 px-4 py-2 w-full rounded-md bg-white text-black focus:outline-none"
            />
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600"
            >
              Submit Your Inquiry
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const VerifyEmail = () => {
  return (
    <div className="h-screen flex items-stretch">
      {/* Left Side - Background Image with Heading */}
      <div className="relative hidden md:block w-1/2 bg-cover" style={{ 
          backgroundImage: 'url(https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/signInImage.127192f6.png)',
          opacity: 0.8 // Reduce the opacity of the background image
        }}>
        {/* Heading and Subheading */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-white">
          <h1 className="text-2xl font-semibold tracking-wide uppercase leading-tight">Inspired by the Future</h1>
          <p className="mt-3 text-3xl uppercase tracking-wider font-extrabold">Welcome to Mapping the Future</p>
        </div>
      </div>

      {/* Right Side - Login Form with Gradient Background */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8" 
        style={{ 
          background: 'linear-gradient(159.02deg, rgb(15, 18, 59) 14.25%, rgb(9, 13, 46) 56.45%, rgb(2, 5, 21) 86.14%)' 
        }}>
        <div className="lg:w-[60%] md:w-full sm:w-full w-full">
          <h2 className="text-4xl font-extrabold text-center text-white mb-10">Forgot your password?</h2>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-white">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email..."
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md outline-none"
              />
            </div>
            <Link to={"/verifyotp"}>
            <button className="w-full py-2 mt-4 text-sm capitalize bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition duration-300">
              VERIFY
            </button>
            </Link>

          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;

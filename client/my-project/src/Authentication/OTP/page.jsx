/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Move to the next input box if a number is entered
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="h-screen flex items-stretch">
      {/* Left Side - Background Image with Heading */}
      <div
        className="relative hidden md:block w-1/2 bg-cover"
        style={{
          backgroundImage:
            "url(https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/signInImage.127192f6.png)",
          opacity: 0.8, // Reduce the opacity of the background image
        }}
      >
        {/* Heading and Subheading */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-white">
          <h1 className="text-2xl font-semibold tracking-wide uppercase leading-tight">
            Inspired by the Future
          </h1>
          <p className="mt-3 text-3xl uppercase tracking-wider font-extrabold">
            Welcome to Mapping the Future
          </p>
        </div>
      </div>

      {/* Right Side - OTP Input Form with Gradient Background */}
      <div
        className="w-full md:w-1/2 flex items-center justify-center p-8"
        style={{
          background:
            "linear-gradient(159.02deg, rgb(15, 18, 59) 14.25%, rgb(9, 13, 46) 56.45%, rgb(2, 5, 21) 86.14%)",
        }}
      >
        <div className="lg:w-[60%] md:w-full sm:w-full w-full">
          <h2 className="text-4xl font-extrabold text-center text-white mb-10">
            Verify your OTP!
          </h2>

          {/* OTP Boxes */}
          <form className="space-y-4 ">
            <div className="flex justify-center space-x-2">
              {otp.map((data, index) => {
                return (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className="w-12 h-12 text-center text-lg border border-gray-300 rounded-md outline-none bg-white focus:border-purple-600 text-gray-900"
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                  />
                );
              })}
            </div>

            <Link to={"/resetpassword"}>
              <button className="w-full py-2 mt-4 text-sm capitalize bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition duration-300">
                VERIFY OTP
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Otp;

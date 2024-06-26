"use client"
import { useState } from "react";

const Form: React.FC = () => {

  const [showPassword ,  setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="flex items-center justify-center min-h-fit ">

      <form className="bg-white py-8 px-4 rounded-lg shadow-lg w-full max-w-md">
        {/* Email Start */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email :
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="h-5 w-5 text-gray-500" fill="currentcolor" viewBox="0 0 24 24" >
                <path d="M2 4h20v16H2V4zm2 2v2h16V6H4zm16 12V10H4v8h16zM6 14h8v2H6v-2z" />
              </svg>
            </span>
            <input 
              type="email"
              id="email"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-indigo-500"
              placeholder="Email"
            />
          </div>
        </div>
        {/* Email End */}

        {/* Password Start */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password :
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="h-5 w-5 text-gray-500" fill="currentcolor" viewBox="0 0 24 24" >
                <path d="M12 17a2 2 0 100-4 2 2 0 000 4zm6-9V7a6 6 0 00-12 0v1H4v2h16V84-2zm-2 0H8V7a4 4 0 118 0v1z" />
              </svg>
            </span>
            <input 
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="px-10 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-indigo-500"
              placeholder="Password"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordVisibility}>
              <svg className="h-5 w-5 text-gray-500 " fill="currentColor" viewBox="0 0 24 24">
                {
                  showPassword ? (
                    <path d="M12 5C7 5 2.73 8.11 1 12.5 2.73 16.89 7 20 12 20s9.27-3.11 11-7.5C21.27 8.11 17 5 12 5zm0 12c-3.87 0-7.19-2.42-8.54-6C4.81 8.42 8.13 6 12 6s7.19 2.42 8.54 6c-1.35 3.58-4.67 6-8.54 6zm0-10a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                  ) : (
                    <path d="M12 5C7 5 2.73 8.11 1 12.5 2.73 16.89 7 20 12 20s9.27-3.11 11-7.5C21.27 8.11 17 5 12 5zm0 12c-3.87 0-7.19-2.42-8.54-6C4.81 8.42 8.13 6 12 6s7.19 2.42 8.54 6c-1.35 3.58-4.67 6-8.54 6zm0-10a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                  )}
              </svg>
            </span>
          </div>
        </div>
        {/* Password End */}
        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2  px-6 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </div>
      </form>

    </div>
  )
};

export default Form;
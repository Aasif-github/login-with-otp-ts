import React, { useState } from 'react';

// import './App.css';
const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Mobile Number:', mobileNumber);
    // You can trigger OTP generation here

  };

 
  const handleInputChange = (e) => {
    const input = e.target.value;
    // Only allow numbers, remove non-numeric characters
    // console.log(input);    
    const sanitizedInput = input.replace(/[^0-9]/g, '');    
    setMobileNumber(sanitizedInput);
  };


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Generate OTP</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
              Enter Mobile Number
            </label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              value={mobileNumber}
              maxLength="10"
              onChange={(e) => handleInputChange (e)}              
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your mobile number"
              required
              pattern="[0-9]{10}"
            />
          </div>
          <button
          
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Generate OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

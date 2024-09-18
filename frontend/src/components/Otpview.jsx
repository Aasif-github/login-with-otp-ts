import { React, useState, useEffect } from "react";

const Otpview = () => {
  const [otp, setOtp] = useState("");
  const [count, setCount] = useState(30); // Countdown timer state

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
      
      return () => clearInterval(timer); // Cleanup interval on unmount
    }
  }, [count]);

  // Danish logic
// useEffect(() => {
//     if (count > 0) {
        
   
//     const timer =  setInterval(() => {
       
//         setCount(count-1)
       
//       }, 1000);
//       return () => clearInterval(timer);
//     }
// } , [count]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OTP submitted:", otp);
    // Add OTP validation logic here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white w-[400px] p-8 rounded-lg shadow-lg max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Enter OTP</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
              Enter OTP
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={handleOtpChange}
              maxLength="6"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter 6-digit OTP"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            disabled={count === 0} // Disable button if countdown is 0
          >
            Submit OTP
          </button>
        </form>

        <div className="text-center mt-4 text-gray-700">
          {count > 0 ? (
            <p>Resend OTP in {count} seconds</p>
          ) : (
            <p>Resend OTP now</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Otpview;

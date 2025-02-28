import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Signup from '../../public/images/Signup.png';
import IconGoogle from '../../public/images/Icon-Google.png';
const SignUp = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gray-100 ">
        <div className="bg-white w-full max-w-6xl shadow-lg rounded-lg flex flex-col md:flex-row">
          
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 p-6 flex justify-center items-center">
            <img 
              src={Signup} // Update with correct image path
              alt="Shopping Cart and Mobile"
              className="max-w-full h-auto"
            />
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-36px font-medium leading-7 tracking-[4%]">Create an account</h2>
            <p className="text-16px font-normal leading-6 tracking-[0%] font-poppins">Enter your details below</p>

            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
              />
              <input 
                type="email" 
                placeholder="Email or Phone Number" 
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
              />

              <button 
                type="submit" 
                className="w-full bg-red-500 text-white p-3 rounded-md hover:bg-red-600 transition">
                Create Account
              </button>
            </form>

            {/* Google Signup */}
            <div className="mt-4 flex justify-center">
              <button className="w-full flex items-center justify-center border rounded-md p-3 hover:bg-gray-200 transition">
                <img 
                  src={IconGoogle} // Replace with actual Google icon
                  alt="Google" 
                  className="w-5 h-5 mr-2"
                />
                Sign up with Google
              </button>
            </div>

            {/* Login Link */}
            <p className="text-gray-600 mt-4 text-center">
              Already have an account? <a href="/login" className="text-blue-500 hover:underline">Log in</a>
            </p>
          </div>

        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SignUp;

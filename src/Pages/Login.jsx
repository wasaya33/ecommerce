import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Login1 from '../../public/images/Signup.png';

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center  bg-gray-100">
        <div className="bg-white w-full  shadow-lg rounded-lg flex flex-col md:flex-row">
          
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 p-6 flex justify-center items-center">
            <img 
              src={Login1} // Update with correct image path
              alt="Shopping Cart and Mobile"
              className=""
            />
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800">Log in to Exclusive</h2>
            <p className="text-gray-500 mb-4">Enter your details below</p>

            <form className="space-y-8">
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

              <div className="flex justify-between items-center">
                <button 
                  type="submit" 
                  className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition">
                  Log In
                </button>
                <a href="/forgot-password" className="text-red-500 hover:underline">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;

import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Signup from '../../public/images/Signup.png';
import IconGoogle from '../../public/images/Icon-Google.png';
import supabase from '../lib/supabase';
const SignUp = () => {

  const [userData, setUserData] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const [products,setProducts]=useState([]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Add your logic

   const response= await supabase.auth.signUp({
      email: userData.email,
      password: userData.password,
    });
    if (response.error) {
      console.error(response.error);
      return;
    }

    console.log(response.user);
  }

  const handleGoogleAuth =async()=> {
    console.log("asds");
    const response=await supabase.auth.signInWithOAuth(
      {
        provider: 'google',
        options:{
          redirectTo:"http://localhost:5173/profile"
        }
      }
    )

    if (response.error) {
      console.error(response.error);
      return;
    }

    console.log(response.user);
  }


  async function  addToProduct (){
    // Add your logic
    const response=await supabase.from('products').insert({
      name:"Ali",
      description:"Ali ",
      price:200,
      images:["a","b","c"]
    })

    if (response.error) {
      console.error(response.error);
      return;
    }

    console.log(response.data);
  }

  useEffect(()=>{
    async function fetchData(){
      const {data,error}=await supabase.from('products').select("*");
      if (error) {
        console.error(error);
        return;
      }
      setProducts(data);
    }
    fetchData();
  },[])
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
                value={userData.name}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
              />
              <input 
                type="email" 
                placeholder="Email or Phone Number" 
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
                value={userData.password}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
              />

              <button 
                type="submit" 
                className="w-full bg-red-500 text-white p-3 rounded-md hover:bg-red-600 transition"
                onClick={handleSubmit}
                onToggle={() => console.log("clicked")}
                >
                Create Account
              </button>
            </form>

            {/* Google Signup */}
            <div className="mt-4 flex justify-center">
              <button className="w-full flex items-center justify-center border rounded-md p-3 hover:bg-gray-200 transition" onClick={()=>handleGoogleAuth()}>
                <img 
                  src={IconGoogle} // Replace with actual Google icon
                  alt="Google" 
                  className="w-5 h-5 mr-2 "
                  
                />
                Sign up with Google
              </button>
              <button onClick={()=>addToProduct()}>Add Prouct</button>
            </div>

            {/* Login Link */}
            <p className="text-gray-600 mt-4 text-center">
              Already have an account? <a href="/login" className="text-blue-500 hover:underline">Log in</a>
            </p>
          </div>

        </div>
      </div>
      {
        products.map((product)=>(
          <div key={product.id}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))
      }
      <Footer/>
    </>
  );
};

export default SignUp;

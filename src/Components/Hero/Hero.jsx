import React from "react";
import heroImg from './../../../public/images/heroImg.jpg';

const Hero = () => {
  return (
    <div className="flex w-full max-w-[1200px] mx-auto py-6">
      {/* Sidebar Categories */}
      <div className="w-1/4 ">
        <ul className="space-y-2 font-poppins text-base font-normal leading-6 tracking-normal "
>
          {[
            "Woman's Fashion",
            "Men's Fashion",
            "Electronics",
            "Home & Lifestyle",
            "Medicine",
            "Sports & Outdoor",
            "Baby's & Toys",
            "Groceries & Pets",
            "Health & Beauty",
          ].map((category, index) => (
            <li key={index} className="px-2 py-1 text-gray-700 hover:bg-gray-100">
              {category}
            </li>
          ))}
        </ul>
      </div>
      

      {/* Hero Banner */}
      <div className="w-3/4 px-4">
        <div className="relative">
          <img
            src={heroImg} // Ensure the image path is correct
            alt="Hero Banner"
            className="w-full rounded-md shadow-md"
          />
          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === 1 ? "bg-red-500" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

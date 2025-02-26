import React, { useState, useRef } from 'react';
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";

const BrowseCatagery = () => {
  const products = [
    { id: 1, name: 'Phone', image: '/images/Category-CellPhone.png' },
    { id: 2, name: 'Computer', image: '/images/Category-Computer.jpg' },
    { id: 3, name: 'Smart watch', image: '/images/Category-SmartWatch.png' },
    { id: 4, name: 'Head phone', image: '/images/Category-Headphone.png' },
    { id: 5, name: 'Gaming', image: '/images/Category-SmartWatch.png' },
    { id: 6, name: 'Smart watch', image: '/images/Category-Computer.jpg' },
    { id: 7, name: 'Smart watch', image: '/images/Category-Computer.jpg' },
  ];

  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (scrollOffset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += scrollOffset;
      setScrollPosition(carouselRef.current.scrollLeft);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="flex gap-2 text-center items-center">
        <div className="ml-10 w-[20px] h-[40px] rounded-[4px] bg-red-500 mb-6">
          <span className=""></span>
        </div>
        <div className="mb-6 ml-2">
          <p className="font-poppins text-[16px] font-semibold text-base leading-[20px] tracking-normal text-red-500">Categories</p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold font-inter font-semibold text-4xl leading-[48px] tracking-[0.04em] pl-10">Browse By Category</h2>
        </div>
        <div className="flex space-x-2 pr-10">
          <button onClick={() => scroll(-250)} className="bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition-colors">
            <HiOutlineArrowSmLeft />
          </button>
          <button onClick={() => scroll(250)} className="bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition-colors">
            <HiArrowSmRight />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div ref={carouselRef} className="flex items-center space-x-6 overflow-x-auto scroll-smooth scrollbar-hide">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 border rounded-lg shadow-md relative min-w-[170px] flex-shrink-0 flex flex-col items-center justify-center" // .mmmm class is replaced here
            >
              <img src={product.image} alt={product.name} className="w-full h-20 object-contain mb-4" />
              <p className="text-sm font-semibold mb-2">{product.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseCatagery;

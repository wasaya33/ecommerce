import React, { useState, useEffect, useRef } from 'react';
import { FiHeart } from 'react-icons/fi';

const SalingProducts = () => {
  const products = [
    { id: 1, name: 'HAVIT HV-G92 Gamepad', price: '$120', oldPrice: '$160', rating: 88, image: '/images/flash-1 (2).png' },
    { id: 2, name: 'AK-900 Wired Keyboard', price: '$960', oldPrice: '$1160', rating: 75, image: '/images/flash-2.png' },
    { id: 3, name: 'IPS LCD Gaming Monitor', price: '$370', oldPrice: '$400', rating: 99, image: '/images/GamingMonitor.png' },
    { id: 4, name: 'S-Series Comfort Chair', price: '$375', oldPrice: '$400', rating: 99, image: '/images/ComfortChair.png' },
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
          <span className=''></span>
        </div>
        <div className="mb-6 ml-2">
          <p className="font-poppins text-[16px] font-semibold text-base leading-[20px] tracking-normal text-red-500">This Month</p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold font-inter font-semibold text-4xl leading-[48px] tracking-[0.04em] pl-10">Best Selling Products</h2>
        </div>
        <div className="text-center mt-6">
          <button className="bg-red-500 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-red-600">View All Products</button>
        </div>
      </div>

      <div className="relative overflow-hidden mt-10">
        <div ref={carouselRef} className="flex space-x-6 overflow-x-auto scroll-smooth scrollbar-hide justify-center">
          {products.map((product) => (
            <div key={product.id} className=" rounded-lg shadow-md relative min-w-[250px] flex-shrink-0 flex flex-col items-center justify-center">
             <div className='bg-[#F5F5F5] w-[270px] h-[250px] rounded-[4px] flex items-center'>
             <FiHeart className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-red-500" />
             <img src={product.image} alt={product.name} className="w-full h-40 object-contain " />
             </div>
             <div className='flex flex-col '>
             <h3 className="text-sm font-semibold mb-2">{product.name}</h3>
              <p className="text-red-500 font-bold">
                {product.price}<span className="text-gray-400 line-through ml-2">{product.oldPrice}</span>
              </p>
              <div className="flex items-center space-x-1 text-yellow-400 mt-2">
                {'★★★★★'.slice(0, 5)}<span className="text-gray-500 text-xs">({product.rating})</span>
              </div>
             </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalingProducts;

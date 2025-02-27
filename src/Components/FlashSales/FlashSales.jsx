import React, { useState, useEffect, useRef } from 'react';
import { FiHeart } from 'react-icons/fi';
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";

const FlashSales = () => {
  const products = [
    { id: 1, name: 'HAVIT HV-G92 Gamepad', price: '$120', oldPrice: '$160', discount: '-40%', rating: 88, image: '/images/flash-1 (2).png' },
    { id: 2, name: 'AK-900 Wired Keyboard', price: '$960', oldPrice: '$1160', discount: '-35%', rating: 75, image: '/images/flash-2.png' },
    { id: 3, name: 'IPS LCD Gaming Monitor', price: '$370', oldPrice: '$400', discount: '-30%', rating: 99, image: '/images/GamingMonitor.png' },
    { id: 4, name: 'S-Series Comfort Chair', price: '$375', oldPrice: '$400', discount: '-25%', rating: 99, image: '/images/ComfortChair.png' },
    { id: 5, name: 'S-Series Comfort Chair', price: '$375', oldPrice: '$400', discount: '-25%', rating: 99, image: '/images/flash-1 (2).png' },
    { id: 6, name: 'S-Series Comfort Chair', price: '$375', oldPrice: '$400', discount: '-25%', rating: 99, image: '/images/flash-2.png' },
    { id: 7, name: 'Another Product', price: '$500', oldPrice: '$600', discount: '-20%', rating: 90, image: '/images/ComfortChair.png' },
    { id: 8, name: 'Yet Another Product', price: '$200', oldPrice: '$250', discount: '-20%', rating: 85, image: '/images/GamingMonitor.png' },
  ];

  const [timeLeft, setTimeLeft] = useState({ days: 1, hours: 3, minutes: 23, seconds: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;
        if (seconds > 0) { seconds -= 1; }
        else {
          if (minutes > 0) { minutes -= 1; seconds = 59; }
          else {
            if (hours > 0) { hours -= 1; minutes = 59; seconds = 59; }
            else { if (days > 0) { days -= 1; hours = 23; minutes = 59; seconds = 59; } }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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
      <div className='flex gap-2 text-center items-center'>
        <div className='ml-10 w-[20px] h-[40px] rounded-[4px] bg-red-500 mb-6'>
          <span className=''></span>
        </div>
        <div className='mb-6 ml-2'>
          <p className='font-poppins text-[16px] font-semibold text-base leading-[20px] tracking-normal text-red-500'>Today's</p>
        </div>
      </div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold font-inter font-semibold text-4xl leading-[48px] tracking-[0.04em] pl-10">Flash Sales</h2>
          <div className="text-[30px] ml-8 flex space-x-4">
            <div className="flex flex-col-reverse text-center">
              <span className="font-semibold">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="ml-1 text-[12px] font-semibold">Days</span>
            </div>
            <div className="flex flex-col-reverse text-center">
              <span className="font-semibold">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-[12px] ml-1 font-semibold">Hours</span>
            </div>
            <div className="flex flex-col-reverse text-center">
              <span className="font-semibold">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="ml-1 text-[12px] font-semibold">Minutes</span>
            </div>
            <div className="flex flex-col-reverse text-center">
              <span className="font-semibold">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="ml-1 text-[12px] font-semibold">Seconds</span>
            </div>
          </div>
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
      <div className="relative  overflow-hidden">
        <div ref={carouselRef} className=" flex space-x-6 overflow-x-auto scroll-smooth scrollbar-hide">
          {products.map((product) => (
            <div key={product.id} className="p-0 rounded-lg shadow-md relative min-w-[250px] flex-shrink-0">
              <div className='bg-[#F5F5F5] w-[270px] h-[250px] rounded-[4px] flex items-center'>
              <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">{product.discount}</span>
              <FiHeart className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-red-500" />
              <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-4" />
              </div>
             <div className=' pl-4 pb-2'>
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
      <div className="text-center mt-6">
        <button className="bg-red-500 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-red-600">View All Products</button>
      </div>
    </div>
  );
};

export default FlashSales;
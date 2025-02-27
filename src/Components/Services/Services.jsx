import React from 'react';
import Services1 from './../../../public/images/Services1.png';
import Services2 from './../../../public/images/Services2.png';
import Services3 from './../../../public/images/Services3.png';

const Services = () => {
  return (
    <div className="flex justify-center items-center gap-10 py-20">
      <div className="flex flex-col items-center text-center">
        
          <img src={Services1} alt="Fast Delivery" className="w-12 h-12" />
        
        <h1 className="font-poppins font-semibold text-lg mt-4">FREE AND FAST DELIVERY</h1>
        <p className="font-poppins font-normal text-sm text-gray-600">Free delivery for all orders over $140</p>
      </div>
      
      <div className="flex flex-col items-center text-center">
        
          <img src={Services2} alt="24/7 Support" className="w-12 h-12" />
       
        <h1 className="font-poppins font-semibold text-lg mt-4">24/7 CUSTOMER SERVICE</h1>
        <p className="font-poppins font-normal text-sm text-gray-600">Friendly 24/7 customer support</p>
      </div>
      
      <div className="flex flex-col items-center text-center">
        
          <img src={Services3} alt="Money Back Guarantee" className="w-12 h-12" />
        
        <h1 className="font-poppins font-semibold text-lg mt-4">MONEY BACK GUARANTEE</h1>
        <p className="font-poppins font-normal text-sm text-gray-600">We return money within 30 days</p>
      </div>
    </div>
  );
};

export default Services;
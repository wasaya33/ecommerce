import React from 'react'
import arrival_1 from './../../../public/images/arrival_1.png'
import arrival_2 from './../../../public/images/arrival_2.png'
import arrival_3 from './../../../public/images/arrival_3.png'
import arrival_4 from './../../../public/images/arrival_4.png'

const Arrival = () => {
  return (
   <div className='flex flex-col'>
     <div className="mmmm flex items-center gap-2 text-center pl-16 mb-6">
        <div className="w-5 h-10 rounded bg-red-500"></div>
        <p className="text-red-500 font-poppins text-lg font-semibold">Featured</p>
     </div>
     <h2 className=" font-inter mb-4 pl-16 font-inter font-semibold text-4xl leading-[48px] tracking-[4%]">New Arrival</h2>
     <div className='grid grid-cols-2 gap-6 h-screen p-4'>
      {/* Left Div */}
      <div 
  className="relative bg-cover bg-center h-full bg-black" 
  style={{ backgroundImage: `url(${arrival_1})` }}
>
  <div className="absolute bottom-4 left-4 flex flex-col items-start gap-1 text-white ">
    <h1 className="text-[24px] font-semibold leading-[24px] tracking-[0.03em] font-inter mb-4">
      PlayStation 5
    </h1>
    <p className="text-[14px] font-normal leading-[21px] tracking-[0em] font-poppins">
      Black and White version of the PS5 coming out on sale.
    </p>
    <button className="mt-2  p-2 text-black hover:text-white text-[16px] font-medium leading-[24px] tracking-[0em] font-poppins rounded-md transition duration-300 ease-in-out bg-gray-200 hover:bg-gray-600">
      Buy Now
    </button>
  </div>
</div>

      
      {/* Right Div */}
      <div className='grid grid-rows-2 gap-6 h-full'>
        {/* Upper Right */}
        <div 
  className="relative bg-cover bg-center h-full" 
  style={{ backgroundImage: `url(${arrival_2})` }}
>
  <div className="absolute bottom-4 left-4 text-white flex flex-col items-start gap-2 p-4">
    <h1 className="text-[24px] font-semibold leading-[24px] tracking-[0.03em] font-inter">
      Women’s Collections
    </h1>
    <p className="text-[14px] font-normal leading-[21px] tracking-[0em] font-poppins">
      Featured woman collections that give you another vibe.
    </p>
    <button className="mt-2  p-2 text-black hover:text-white text-[16px] font-medium leading-[24px] tracking-[0em] font-poppins rounded-md transition duration-300 ease-in-out bg-gray-200 hover:bg-gray-600">
      Buy Now
    </button>
  </div>
</div>


        {/* Bottom Right */}
        <div className='grid grid-cols-2 gap-6 h-full'>
          {/* Bottom Left */}
          <div 
  className='bg-cover bg-center h-full bg-black relative' 
  style={{ backgroundImage: `url(${arrival_3})` }}
>
  <div className="absolute bottom-0 text-white left-0 p-4">
    <h1 className='font-inter font-semibold text-2xl leading-6 tracking-[3%]'>Speakers</h1>
    <p className='font-poppins font-normal text-sm leading-5 tracking-normal'>Amazon wireless speakers</p>
    <button className="mt-2 p-2 text-black hover:text-white text-[16px] font-medium leading-[24px] tracking-[0em] font-poppins rounded-md transition duration-300 ease-in-out bg-gray-200 hover:bg-gray-600">Buy Now</button>
  </div>
</div>

          
          {/* Bottom Right */}
          <div 
  className='bg-cover bg-center h-full bg-black relative' 
  style={{ backgroundImage: `url(${arrival_4})` }}
>
  <div className='absolute bottom-0 left-0 p-4 text-white'>
    <h1 className='font-inter font-semibold text-2xl leading-6 tracking-[3%]'>Perfume</h1>
    <p className='font-poppins font-normal text-sm leading-5 tracking-normal'>GUCCI INTENSE OUD EDP</p>
    <button className="mt-2 p-2 text-black hover:text-white text-[16px] font-medium leading-[24px] tracking-[0em] font-poppins rounded-md transition duration-300 ease-in-out bg-gray-200 hover:bg-gray-600">
      Buy Now
    </button>
  </div>
</div>

        </div>
      </div>
    </div>
   </div>
  )
}

export default Arrival

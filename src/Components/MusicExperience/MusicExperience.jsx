import React, { useState, useEffect } from 'react';
import musicBag from './../../../public/images/musicBag.png';

const MusicExperience = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetTime = new Date();
    targetTime.setDate(targetTime.getDate() + 1);
    targetTime.setHours(targetTime.getHours() + 3);
    targetTime.setMinutes(targetTime.getMinutes() + 23);
    targetTime.setSeconds(targetTime.getSeconds() + 19);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetTime - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='flex items-center justify-center h-screen '>
      <div className="flex bg-black text-white w-[85%] h-[500px]  ">
        <div className="w-full  p-8 flex flex-col md:flex-row items-center justify-center">
          {/* Left Side (Text and Timer) */}
          <div className="  flex flex-col gap-8 pl-12">
            <div className="font-[Poppins] font-semibold text-[18px] leading-[20px] tracking-[0%]  text-[#00FF66]">Categories</div>
            <h2 className="font-[Inter] font-semibold text-[48px] leading-[60px] tracking-[4%]">Enhance Your Music Experience</h2>
            <div className="flex w-[320px] h-[62px] items-center justify-center gap-[24px]  ">

              <div className="flex flex-col items-center w-[62px] h-[62px] rounded-full text-black bg-white">
                <span className="text-2xl font-semibold">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="text-xs">Days</span>
              </div>
              <div className="flex w-[62px] text-black h-[62px] bg-white rounded-full flex-col items-center">
                <span className="text-2xl font-semibold">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-xs ">Hours</span>
              </div>
              <div className="flex flex-col items-center jus w-[62px] h-[62px] rounded-full text-black bg-white">
                <span className="text-2xl font-semibold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-xs">Minutes</span>
              </div>
              <div className="flex flex-col items-center w-[62px] h-[62px] rounded-full text-black bg-white">
                <span className="text-2xl font-semibold">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-xs">Seconds</span>
              </div>
            </div>
            <div className=''>
              <button className="bg-[#00FF66] w-[171px] h-[56px] hover:bg-green-600 text-white  py-2 px-6 rounded-[4px] font-[Poppins] font-medium text-[16px] leading-[24px] tracking-[0%]">
                Buy Now!
              </button>
            </div>

          </div>

          {/* Right Side (Image) */}
          <div className=" flex justify-center items-center ">
            <div className="relative">
              <div className="absolute inset-0 bg-white opacity-20 blur-3xl rounded-full transform scale-110"></div> {/* Shadow behind */}
              <img
                src={musicBag}
                alt="JBL Boombox 2"
                className="max-w-full h-auto relative z-10" // Bring image forward
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicExperience;
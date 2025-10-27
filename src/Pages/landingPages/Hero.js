import React from 'react';
import HeroImage from '../../assets/images/HeroSectionImage.png';

function Hero({ navigateFunc }) {
  return (
    <div
      className="flex flex-col text-center mt-[70px] md:mt-[100px] md:flex-row md:justify-between md:text-start bg-[#495e57] px-[16px] sm:px-[20px] py-[32px] md:px-[288px] md:py-[32px] -z-10"
      id="Hero"
    >
      {/* Left side of the Hero section */}
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-[#f4ce14] font-semibold text-4xl sm:text-5xl md:text-[45px] pt-[8px] leading-tight">
          Little Lemon
        </h1>
        <h4 className="pt-[10px] text-[18px] sm:text-[20px] font-bold text-white">
          Chicago
        </h4>
        <p className="text-white px-[20px] sm:px-[50px] md:px-0 py-6 font-bold md:w-[50%] text-[14px] sm:text-[16px] leading-relaxed">
          We are a family-owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button
          className="bg-[#f4ce14] px-[18px] py-[10px] rounded-[10px] font-bold text-[16px] sm:text-[18px] md:text-[20px] cursor-pointer hover:translate-y-2 transition-all duration-500 ease-in-out"
          onClick={() => navigateFunc('/reservation')}
        >
          Reserve a Table
        </button>
      </div>

      {/* Right side of the Hero section with image */}
      <div className="rounded-[20px] flex justify-center mt-[30px] md:mt-0">
        <figure className="flex justify-center items-center">
          <img
            className="rounded-[20px] h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] md:h-[393px] md:w-[374px] object-cover"
            src={HeroImage}
            alt="HeroImage"
          />
        </figure>
      </div>
    </div>
  );
}

export default Hero;

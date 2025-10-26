import React from 'react';
import HeroImage from '../../assets/images/HeroSectionImage.png';

function Hero({navigateFunc}) {
  
  return (
    <div className="  flex flex-col text-center md:flex-row md:justify-between md:text-start bg-[#495e57] px-[20px] py-[32px] md:px-[288px] md:py-[32px]  -z-10" id="Hero">
      {/* Left side of the Hero section */}
      <div className=''>
        <h1 className="text-[#f4ce14] font-semibold text-5xl md:text-[45px] pt-[8px]">Little Lemon</h1>
        <h4 className=" pt-[10px] text-[20px] font-bold text-white">Chicago</h4>
        <p className=" text-white px-[70px] py-6 md:px-[0px]  font-bold md:w-[50%] ">
          We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <button
         className="bg-[#f4ce14] p-[10px] rounded-[10px] font-bold text-[20px] cursor-pointer hover:translate-y-2 hover:translate-y-2  duration-500 easy-in-out "
         onClick={() => navigateFunc('/reservation')}
        >
          Reserve a Table
        </button>
      </div>

      {/* Right side of the Hero section with image */}
      <div className="rounded-[20px] flex justify-center ">
        <figure className='item-center'>
          <img className="   rounded-[20px] mt-[40px] md:mt-[0px] h-[393px] w-[374px]  md:w-98 md:h-[] z-40 " src={HeroImage} alt="HeroImage" />
        </figure>
      </div>
    </div>
  );
}

export default Hero;

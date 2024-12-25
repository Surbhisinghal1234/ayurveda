import React from 'react';
import "./heroSection.css"

const HeroSection = () => {
  return (

    <>
    <div className="hero-sec hidden lg:block">
      <div className="left"></div>
      <div className="right"></div>

      <div className="hero-content">
      <p className='text-primary text-3xl'>Namaste, Welcome to Amrutam</p>
        <h3 className='text-white font-semibold text-[2.5rem] xl:text-[3.3rem] leading-[65px] '>Step into Holistic Healing with <span className='text-primary relative'>Ayurveda   <span className='absolute bottom-0 left-0 w-full h-[2px] bg-primary'></span> </span>  Book Consultation with certified Experts  </h3>
        <p className='w-[75%] text-xl text-primary'>Dive into the world of ayurveda and Experience Personalized Health Solutions and Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.</p>
        <button className='bg-dark py-[10px] w-[18rem] mt-3 rounded-[10px] text-xl'>BOOK AN APPOINTMENT</button>
      </div>
    </div>
    <div className="hero-sec-phone block lg:hidden ">

      <div className="hero-content-phone flex flex-col gap-[1rem] px-[1.5rem] sm:px-[3rem] py-[6rem]">
      <p className='text-primary text-xl sm:text-2xl'>Namaste, Welcome to Amrutam</p>
        <h3 className='text-white font-semibold text-[2rem] '>Step into Holistic Healing with <span className='text-primary relative'>Ayurveda   <span className='absolute bottom-0 left-0 w-full h-[2px] bg-primary'></span> </span>  Book Consultation with certified Experts  </h3>
        <p className=' text-xl text-primary'>Dive into the world of ayurveda and Experience Personalized Health Solutions and Holistic Guidance from Trusted Ayurvedic Doctors Anytime, anywhere.</p>
        <button className='bg-dark py-[10px] w-[16rem]   rounded-[10px] text-white text'>BOOK AN APPOINTMENT</button>
      </div>
    </div>
    
    </>

  );
};

export default HeroSection;

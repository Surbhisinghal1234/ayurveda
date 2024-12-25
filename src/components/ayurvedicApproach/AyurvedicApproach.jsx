import React from 'react'
import { cardData } from './CardData'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import "./ayurveda.css"

const AyurvedicApproach = () => {
  return (
    <>
      <div className='ayurveda m-auto flex flex-col items-center py-[4rem] gap-[3rem]  px-[3rem] lg:px-[4rem] xl:px-[8rem]'>


        <div className=' sm:w-[70%] lg:w-[60%]  gap-[1rem] flex flex-col justify-center items-center'>
          <h2 className=' text-[2.2rem] lg:text-[3rem] text-center font-semibold text-dark'>Our Ayurvedic Approach</h2>
          <p className='text-center text-[#323232]'>At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient’s body type, medical history, and current health conditions.</p>
        </div>


        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper ayurveda-swiper h-[10rem] "
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }
          }}
        >
          {cardData.map((item) => (
            <SwiperSlide key={item.id} className='bg-primary flex flex-col justify-center items-center gap-4 px-10 py-8 rounded-[18px]  border-t-4 border-dark '>


              <p className='bg-[#7b9472] rounded-full border-dark border px-[1.3rem] py-[10px] text-white font-semibold text-2xl'>{item.points}</p>
              <p className='text-dark font-semibold text-xl'>{item.heading}</p>
              <p className='text-center text-[#2E2E2E]'>{item.para}</p>


            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default AyurvedicApproach
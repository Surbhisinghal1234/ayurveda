import React from 'react'
import { customerData } from './CustomerData'
import "./customerStories.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const CustomerStories = () => {
  return (
   

    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-[10rem] "
        breakpoints={{
          0: { slidesPerView: 1 },  
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }  
        }}
      >
        {customerData.map((customer) => (
          <SwiperSlide key={customer.id} className=''>

            <div className='flex flex-col gap-3 bg-white rounded-[20px]'>

              <div className={`${customer.consultationType === 'Skin' ? 'bg-purple-100' : 'bg-green-100'} px-6 py-3 rounded-t-[16px]`}>

                <p className="font-semibold">Consulted for {customer.consultationType}</p>
              </div>
              <div className="px-6 pt-6 pb-10 gap-2 flex flex-col ">
                <div className="flex justify-between">
                  <div className='flex items-center gap-4 sm:gap-1 md:gap-4 '>
                    <p className='w-10 h-10 sm:h-12 sm:w-12 bg-[#000000b8] rounded-full'></p>
                    <div className='flex flex-col items-start'>
                      <p className=" font-semibold text-[16px] sm:font-bold">{customer.name}</p>
                      <p className='text-[16px] '>{customer.location}</p>
                    </div>
                  </div>
                  <p className='text-[16px] '>{customer.date}</p>

                </div>
                <div className="flex mt-2 ">
                  {Array.from({ length: customer.rating }).map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <h3 className=" font-semibold text-[16px]   sm:text-xl text-start">{customer.reviewTitle}</h3>
                <p className=" text-start text-[16px] sm:text-xl text-[#555555]">{customer.reviewText}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default CustomerStories




import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { expertData } from './expertData';
import "./expert.css"
import { FaGraduationCap } from 'react-icons/fa';

const Experts = () => {

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper h-[10rem] "
            breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }}
        >
            {expertData.map((expert) => (
                <SwiperSlide key={expert.id} className=''>

                    <div className='flex flex-col gap-3 px-[1rem] py-[2.5rem]'>
                        <div className=''>

                            <div className='relative'>
                                <img src={expert.image} alt="" className='m-auto relative' />
                                <div className=" inline-block left-[8.8rem] md:left-[10.2rem] absolute bottom-0 w-[5rem] bg-black rounded-[2.5rem] py-1 px-2 ">
                                    <span className=" font-bold text-white mr-1">{expert.rating}</span>
                                    <span className=" text-yellow-500">⭐</span>
                                </div>
                            </div>

                        </div>

                        <p className="font-semibold text-2xl">{expert.name}</p>
                        <div className='text-[#838383]'> {expert.title}</div>


                        <p className="flex justify-center gap-2 items-center"> <span className='text-dark '> <FaGraduationCap size={30} /></span>  <span>{expert.experience}</span> </p>

                        <div className='flex gap-3 bg-[#3a643b36] px-6  py-1 text-dark rounded-full w-[13rem] m-auto mt-2 '>

                            <div className="h-[1.5rem] w-[.6rem] rounded-lg border-2 border-dark relative flex justify-center items-center transform rotate-45">
                                <div className="h-[2px] w-[90%] bg-dark"></div>
                            </div>


                            <span className="">
                                {expert.specialty}
                            </span>
                        </div>

                    </div>
                    <p className='bg-dark rounded-b-[30px] py-4 text-white text-xl'>{expert.session}</p>


                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Experts;

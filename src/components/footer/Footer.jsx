import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='px-[3rem] sm:px-[6rem] md:px-0 bg-footercolor flex flex-col w-[100%] md:items-center gap-[2rem] pt-[5rem] pb-[6rem]'>


                <div className='flex md:hidden  text-justify  flex-col gap-2'>
                    <h3 className='text-dark text-xl font-bold'>Get in touch</h3>
                    <div className='text-xl text-black flex flex-col gap-[2rem]'>
                        <p>
                            support@amrutam.co.in
                        </p>
                        <p>


                            Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar, Gwalior - 474001
                        </p>
                        <p>+91 9713171999</p>
                    </div>

                </div>


                <div className=' text-justify flex flex-col gap-2'>
                    <h3 className='text-dark text-xl font-bold'>Information</h3>
                    <div className='text-xl text-[#474747]'>
                        <p>About Us
                        </p>
                        <p>
                            Terms and Conditions
                        </p>
                        <p>
                            Privacy Policy
                        </p>
                        <p>
                            Privacy Policy for Mobile Apps
                        </p>
                        <p>
                            Shipping and Returns Policy
                        </p>
                        <p>
                            International Delivery
                        </p>
                        <p>
                            For Businesses, Hotels and Resorts
                        </p>
                    </div>

                </div>


                <div className='flex md:hidden text-justify  flex-col gap-10'>
                    <h3 className='text-dark text-xl font-bold'>Subscribe to our Newsletter and join Amrutam Family today!</h3>
                    <div className='sm:text-xl text-[#474747]'>
                        <div className=' inline relative '> <span className='border-t-2 border-b-2  border-l-2 border-dark rounded-[2rem] sm:pl-6 sm:pr-[2.5rem] sm:py-3 pl-4 pr-[2rem] py-2 '>Your Email Address</span>
                        <button className='bg-black absolute sm:top-[-14px] sm:right-[-93px] top-[-9.5px] right-[-60px] py-[8.5px] sm:py-[13px] text-white rounded-r-[2rem] px-2 sm:px-4'>Subscribe</button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer
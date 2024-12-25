import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='px-[1.5rem] sm:px-[4rem] md:px-0 bg-footercolor flex flex-col w-[100%] md:items-center gap-[2rem] pt-[5rem] pb-[6rem]'>


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

                    {/* <div className=' border-dark border-2 rounded-[2rem] w-[17.4rem] flex gap-4 items-center'> <span className='pl-6 sm:text-xl text-[#474747]'>Your Email Address</span>
                        <button className='bg-black rounded-r-[2rem]  text-white  py-2 px-4'>Subscribe</button>
                        </div> */}

                    <div className='border-dark border-2 rounded-[2rem]  min-w-[17.4rem] flex gap-4 items-center justify-between'>
                        <span className='pl-6 sm:text-xl text-[#474747] flex-1'>Your Email Address</span>
                        <button className='bg-black rounded-r-[2rem] text-white py-2 px-4'>
                            Subscribe
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer
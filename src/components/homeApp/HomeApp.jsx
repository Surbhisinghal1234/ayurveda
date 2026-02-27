import img1 from "../../assets/images/image1.png"
import img2 from "../../assets/images/image2.png"
import iphone from "../../assets/images/iPhone.png"
import "./homeApp.css"

const HomeApp = () => {
    return (
        <>
            <div className='mt-2 hidden lg:flex bg-primary  gap-[2rem] px-[1.5rem] sm:px-[3rem] lg:px-[4rem] xl:px-[8rem] py-[4rem] '>

                <div className='lg:w-[50%] flex flex-col gap-[2.5rem]'>

                    <div className='flex flex-col gap-[1rem]'>
                        <h2 className='text-dark text-[2.2rem] lg:text-[3rem] font-semibold'>Amrutam home App</h2>
                        <p className='text-[#676767]'>The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.</p>
                        <h3 className='font-semibold text-[1.8rem]'>Get a diet & lifestyle consultation with ayurvedic experts across the globe </h3>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='font-bold text-[2rem] '>Get the App now</h2>

                        <div className='flex flex-col md:flex-row gap-4'>
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />

                        </div>

                    </div>
                </div>


                    <div  className=''>
                        <div className='img-head relative'>
                            <img className='iphone-img relative' src={iphone} alt="" />
                            <p className='ellipse1  rounded-full '>
                        </p>

                        <p className='ellipse2 rounded-full'>
                        </p>
                        </div>
                        



                </div>

            </div>



            <div className='mt-2 block lg:hidden bg-primary items-center    gap-[2rem] px-[3rem] lg:px-[8rem] py-[4rem] '>


                    <div className='flex flex-col items-center gap-[1rem]'>
                        <h2 className='text-dark text-[2rem] lg:text-[3rem] font-semibold text-center'>Amrutam home App</h2>
                        <p className='text-[#676767] text-center'>The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.</p>
                        <h3 className='text-center font-semibold text-[1.5rem]'>Get a diet & lifestyle consultation with ayurvedic experts across the globe </h3>
                    </div>
                   


                    <div  className=''>
                            <img className='iphone-img ' src={iphone} alt="" />
                           
                        
                </div>
                <div className='flex flex-col gap-6 items-center'>
                        <h2 className='font-bold text-[2rem] '>Get the App now</h2>

                        <div className='flex flex-col md:flex-row gap-6'>
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />

                        </div>

                    </div>

            </div>
        </>
    )
}

export default HomeApp
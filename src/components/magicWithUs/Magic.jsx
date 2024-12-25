import React from 'react'
import round from "../../assets/images/round.png"
import strong from "../../assets/images/strong.png"
import yogaGirl from "../../assets/images/yoga-girl.png"
import heartBeat from "../../assets/images/heartbeat.png"
import ribbon from "../../assets/images/ribbon.png"
import protection from "../../assets/images/protection.png"
import ayurveda from "../../assets/images/ayurveda.png"
import lotusPosition from "../../assets/images/lotus-position.png"
import { magicCards } from './MagicData'

const Magic = () => {
    return (
        <>
        <div className='flex flex-col md:flex-row items-center gap-6'>

        <div className='xl:w-[35%] hidden  md:flex  flex-col gap-[3rem] order-[1] md:order-[1]'>

            <div className='flex flex-col-reverse md:flex-row '>
                <div className='w-[60%]'>
                    <h4 className='font-semibold'>Personalized Wellness
                    </h4>
                    <p className='text-[#515151]'>Get treatments made just for you based on your individual doshas ( body type)</p>
                </div>

                <div className='bg-[#EDF5FA] rounded-full h-[6rem] w-[6rem] flex justify-center items-center '>
                    <img className='ml-2 mt-2' src={heartBeat} alt="" />
                </div>
            </div>
            <div className='flex'>
                <div className='w-[60%]'>
                    <h4 className='font-semibold'>Personalized Wellness
                    </h4>
                    <p className='text-[#515151]'>Get treatments made just for you based on your individual doshas ( body type)</p>
                </div>

                <div className='bg-[#EAF2EA] rounded-full h-[6rem] w-[6rem] flex justify-center items-center '>
                    <img className='' src={ribbon} alt="" />
                </div>
            </div>
            <div className='flex'>
                <div className='w-[60%]'>
                    <h4 className='font-semibold'>Personalized Wellness
                    </h4>
                    <p className='text-[#515151]'>Get treatments made just for you based on your individual doshas ( body type)</p>
                </div>

                <div className='bg-[#FCF1F1] rounded-full h-[6rem] w-[6rem] flex justify-center items-center '>
                    <img className=' ' src={lotusPosition} alt="" />
                </div>
            </div>
        </div>

        <div className='order-[-1] md:order-[2]'>

      <div className='relative m-auto flex justify-center'>
        <img src={round} alt="" />
        <div className='absolute top-[2.2rem] '>
        <img  src={yogaGirl} alt="" />

        </div>
      </div>
        </div>



        <div className='xl:w-[35%] hidden md:flex md:flex-col gap-[3rem] order-[2]'>

<div className='flex '>
    <div className='w-[60%]'>
        <h4 className='font-semibold'>Personalized Wellness
        </h4>
        <p className='text-[#515151]'>Get treatments made just for you based on your individual doshas ( body type)</p>
    </div>

    <div className='bg-[#F5F3FC] rounded-full h-[6rem] w-[6rem] flex justify-center items-center '>
        <img className='ml-2 mt-2' src={protection} alt="" />
    </div>
</div>
<div className='flex'>
    <div className='w-[60%]'>
        <h4 className='font-semibold'>Personalized Wellness
        </h4>
        <p className='text-[#515151]'>Get treatments made just for you based on your individual doshas ( body type)</p>
    </div>

    <div className='bg-[#FEFCED] rounded-full h-[6rem] w-[6rem] flex justify-center items-center '>
        <img className='ml-2 mt-2' src={ayurveda} alt="" />
    </div>
</div>
<div className='flex'>
    <div className='w-[60%]'>
        <h4 className='font-semibold'>Personalized Wellness
        </h4>
        <p className='text-[#515151]'>Get treatments made just for you based on your individual doshas ( body type)</p>
    </div>

    <div className='bg-[#EAF2EA] rounded-full h-[6rem] w-[6rem] flex justify-center items-center '>
        <img className='ml-2 mt-2' src={strong} alt="" />
    </div>
</div>
</div>



<div className="grid grid-cols-2 md:hidden gap-4">
      {magicCards.map((card, index) => (
        <div key={index} className="bg-white flex flex-col gap-4 items-center  p-4 rounded-lg shadow-md">
          <div className='bg-[#EAF2EA] rounded-full h-[6rem] w-[6rem] flex justify-center items-center '  style={{ backgroundColor: card.bgColor }} >
        <img className='ml-2 mt-2' src={card.image} alt="" 
          
        />
    </div>
          <h3 className="text-xl text-center font-semibold mb-2">{card.head}</h3>
          <p className="text-gray-700 text-center">{card.text}</p>
        </div>
      ))}
    </div>
        </div>

        </>

    )
}

export default Magic
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const ExpertButton = () => {
  return (
    <div className='flex items-center gap-3 bg-[#DBE3DC] text-dark px-6 py-2 rounded-lg text-[1.5rem] border-dark border '>
        <button className=''>Find more experts</button>
        <span className='text-[18px]' ><IoIosArrowForward /></span>
    </div>
  )
}

export default ExpertButton
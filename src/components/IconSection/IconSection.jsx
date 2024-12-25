
import React from 'react'
import { items } from './IconData'

const IconSection = () => {
  return (
    <div className="w-full bg-primary px-4 sm:px-8 lg:px-32 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="flex  items-center sm:items-start justify-center border-[#FFF1CF] border-b-2 md:border-b-2 sm:border-2  p-6  md:gap-4 "
          >
            <div className='rounded-full bg-white border-2 border-dark h-[4.1rem] w-[5rem] p-4 flex justify-center items-center '>
              <img src={item.image} alt={`Item ${index + 1}`} className="w-full h-full" />
            </div>
            <p className="text-dark font-semibold text-center sm:text-left w-full">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default IconSection

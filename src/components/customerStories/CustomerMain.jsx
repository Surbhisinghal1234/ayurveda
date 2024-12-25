import React from 'react'
import CustomerHead from './CustomerHead'
import CustomerStories from './CustomerStories'

const CustomerMain = () => {
  return (
    <div className='bg-primary py-[3rem] flex flex-col gap-[3rem] px-[1.5rem] sm:px-[3rem] lg:px-[4rem] xl:px-[8rem]'>
        <CustomerHead/>
        <CustomerStories/>
    </div>
  )
}

export default CustomerMain
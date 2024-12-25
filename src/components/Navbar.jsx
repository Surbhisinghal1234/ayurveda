import React from 'react'
import logo from "../assets/images/logo.png"
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div >

      <nav className='bg-primary h-[5rem] flex justify-start items-center px-[1rem]'>
      <IoIosMenu className='text-4xl text-dark flex md:hidden' />
<img className='flex md:hidden m-auto' src={logo} alt="" />
      </nav>

    </div>
  )
}

export default Navbar
// import React from 'react'
// import logo from "../assets/images/logo.png"
// import { IoIosMenu } from "react-icons/io";

// const Navbar = () => {
//   return (
//     <div >

//       <nav className='bg-primary h-[5rem] flex justify-start items-center px-[1rem]'>
//       <IoIosMenu className='text-4xl text-dark flex md:hidden' />
// <img className='flex md:hidden m-auto' src={logo} alt="" />
//       </nav>

//     </div>
//   )
// }

// export default Navbar
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-700">
          Ayurveda
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* CTA Button */}
        <button className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition">
          Book Now
        </button>
      </div>
    </nav>
  );
}
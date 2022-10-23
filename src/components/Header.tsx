import React from 'react';
import logo from '../assets/logo.png';
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <div className=''>
      <header className="flex space-x-10 justify-between bg-[#242424]">
        <div className='flex items-center'>
          
          <img src={logo} className="object-scale-down h-20 w-30 items-center p-1"/>

        <ul className='flex text-[#12A8F4] text-lg font-bold items-center pl-5 h-full'>
          <Link to='/' className='hover:bg-[#414141] active:bg-[#313131] h-full p-5'>Forside</Link>
          <Link to='OmOss' className='hover:bg-[#414141] active:bg-[#313131] h-full p-5'>Om meg/senteret</Link> 
          <Link to='/booking' className='hover:bg-[#414141] active:bg-[#313131] h-full p-5'>Booking</Link> 
          <Link to='/shop' className='hover:bg-[#414141] active:bg-[#313131] h-full p-5'>Shop</Link>
        </ul>
        </div>
      <div className='flex items-center'>
      <ul className=' text-[#F746A1] flex font-bold h-full text-lg'>
          <Link to='#log in' className='hover:bg-[#414141] active:bg-[#313131] h-full p-5'>Log in</Link>
          <Link to='#log in' className='hover:bg-[#414141] active:bg-[#313131] h-full p-5'>Sign in</Link>
      </ul>
      </div>

      </header>   
      

    </div>
  );
}



export default Header;
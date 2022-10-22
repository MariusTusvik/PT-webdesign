import React from 'react';
import logo from '../assets/logo.png';
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <div className=''>
      <header className="flex space-x-10 justify-between bg-[#242424]">
        <div className='flex items-center'>
          
          <img src={logo} className="object-scale-down h-20 w-30 items-center"/>

        <ul className='flex gap-x-8 text-[#12A8F4] text-lg font-bold items-center pl-5 h-full'>
          <Link to='/' className='hover:bg-[#414141] active:bg-[#313131]'>Forside</Link>
          <Link to='OmOss' className='hover:bg-[#414141] active:bg-[#313131]'>Om meg/senteret</Link> 
          <Link to='/booking' className='hover:bg-[#414141] active:bg-[#313131]'>Booking</Link> 
          <Link to='/shop' className='hover:bg-[#414141] active:bg-[#313131]'>Shop</Link>
        </ul>
        </div>
      <div className='flex items-center'>
      <ul className='items-center text-[#F746A1] flex gap-x-8 font-bold h-full text-lg place-items-center'>
          <Link to='#log in' className='hover:bg-[#414141] active:bg-[#313131] h-full items-center place-items-center'>Log in</Link>
          <Link to='#log in' className='hover:bg-[#414141] active:bg-[#313131] h-full '>Sign in</Link>
      </ul>
      </div>

      </header>   
      

    </div>
  );
}



export default Header;
import React from 'react';
import logo from '../assets/logo.png';
import Container from './Container' ;
import icon from '../assets/icon.png';
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <div>
     <Container className='bg-[#242424]'>
      <header className="flex p-5 space-x-10 justify-between">
        <div className='flex items-center'>
          
          <img src={logo} className="object-scale-down h-20 w-30 items-center"/>

        <ul className='flex gap-x-6 text-[#12A8F4] text-lg font-bold items-center'>
          <Link to='/' className='hover:bg-[#414141] active:bg-[#313131]'>Forside</Link>
          <Link to='OmOss' className='hover:bg-[#414141] active:bg-[#313131]'>Om meg/senteret</Link>
          <Link to='/booking' className='hover:bg-[#414141] active:bg-[#313131]'>Booking</Link> 
          <Link to='/shop' className='hover:bg-[#414141] active:bg-[#313131]'>Shop</Link>
        </ul>
        </div>

      <ul className='items-center text-[#F746A1] flex gap-x-6 font-bold'>
          <Link to='#log in' className='hover:bg-[#414141] active:bg-[#313131]'>Log in</Link>
          <Link to='#log in' className='hover:bg-[#414141] active:bg-[#313131]'>Sign in</Link>
      </ul>

      </header>   
      </Container>

    </div>
  );
}
const NavItem = ({text, href}: {href: string, text: string}) => 
(
  <li className='border-b-4 border-transparent hover:text-pink-500 text-bold'><a href={href}></a>{text}</li>
)



export default Header;
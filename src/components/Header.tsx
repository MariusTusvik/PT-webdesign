import React from 'react';
import logo from '../assets/logo.png';
import Container from './Container' ;
import icon from '../assets/icon.png';
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <div>
     <Container className='bg-gradiant-to-r from-gray-700 to-transparent'>
      <header className="flex p-5 space-x-10 justify-between">
        <div className='flex items-center'>
          
          <Link to='/'>
          <img src={logo} className="object-scale-down h-40 w-40 items-center"/>
          </Link>

        <ul className='flex gap-x-4 text-black text-lg font-bold items-center hover:text-pink-500 text-bold'>
            <Link to='/booking'>Booking</Link> 
            <Link to='/shop'>Shop</Link>
        </ul>
        </div>

      <button className='items-start'>
      <img src={icon} className="object-scale-down h-10 w-10"/>
      </button>

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
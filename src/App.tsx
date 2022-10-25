import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Booking from './Pages/Booking';
import Shop from './Pages/Shop';

import logoandstar from './assets/Logoandstar.png'

function App() {
  return (
    <div className='bg-[#1A1A1A]'>
      <hr className='line py-10' />
      <div className='place-content-center flex py-10'>
        <img src={logoandstar} className="flex" />
      </div>

      <div className='text-white font-bold w-full place-content-center pb-20'>
        <p className=' text-center items-center text-2xl'>
          we patiently await the inevitable waking of azathoth the blind idiot god
        </p>
      </div>

    </div>
  );
}


export default App;

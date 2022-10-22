import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Booking from './Pages/Booking';
import Shop from './Pages/Shop';
import logowhite from './assets/logowhite.png';

function App() {
  return (
    <div className='items-center align-middle'>
   <div className='bg-[#1e1e1e] items-center flex align-middle'>
    <img src={logowhite} className=""/>
   </div>
    <div className='bg-[#1e1e1e] items-center text-white font-bold'>
      <p>
        we patiently await the inevitable waking of azathoth the blind idiot god
      </p>
    </div>
    </div>
  );
}


export default App;
 
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Booking from './Pages/Booking';
import Shop from './Pages/Shop';
import logowhite from './assets/logowhite.png';

function App() {
  return (
   <div className='bg-[#1e1e1e] items-center flex'>
    <img src={logowhite} className="flex "/>
   </div>
  );
}


export default App;

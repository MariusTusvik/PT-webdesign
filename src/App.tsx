import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Booking from './Pages/Booking';
import Shop from './Pages/Shop';

function App() {
  return (
   <div>
  <nav className=' border-b-4 border-black pb-4'>
  <Link to='/booking'>Booking</Link> |{" "}
  <Link to='/shop'>Shop</Link>
  <Outlet />

  </nav>    
   </div>
  );
}


export default App;

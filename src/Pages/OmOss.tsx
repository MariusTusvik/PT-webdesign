import React from 'react';
import { Link } from "react-router-dom";
import gym from '../assets/Gym.png';
import '../index.css';


function OmOss() {
  return (
    <body className='bg-[#212121]'>
      <div>
        sadfgsdaf
      </div>

      <div className='line' > </div>

      <div className='flex p-32 gap-20 pb-10'>
        <img src={gym} className='flex imgOm' />

        <h5 className='flex text-[#12a8f4] font-bold text-5xl'>
          Cthulu is real and you should come pray with us
        </h5>
      </div>
      <div className='pl-32 text-[#F746A1] text-3xl font-bold '>
        read more about simens bad titles here
      </div>
    </body>


  );
}

export default OmOss;
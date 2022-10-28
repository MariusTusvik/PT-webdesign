import React from 'react';
import { Link } from "react-router-dom";
import gym from '../assets/Gym.png';


function OmOss() {
  return (
    <body className='bg-[#1a1a1a] px-56 py-20'>

      <hr className='line py-10' />
      <div className='px-25'>
        <div className='flex  gap-20 '>
          <img src={gym} className='flex imgOm' />

          <h5 className='flex text-[#12a8f4] font-bold text-6xl w-3/4 py-20'>
            Cthulu is real and you should come pray with us
          </h5>
        </div>

        <div className='text-[#F746A1] text-3xl font-bold items-end'>
          <h4 className='p-10'>
            Read more about simens bad titles here
          </h4>
          <hr className='pinkline' />
        </div>

        <div className='text-white  text-ellipsis w-1/2 p-10'>
          <p className=' text-2xl break-normal'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus est pellentesque elit ullamcorper dignissim. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra.
          </p>
        </div>

      </div>

    </body>


  );
}

export default OmOss;
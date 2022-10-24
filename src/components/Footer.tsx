import React from 'react';
import Facebook from '../assets/Facebook.png'


function Footer () {
    return (
        <footer className='bg-red'>
        <div className='flex'>

        <img src={Facebook} className="object-scale-down h-20 w-30 items-center p-1" />

        </div>
        </footer>
    );
}
export default Footer;
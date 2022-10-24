import React from 'react';
import Facebook from '../assets/Facebook.png'
import Twitter from '../assets/Twitter.png'
import Tiktok from '../assets/Tiktok.png'
import Instagram from '../assets/Instagram.png'

function Footer () {
    return (
        <footer className='bg-red'>
            <div className='row flex bg-black'>
                <img src={Facebook} className="object-scale-down h-20 w-30 items-center p-1" />
                <img src={Twitter} className="object-scale-down h-20 w-30 items-center p-1" />
                <img src={Tiktok} className="object-scale-down h-20 w-30 items-center p-1" />
                <img src={Instagram} className="object-scale-down h-20 w-30 items-center p-1" />
            </div>

            <div className='row flex'>
                <div className='col-xs-10 col-sm-8 bg-red-600'>
                    "DJ Chicken Has Been Here"
                </div> 
            </div>  

        </footer>
    );
}
export default Footer;
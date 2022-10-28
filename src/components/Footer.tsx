import React from 'react';
import Facebook from '../assets/Facebook.png'
import Twitter from '../assets/Twitter.png'
import Tiktok from '../assets/Tiktok.png'
import Instagram from '../assets/Instagram.png'
import TextField from "@mui/material/TextField";


function Footer () {
    return (
        <footer className='Footer' >
             
            <div className='MainDiv row'>
                <div className='flex'>
                    <img src={Facebook} className="object-scale-down h-16 w-15 items-center m-2" />
                    <img src={Twitter} className="object-scale-down h-16 w-15 items-center m-2" />
                    <img src={Tiktok} className="object-scale-down h-16 w-15 items-center m-2" />
                    <img src={Instagram} className="object-scale-down h-16 w-15 items-center m-2" />
                </div>

                <div className='flex'>
                    <div className='WhiteFont'>
                        "DJ Chicken Has Been Here"
                    </div> 
                </div> 
            </div>

            <div className='MainDiv row'>
                <div className='LeftDiv WhiteFont Text'>
                    <p className='Fatman'> Kontakt </p>
                    
                    <></>
                    <p> Lorem Ipsum is simply dummy text of </p>
                    <p> the priting and typestting industry </p>
                    <p> Lorem Impsum has </p>
                    <></>
                </div>

                <div className='RightDiv WhiteFont Text'>
                    <p className='Fatman'> Skriv deg opp for oppdateringer</p>
                    <p className='Fatman'> om rabatter og gruppetreninger</p>
                    <hr></hr>
                    <TextField id="outlined-basic" label="E-post" variant="outlined"/>
             </div>
            </div>
            
            <div className='MainDiv row'>
                <div className='LeftDiv WhiteFont Text'>
                    <p> been the industry's standard dummy </p>
                    <p> text ever </p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
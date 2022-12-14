import React, { HtmlHTMLAttributes, useState } from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../assets/logo.png';
import { Outlet, Link } from "react-router-dom";


function LogIn() {
    const [name, setName] = useState("");
    return (

        <body className="bg-[#1a1a1a] justify-center items-center flex-col flex">
            <div className='p-10'/>
            <hr className='line py-10' />
            <div className="  bg-[#242424] w-96 bg-center justify-center items-center flex-col flex p-10">
                <img src={logo} className="object-scale-down h-20 w-30 items-center p-1" />

                <form className='items-center justify-center flex flex-col' action="">
                    <label>
                        <p className=' text-3xl text-center text-white font-bold pb-16 items-center'> Log in. </p>
                        
                        <input
                        className='px-5 py-1 rounded'
                            type="text"
                            name='groupname'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                   
                    </label>

                    <Link to='/' className=' text-[#12A8F4] pb-16 h-full p-5 text-left'> Har du glemt e-postaddressen ?</Link>
                    <Link to='/' className=' text-[#F746A1] pb-16 h-full p-5'> Har du ikke en bruker?</Link>

                    

                </form>
            </div>
            <div className=' p-32'>
            
            </div>
        </body>
    )
}
export default LogIn;
import React, { HtmlHTMLAttributes, useState } from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../assets/logo.png';


function LogIn() {
    const [name, setName] = useState("");
    return (

        <body className="bg-[#1a1a1a] justify-center items-center flex-col flex">
            <hr className='line py-10' />
            <div className="  bg-[#242424] w-96 bg-center justify-center items-center flex-col flex p-8">
                <img src={logo} className="object-scale-down h-20 w-30 items-center p-1" />

                <form className='items-center justify-center flex flex-col' action="">
                    <label>
                        <p className=' text-3xl text-center text-white font-bold pb-16 items-center'> Log in. </p>
                        <input
                            type="text"
                            name='groupname'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <button className=' text-[#12A8F4] pb-16'>
                        Har du glemt e-postaddressen ?
                    </button>

                </form>
            </div>





        </body>
    )
}
export default LogIn;
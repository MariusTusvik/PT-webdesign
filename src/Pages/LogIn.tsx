import React, { HtmlHTMLAttributes, useState } from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../assets/logo.png';


function LogIn() {
    const [name, setName] = useState("");
    return (

        <body className="bg-[#1a1a1a]">
            <hr className='line py-10' />
            <div className=" p-96 bg-[#242424">
                <img src={logo} className="object-scale-down h-20 w-30 items-center p-1" />

                <form action="">
                    <label>
                        <p className=' text-3xl text-center text-white'> Log in. </p>
                        <input
                            type="text"
                            name='groupname'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                    </label>
                </form>
            </div>





        </body>
    )
}
export default LogIn;
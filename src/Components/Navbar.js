import React from 'react';
import { useState } from 'react';
import './Navbar.css';


function Navbar() {

    const [navbar, setnavbar] = useState(false);

    // for sub menu sticky color change 

    const [color , setcolor]  = useState(false);
const NEWFUN = () =>{
    if(window.screenY >=200 ){
        setcolor(true)
    }else{
        setcolor(false)
    }
}





    const Myfun = () =>{

        if(window.scrollY  >= 200){

            setnavbar(true);
        }else{
            setnavbar(false);
        }

        
    }
    window.addEventListener("scroll" ,Myfun)
    window.addEventListener("scroll" , NEWFUN)
    
    return (
        <header className={navbar ? 'flex justify-between bg-blue-800 text-white fixed w-full text-white navbar bg-blue-800 text-white' :'navbar  flex justify-between fixed w-full text-white '}>

            <div className="flex  justify-between px-10">
                <h3 className='px-10 py-10 uppercase font-extrabold tracking-widest'>
                    Hostinger
                </h3>

                <h3 className='px-10 py-10 capitalize font-medium'>English</h3>
            </div>

            <nav>
                <ul className='flex justify-between px-11 font-medium text-white  '>
                    <li className="px-8 py-10 Hosting "> <a href="#" className='capitalize'>hosting</a>

                        <div className={color ? "submenu-1 w-62 bg-white text-black  absolute left-92 px-14 rounded h-70 py-8 hidden bg-blue-500 text-white":"submenu-1 w-62 bg-white text-black  absolute left-92 px-14 rounded h-70 py-8 hidden "}>
                            <div className='py-3 capitalize'><a href="#" >web hosting <span className='block font-light'>For Small to Medium website</span></a> </div>
                            <div className='py-3 capitalize'><a href="#" >cloud hosting<span className='block font-normal'>For large scale Project</span></a> </div>
                            <div className='py-3 capitalize'><a href="#" >wordpress hosting<span className='block font-normal'>Optimized solution for wordpress Hosting</span></a> </div>
                            <div className='py-3 capitalize'><a href="#" >hosting for agencies<span className='block font-normal'>Made with developer bussiness in Mind</span></a> </div>
                        </div>
                    </li>
                    <li className="px-8 py-10 Vps"> <a href="#" className='uppercase'>vps</a>
                    <div className={color ? "submenu-2 w-62 bg-white text-black  absolute left-92 px-14 rounded h-64 py-8 hidden text-white bg-blue-500":"submenu-2 w-62 bg-white text-black  absolute left-92 px-14 rounded h-64 py-8 hidden "}>
                            <div className='py-3 capitalize'><a href="#" >Vps hosting <span className='block font-normal'>Deticated resources to scale.</span></a> </div>
                            <div className='py-3 capitalize'><a href="#" >CyperPanal Hosting <span className='block font-normal'>Control Panel with Open Webserver</span></a> </div>
                            <div className='py-3 capitalize'><a href="#" >Minecraft Server Hosting <span className='block font-normal'>Share your Minecraft Experience</span></a> </div>
                         
                        </div>
                     </li>
                    <li className="px-8 py-10 Email"> <a href="#" className='capitalize'>email</a> 
                    <div className="submenu-3 w-62 bg-white text-black  absolute left-92 px-14 rounded h-62 py-6  hidden ">
                            <div className='py-3 capitalize'><a href="#" >Google Workspace Email Hosting <span className='block font-normal'>Get custom email and 30GB of storage.</span></a> </div>
                            <div className='py-3 capitalize'><a href="#" >Titan Email Hosting <span className='block font-normal'>Promote your business with every outreach.</span></a> </div>
                          
                         
                        </div>
                    </li>
                    <li className="px-8 py-10 Domain"> <a href="#" className='capitalize'>domain</a>
                    
                    <div className="submenu-4 w-62 bg-white text-black  absolute left-92 px-14 rounded h-64 py-6 hidden">
                            <div className='py-3 capitalize'><a href="#" >Domain Checker <span className='block font-normal'>Find the Perfect Domain Name.</span></a> </div>
                            <div className='py-3 capitalize'><a href="#" >WHOIS Lookup<span className='block font-normal'>Lookup Tool  to find WHOIS information.</span></a> </div>
                            <div className='py-3 capitalize'><a href="#" >Domain Transfer<span className='block font-normal'>Want to Transform domain to  Hostinger?</span></a> </div>
                         
                        </div>
                     </li>
                    <li className="px-8 py-10 "> <a href="#" className='capitalize border-2 px-8 py-1 border rounded-2xl '>log in</a> </li>
                    <li className="px-8 py-10"> <a href="#" className='capitalize'>card</a> </li>



                </ul>
            </nav>

        </header>
    )
}

export default Navbar
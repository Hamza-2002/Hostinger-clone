import React from 'react';
import './Header.css';

function Header() {
    return (
        <>
            <div className="full-width h-screen bg-gradient-to-r from-blue-600 to-blue-900 header" >


                <div className="absolute top-80  left-1/2  translate  w-1/2 text-center text-white " >
                    <h1 className='font-black text-4xl '>Web Hosting as Dynamic as Your <br /> Business</h1>
                    <h1 className='mt-2'><sup>$</sup> <span className='text-3xl font-extrabold'>2.99</span><sub>/mo</sub></h1>
                    <p className='  text-center mt-3    font-semibold' >Start your journey with our Premium plan and get a personal domain, lifetime SSL, and DDoS protection for free with a yearly subscription.</p>
                    <div className="mt-2 ">

                        <ul className='flex justify-center mt-8 clock  ' >
                           <div className=" border-2 px-5 py-3 rounded-lg bg-white text-black" >00</div> <span className='p-2'></span>
                           <div className=" border-2 px-5 py-3 rounded-lg bg-white text-black">05</div><span className='p-2'></span>
                           <div className=" border-2 px-5 py-3 rounded-lg bg-white text-black">23</div><span className='p-2'></span>
                           <div className=" border-2 px-5 py-3 rounded-lg bg-white text-black">09</div><span className='p-2'></span>
                        </ul>
                    </div>


                    <div className="mt-14">
                        <a href="#" className='border-2 px-24 py-3 rounded-3xl bg-gradient-to-r from-pink-900 to-pink-600 border-none font-semibold text-xl'>Get offer</a>
                    </div>
                    <div className="mt-10">
                        <h2 className='font-bold'>30-Day Money-Back Guarantee</h2>
                    </div>
                </div>
               

            </div>

        </>
    )
}

export default Header
import React from 'react';
import img1 from '../images/section1.jpg';
import img2 from '../images/section2.jpg';

function Section4() {
  return (
   <>
    <div className='main mt-32 bg-gradient-to-r from-purple-800 to-blue-600 h-full'>

        <div className="main-menu p-32  flex justify-between">

            <div className="left-side w-96 text-white ">

                <h1 className='text-3xl font-bold '>24/7/365 Live Support</h1>
                <p className='text-justify  mt-4'>
                Worried you won’t get help when you need it the most? You shouldn't be. Our Customer Success team is ready to help you 24/7/365 with all topics related to website hosting.
                </p>
                <h1   className='text-3xl font-bold mt-8 '>Top-Performing Websites</h1>
                <p className='text-justify mt-4'>Don’t let poor speed scores bring your website down. From HTTP/3 to self-healing infrastructure, full SSD servers, and unlimited bandwidth, offer your visitors the fastest browsing experience.</p>

                <a href="#">Learn more</a>

                <h1  className='text-3xl font-bold  mt-8'>Migrate with Ease, for Free</h1>
                <p className='text-justify mt-4'>We won’t charge you for migrating your website to Hostinger, and we’ll take care of the process so you can focus on what matters.</p>
            </div>

            <div className="right-side w-2/4  mt-24">

                <img src={img1} alt="img1"  className='  rounded-2xl'/>

            </div>
        </div>


        <div className="main-menu pt-2 p-32  flex justify-between ">

<div className="left-side w-96 text-white order-8 ">

    <h1 className='text-3xl font-bold '>Everything You Need for WordPress</h1>
    <p className='text-justify  mt-4'>
    Let your WordPress website shine. Get the best results with LiteSpeed-powered servers and custom-built advanced WordPress optimization tools.
    </p>
    <h1   className='text-3xl font-bold mt-8 '>We Take Security Seriously</h1>
    <p className='text-justify mt-4'>Don’t leave your website vulnerable to cyber attacks. Instead, get an in-house developed WAF with our Premium and Business web hosting plans and keep your website safe..</p>

    <a href="#">Learn more</a>

    <h1  className='text-3xl font-bold  mt-8'>No Experience Required</h1>
    <p className='text-justify mt-4'>With Hostinger, you don’t need to be a pro to get started. Thanks to our easy-to-use control panel, intuitive interface, and best hosting features, you will be able to launch your website within minutes. Worried about language barriers? Don’t be – our hPanel is localized in 15 languages.</p>
</div>

<div className="right-side w-2/4  mt-24 order-1">

    <img src={img2} alt="img2"  className='  rounded-2xl'/>

</div>
</div>

        
        
    </div>
   </>
  )
}

export default Section4
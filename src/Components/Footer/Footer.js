import React from 'react';

import footer from './Footer.module.css';

function Footer() {
    return (
        <>
            <div className="footer bg-blue-100 p-20 pb-none">

                <div className="inner_footer flex justify-between">

                    <div className="Content1">
                        <h1 className="uppercase font-bold text-xl text-blue-900 mb-6">hostinger</h1>
                        <p className='w-96 text-justify text-blue-700'>We are a web hosting provider on a mission to bring success to everyone who goes online.
                            We do it by constantly improving server technology, providing professional support, and making the web hosting experience seamless.</p>
                    </div>

                    <div className="content2">

                        <ul className={footer.ul}>
                            <h2 className="uppercase font-bold text-xl text-blue-900 mb-6">hosting</h2>
                            <li><a href="#">web hosting</a></li>
                            <li><a href="#">vps hosting</a></li>
                            <li><a href="#">mincraft server hosting</a></li>
                            <li><a href="#">cyber panel hosting</a></li>
                            <li><a href="#">cloud hosting</a></li>
                            <li><a href="#">wordpress hosting</a></li>
                            <li><a href="#">email hosting</a></li>
                            <li><a href="#">cms hosting</a></li>
                            <li><a href="#">ecomerce hosting</a></li>
                            <li><a href="#">free website hosting</a></li>
                            <li><a href="#">online store</a></li>
                            <li><a href="#">website builders</a></li>
                            <li><a href="#">buy hosting</a></li>
                            <li><a href="#">hosting for agenices</a></li>
                        </ul>
                    </div>

                    <div className="content3">

                        <ul className={footer.ul}>
                            <h2 className="uppercase font-bold text-xl text-blue-900 mb-6">domains</h2>

                            <li><a href="#">domain checker</a></li>
                            <li><a href="#">domain transfer</a></li>
                            <li><a href="#">free domain</a></li>
                            <li><a href="#">xyz domain</a></li>
                            <li><a href="#">cheap domain names</a></li>
                            <li><a href="#">domain extensions</a></li>
                            <li><a href="#">WHOIS lookup</a></li>
                            <li><a href="#">free ssl certificate</a></li>
                        </ul>
                    </div>

                    <div className="content4">
                        <ul className={footer.ul}>
                            <h1 className="uppercase font-bold text-xl text-blue-900 mb-6">information</h1>
                            <li><a href="#">migrate to hostinger</a></li>
                            <li><a href="#">system status</a></li>
                            <li><a href="#">affiliate program</a></li>
                            <li><a href="#">payment methods</a></li>
                            <li><a href="#">wall of fame</a></li>
                            <li><a href="#">reviews</a></li>
                            <li><a href="#">pricing</a></li>
                            <li><a href="#">sitemap</a></li>
                            <li className='uppercase font-bold text-xl text-blue-900 mb-6 mt-6'>legal</li>
                            <li><a href="#">privacy policy</a></li>
                            <li><a href="#">term of services</a></li>
                        </ul>
                    </div>

                    <div className="content5">

                        <ul className={footer.ul}>
                            <h1 className="uppercase font-bold text-xl text-blue-900 mb-6">company</h1>

                            <li><a href="#">about hostinger</a></li>
                            <li><a href="#">our technology</a></li>
                            <li><a href="#">career</a></li>
                            <li><a href="#">newsroom</a></li>
                            <li><a href="#">roadmap</a></li>
                            <li><a href="#">contact us</a></li>
                            <li><a href="#">blog</a></li>
                            <li><a href="#">student discount</a></li>

                            <li className='uppercase font-bold text-xl text-blue-900 mb-6 mt-6'>help</li>
                            <li><a href="#">tutorials</a></li>
                            <li><a href="#">knowlege base</a></li>
                            <li><a href="#">report  abuse</a></li>

                            <div className="socialicons ">
                                <ul className={footer.social}>
                                    <li><a href="#">linkdin</a></li>
                                    <li><a href="#">facebook</a></li>
                                    <li><a href="#">instagram</a></li>
                                    <li><a href="#">twitter</a></li>
                                    <li><a href="#">youtube</a></li>
                                </ul>
                            </div>
                        </ul>
                    </div>

                    
                </div>
                <div className="border-2 border-blue-300 mt-5">

                    </div>
                    <div className='flex justify-between mt-4'>

                    <div className="">
                        <p className='text-blue-700'>© 2004-2022 hostinger.com - Premium Web Hosting, Cloud, VPS & Domain Registration Services.</p>
                    </div>
                    <div className='text-blue-700'>
                    Prices are listed without VAT
                    </div>
                    </div>
            </div>
        </>
    )
}

export default Footer
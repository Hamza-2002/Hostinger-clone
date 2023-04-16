import React from 'react';
import { useState } from 'react';
import './Tab.css';

function Tab() {
    const [state, setsate] = useState(1);

    const Action = (index) => {

        setsate(index)
    }
    return (
        <>

            <h1 className='text-center text-4xl font-bold text-blue-800 mb-16' >Get the Resources you need</h1>

            <div className="mainTab">

                <div className="tabs">
                    <div className={state === 1 ? "Tab active-tab" : "Tab"} onClick={() => Action(1)}>
                        Unmatched perfomrnace
                    </div>
                    <div className={state === 2 ? "Tab active-tab" : "Tab"} onClick={() => Action(2)}>
                        Total security
                    </div>
                    <div className={state === 3 ? "Tab active-tab" : "Tab"} onClick={() => Action(3)}>
                        Complete Control
                    </div>
                    <div className={state === 4 ? "Tab active-tab" : "Tab"} onClick={() => Action(4)}>
                        Global Data Center
                    </div>
                    <div className={state === 5 ? "Tab active-tab" : "Tab"} onClick={() => Action(5)}>
                        Managed Wordpress
                    </div>
                    <div className={state === 6 ? "Tab active-tab" : "Tab"} onClick={() => Action(6)}>
                        Wordpress  Staging
                    </div>
                </div>

                <div className="contents">

                    <div className={state === 1 ? "content active-content" : "content"}>
                        <h1  className='contenth1'>unmatched performance </h1>
                        <p className='contentp'>To power up your website, we use innovative site hosting technologies. From HTTP/3 and IPv6 to LiteSpeed web servers, you’ll have access to the best features for site performance. Premium and Business hosting plans also come with unmetered bandwidth, so your website’s traffic won’t be limited.</p>
                    </div>

                    <div className={state === 2 ? "content active-content" : "content"}>
                        <h1  className='contenth1'>Total security </h1>
                        <p  className='contentp'>Security is our utmost priority. We offer a CloudLinux and LVE containerized environment, complete DDoS protection, automated website backups, auto-updates, in-house developed WAF, and other features. Plus, you get a free SSL certificate with all website hosting packages for added security.</p>
                    </div>

                    <div className={state === 3 ? "content active-content" : "content"}>
                        <h1   className='contenth1'>Complete control</h1>
                        <p className='contentp'>With Hostinger as your web host, you get full control over your WordPress site. Whether you want to experiment with multiple PHP versions or look for ways to optimize your databases, we’ve got your back. We offer tools like SSH, WP-CLI, PHP version control, Git integration, MySQL manager, and many more.</p>
                    </div>

                    <div className={state === 4 ? "content active-content" : "content"}>
                        <h1  className='contenth1'>Global data centers</h1>
                        <p className='contentp'>Looking for a hosting provider with data centers in your area? We’ve got you covered. We have data centers in:

                            Europe (Netherlands, Lithuania, United Kingdom)
                            Asia (Singapore, India)
                            North America (USA)
                            South America (Brazil)

                            You can also change your data center location once a month to make your website load faster for visitors.</p>
                    </div>

                    <div className={state === 5 ? "content active-content" : "content"}>
                        <h1  className='contenth1'>Managed WordPress</h1>
                        <p className='contentp'>You don’t necessarily need WordPress hosting to create a WordPress site. At Hostinger, we offer the best web hosting services to make managing your WordPress site as easy as possible. All our shared hosting plans come with one-click WordPress installation, auto-updates, and expert support.</p>
                    </div>

                    <div className={state === 6 ? "content active-content" : "content"}>
                        <h1  className='contenth1'>WordPress staging </h1>
                        <p className='contentp'>Managed WordPress support is just the beginning. With Hostinger, you get a WordPress staging tool to create your own staging environment for site testing. Make a copy of your website, try out different layout changes, content – and everything in-between – and automatically publish the changes whenever you are ready..</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Tab
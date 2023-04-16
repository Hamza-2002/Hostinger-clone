import React from 'react';
import Slider from "react-slick";

import Nested from './Nested';


function Section() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className='mt-16'>
            <h2 className='text-center font-black text-4xl'> Hosting Services Trusted by Thousands</h2>
            <p className='text-center font-lighter  mt-6'>Don’t just take our word for it. We’re the web host of choice for thousands of happy customers.</p>
            <Slider {...settings}>
                <div>
                    <h3><Nested/></h3>
                </div>
                <div>
                    <h3><Nested/></h3>
                </div>
                <div>
                    <h3><Nested/></h3>
                </div>
                <div>
                    <h3><Nested/></h3>
                </div>
                <div>
                    <h3><Nested/></h3>
                </div>
                <div>
                    <h3><Nested/></h3>
                </div>
                <div>
                    <h3><Nested/></h3>
                </div>
                <div>
                    <h3><Nested/></h3>
                </div>
                <div>
                    <h3><Nested/></h3>
                </div>
            </Slider>
        </div>
    );

}

export default Section
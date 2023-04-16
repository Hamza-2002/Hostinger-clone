import React from 'react';
import Slider from 'react-slick';
import Cards from './Cards';

function Best() {
      
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
      };
  return (
   <>
  
   
      <div className='overflow-hidden mb-20 mt-20'>
       
        <Slider {...settings}>
          <div>
            <h3><Cards/></h3>
          </div>
          <div>
            <h3><Cards/></h3>
          </div>
          <div>
            <h3><Cards/></h3>
          </div>
          <div>
            <h3><Cards/></h3>
          </div>
          <div>
            <h3><Cards/></h3>
          </div>
          <div>
            <h3><Cards/></h3>
          </div>
        </Slider>
      </div>

   </>
  )
}

export default Best;
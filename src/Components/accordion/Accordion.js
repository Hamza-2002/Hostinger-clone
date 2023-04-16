import React, { useState } from 'react';
import {Data} from './Api';
import Accordion2 from './Accordion2';


function Accordion() {
    const [data,setdata] = useState(Data);
  return (

    <>

    <section className='mt-32  mx-auto text-center w-3/4 drop-shadow-sm h-1/2'>
        <h1 className='text-4xl font-black mb-2 text-blue-800'>Shared Web Hosting FAQs</h1>
      <p className=' mb-12 text-purple-800'>  Find answers to frequently asked questions about web hosting services</p>
        {data.map((val)=>{
          

            return  <Accordion2 key={val.id} {...val}/>
        })}

        </section>
    </>
  )
}

export default Accordion;
import React from 'react'
import { useState } from 'react'

function Accordion2({ question, answer }) {
    const [show, setshow] = useState(false)
    return (
        <>
            <div className='flex justify-between drop-shadow-sm p-6  border-2 '>
            <h1 className=' text-xl font-semibold text-purple-900'>{question}</h1>

            <p onClick={() => setshow(!show)  } className="cursor-pointer text-4xl text-purple-900"> {show ? "-" : "+"}</p> 
            </div>
            {show && <p  className='border-2 dorp-shadow-sm p-4'>{answer}</p>}
        <span className='p-5'></span>

        </>
    )
}

export default Accordion2
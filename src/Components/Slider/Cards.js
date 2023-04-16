import React from 'react'

function Cards() {
  return (
    <>
    
        <div className="w-70 border-2  rounded-2xl">
            <div className="p-6">
                <h2 className='capitalize text-3xl font-semibold mb-2 text-blue-900'>cloud hosting</h2>
                <p className='capitalize text-blue-900'>for large scale project</p>

                <ul className='mt-6'>
                    <li  className='mt-2 capitalize text-large text-blue-900'><a href="#">up to 300 website</a></li>
                    <li className='mt-2 capitalize text-large text-blue-900'><a href="#">up to  200Gb ssd Storage</a></li>
                    <li className='mt-2 capitalize text-large text-blue-900'><a href="#">up to 16 gb ram</a></li>
                    <li className='mt-2 capitalize text-large text-blue-900'><a href="#"></a> up to 8 cpu core</li>
                </ul>

                <p className='text-blue-900 mt-10'>from</p>
                <h1 className='text-blue-900 text-2xl font-bold'>$9.99/mo</h1>
            </div>

        </div>
    </>
  )
}

export default Cards;
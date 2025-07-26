import React from 'react'

const Banner = () => {
  return (
    <div className='h-[400px] flex justify-center items-start flex-col p-3'>
        <div>
            <div className='flex'>
                <p>+</p>
                <p className='text-4xl'>20</p>
            </div>
            <div><p>Project completed</p></div>
        </div>
        <div>
            <h2 className='text-9xl'>Hello</h2>
            <p>-its Marvellous a Design Wizard</p>
        </div>
    </div>
  )
}

export default Banner
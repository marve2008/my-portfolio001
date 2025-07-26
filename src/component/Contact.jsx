import React from 'react'


const Contact = ({darkMode}) => {
    
  return (
    <div className='flex justify-center items-center h-[250px] '>
        <div className={`h-[200px] w-[300px] bg-white border-2 border-black rounded-4xl flex justify-center items-center flex-col gap-7  ${darkMode ? 'text-black' : ''}`}>
           <h2 className='text-4xl'>Contact Me</h2>
           <div className='flex gap-2 flex-col'>
            <p className='text-l'>Email: ejikemarvellous5@gmail.com</p>
            <p>Phone number: +2347049614207 </p>
           
           </div>
        </div>
    </div>
  )
}

export default Contact
import React from 'react'
import pix from '../assets/images/port.jpg'
import { FaSun, FaMoon } from 'react-icons/fa'

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className='h-[80px] flex justify-start items-center gap-10'>
       <img src={pix} alt="pix"  className={`h-[60px] w-[80px] ${darkMode ? 'dark-mode-img' : ''}`}/>
       <div className='flex gap-20'>
       <h3 className='text-2xl'>Marvey</h3>
        <button onClick={toggleDarkMode} className='p-2 rounded border border-gray-500'>
        {darkMode ? <FaMoon/> : <FaSun/>}
      </button>
      </div>
    </div>
  )
}

export default Header
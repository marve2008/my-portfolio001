import React from 'react'
import pix from '../assets/images/port.jpg'
import { FaSun, FaMoon } from 'react-icons/fa'

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className='h-[80px] flex justify-between items-center gap-10 px-4'>
       <img src={pix} alt="pix"  className={`h-[60px] w-[80px] ${darkMode ? 'dark-mode-img' : ''}`}/>
       <h3 className='text-2xl'>Marvey</h3>
        <button onClick={toggleDarkMode} className='p-2 rounded border border-gray-500'>
        {darkMode ? <FaMoon/> : <FaSun/>}
      </button>
    </div>
  )
}

export default Header
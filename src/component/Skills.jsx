import React from 'react'
import { FaHtml5, FaCss3, FaJava, FaReact, FaNodeJs, } from "react-icons/fa";
import { DiReact } from 'react-icons/di';
// import { AiOutlineWebsocket } from 'react-icons/ai';

const Skills = () => {
  return (
    <div className='h-[500px] flex flex-col justify-center items-center gap-3'>
        <div className='flex gap-4 justify-center items-center'>
        <div className='h-[100px] w-[120px] bg-black text-white text-2xl flex justify-center items-center' ><FaHtml5/>HTML</div>
        <div className='h-[100px] w-[120px] bg-black text-white text-2xl flex justify-center items-center' ><FaCss3/>CSS</div>
        </div>
        <div className='flex gap-4 justify-center items-center'>
        <div className='h-[100px] w-[120px] bg-black text-white flex justify-center items-center flex-col' ><FaJava className='text-2xl' /><p className='text-l'>JAVASCRIPT</p></div>
        <div className='h-[100px] w-[120px] bg-black text-white text-2xl flex justify-center items-center' ><FaReact/>REACT</div>
        </div>
        <div className='flex gap-4 justify-center items-center'>
        <div className='h-[100px] w-[120px] bg-black text-white text-2xl flex justify-center items-center' ><DiReact/>NEXT JS</div>
        <div className='h-[100px] w-[120px] bg-black text-white text-2xl flex justify-center items-center' ><FaNodeJs/>EXPRESS</div>
        </div>

    </div>
  )
}

export default Skills
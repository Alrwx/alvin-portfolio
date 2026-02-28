import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { assets } from '../assets/assets'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto min-h-screen pt-32 pb-10 flex flex-col items-center justify-start gap-8'>
      <div className='space-y-6'>
        <div className='flex justify-center'>
          <Image src={assets.profile_img} alt='Profile' className='rounded-full w-48 shadow-lg'/>
        </div>
        
        <h3 className='flex items-center justify-center gap-2 text-xl md:text-2xl font-medium text-black-700 dark:text-black-300'>
          Alvin Cabe
          {/* <Image src={assets.hand_icon} alt='' className='w-6 animate-bounce'/> */}
        </h3>
        
        <h1 className='text-4xl sm:text-5xl lg:text-6xl'>
          A CS student trying his best
        </h1>
        
        <p className='max-w-2xl mx-auto text-base md:text-lg text-gray-600 dark:text-gray-400 '>
          I’m a Computer Science student at the University of Florida with a minor in Electrical Engineering, and I live by a simple philosophy: I’m not afraid of being lost, but of staying lost. I specialize in backend development, database management, scalability, reliability, system design, and building tools that make people's lives easier.
        </p>
        
        <div className='flex justify-center items-center gap-6 pt-4'>
          <Link href="https://github.com/Alrwx" target="_blank" rel="noopener noreferrer" className='p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-[#A3B18A] hover:text-white transition duration-300 hover:scale-110 transform'>
            <FaGithub className='text-2xl'/>
          </Link>
          
          <Link href="https://www.linkedin.com/in/alvin-cabe/" target="_blank" rel="noopener noreferrer" className='p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-[#A3B18A] hover:text-white transition duration-300 hover:scale-110 transform'>
            <FaLinkedin className='text-2xl'/>
          </Link>
          
          <a href="/Alvin_Cabe_Resume.pdf" download="Alvin_Cabe_Resume.pdf" className='px-8 py-3 bg-[#A3B18A] text-white rounded-full font-medium flex items-center gap-2 hover:bg-[#8b9d6f] transition duration-300 hover:scale-105 transform'>
            My Resume <Image src={assets.download_icon} alt='' className='w-4'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header

import Image from 'next/image'
import React, {useRef} from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {

    const sideMenuRef = useRef<HTMLUListElement>(null);
    const openMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(0)'
        }
    }

    const closeMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = 'translateX(16rem)'
        }
    }

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-50 translate-y-[-80%]
    [mask-image:radial-gradient(circle,black_35%,transparent_70%)]
    '>
        <Image src={assets.header_bg_color} alt='' className='w-full'/>
    </div>
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <a href="#top">
          <Image src={assets.logo} alt="Logo" className='w-28 cursor-pointer mr-14' width='60' height='60'/>
        </a>

        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 border border-gray-300 opacity-70 hover:opacity-100 transition-opacity duration-300'>
          <li><a href="#top">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#leadership">Leadership</a></li>
        </ul>

        <div className='flex items-center gap-4'>
          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt='Menu' className='w-6'/>
          </button>
          <a href="mailto:alvinacabe@gmail.com" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 hover:bg-[#A3B18A]/10 transition'>
            Contact <Image src={assets.arrow_icon} alt="Arrow" className='w-3'/>
          </a>
        </div>

        {/* mobile menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-[#A3B18A] transition duration-500'> 
            <div className='absolute right-6 top-6' onClick={closeMenu}>
                <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'></Image>
            </div>
            
            <li><a href="#top" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#leadership">Leadership</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
import Image from 'next/image'
import React from 'react'
import { assets, infoList } from '../assets/assets'

const About = () => {
  return (
    <div  className='w-full px-[12%] py-20 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg'>Hey!</h4>
      <h2 id='about' className= 'text-center text-5xl'>My name is Alvin,</h2>
      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-90 rounded-3x1 flex-shrink-0'>
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
        </div>
        <div className='flex-1'>
        <p className='mb-5 max-w-2xl'>I’m a Computer Science student at the University of Florida who enjoys turning real-world problems into thoughtful software, shaped by a curiosity for AI, design, and how people interact with technology.</p>

        <p className='mb-10 max-w-2xl'> Outside of code, I love doing calisthenics, I've also been getting into rock climbing! I believe that meaningful conversations and collaboration shape how we think and create, influencing the way we build while highlighting the unique perspective each person brings. Feel free to reach out to me with any questions or ideas!</p>

        <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({icon, title, description}, index) => (
                <li className=' border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#A3B18A]/30 hover:-translate-y-1 duration-500 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
                key={index}>
                    <Image src={icon} alt={title} className='w-7 mt-3' />
                    <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                    <p className='text-gray-600 text-sm'>{description}</p>
                </li>
            ))}
        </ul>
        </div>
        <div className='hidden 2xl:block w-90 rounded-3x1 flex-shrink-0'>
            <Image src={assets.user_image_2} alt='user' className='w-full rounded-3xl'/>
        </div>
      </div>
    </div>
  )
}

export default About

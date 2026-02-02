import React from 'react'
import { assets, workData } from '../assets/assets'
import Image from 'next/image'
import { FaYoutube } from 'react-icons/fa'
import Link from 'next/link'

const Projects = () => {
    return (
        <section className='w-full px-[12%] py-20 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg'>My portfolio</h4>
            <h2 className='text-center text-5xl'>My latest work</h2>
            <p id='projects' className='text-center max-w-2xl mx-auto mt-5 mb-12'>
                Here's my web development portfolio! These are some of my most interesting projects!
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {workData.map((project, index) => (
                    <div
                        key={index}
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden'
                        style={{
                            backgroundImage: `url(${typeof project.bgImage === 'string' ? project.bgImage : project.bgImage.src})`
                        }}
                    >
                        <div className='bg-white/90 backdrop-blur w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                <h3 className='font-semibold'>{project.title}</h3>
                                <p className='text-sm text-gray-600'>{project.description}</p>
                            </div>
                            <div className='flex items-center gap-3 flex-shrink-0'>
                                {project.githubLink && (
                                    <a href={project.githubLink} target='_blank' rel='noopener noreferrer' aria-label='GitHub repository' className='flex-shrink-0'>
                                        <Image src={assets.send_icon} alt='GitHub link' className='w-5 h-5 flex-shrink-0'/>
                                    </a>
                                )}
                                {project.demoLink && (
                                    <a href={project.demoLink} target='_blank' rel='noopener noreferrer' aria-label='YouTube demo' className='flex-shrink-0'>
                                        <FaYoutube className='text-lg text-red-600 w-5 h-5 flex-shrink-0'/>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* work in progress*/}
            {/* <div className='flex justify-center mt-12'>
              <Link href='/projects' className='px-8 py-3 bg-[#A3B18A] text-white rounded-full font-medium hover:bg-[#8b9d6f] transition duration-300 hover:scale-105 transform'>
                See all projects →
              </Link>
            </div> */}
        </section>
    )
}

export default Projects

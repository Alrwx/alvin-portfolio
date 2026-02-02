'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaYoutube } from 'react-icons/fa'
import { assets, techIconMap } from '../assets/assets'

interface Project {
  title: string
  description: string
  technologies: string[]
  githubLink: string
  demoLink: string
  image: string
  date: string
}

const ProjectsPage = () => {
  // Import projects data
  const projects: Project[] = [
    {
      title: "TL;DR",
      description: "AI-powered syllabus parser that extracts key information from course syllabi",
      technologies: ["Supabase", "Next.js", "Tailwind CSS", "React"],
      githubLink: "https://github.com/PaoloAJ/SwampHacks-26",
      demoLink: "https://devpost.com/software/tldr-y4v2ha",
      image: "",
      date: "Jan 2026",
    },
    {
      title: "TaskMate",
      description: "Accountability app designed to help students stay on top of their assignments",
      technologies: ["AWS", "Next.js", "Tailwind CSS", "React"],
      githubLink: "https://github.com/PaoloAJ/TaskMate",
      demoLink: "",
      image: "",
      date: "Sep 2025 - Dec 2025",
    },
    {
      title: "MovieMatcher",
      description: "High performance movie recommendation app using collaborative filtering",
      technologies: ["Flask", "React", "C++"],
      githubLink: "https://github.com/Alrwx/Project-3---Movie-Matcher",
      demoLink: "https://www.youtube.com/watch?v=fMej5pbPSQ",
      image: "",
      date: "Jun 2025 - Aug 2025",
    },
    {
      title: "MineSweeper",
      description: "Classic MineSweeper app, implementation with 3 levels of difficulty, debug mode, flags, recursive deletes.",
      technologies: ["C++", "SFML"],
      githubLink: "",
      demoLink: "https://github.com/Alrwx/Minesweeper",
      image: "",
      date: "March 2025 - May 2025",
    },
    {
      title: "Whackamole",
      description: "Fun arcade-style game implementation",
      technologies: ["Python", "Pygame"],
      githubLink: "https://github.com/Alrwx/Whackamole",
      demoLink: "",
      image: "",
      date: "Oct - Nov 2025",
    },
    {
      title: "Sudoku",
      description: "Interactive Sudoku puzzle game with solver functionality",
      technologies: ["Python", "Pygame"],
      githubLink: "https://github.com/PaoloAJ/Sudoku",
      demoLink: "https://www.youtube.com/watch?v=AfeQyrh4t5k",
      image: "",
      date: "Nov - Dec 2024",
    },
  ]

  return (
    <div className='w-full min-h-screen pt-32 pb-20'>
      <section className='w-full px-[12%] py-20 scroll-mt-20'>
        <Link href='/#projects' className='text-[#A3B18A] hover:underline mb-4 inline-block'>
          ← Back to home
        </Link>
        <h2 className='text-5xl font-bold mb-4'>All Projects</h2>
        <p className='text-lg text-gray-600 max-w-2xl'>
          A comprehensive collection of my development projects, from AI-powered tools to interactive games.
        </p>
      </section>

      <section className='w-full px-[12%] pb-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='border border-gray-300 rounded-2xl p-6 bg-white/70 backdrop-blur hover:bg-[#A3B18A]/15 hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition duration-300 flex flex-col'
            >
              <h3 className='text-2xl font-semibold text-gray-800 mb-2'>{project.title}</h3>
              <p className='text-xs text-gray-500 mb-3'>{project.date}</p>
              <p className='text-gray-700 mb-4 flex-grow'>{project.description}</p>

              {/* Technologies */}
              <div className='mb-6'>
                <p className='text-sm font-medium text-gray-600 mb-3'>Technologies</p>
                <div className='flex flex-wrap gap-3'>
                  {project.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className='flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full hover:bg-[#A3B18A]/20 transition'
                      title={tech}
                    >
                      {techIconMap[tech] ? (
                        <Image
                          src={techIconMap[tech]}
                          alt={tech}
                          className='w-4 h-4'
                          width={16}
                          height={16}
                        />
                      ) : (
                        <div className='w-4 h-4 bg-gray-300 rounded' />
                      )}
                      <span className='text-xs text-gray-700'>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className='flex items-center gap-4 pt-4 border-t border-gray-200'>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 text-gray-700 hover:text-[#A3B18A] transition font-medium'
                  >
                    <FaGithub className='text-lg' />
                    GitHub
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 text-red-600 hover:text-red-700 transition font-medium'
                  >
                    <FaYoutube className='text-lg' />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage

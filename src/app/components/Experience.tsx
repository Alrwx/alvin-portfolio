import React from 'react'
import { ExperienceData } from '../assets/assets'

const renderWithHighlights = (text: string, highlights: string[] = []) => {
  if (!highlights.length) return text
  const escaped = highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const regex = new RegExp(`(${escaped.join('|')})`, 'gi')

  return text.split(regex).map((part, index) => {
    const isMatch = highlights.some((h) => h.toLowerCase() === part.toLowerCase())
    return isMatch ? (
      <strong key={index} className='font-semibold text-gray-900'>
        {part}
      </strong>
    ) : (
      <span key={index}>{part}</span>
    )
  })
}

const Experience = () => {
  return (
    <section id='experience' className='w-full px-[12%] py-20 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg'>Experience</h4>
      <h2 className='text-center text-5xl'>Where I've worked</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
        A quick snapshot of roles and impact across internships and leadership positions.
      </p>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {ExperienceData.map((item, index) => (
          <div
            key={index}
            className='border border-gray-300 rounded-2xl p-6 bg-white/70 backdrop-blur hover:bg-[#A3B18A]/15 hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition duration-300'
          >
            <div className='flex items-start justify-between gap-4'>
              <div>
                <h3 className='text-xl font-semibold text-gray-800'>{item.title}</h3>
                <p className='text-sm text-gray-600'>{item.role} • {item.type}</p>
                <p className='text-xs text-gray-500 mt-1'>{item.date}</p>
              </div>
              {item.linkedIn && (
                <a
                  href={item.linkedIn}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-3 py-1 rounded-full text-sm border border-gray-300 text-gray-700 hover:bg-[#A3B18A]/30 transition'
                >
                  LinkedIn
                </a>
              )}
            </div>
            <p className='mt-4 text-gray-700 leading-relaxed'>
              {renderWithHighlights(item.description, item.highlights)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

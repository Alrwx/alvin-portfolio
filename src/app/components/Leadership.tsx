import React from 'react'
import { LeadershipData } from '../assets/assets'

const Leadership = () => {
  return (
    <section id='leadership' className='w-full px-[12%] py-20 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg'>Leadership</h4>
      <h2 className='text-center text-5xl'>Community & impact</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
        Highlights from organizations and communities where I contribute and lead.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {LeadershipData.map((item, index) => (
          <div
            key={index}
            className='border border-gray-300 rounded-2xl p-6 bg-white/70 backdrop-blur hover:bg-[#A3B18A]/15 hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition duration-300'
          >
            <h3 className='text-lg font-semibold text-gray-800'>{item.organization}</h3>
            <p className='text-sm text-gray-600 mt-1'>{item.role}</p>
            <p className='mt-4 text-gray-700 leading-relaxed'>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Leadership

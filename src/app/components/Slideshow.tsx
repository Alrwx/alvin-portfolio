'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'
import { slideshowImages } from '../lib/slideshow-images'

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Auto-advance slideshow
  useEffect(() => {
    if (!isAutoPlaying || isModalOpen || slideshowImages.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isModalOpen, slideshowImages.length])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slideshowImages.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  if (slideshowImages.length === 0) {
    return (
      <section id='slideshow' className='w-full px-[12%] py-20 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg'>Gallery</h4>
        <h2 className='text-center text-5xl mb-4'>Moments & Memories</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600'>
          A collection of experiences, events, and moments that shaped my journey
        </p>
        <p className='text-center text-gray-500'>Add images to <code className='bg-gray-100 px-2 py-1 rounded'>src/app/assets/slideshow</code> to see them here.</p>
      </section>
    )
  }

  return (
    <section id='slideshow' className='w-full px-[12%] py-20 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg'>Gallery</h4>
      <h2 className='text-center text-5xl mb-4'>Moments & Memories</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600'>
        A collection of experiences, events, and moments that shaped my journey
      </p>

      <div className='max-w-5xl mx-auto'>
        {/* Main Slideshow  */}
        <div className='relative aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer' onClick={() => setIsModalOpen(true)}>
          {/* Current Image */} 
          <div className='relative w-full h-full bg-black'>
            <Image
              src={slideshowImages[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              fill
              className='object-contain'
              priority
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 hover:scale-110'
            aria-label='Previous slide'
          >
            <FaChevronLeft className='text-xl' />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 hover:scale-110'
            aria-label='Next slide'
          >
            <FaChevronRight className='text-xl' />
          </button>

          {/* Slide Counter */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className='absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium'
          >
            {currentIndex + 1} / {slideshowImages.length}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsAutoPlaying(!isAutoPlaying)
            }}
            className='absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium transition'
          >
            {isAutoPlaying ? 'Pause' : 'Play'}
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className='grid grid-cols-4 md:grid-cols-8 gap-2 mt-6'>
          {slideshowImages.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative aspect-video rounded-lg overflow-hidden transition duration-300 bg-gray-900 ${
                index === currentIndex
                  ? 'ring-4 ring-[#A3B18A] scale-105'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className='object-contain'
              />
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className='mt-6 bg-gray-200 rounded-full h-2 overflow-hidden'>
          <div
            className='bg-[#A3B18A] h-full transition-all duration-300'
            style={{
              width: `${((currentIndex + 1) / slideshowImages.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className='fixed inset-0 z-100 bg-black/90 flex items-center justify-center p-4'
          onClick={() => setIsModalOpen(false)}
        >
          <div className='relative max-w-7xl max-h-[90vh] w-full h-full' onClick={(e) => e.stopPropagation()}>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsModalOpen(false)
              }}
              className='absolute top-4 right-4 z-50 text-white bg-black/50 hover:bg-black/70 p-3 rounded-full transition cursor-pointer'
              aria-label='Close modal'
            >
              <FaTimes className='text-2xl' />
            </button>

            <div className='relative w-full h-full max-w-7xl max-h-[90vh] mx-auto'>
              <Image
                src={slideshowImages[currentIndex]}
                alt={`Slide ${currentIndex + 1} - Full view`}
                fill
                className='object-contain'
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Modal Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-4 rounded-full transition hover:scale-110'
              aria-label='Previous slide'
            >
              <FaChevronLeft className='text-2xl' />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-4 rounded-full transition hover:scale-110'
              aria-label='Next slide'
            >
              <FaChevronRight className='text-2xl' />
            </button>

            {/* Modal Slide Counter */}
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-6 py-3 rounded-full text-lg font-medium' onClick={(e) => e.stopPropagation()}>
              {currentIndex + 1} / {slideshowImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Slideshow

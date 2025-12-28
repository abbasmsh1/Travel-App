'use client'

import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { MapPinIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { destinationsData } from '@/data/destinations'

export default function DestinationDetail() {
  const params = useParams()
  const slug = params.slug as string
  const destination = destinationsData[slug]

  if (!destination) {
    return (
      <main className="min-h-screen bg-[#0f172a] text-white">
        <Navbar />
        <div className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto text-center">
          <h1 className="text-2xl font-bold">Destination not found</h1>
          <Link href="/destinations" className="text-primary hover:text-primary/80 mt-4 inline-block transition-colors">
            Back to all destinations
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen relative bg-[#0f172a] text-white overflow-hidden">
      <Navbar />

      {/* Blurred Background Layer */}
      <div className="fixed inset-0 z-0">
         {/* Image BG */}
         <div 
           className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
           style={{ 
             backgroundImage: `url(${destination.image})`,
             filter: 'blur(10px)',
           }}
         />
         {/* Dark Overlay for readability */}
         <div className="absolute inset-0 bg-black/60" />
      </div>

      
      <section className="relative z-10 pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Hero Header */}
           <div className="mb-12 text-center md:text-left backdrop-blur-md bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl">
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">
                {destination.name}
              </h1>
              <div className="flex items-center justify-center md:justify-start space-x-4 text-gray-200">
                <MapPinIcon className="h-6 w-6 text-primary" />
                <span className="text-xl font-medium">{destination.location}</span>
                <span className="px-3 py-1 bg-primary/20 rounded-full text-sm font-semibold text-primary-300">
                  {destination.category}
                </span>
              </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
               {/* Image Banner */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 group">
                 <img
                  src={destination.image}
                  alt={destination.name}
                  className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10">
                <h2 className="font-display text-2xl font-bold mb-4 text-white">Overview</h2>
                <p className="text-gray-300 whitespace-pre-line leading-relaxed text-lg">
                  {destination.fullDescription}
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10">
                <h2 className="font-display text-2xl font-bold mb-4 text-white">Highlights</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {destination.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-primary text-xl font-bold">•</span>
                      <span className="text-gray-200 font-medium">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {destination.gallery.length > 0 && (
                <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10">
                  <h2 className="font-display text-2xl font-bold mb-4 text-white">Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {destination.gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        className="relative h-48 rounded-xl overflow-hidden cursor-pointer shadow-lg ring-1 ring-white/10"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={image}
                          alt={`${destination.name} gallery image ${index + 1}`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/10 sticky top-32">
                <h3 className="font-display text-2xl font-bold mb-6 text-white">Plan Your Trip</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="p-3 bg-primary/20 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <CalendarIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-semibold uppercase tracking-wide">Best Time to Visit</p>
                      <p className="font-medium text-lg text-gray-100">{destination.bestTimeToVisit}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="p-3 bg-primary/20 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <ClockIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-semibold uppercase tracking-wide">Duration</p>
                      <p className="font-medium text-lg text-gray-100">{destination.duration}</p>
                    </div>
                  </div>
                  
                  <hr className="border-white/10" />
                  
                  <motion.button
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-primary/50 hover:bg-primary/90 transition-all pointer-events-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Now
                  </motion.button>
                   <p className="text-center text-sm text-gray-400">
                    Need help planning? <a href="#" className="text-primary hover:text-primary/80 transition-colors">Contact our experts</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
} 
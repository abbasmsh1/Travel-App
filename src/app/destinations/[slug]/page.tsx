'use client'

import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { MapPinIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const destinationsData = {
  'hunza-valley': {
    name: 'Hunza Valley',
    description: 'Experience the majestic Karakoram mountains and ancient watchtowers.',
    fullDescription: `
      Nestled in the heart of the Karakoram Range, Hunza Valley is a paradise on Earth. Known for its 
      stunning natural beauty, ancient watchtowers, and rich cultural heritage, this region offers 
      visitors an unforgettable experience.

      The valley is home to several historical sites, including the ancient Baltit Fort and Altit Fort, 
      which offer panoramic views of the surrounding mountains. During spring, the valley is covered in 
      pink and white apple blossoms, creating a magical atmosphere.
    `,
    image: 'https://images.unsplash.com/photo-1586804187023-a69fb52df436?auto=format&fit=crop&w=1200',
    location: 'Gilgit-Baltistan',
    category: 'Mountains',
    bestTimeToVisit: 'March to October',
    duration: '5-7 days recommended',
    highlights: [
      'Visit the historic Baltit Fort',
      'Trek to Eagle\'s Nest for panoramic views',
      'Experience local Hunza culture and cuisine',
      'See the confluence of three mighty mountain ranges',
      'Visit ancient rock carvings along the Silk Road'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1586804187023-a69fb52df436?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1589650938264-b31e8b16c3b0?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1589650938441-6b42e0a30c67?auto=format&fit=crop&w=800'
    ]
  },
  'badshahi-mosque': {
    name: 'Badshahi Mosque',
    description: 'Visit the iconic Mughal-era mosque in the heart of Lahore.',
    fullDescription: `
      The Badshahi Mosque, built in 1671, is one of the most iconic landmarks of Pakistan. This 
      masterpiece of Mughal architecture represents the grandeur and beauty of Islamic architecture 
      during the Mughal period.

      The mosque's massive courtyard can accommodate up to 100,000 worshippers, making it one of 
      the largest mosques in the world. Its stunning red sandstone exterior and intricate marble 
      work make it a must-visit destination for history and architecture enthusiasts.
    `,
    image: 'https://images.unsplash.com/photo-1589650938441-6b42e0a30c67?auto=format&fit=crop&w=1200',
    location: 'Lahore',
    category: 'Historical',
    bestTimeToVisit: 'October to March',
    duration: '2-3 hours',
    highlights: [
      'Explore the massive courtyard',
      'Admire the intricate marble work',
      'Visit the mosque museum',
      'Enjoy panoramic views of Lahore Fort',
      'Experience evening illumination'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1589650938441-6b42e0a30c67?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1589650938443-2d6f88e96b76?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1589650938445-f88b6f3c897b?auto=format&fit=crop&w=800'
    ]
  }
  // Add more destinations as needed
}

export default function DestinationDetail() {
  const params = useParams()
  const slug = params.slug as string
  const destination = destinationsData[slug as keyof typeof destinationsData]

  if (!destination) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto text-center">
          <h1 className="text-2xl font-bold">Destination not found</h1>
          <Link href="/destinations" className="text-primary hover:underline mt-4 inline-block">
            Back to all destinations
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Section */}
          <div className="relative h-[60vh] rounded-2xl overflow-hidden mb-12">
            <img
              src={destination.image}
              alt={destination.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
                {destination.name}
              </h1>
              <div className="flex items-center space-x-4">
                <MapPinIcon className="h-6 w-6" />
                <span className="text-lg">{destination.location}</span>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {destination.fullDescription}
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-4">Highlights</h2>
                <ul className="space-y-3">
                  {destination.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-primary text-xl">•</span>
                      <span className="text-gray-700">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-4">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destination.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      className="relative h-48 rounded-lg overflow-hidden"
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
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-display text-xl font-bold mb-4">Visit Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CalendarIcon className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm text-gray-500">Best Time to Visit</p>
                      <p className="font-medium">{destination.bestTimeToVisit}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ClockIcon className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm text-gray-500">Recommended Duration</p>
                      <p className="font-medium">{destination.duration}</p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.button
                className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Plan Your Visit
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
} 
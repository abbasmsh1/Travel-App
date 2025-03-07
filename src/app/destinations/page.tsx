'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import DestinationCard from '@/components/DestinationCard'
import { MapPinIcon, GlobeAsiaAustraliaIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

const regions = [
  {
    name: 'Gilgit-Baltistan',
    description: 'Home to the world\'s highest peaks and stunning valleys',
    image: 'https://images.unsplash.com/photo-1586804187023-a69fb52df436?auto=format&fit=crop&w=800'
  },
  {
    name: 'Punjab',
    description: 'Rich cultural heritage and historical architecture',
    image: 'https://images.unsplash.com/photo-1589650938441-6b42e0a30c67?auto=format&fit=crop&w=800'
  },
  {
    name: 'Sindh',
    description: 'Ancient civilizations and vibrant traditions',
    image: 'https://images.unsplash.com/photo-1589650938445-f88b6f3c897b?auto=format&fit=crop&w=800'
  },
  {
    name: 'Balochistan',
    description: 'Pristine coastlines and rugged landscapes',
    image: 'https://images.unsplash.com/photo-1589650938447-f88b6f3c897c?auto=format&fit=crop&w=800'
  },
  {
    name: 'Khyber Pakhtunkhwa',
    description: 'Mountain valleys and rich tribal culture',
    image: 'https://images.unsplash.com/photo-1589650938449-f88b6f3c897d?auto=format&fit=crop&w=800'
  }
]

const destinationTypes = [
  { name: 'Mountains & Valleys', icon: '🏔️' },
  { name: 'Historical Sites', icon: '🏛️' },
  { name: 'Cultural Heritage', icon: '🏺' },
  { name: 'Adventure Sports', icon: '🏃‍♂️' },
  { name: 'Wildlife & Nature', icon: '🦁' },
  { name: 'Religious Sites', icon: '🕌' }
]

const allDestinations = [
  {
    id: 1,
    name: 'Hunza Valley',
    description: 'Experience the majestic Karakoram mountains and ancient watchtowers.',
    image: 'https://images.unsplash.com/photo-1586804187023-a69fb52df436?auto=format&fit=crop&w=800',
    location: 'Gilgit-Baltistan',
    category: 'Mountains & Valleys',
    type: ['Mountains & Valleys', 'Adventure Sports']
  },
  {
    id: 2,
    name: 'Badshahi Mosque',
    description: 'Visit the iconic Mughal-era mosque in the heart of Lahore.',
    image: 'https://images.unsplash.com/photo-1589650938441-6b42e0a30c67?auto=format&fit=crop&w=800',
    location: 'Lahore',
    category: 'Historical',
    type: ['Historical Sites']
  },
  {
    id: 3,
    name: 'Deosai Plains',
    description: 'Explore the second-highest plateau in the world.',
    image: 'https://images.unsplash.com/photo-1589650938443-2d6f88e96b76?auto=format&fit=crop&w=800',
    location: 'Gilgit-Baltistan',
    category: 'Nature',
    type: ['Wildlife & Nature']
  },
  {
    id: 4,
    name: 'Mohenjo Daro',
    description: 'Discover one of the largest settlements of the ancient Indus Valley Civilization.',
    image: 'https://images.unsplash.com/photo-1589650938445-f88b6f3c897b?auto=format&fit=crop&w=800',
    location: 'Sindh',
    category: 'Historical',
    type: ['Historical Sites']
  },
  {
    id: 5,
    name: 'Makran Coast',
    description: 'Experience the pristine beaches and unique rock formations along the Arabian Sea.',
    image: 'https://images.unsplash.com/photo-1589650938447-f88b6f3c897c?auto=format&fit=crop&w=800',
    location: 'Balochistan',
    category: 'Coastal',
    type: ['Coastal']
  },
  {
    id: 6,
    name: 'Fairy Meadows',
    description: 'Camp under the stars with a spectacular view of Nanga Parbat.',
    image: 'https://images.unsplash.com/photo-1589650938449-f88b6f3c897d?auto=format&fit=crop&w=800',
    location: 'Gilgit-Baltistan',
    category: 'Mountains & Valleys',
    type: ['Mountains & Valleys']
  },
  {
    id: 7,
    name: 'Lahore Fort',
    description: 'Explore the magnificent Mughal fortress and UNESCO World Heritage site.',
    image: 'https://images.unsplash.com/photo-1589650938450-f88b6f3c897e?auto=format&fit=crop&w=800',
    location: 'Lahore',
    category: 'Historical',
    type: ['Historical Sites']
  },
  {
    id: 8,
    name: 'Hingol National Park',
    description: 'Discover unique rock formations and diverse wildlife in Pakistan\'s largest national park.',
    image: 'https://images.unsplash.com/photo-1589650938451-f88b6f3c897f?auto=format&fit=crop&w=800',
    location: 'Balochistan',
    category: 'Nature',
    type: ['Wildlife & Nature']
  },
  {
    id: 9,
    name: 'Shalimar Gardens',
    description: 'Walk through the historic Persian gardens built by the Mughal Empire.',
    image: 'https://images.unsplash.com/photo-1589650938452-f88b6f3c897g?auto=format&fit=crop&w=800',
    location: 'Lahore',
    category: 'Historical',
    type: ['Historical Sites']
  }
]

export default function Destinations() {
  const [activeTab, setActiveTab] = useState<'regions' | 'types'>('regions')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  const filteredDestinations = allDestinations.filter(dest => {
    if (selectedRegion) {
      return dest.location === selectedRegion
    }
    if (searchQuery) {
      return (
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    return true
  })

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              Discover Pakistan
            </h1>
            <p className="text-xl text-gray-600">
              Explore the diverse landscapes and rich cultural heritage
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search destinations, regions, or activities..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setSelectedRegion(null)
                }}
              />
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white shadow-sm">
              <button
                onClick={() => {
                  setActiveTab('regions')
                  setSearchQuery('')
                }}
                className={`flex items-center px-6 py-2.5 rounded-md text-sm font-medium transition-colors
                  ${activeTab === 'regions' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'}`}
              >
                <MapPinIcon className="h-5 w-5 mr-2" />
                Explore by Region
              </button>
              <button
                onClick={() => {
                  setActiveTab('types')
                  setSearchQuery('')
                  setSelectedRegion(null)
                }}
                className={`flex items-center px-6 py-2.5 rounded-md text-sm font-medium transition-colors
                  ${activeTab === 'types' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'}`}
              >
                <GlobeAsiaAustraliaIcon className="h-5 w-5 mr-2" />
                Explore by Type
              </button>
            </div>
          </div>

          {/* Search Results */}
          {searchQuery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="font-display text-2xl font-bold mb-6">Search Results</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDestinations.map((destination) => (
                  <DestinationCard key={destination.id} {...destination} />
                ))}
              </div>
              {filteredDestinations.length === 0 && (
                <p className="text-center text-gray-500 mt-8">No destinations found matching your search.</p>
              )}
            </motion.div>
          )}

          {/* Regions View */}
          {activeTab === 'regions' && !searchQuery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regions.map((region, index) => (
                  <motion.div
                    key={region.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedRegion(region.name)}
                  >
                    <Image
                      src={region.image}
                      alt={region.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="font-display text-2xl font-bold mb-2">{region.name}</h3>
                      <p className="text-sm text-gray-200">{region.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Selected Region Destinations */}
              {selectedRegion && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-16"
                >
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="font-display text-2xl font-bold">Destinations in {selectedRegion}</h2>
                    <button
                      onClick={() => setSelectedRegion(null)}
                      className="text-primary hover:text-primary/80"
                    >
                      View All Regions
                    </button>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredDestinations.map((destination) => (
                      <DestinationCard key={destination.id} {...destination} />
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Types View */}
          {activeTab === 'types' && !searchQuery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-16"
            >
              {destinationTypes.map((type, typeIndex) => (
                <div key={type.name} className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{type.icon}</span>
                    <h2 className="font-display text-2xl font-bold">{type.name}</h2>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allDestinations
                      .filter(dest => dest.type.includes(type.name))
                      .map((destination, index) => (
                        <motion.div
                          key={destination.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <DestinationCard {...destination} />
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </section>
    </main>
  )
} 
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
    image: 'https://images.unsplash.com/photo-1548685913-fe65af78d913?auto=format&fit=crop&w=800'
  },
  {
    name: 'Punjab',
    description: 'Rich cultural heritage and historical architecture',
    image: 'https://images.unsplash.com/photo-1622543925917-09275b1747c3?auto=format&fit=crop&w=800'
  },
  {
    name: 'Sindh',
    description: 'Ancient civilizations and vibrant traditions',
    image: 'https://images.unsplash.com/photo-1616744838636-f6c6e7552554?auto=format&fit=crop&w=800'
  },
  {
    name: 'Balochistan',
    description: 'Pristine coastlines and rugged landscapes',
    image: 'https://images.unsplash.com/photo-1627814981888-51786576858e?auto=format&fit=crop&w=800'
  },
  {
    name: 'Khyber Pakhtunkhwa',
    description: 'Mountain valleys and rich tribal culture',
    image: 'https://images.unsplash.com/photo-1596489360879-110bb525e933?auto=format&fit=crop&w=800'
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

import { createClient } from '@/lib/supabase/client'
import { useEffect } from 'react'

export default function Destinations() {
  const [activeTab, setActiveTab] = useState<'regions' | 'types'>('regions')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [allDestinations, setAllDestinations] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    async function fetchDestinations() {
      const { data, error } = await supabase
        .from('destinations')
        .select('*')
      
      if (data) {
        setAllDestinations(data)
      }
      setLoading(false)
    }
    fetchDestinations()
  }, [])

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
    <main className="min-h-screen bg-[#0f172a] text-white">
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Discover Pakistan
            </h1>
            <p className="text-xl text-gray-300">
              Explore the diverse landscapes and rich cultural heritage
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative group">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search destinations, regions, or activities..."
                className="w-full pl-12 pr-4 py-4 rounded-full bg-white/5 border border-white/10 focus:border-primary/50 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-primary/20 backdrop-blur-sm transition-all shadow-lg hover:bg-white/10"
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
            <div className="inline-flex rounded-xl border border-white/10 p-1 bg-white/5 backdrop-blur-md shadow-lg">
              <button
                onClick={() => {
                  setActiveTab('regions')
                  setSearchQuery('')
                }}
                className={`flex items-center px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
                  ${activeTab === 'regions' 
                    ? 'bg-primary text-white shadow-md' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
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
                className={`flex items-center px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
                  ${activeTab === 'types' 
                    ? 'bg-primary text-white shadow-md' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
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
              <h2 className="font-display text-2xl font-bold mb-6 text-white">Search Results</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDestinations.map((destination) => (
                  <DestinationCard key={destination.id} {...destination} />
                ))}
              </div>
              {filteredDestinations.length === 0 && (
                <p className="text-center text-gray-400 mt-8 text-lg">No destinations found matching your search.</p>
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
                    className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-xl border border-white/10"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedRegion(region.name)}
                  >
                    <Image
                      src={region.image}
                      alt={region.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-90" />
                    <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                      <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{region.name}</h3>
                      <p className="text-sm text-gray-300 line-clamp-2">{region.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Selected Region Destinations */}
              {selectedRegion && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-16 pt-16 border-t border-white/10"
                >
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="font-display text-3xl font-bold text-white">Destinations in <span className="text-primary">{selectedRegion}</span></h2>
                    <button
                      onClick={() => setSelectedRegion(null)}
                      className="text-primary hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10"
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
                <div key={type.name} className="space-y-8 bg-white/5 rounded-3xl p-8 border border-white/10">
                  <div className="flex items-center space-x-4 border-b border-white/10 pb-4">
                    <span className="text-4xl">{type.icon}</span>
                    <h2 className="font-display text-3xl font-bold text-white">{type.name}</h2>
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
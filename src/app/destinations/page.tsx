'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import DestinationCard from '@/components/DestinationCard'
import { MapPinIcon, GlobeAsiaAustraliaIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import Slider_01, { RuixenCardProps } from '@/components/ui/ruixen-carousel-wave'



import { createClient } from '@/lib/supabase/client'
import { useEffect } from 'react'

export default function Destinations() {
  const [activeTab, setActiveTab] = useState<'regions' | 'types'>('regions')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [allDestinations, setAllDestinations] = useState<any[]>([])
  const [regions, setRegions] = useState<any[]>([])
  const [destinationTypes, setDestinationTypes] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    async function fetchData() {
      if (!supabase) {
        setLoading(false)
        return
      }

      setLoading(true)
      const [destResults, regionResults, typeResults] = await Promise.all([
        supabase.from('destinations').select('*'),
        supabase.from('regions').select('*'),
        supabase.from('destination_types').select('*')
      ])
      
      if (destResults.data) setAllDestinations(destResults.data)
      if (regionResults.data) setRegions(regionResults.data)
      if (typeResults.data) setDestinationTypes(typeResults.data)
      
      setLoading(false)
    }
    fetchData()
  }, [supabase])

  const filteredDestinations = allDestinations.filter(dest => {
    if (selectedRegion) {
      return dest.location === selectedRegion
    }
    if (searchQuery) {
      return (
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (dest.description && dest.description.toLowerCase().includes(searchQuery.toLowerCase()))
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
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl">
              Explore Destinations
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Find your next adventure in the breathtaking landscapes of Pakistan
            </p>
          </div>

          {/* Featured Carousel */}
          {!loading && allDestinations.length > 0 && (
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-white/10" />
                <h2 className="text-2xl font-display font-bold text-primary uppercase tracking-[0.2em]">Featured</h2>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <Slider_01 
                data={allDestinations.slice(0, 6).map((dest, index) => ({
                  title: dest.name,
                  subtitle: dest.description || 'Experience the beauty of ' + dest.location,
                  image: dest.image,
                  badge: { 
                    text: dest.category?.split(' ')[0] || 'Travel', 
                    variant: index % 3 === 0 ? 'pink' : index % 3 === 1 ? 'orange' : 'indigo' 
                  },
                  href: `/destinations/${dest.slug}`
                }))} 
              />
            </div>
          )}

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative group">
              <MagnifyingGlassIcon className="absolute left-5 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400 group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full pl-14 pr-6 py-5 rounded-full bg-white/5 border border-white/10 focus:border-primary/50 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-primary/20 backdrop-blur-md transition-all shadow-2xl hover:bg-white/10"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setSelectedRegion(null)
                }}
              />
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-20">
            <div className="inline-flex rounded-2xl border border-white/10 p-1.5 bg-white/5 backdrop-blur-xl shadow-2xl">
              <button
                onClick={() => {
                  setActiveTab('regions')
                  setSearchQuery('')
                }}
                className={`flex items-center px-8 py-3 rounded-xl text-sm font-bold tracking-wider uppercase transition-all duration-300
                  ${activeTab === 'regions' 
                    ? 'bg-primary text-white shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                <MapPinIcon className="h-5 w-5 mr-3" />
                By Region
              </button>
              <button
                onClick={() => {
                  setActiveTab('types')
                  setSearchQuery('')
                  setSelectedRegion(null)
                }}
                className={`flex items-center px-8 py-3 rounded-xl text-sm font-bold tracking-wider uppercase transition-all duration-300
                  ${activeTab === 'types' 
                    ? 'bg-primary text-white shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                <GlobeAsiaAustraliaIcon className="h-5 w-5 mr-3" />
                By Category
              </button>
            </div>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-96 rounded-3xl bg-white/5 animate-pulse border border-white/10" />
              ))}
            </div>
          ) : (
            <>
              {/* Search Results */}
              {searchQuery && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="font-display text-3xl font-bold mb-10 text-white border-l-4 border-primary pl-4">
                    Results for "{searchQuery}"
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredDestinations.map((destination) => (
                      <DestinationCard key={destination.id} {...destination} />
                    ))}
                  </div>
                  {filteredDestinations.length === 0 && (
                    <div className="text-center py-20 bg-white/5 rounded-[3rem] border-2 border-dashed border-white/10">
                      <p className="text-gray-400 text-xl font-light">No destinations found matching your search.</p>
                    </div>
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
                  {!selectedRegion ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                      {regions.map((region, index) => (
                        <motion.div
                          key={region.name}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="group relative h-[28rem] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl border border-white/10"
                          whileHover={{ y: -10 }}
                          onClick={() => setSelectedRegion(region.name)}
                        >
                          <Image
                            src={region.image}
                            alt={region.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent opacity-90" />
                          <div className="absolute bottom-0 left-0 p-10 text-white w-full">
                            <h3 className="font-display text-4xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">{region.name}</h3>
                            <p className="text-gray-300 line-clamp-2 text-lg font-light leading-relaxed">{region.description}</p>
                            <div className="mt-6 flex items-center text-primary font-bold text-sm uppercase tracking-widest gap-2">
                              Explore Now <span className="group-hover:translate-x-2 transition-transform">→</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-12"
                    >
                      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5 p-8 rounded-[2rem] border border-white/10 shadow-xl backdrop-blur-md">
                        <div>
                          <h2 className="font-display text-4xl font-bold text-white mb-2">
                            <span className="text-primary">{selectedRegion}</span>
                          </h2>
                          <p className="text-gray-400">Showing all destinations in this region</p>
                        </div>
                        <button
                          onClick={() => setSelectedRegion(null)}
                          className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold transition-all border border-white/10 backdrop-blur-md shadow-lg"
                        >
                          Back to Overview
                        </button>
                      </div>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredDestinations.map((destination) => (
                          <DestinationCard key={destination.id} {...destination} />
                        ))}
                      </div>
                      {filteredDestinations.length === 0 && (
                        <div className="text-center py-20 bg-white/5 rounded-3xl border-2 border-dashed border-white/10">
                          <p className="text-gray-400 text-lg">New destinations coming soon!</p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* Types View - Dynamic mapping from Category field */}
              {activeTab === 'types' && !searchQuery && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-24"
                >
                  {destinationTypes.map((type) => {
                    const typeDestinations = allDestinations.filter(dest => 
                      dest.category === type.name || (dest.type && dest.type.includes(type.name))
                    );

                    if (typeDestinations.length === 0) return null;

                    return (
                      <div key={type.name} className="space-y-12">
                        <div className="flex items-center gap-6 border-b border-white/10 pb-6">
                          <span className="text-6xl filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">{type.icon}</span>
                          <h2 className="font-display text-5xl font-bold text-white tracking-tight">{type.name}</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                          {typeDestinations.map((destination, index) => (
                              <motion.div
                                key={destination.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <DestinationCard {...destination} />
                              </motion.div>
                            ))}
                        </div>
                      </div>
                    );
                  })}
                  {allDestinations.length === 0 && (
                     <div className="text-center py-20 bg-white/5 rounded-[3rem] border-2 border-dashed border-white/10">
                      <p className="text-gray-400 text-xl font-light">Our database is currently updating. Stay tuned!</p>
                    </div>
                  )}
                </motion.div>
              )}
            </>
          )}
        </motion.div>
      </section>
    </main>
  )
} 
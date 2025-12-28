'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import { createClient } from '@/lib/supabase/client'
import Image from 'next/image'
import Link from 'next/link'

export default function Packages() {
  const [packages, setPackages] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    async function fetchPackages() {
      const { data, error } = await supabase
        .from('packages')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) {
        console.error('Error fetching packages:', error)
      } else {
        setPackages(data || [])
      }
      setLoading(false)
    }

    fetchPackages()
  }, [])

  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <Navbar />

      <section className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Travel Packages
          </h1>
          <p className="text-xl text-gray-300">
            Curated experiences for every traveler
          </p>
        </motion.div>

        {loading ? (
           <div className="flex justify-center items-center h-64">
             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
           </div>
        ) : packages.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            No packages available at the moment. Please check back later!
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all shadow-lg group"
              >
                <div className="relative h-64 w-full">
                  {pkg.image ? (
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.price}
                  </div>
                </div>
                <div className="p-6">
                   <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display text-xl font-bold">{pkg.name}</h3>
                      <span className="text-gray-400 text-sm">{pkg.duration}</span>
                   </div>
                   <p className="text-gray-300 text-sm line-clamp-2 mb-4">
                     {pkg.description}
                   </p>
                   <Link href={`/packages/${pkg.id}`} className="block w-full text-center py-3 rounded-lg bg-white/10 hover:bg-primary text-white font-semibold transition-colors">
                     View Details
                   </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

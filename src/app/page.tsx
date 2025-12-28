'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from '@/components/Navbar'
import DestinationCard from '@/components/DestinationCard'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/client'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // State for destinations
  const [popularDestinations, setPopularDestinations] = useState<any[]>([])
  const supabase = createClient()

  useEffect(() => {
    async function fetchDestinations() {
      const { data } = await supabase
        .from('destinations')
        .select('*')
        .limit(3)
      
      if (data) {
        setPopularDestinations(data)
      }
    }
    fetchDestinations()
  }, [])

  // Scroll hooks for parallax effects
  const { scrollY } = useScroll()
  
  // Hero Text Transforms
  const textY = useTransform(scrollY, [0, 500], [0, 200])
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0])
  
  // Hero Image Transforms
  const imageScale = useTransform(scrollY, [0, 500], [1.1, 1.2]) // Start slightly zoomed in
  const imageY = useTransform(scrollY, [0, 500], [0, 100])

  return (
    <main className="min-h-screen bg-[#0f172a]" ref={containerRef}>
      <Navbar />
      
      {/* Hero Section with Multi-layer Parallax */}
      <section className="relative h-screen overflow-hidden">
        {/* Layer 1: Stars/Dust Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#334155]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 mix-blend-overlay pointer-events-none z-0" />

        {/* Layer 2: Distant Mountain (Main Background) */}
        <motion.div 
          style={{ scale: imageScale, y: imageY }}
          className="absolute inset-0 z-10"
        >
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1596489360879-110bb525e933?q=80&w=3800&auto=format&fit=crop"
              alt="Majestic Mountain"
              fill
              className="object-cover"
              priority
              quality={100}
            />
          </div>
        </motion.div>

        {/* Layer 3: Distant Fog/Mist (Slow movement) */}
        <motion.div 
          style={{ 
            y: useTransform(scrollY, [0, 500], [0, -50]),
            opacity: useTransform(scrollY, [0, 500], [0.3, 0])
          }}
          className="absolute inset-0 z-20 pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent" />
        </motion.div>

        {/* Layer 4: Close Clouds (Fast movement for parallax depth) */}
        <motion.div 
          style={{ 
            y: useTransform(scrollY, [0, 500], [0, -150]),
            x: useTransform(scrollY, [0, 500], [0, 50]),
            scale: useTransform(scrollY, [0, 500], [1.2, 1.4]),
            opacity: useTransform(scrollY, [0, 300], [0.4, 0])
          }}
          className="absolute bottom-0 left-[-10%] right-[-10%] h-[60%] z-30 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-20 filter blur-2xl"
        >
          <div className="w-full h-full bg-gradient-to-t from-[#0f172a] via-white/10 to-transparent" />
        </motion.div>

        {/* Text Layer - Moves fastest */}
        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none"
        >
          <div className="text-center text-white px-4">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-display text-5xl md:text-7xl lg:text-9xl font-bold mb-6 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] tracking-tighter"
            >
              Discover Pakistan
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-xl md:text-3xl font-light drop-shadow-lg max-w-3xl mx-auto text-gray-200 leading-relaxed"
            >
              From the peaks of Karakoram to the valleys of Kashmir
            </motion.p>
          </div>
        </motion.div>

        {/* Global Dark Overlay for Smooth Content Transition */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent z-50" />
      </section>

      {/* Destinations Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10" id="destinations">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center text-white drop-shadow-lg">
            Popular Destinations
          </h2>
        </motion.div>

        {popularDestinations.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            Loading destinations...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {popularDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <DestinationCard 
                  slug={destination.slug}
                  name={destination.name}
                  description={destination.description}
                  image={destination.image}
                  location={destination.location}
                />
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
} 
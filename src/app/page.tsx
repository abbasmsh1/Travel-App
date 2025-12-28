'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from '@/components/Navbar'
import DestinationCard from '@/components/DestinationCard'
import SketchfabEmbed from '@/components/SketchfabEmbed'
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
  
  // Hero Model Transforms
  const modelScale = useTransform(scrollY, [0, 500], [1, 1.1])
  const modelY = useTransform(scrollY, [0, 500], [0, 100])

  return (
    <main className="min-h-screen bg-[#0f172a]" ref={containerRef}>
      <Navbar />
      
      {/* Hero Section with Parallax 3D Scene */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-b from-[#1a1c2c] via-[#4a1c40] to-[#f4f1de]">
        {/* Stars/Dust Overlay (Optional polish) */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 mix-blend-overlay pointer-events-none" />

        {/* Text Layer - Moves faster for parallax */}
        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
        >
          <div className="text-center text-white px-4">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-lg tracking-tight">
              Discover Pakistan
            </h1>
            <p className="text-xl md:text-3xl font-light drop-shadow-md max-w-2xl mx-auto">
              From the peaks of Karakoram to the valleys of Kashmir
            </p>
          </div>
        </motion.div>

        {/* 3D Model Layer - Scales and moves slowly */}
        <motion.div 
          style={{ scale: modelScale, y: modelY }}
          className="absolute inset-0 z-0 h-[120%] -top-[10%]" // Extend height for parallax room
        >
          <SketchfabEmbed 
            url="https://sketchfab.com/models/d75bec28fe274fe18b9e6a1c1bebd2df/embed"
            title="K2 / Mount Godwin-Austen"
          />
        </motion.div>
        
        {/* Gradient Overlay for smooth transition to content */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent z-20" />
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
      </section>
    </main>
  )
} 
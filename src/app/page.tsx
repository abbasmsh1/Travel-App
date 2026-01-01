'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from '@/components/Navbar'
import DestinationCard from '@/components/DestinationCard'
import SketchfabEmbed from '@/components/SketchfabEmbed'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/client'

import { HeroScrollDemo } from '@/components/HeroScrollDemo'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // State for destinations
  const [popularDestinations, setPopularDestinations] = useState<any[]>([])
  const supabase = createClient()

  useEffect(() => {
    async function fetchDestinations() {
      if (!supabase) return
      
      const { data } = await supabase
        .from('destinations')
        .select('*')
        .limit(3)
      
      if (data) {
        setPopularDestinations(data)
      }
    }
    fetchDestinations()
  }, [supabase])

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
        {/* Layer 0: Stars/Space Background (Deepest) */}
        <motion.div 
          style={{ 
            y: useTransform(scrollY, [0, 500], [0, 10]),
            scale: useTransform(scrollY, [0, 500], [1, 1.05])
          }}
          className="absolute inset-0 z-0 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#1e293b]"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 mix-blend-overlay pointer-events-none z-0" />

        {/* Layer 1: Distant Mountain Silhouettes */}
        <motion.div 
          style={{ 
            y: useTransform(scrollY, [0, 500], [0, 50]),
            opacity: useTransform(scrollY, [0, 500], [0.6, 0.2])
          }}
          className="absolute inset-0 z-5 pointer-events-none opacity-40 mix-blend-screen"
        >
          <Image 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80"
            alt="Distant Mountains"
            fill
            className="object-cover brightness-50 contrast-125 grayscale"
          />
        </motion.div>

        {/* Layer 2: Interactive K2 3D Model (Main Focus) */}
        <motion.div 
          style={{ 
            scale: useTransform(scrollY, [0, 500], [1.1, 1.25]),
            y: useTransform(scrollY, [0, 500], [0, 120])
          }}
          className="absolute inset-0 z-10"
        >
          <SketchfabEmbed 
            url="https://sketchfab.com/models/593313e6f7f2475ca802175e53f4a7aa/embed"
            title="K2 Mountain 3D"
            className="w-full h-full"
          />
        </motion.div>

        {/* Layer 3: Cinematic Mist/Fog */}
        <motion.div 
          style={{ 
            y: useTransform(scrollY, [0, 500], [0, -80]),
            opacity: useTransform(scrollY, [0, 500], [0.5, 0])
          }}
          className="absolute inset-0 z-20 pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/foggy-birds.png')] opacity-10 animate-pulse" />
        </motion.div>

        {/* Layer 4: Close Moving Clouds */}
        <motion.div 
          style={{ 
            y: useTransform(scrollY, [0, 500], [0, -200]),
            x: useTransform(scrollY, [0, 500], [0, 80]),
            scale: useTransform(scrollY, [0, 500], [1.2, 1.5]),
            opacity: useTransform(scrollY, [0, 400], [0.4, 0])
          }}
          className="absolute bottom-0 left-[-20%] right-[-20%] h-[70%] z-30 pointer-events-none filter blur-3xl"
        >
          <div className="w-full h-full bg-gradient-to-t from-[#0f172a] via-white/5 to-transparent rounded-full" />
        </motion.div>

        {/* Layer 5: Front Particles/Lens Flare (Fastest) */}
        <motion.div 
          style={{ 
            y: useTransform(scrollY, [0, 500], [0, -400]),
            opacity: useTransform(scrollY, [0, 300], [0.3, 0])
          }}
          className="absolute inset-0 z-45 pointer-events-none overflow-hidden"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full filter blur-[120px] animate-bounce" />
        </motion.div>

        {/* Text Visibility Overlay (Radial gradient to darken behind text) */}
        <div className="absolute inset-0 z-35 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.6)_0%,transparent_70%)] pointer-events-none" />

        {/* Text Layer */}
        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none"
        >
          <div className="text-center text-white px-8 py-12 rounded-[3rem] backdrop-blur-[2px] bg-black/10 border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.3)]">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="font-display text-6xl md:text-8xl lg:text-[10rem] font-bold mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.9)] drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] tracking-tighter"
            >
              Discover Pakistan
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              className="text-xl md:text-4xl font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] max-w-4xl mx-auto text-white leading-relaxed tracking-wide italic"
            >
              Beyond the peaks, where legends breathe.
            </motion.p>
          </div>
        </motion.div>

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0f172a] to-transparent z-50" />
      </section>

      {/* Hero Scroll Animation Section */}
      <HeroScrollDemo destinations={popularDestinations} />

      {/* Consolidation: Removing redundant destinations list at the bottom */}
    </main>
  )
} 
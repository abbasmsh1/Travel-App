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
      
      {/* Hero Section with Parallax */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image Layer */}
        <motion.div 
          style={{ scale: imageScale, y: imageY }}
          className="absolute inset-0 z-0"
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
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0f172a]" />
          </div>
        </motion.div>

        {/* Text Layer - Moves faster for parallax */}
        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
        >
          <div className="text-center text-white px-4">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-2xl tracking-tight">
              Discover Pakistan
            </h1>
            <p className="text-xl md:text-3xl font-light drop-shadow-lg max-w-2xl mx-auto text-gray-100">
              From the peaks of Karakoram to the valleys of Kashmir
            </p>
          </div>
        </motion.div>
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
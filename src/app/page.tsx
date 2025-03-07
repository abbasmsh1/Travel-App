'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Navbar from '@/components/Navbar'
import DestinationCard from '@/components/DestinationCard'
import Scene from '@/components/Scene'

const destinations = [
  {
    id: 1,
    name: 'Hunza Valley',
    description: 'Experience the majestic Karakoram mountains and ancient watchtowers.',
    image: 'https://images.unsplash.com/photo-1586804187023-a69fb52df436?auto=format&fit=crop&w=800',
    location: 'Gilgit-Baltistan'
  },
  {
    id: 2,
    name: 'Badshahi Mosque',
    description: 'Visit the iconic Mughal-era mosque in the heart of Lahore.',
    image: 'https://images.unsplash.com/photo-1589650938441-6b42e0a30c67?auto=format&fit=crop&w=800',
    location: 'Lahore'
  },
  {
    id: 3,
    name: 'Deosai Plains',
    description: 'Explore the second-highest plateau in the world.',
    image: 'https://images.unsplash.com/photo-1589650938443-2d6f88e96b76?auto=format&fit=crop&w=800',
    location: 'Gilgit-Baltistan'
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with 3D Scene */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-30">
          <div className="text-center text-white px-4">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              Discover Pakistan's Beauty
            </h1>
            <p className="text-xl md:text-2xl">
              From ancient civilizations to natural wonders
            </p>
          </div>
        </div>
        <div className="absolute inset-0">
          <Canvas shadows camera={{ position: [0, 0, 5], fov: 75 }}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
            />
            <Scene />
          </Canvas>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto" id="destinations">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
          Popular Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </div>
      </section>
    </main>
  )
} 
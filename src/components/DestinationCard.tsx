'use client'

import { motion } from 'framer-motion'
import { MapPinIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

interface DestinationCardProps {
  name: string
  description: string
  image: string
  location: string
  slug: string
}

export default function DestinationCard({ name, description, image, location, slug }: DestinationCardProps) {
  return (

    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-xl overflow-hidden group h-full flex flex-col hover:shadow-2xl hover:bg-white/10 transition-all duration-300"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-primary mb-3">
          <MapPinIcon className="h-5 w-5" />
          <span className="text-sm font-medium tracking-wide uppercase">{location}</span>
        </div>
        
        <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        <p className="text-gray-300 leading-relaxed mb-6 line-clamp-2 flex-grow">
          {description}
        </p>
        
        <Link href={`/destinations/${slug}`} className="block mt-auto">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg ring-1 ring-white/10"
          >
            Explore More
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
} 
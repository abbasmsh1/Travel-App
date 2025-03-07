'use client'

import { motion } from 'framer-motion'
import { MapPinIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

interface DestinationCardProps {
  name: string
  description: string
  image: string
  location: string
}

export default function DestinationCard({ name, description, image, location }: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card group"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl font-bold text-dark">{name}</h3>
        <div className="flex items-center gap-2 mt-2 text-primary">
          <MapPinIcon className="h-5 w-5" />
          <span className="text-sm">{location}</span>
        </div>
        <p className="mt-4 text-gray-600">{description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
        >
          Explore More
        </motion.button>
      </div>
    </motion.div>
  )
} 
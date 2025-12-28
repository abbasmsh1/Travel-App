'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'

export default function About() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-center mb-8 drop-shadow-lg">
            About Pakistan Tourism
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-6 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl">
              <h2 className="font-display text-3xl font-bold text-primary">Our Heritage</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Pakistan is a land of diverse cultures, ancient civilizations, and breathtaking landscapes. 
                From the mighty peaks of the Karakoram to the ancient ruins of Mohenjo-daro, our country 
                offers a unique blend of natural beauty and historical significance.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Our rich cultural heritage spans thousands of years, encompassing influences from various 
                civilizations including the Indus Valley, Persian, Greek, and Islamic cultures.
              </p>
            </div>

            <motion.div
              className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1589650938264-b31e8b16c3b0"
                alt="Pakistan Cultural Heritage"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/50 to-transparent" />
            </motion.div>
          </div>

          <div className="mt-20">
            <h2 className="font-display text-3xl font-bold text-white mb-8 text-center">Why Visit Pakistan?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Natural Beauty",
                  description: "Home to five of the world's 14 highest peaks, including K2, offering unparalleled mountaineering and trekking experiences."
                },
                {
                  title: "Rich History",
                  description: "Ancient archaeological sites, magnificent forts, and beautiful mosques showcase our architectural heritage."
                },
                {
                  title: "Warm Hospitality",
                  description: "Experience the legendary Pakistani hospitality, diverse cuisine, and vibrant local traditions."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10 hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className="font-display text-xl font-bold mb-4 text-primary">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
} 
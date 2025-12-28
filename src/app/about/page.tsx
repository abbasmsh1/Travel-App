'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import { createClient } from '@/lib/supabase/client'

export default function About() {
  const [content, setContent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    async function fetchContent() {
      const { data } = await supabase
        .from('site_content')
        .select('content')
        .eq('page_slug', 'about')
        .single()
      
      if (data) {
        setContent(data.content)
      }
      setLoading(false)
    }
    fetchContent()
  }, [])

  if (loading) {
    return (
      <main className="min-h-screen bg-[#0f172a] text-white">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </main>
    )
  }

  // Fallback data if DB is not populated yet
  const pageData = content || {
    heroTitle: "About Pakistan Tourism",
    heritage: {
      title: "Our Heritage",
      text1: "Pakistan is a land of diverse cultures, ancient civilizations, and breathtaking landscapes.",
      text2: "Our rich cultural heritage spans thousands of years.",
      image: "https://images.unsplash.com/photo-1589650938264-b31e8b16c3b0"
    },
    whyVisit: {
      title: "Why Visit Pakistan?",
      items: []
    }
  }

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
            {pageData.heroTitle}
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-6 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl">
              <h2 className="font-display text-3xl font-bold text-primary">{pageData.heritage.title}</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {pageData.heritage.text1}
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                {pageData.heritage.text2}
              </p>
            </div>

            <motion.div
              className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={pageData.heritage.image}
                alt="Pakistan Cultural Heritage"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/50 to-transparent" />
            </motion.div>
          </div>

          <div className="mt-20">
            <h2 className="font-display text-3xl font-bold text-white mb-8 text-center">{pageData.whyVisit.title}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pageData.whyVisit.items.map((item: any, index: number) => (
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
 
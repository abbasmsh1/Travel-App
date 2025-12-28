'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Chatbot from '@/components/Chatbot'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Here you would typically send the form data to your backend
    // For now, we'll simulate a submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simulate API call
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
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
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {/* Contact Information */}
            <div className="space-y-8 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
              <h2 className="font-display text-2xl font-bold mb-6 text-white">Contact Information</h2>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-primary/20 rounded-xl">
                  <EnvelopeIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">Email</h3>
                  <p className="text-gray-300">contact@saffarlog.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-primary/20 rounded-xl">
                  <PhoneIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">Phone</h3>
                  <p className="text-gray-300">+92 300 1234567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-primary/20 rounded-xl">
                  <MapPinIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-white">Office</h3>
                  <p className="text-gray-300">
                    123 Travel Street<br />
                    Islamabad, Pakistan
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl shadow-xl border border-white/10 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl text-white font-bold text-lg transition-all shadow-lg
                    ${isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed opacity-50' 
                      : 'bg-primary hover:bg-primary/90 hover:shadow-primary/30'}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-400 text-center font-medium bg-green-500/10 py-2 rounded-lg border border-green-500/20">
                    Thank you! Your message has been sent successfully.
                  </p>
                )}

                {submitStatus === 'error' && (
                  <p className="text-red-400 text-center font-medium bg-red-500/10 py-2 rounded-lg border border-red-500/20">
                    Oops! Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </section>
      <Chatbot />
    </main>
  )
} 
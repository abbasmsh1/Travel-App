'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import LocationManager from '@/components/admin/LocationManager'
import AttractionManager from '@/components/admin/AttractionManager'
import AccommodationManager from '@/components/admin/AccommodationManager'
import TransportationManager from '@/components/admin/TransportationManager'
import PageManager from '@/components/admin/PageManager'
import { UserIcon, MapPinIcon, PhotoIcon, HomeIcon, TruckIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

type AdminTab = 'locations' | 'attractions' | 'accommodations' | 'transportation' | 'pages' | 'users'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<AdminTab>('locations')
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState<{
    name: string
    email: string
    role: string
  } | null>(null)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user/profile')
        const data = await response.json()
        
        if (data.user.role !== 'ADMIN') {
          window.location.href = '/dashboard'
          return
        }
        
        setUserData(data.user)
      } catch (error) {
        console.error('Error fetching user data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserData()
  }, [])

  const renderContent = () => {
    switch (activeTab) {
      case 'locations':
        return <LocationManager />
      case 'attractions':
        return <AttractionManager />
      case 'accommodations':
        return <AccommodationManager />
      case 'transportation':
        return <TransportationManager />
      case 'pages':
        return <PageManager />
      case 'users':
        return <div>User Management (Coming Soon)</div>
      default:
        return <LocationManager />
    }
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
          <p className="text-center text-gray-600">Loading...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="flex flex-col items-center space-y-4">
            <h1 className="font-display text-4xl md:text-5xl font-bold">
              Admin Dashboard
            </h1>
            {userData && (
              <p className="text-gray-600">
                Logged in as {userData.name} ({userData.email})
              </p>
            )}
          </div>

          {/* Navigation Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <button
              onClick={() => setActiveTab('locations')}
              className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'locations'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <MapPinIcon className="h-5 w-5" />
              <span>Locations</span>
            </button>

            <button
              onClick={() => setActiveTab('attractions')}
              className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'attractions'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <PhotoIcon className="h-5 w-5" />
              <span>Attractions</span>
            </button>

            <button
              onClick={() => setActiveTab('accommodations')}
              className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'accommodations'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <HomeIcon className="h-5 w-5" />
              <span>Accommodations</span>
            </button>

            <button
              onClick={() => setActiveTab('transportation')}
              className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'transportation'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <TruckIcon className="h-5 w-5" />
              <span>Transportation</span>
            </button>

            <button
              onClick={() => setActiveTab('pages')}
              className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'pages'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <DocumentTextIcon className="h-5 w-5" />
              <span>Pages</span>
            </button>

            <button
              onClick={() => setActiveTab('users')}
              className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'users'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <UserIcon className="h-5 w-5" />
              <span>Users</span>
            </button>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            {renderContent()}
          </div>
        </motion.div>
      </div>
    </main>
  )
} 
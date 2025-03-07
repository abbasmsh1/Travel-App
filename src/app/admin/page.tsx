'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import LocationManager from '@/components/admin/LocationManager'
import AttractionManager from '@/components/admin/AttractionManager'
import AccommodationManager from '@/components/admin/AccommodationManager'
import TransportationManager from '@/components/admin/TransportationManager'
import PageManager from '@/components/admin/PageManager'

type AdminTab = 'locations' | 'attractions' | 'accommodations' | 'transportation' | 'pages'

export default function AdminPortal() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<AdminTab>('locations')
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const response = await fetch('/api/auth/check-admin')
        const data = await response.json()

        if (!data.isAdmin) {
          router.push('/dashboard')
          return
        }

        setIsAdmin(true)
      } catch (error) {
        console.error('Failed to check admin status:', error)
        router.push('/dashboard')
      } finally {
        setIsLoading(false)
      }
    }

    checkAdminStatus()
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin portal...</p>
        </div>
      </div>
    )
  }

  if (!isAdmin) {
    return null
  }

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
      default:
        return null
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex flex-col items-center space-y-4">
            <h1 className="font-display text-4xl md:text-5xl font-bold">
              Admin Portal
            </h1>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setActiveTab('locations')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'locations'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Locations
              </button>
              <button
                onClick={() => setActiveTab('attractions')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'attractions'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Attractions
              </button>
              <button
                onClick={() => setActiveTab('accommodations')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'accommodations'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Accommodations
              </button>
              <button
                onClick={() => setActiveTab('transportation')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'transportation'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Transportation
              </button>
              <button
                onClick={() => setActiveTab('pages')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'pages'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Pages
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </main>
  )
} 
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import TripExpenseBot from '@/components/TripExpenseBot'
import ProfileSettings from '@/components/ProfileSettings'
import { CalendarIcon, MapPinIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline'

interface Trip {
  id: string
  title: string
  startDate: string
  endDate: string
  destinations: string[]
  notes?: string
}

interface UserPreferences {
  favoriteRegions: { name: string; count: number }[]
  averageTripDuration: number
  totalTrips: number
}

export default function Dashboard() {
  const [trips, setTrips] = useState<Trip[]>([])
  const [preferences, setPreferences] = useState<UserPreferences | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'overview' | 'profile'>('overview')
  const [userData, setUserData] = useState<{
    name: string
    email: string
    profileImage?: string
  } | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch trips and preferences
        const [tripsResponse, preferencesResponse, userResponse] = await Promise.all([
          fetch('/api/trips'),
          fetch('/api/preferences'),
          fetch('/api/user/profile')
        ])

        const tripsData = await tripsResponse.json()
        const preferencesData = await preferencesResponse.json()
        const userData = await userResponse.json()

        setTrips(tripsData.trips)
        setPreferences(preferencesData)
        setUserData(userData.user)
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const renderContent = () => {
    if (activeTab === 'profile' && userData) {
      return (
        <section className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-display font-bold mb-6">Profile Settings</h2>
          <ProfileSettings
            initialName={userData.name}
            initialEmail={userData.email}
            initialProfileImage={userData.profileImage}
          />
        </section>
      )
    }

    return (
      <>
        {/* Stats Overview */}
        {preferences && (
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <div className="flex items-center gap-4">
                <MapPinIcon className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Total Trips</h3>
                  <p className="text-3xl font-bold text-primary">{preferences.totalTrips}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <div className="flex items-center gap-4">
                <ClockIcon className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Average Duration</h3>
                  <p className="text-3xl font-bold text-primary">
                    {preferences.averageTripDuration} days
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <div className="flex items-center gap-4">
                <CalendarIcon className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Next Trip</h3>
                  <p className="text-xl font-medium text-primary">
                    {trips.length > 0
                      ? new Date(trips[0].startDate).toLocaleDateString()
                      : 'No trips planned'}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Trip History */}
        <section className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-display font-bold mb-6">Your Trips</h2>
          {isLoading ? (
            <p className="text-center text-gray-600">Loading your trips...</p>
          ) : trips.length > 0 ? (
            <div className="space-y-4">
              {trips.map((trip) => (
                <motion.div
                  key={trip.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{trip.title}</h3>
                      <p className="text-gray-600 mb-2">
                        {new Date(trip.startDate).toLocaleDateString()} - {new Date(trip.endDate).toLocaleDateString()}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {trip.destinations.map((destination, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                          >
                            {destination}
                          </span>
                        ))}
                      </div>
                    </div>
                    {trip.notes && (
                      <p className="text-sm text-gray-500 italic">{trip.notes}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">No trips found. Start planning your first adventure!</p>
          )}
        </section>

        {/* Travel Preferences */}
        {preferences && (
          <section className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-display font-bold mb-6">Your Travel Preferences</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Favorite Regions</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {preferences.favoriteRegions.map((region, index) => (
                    <motion.div
                      key={region.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-50 rounded-lg p-4"
                    >
                      <h4 className="font-medium text-gray-900">{region.name}</h4>
                      <p className="text-primary font-semibold">{region.count} trips</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </>
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
          {/* Header with Tabs */}
          <div className="flex flex-col items-center space-y-4">
            <h1 className="font-display text-4xl md:text-5xl font-bold">
              Your Travel Dashboard
            </h1>
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'overview'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'profile'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Profile Settings
              </button>
            </div>
          </div>

          {/* Content */}
          {renderContent()}
        </motion.div>
      </div>

      <TripExpenseBot />
    </main>
  )
} 
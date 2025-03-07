'use client'

import { useState, useEffect } from 'react'
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

interface Location {
  id: string
  name: string
  region: string
  country: string
  description: string
  imageUrl?: string
  climate?: string
  bestTimeToVisit?: string
}

export default function LocationManager() {
  const [locations, setLocations] = useState<Location[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingLocation, setEditingLocation] = useState<Location | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    region: '',
    country: '',
    description: '',
    imageUrl: '',
    climate: '',
    bestTimeToVisit: ''
  })
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  useEffect(() => {
    fetchLocations()
  }, [])

  const fetchLocations = async () => {
    try {
      const response = await fetch('/api/admin/locations')
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch locations')
      }
      
      if (!Array.isArray(data.locations)) {
        throw new Error('Invalid response format')
      }
      
      // Validate each location object
      const validatedLocations = data.locations.map((loc: any): Location => {
        if (!loc.id || !loc.name || !loc.region || !loc.country || !loc.description) {
          throw new Error('Invalid location data')
        }
        return {
          id: loc.id,
          name: loc.name,
          region: loc.region,
          country: loc.country,
          description: loc.description,
          imageUrl: loc.imageUrl,
          climate: loc.climate,
          bestTimeToVisit: loc.bestTimeToVisit
        }
      })
      
      setLocations(validatedLocations)
    } catch (error) {
      console.error('Failed to fetch locations:', error)
      setMessage({ type: 'error', text: error instanceof Error ? error.message : 'Failed to load locations' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)

    try {
      const response = await fetch('/api/admin/locations', {
        method: editingLocation ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editingLocation ? { ...formData, id: editingLocation.id } : formData)
      })

      if (!response.ok) {
        throw new Error('Failed to save location')
      }

      await fetchLocations()
      setShowForm(false)
      setEditingLocation(null)
      setFormData({
        name: '',
        region: '',
        country: '',
        description: '',
        imageUrl: '',
        climate: '',
        bestTimeToVisit: ''
      })
      setMessage({ type: 'success', text: `Location ${editingLocation ? 'updated' : 'added'} successfully` })
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to save location' })
    }
  }

  const handleEdit = (location: Location) => {
    setEditingLocation(location)
    setFormData({
      name: location.name,
      region: location.region,
      country: location.country,
      description: location.description,
      imageUrl: location.imageUrl || '',
      climate: location.climate || '',
      bestTimeToVisit: location.bestTimeToVisit || ''
    })
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this location? This will also delete all associated attractions, accommodations, and transportation options.')) {
      return
    }

    try {
      const response = await fetch(`/api/admin/locations/${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('Failed to delete location')
      }

      await fetchLocations()
      setMessage({ type: 'success', text: 'Location deleted successfully' })
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to delete location' })
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Locations</h2>
        <button
          onClick={() => {
            setEditingLocation(null)
            setFormData({
              name: '',
              region: '',
              country: '',
              description: '',
              imageUrl: '',
              climate: '',
              bestTimeToVisit: ''
            })
            setShowForm(true)
          }}
          className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Location
        </button>
      </div>

      {message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-md ${
            message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}
        >
          {message.text}
        </motion.div>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold">
            {editingLocation ? 'Edit Location' : 'Add New Location'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                Region
              </label>
              <input
                type="text"
                id="region"
                value={formData.region}
                onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <input
                type="text"
                id="country"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="url"
                id="imageUrl"
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="climate" className="block text-sm font-medium text-gray-700">
                Climate
              </label>
              <input
                type="text"
                id="climate"
                value={formData.climate}
                onChange={(e) => setFormData({ ...formData, climate: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="bestTimeToVisit" className="block text-sm font-medium text-gray-700">
                Best Time to Visit
              </label>
              <input
                type="text"
                id="bestTimeToVisit"
                value={formData.bestTimeToVisit}
                onChange={(e) => setFormData({ ...formData, bestTimeToVisit: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              required
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => {
                setShowForm(false)
                setEditingLocation(null)
              }}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {editingLocation ? 'Update' : 'Add'} Location
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((location) => (
          <div
            key={location.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
          >
            {location.imageUrl && (
              <img
                src={location.imageUrl}
                alt={location.name}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{location.name}</h3>
              <p className="text-gray-600">{location.region}, {location.country}</p>
              <p className="mt-2 text-gray-700 line-clamp-3">{location.description}</p>
              
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  onClick={() => handleEdit(location)}
                  className="p-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <PencilIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDelete(location.id)}
                  className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 
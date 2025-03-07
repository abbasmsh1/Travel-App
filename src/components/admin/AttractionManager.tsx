'use client'

import { useState, useEffect, useRef } from 'react'
import { PlusIcon, PencilIcon, TrashIcon, PhotoIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

interface Attraction {
  id: string
  name: string
  description: string
  imageUrl?: string
  price: number
  duration: number
  locationId: string
  category: string
  rating?: number
  openingHours?: {
    [key: string]: { open: string; close: string }
  }
}

interface Location {
  id: string
  name: string
}

export default function AttractionManager() {
  const [attractions, setAttractions] = useState<Attraction[]>([])
  const [locations, setLocations] = useState<Location[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingAttraction, setEditingAttraction] = useState<Attraction | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imageUrl: '',
    price: 0,
    duration: 60,
    locationId: '',
    category: '',
    rating: 0,
    openingHours: {
      monday: { open: '09:00', close: '17:00' },
      tuesday: { open: '09:00', close: '17:00' },
      wednesday: { open: '09:00', close: '17:00' },
      thursday: { open: '09:00', close: '17:00' },
      friday: { open: '09:00', close: '17:00' },
      saturday: { open: '10:00', close: '16:00' },
      sunday: { open: '10:00', close: '16:00' }
    }
  })
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [attractionsRes, locationsRes] = await Promise.all([
        fetch('/api/admin/attractions'),
        fetch('/api/admin/locations')
      ])
      
      const attractionsData = await attractionsRes.json()
      const locationsData = await locationsRes.json()
      
      setAttractions(attractionsData.attractions)
      setLocations(locationsData.locations)
    } catch (error) {
      console.error('Failed to fetch data:', error)
      setMessage({ type: 'error', text: 'Failed to load data' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setMessage({ type: 'error', text: 'Image size should be less than 5MB' })
      return
    }

    // Check file type
    if (!file.type.startsWith('image/')) {
      setMessage({ type: 'error', text: 'Please upload an image file' })
      return
    }

    try {
      const formData = new FormData()
      formData.append('image', file)
      formData.append('type', 'attraction')

      const response = await fetch('/api/admin/upload-image', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error('Failed to upload image')
      }

      const data = await response.json()
      setFormData(prev => ({ ...prev, imageUrl: data.imageUrl }))
      setMessage({ type: 'success', text: 'Image uploaded successfully' })
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to upload image' })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)

    try {
      const response = await fetch('/api/admin/attractions', {
        method: editingAttraction ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editingAttraction ? { ...formData, id: editingAttraction.id } : formData)
      })

      if (!response.ok) {
        throw new Error('Failed to save attraction')
      }

      await fetchData()
      setShowForm(false)
      setEditingAttraction(null)
      setFormData({
        name: '',
        description: '',
        imageUrl: '',
        price: 0,
        duration: 60,
        locationId: '',
        category: '',
        rating: 0,
        openingHours: {
          monday: { open: '09:00', close: '17:00' },
          tuesday: { open: '09:00', close: '17:00' },
          wednesday: { open: '09:00', close: '17:00' },
          thursday: { open: '09:00', close: '17:00' },
          friday: { open: '09:00', close: '17:00' },
          saturday: { open: '10:00', close: '16:00' },
          sunday: { open: '10:00', close: '16:00' }
        }
      })
      setMessage({ type: 'success', text: `Attraction ${editingAttraction ? 'updated' : 'added'} successfully` })
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to save attraction' })
    }
  }

  const handleEdit = (attraction: Attraction) => {
    setEditingAttraction(attraction)
    setFormData({
      name: attraction.name,
      description: attraction.description,
      imageUrl: attraction.imageUrl || '',
      price: attraction.price,
      duration: attraction.duration,
      locationId: attraction.locationId,
      category: attraction.category,
      rating: attraction.rating || 0,
      openingHours: attraction.openingHours || {
        monday: { open: '09:00', close: '17:00' },
        tuesday: { open: '09:00', close: '17:00' },
        wednesday: { open: '09:00', close: '17:00' },
        thursday: { open: '09:00', close: '17:00' },
        friday: { open: '09:00', close: '17:00' },
        saturday: { open: '10:00', close: '16:00' },
        sunday: { open: '10:00', close: '16:00' }
      }
    })
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this attraction?')) {
      return
    }

    try {
      const response = await fetch(`/api/admin/attractions/${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('Failed to delete attraction')
      }

      await fetchData()
      setMessage({ type: 'success', text: 'Attraction deleted successfully' })
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to delete attraction' })
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
        <h2 className="text-2xl font-bold">Manage Attractions</h2>
        <button
          onClick={() => {
            setEditingAttraction(null)
            setFormData({
              name: '',
              description: '',
              imageUrl: '',
              price: 0,
              duration: 60,
              locationId: '',
              category: '',
              rating: 0,
              openingHours: {
                monday: { open: '09:00', close: '17:00' },
                tuesday: { open: '09:00', close: '17:00' },
                wednesday: { open: '09:00', close: '17:00' },
                thursday: { open: '09:00', close: '17:00' },
                friday: { open: '09:00', close: '17:00' },
                saturday: { open: '10:00', close: '16:00' },
                sunday: { open: '10:00', close: '16:00' }
              }
            })
            setShowForm(true)
          }}
          className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Attraction
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
            {editingAttraction ? 'Edit Attraction' : 'Add New Attraction'}
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
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <select
                id="location"
                value={formData.locationId}
                onChange={(e) => setFormData({ ...formData, locationId: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                required
              >
                <option value="">Select a location</option>
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                required
              >
                <option value="">Select a category</option>
                <option value="Historical">Historical</option>
                <option value="Nature">Nature</option>
                <option value="Adventure">Adventure</option>
                <option value="Cultural">Cultural</option>
                <option value="Entertainment">Entertainment</option>
              </select>
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                id="price"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                min="0"
                step="0.01"
                required
              />
            </div>

            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                Duration (minutes)
              </label>
              <input
                type="number"
                id="duration"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                min="1"
                required
              />
            </div>

            <div>
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <input
                type="number"
                id="rating"
                value={formData.rating}
                onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value) })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                min="0"
                max="5"
                step="0.1"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Image</label>
            <div className="mt-1 flex items-center space-x-4">
              {formData.imageUrl ? (
                <div className="relative w-32 h-32">
                  <img
                    src={formData.imageUrl}
                    alt="Attraction"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, imageUrl: '' })}
                    className="absolute top-0 right-0 p-1 bg-red-600 text-white rounded-full transform translate-x-1/2 -translate-y-1/2"
                  >
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center justify-center w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary transition-colors"
                >
                  <PhotoIcon className="h-8 w-8 text-gray-400" />
                </button>
              )}
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
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

          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-4">Opening Hours</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(formData.openingHours).map(([day, hours]) => (
                <div key={day} className="space-y-2">
                  <p className="capitalize text-sm font-medium text-gray-700">{day}</p>
                  <div className="flex space-x-2">
                    <input
                      type="time"
                      value={hours.open}
                      onChange={(e) => setFormData({
                        ...formData,
                        openingHours: {
                          ...formData.openingHours,
                          [day]: { ...hours, open: e.target.value }
                        }
                      })}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    />
                    <input
                      type="time"
                      value={hours.close}
                      onChange={(e) => setFormData({
                        ...formData,
                        openingHours: {
                          ...formData.openingHours,
                          [day]: { ...hours, close: e.target.value }
                        }
                      })}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => {
                setShowForm(false)
                setEditingAttraction(null)
              }}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {editingAttraction ? 'Update' : 'Add'} Attraction
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {attractions.map((attraction) => (
          <div
            key={attraction.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
          >
            {attraction.imageUrl && (
              <img
                src={attraction.imageUrl}
                alt={attraction.name}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{attraction.name}</h3>
              <p className="text-gray-600">
                {locations.find(l => l.id === attraction.locationId)?.name}
              </p>
              <p className="text-primary font-semibold">
                ${attraction.price.toFixed(2)} • {attraction.duration} minutes
              </p>
              <p className="mt-2 text-gray-700 line-clamp-3">{attraction.description}</p>
              
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  onClick={() => handleEdit(attraction)}
                  className="p-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <PencilIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDelete(attraction.id)}
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
'use client'

import { useState, useEffect, useRef } from 'react'
import { PlusIcon, PencilIcon, TrashIcon, PhotoIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

interface Accommodation {
  id: string
  name: string
  type: string
  description: string
  imageUrl?: string
  pricePerNight: number
  locationId: string
  amenities: string[]
  rating?: number
  contactInfo?: {
    phone?: string
    email?: string
    website?: string
  }
}

interface Location {
  id: string
  name: string
}

const ACCOMMODATION_TYPES = [
  'Hotel',
  'Hostel',
  'Resort',
  'Apartment',
  'Villa',
  'Guesthouse',
  'Bed & Breakfast'
]

const AMENITIES = [
  'Wi-Fi',
  'Pool',
  'Spa',
  'Gym',
  'Restaurant',
  'Bar',
  'Room Service',
  'Parking',
  'Air Conditioning',
  'Kitchen',
  'Laundry',
  'TV',
  'Beach Access',
  'Airport Shuttle'
]

export default function AccommodationManager() {
  const [accommodations, setAccommodations] = useState<Accommodation[]>([])
  const [locations, setLocations] = useState<Location[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingAccommodation, setEditingAccommodation] = useState<Accommodation | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    description: '',
    imageUrl: '',
    pricePerNight: 0,
    locationId: '',
    amenities: [] as string[],
    rating: 0,
    contactInfo: {
      phone: '',
      email: '',
      website: ''
    }
  })
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [accommodationsRes, locationsRes] = await Promise.all([
        fetch('/api/admin/accommodations'),
        fetch('/api/admin/locations')
      ])
      
      const accommodationsData = await accommodationsRes.json()
      const locationsData = await locationsRes.json()
      
      setAccommodations(accommodationsData.accommodations)
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
      formData.append('type', 'accommodation')

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
      const response = await fetch('/api/admin/accommodations', {
        method: editingAccommodation ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editingAccommodation ? { ...formData, id: editingAccommodation.id } : formData)
      })

      if (!response.ok) {
        throw new Error('Failed to save accommodation')
      }

      await fetchData()
      setShowForm(false)
      setEditingAccommodation(null)
      setFormData({
        name: '',
        type: '',
        description: '',
        imageUrl: '',
        pricePerNight: 0,
        locationId: '',
        amenities: [],
        rating: 0,
        contactInfo: {
          phone: '',
          email: '',
          website: ''
        }
      })
      setMessage({ type: 'success', text: `Accommodation ${editingAccommodation ? 'updated' : 'added'} successfully` })
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to save accommodation' })
    }
  }

  const handleEdit = (accommodation: Accommodation) => {
    setEditingAccommodation(accommodation)
    setFormData({
      name: accommodation.name,
      type: accommodation.type,
      description: accommodation.description,
      imageUrl: accommodation.imageUrl || '',
      pricePerNight: accommodation.pricePerNight,
      locationId: accommodation.locationId,
      amenities: accommodation.amenities,
      rating: accommodation.rating || 0,
      contactInfo: accommodation.contactInfo || {
        phone: '',
        email: '',
        website: ''
      }
    })
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this accommodation?')) {
      return
    }

    try {
      const response = await fetch(`/api/admin/accommodations/${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('Failed to delete accommodation')
      }

      await fetchData()
      setMessage({ type: 'success', text: 'Accommodation deleted successfully' })
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to delete accommodation' })
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
        <h2 className="text-2xl font-bold">Manage Accommodations</h2>
        <button
          onClick={() => {
            setEditingAccommodation(null)
            setFormData({
              name: '',
              type: '',
              description: '',
              imageUrl: '',
              pricePerNight: 0,
              locationId: '',
              amenities: [],
              rating: 0,
              contactInfo: {
                phone: '',
                email: '',
                website: ''
              }
            })
            setShowForm(true)
          }}
          className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Accommodation
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
            {editingAccommodation ? 'Edit Accommodation' : 'Add New Accommodation'}
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
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                Type
              </label>
              <select
                id="type"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                required
              >
                <option value="">Select a type</option>
                {ACCOMMODATION_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
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
              <label htmlFor="pricePerNight" className="block text-sm font-medium text-gray-700">
                Price per Night
              </label>
              <input
                type="number"
                id="pricePerNight"
                value={formData.pricePerNight}
                onChange={(e) => setFormData({ ...formData, pricePerNight: parseFloat(e.target.value) })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                min="0"
                step="0.01"
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
                    alt="Accommodation"
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
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amenities
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {AMENITIES.map((amenity) => (
                <label key={amenity} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.amenities.includes(amenity)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData({
                          ...formData,
                          amenities: [...formData.amenities, amenity]
                        })
                      } else {
                        setFormData({
                          ...formData,
                          amenities: formData.amenities.filter(a => a !== amenity)
                        })
                      }
                    }}
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-gray-700">{amenity}</span>
                </label>
              ))}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.contactInfo.phone}
                onChange={(e) => setFormData({
                  ...formData,
                  contactInfo: { ...formData.contactInfo, phone: e.target.value }
                })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.contactInfo.email}
                onChange={(e) => setFormData({
                  ...formData,
                  contactInfo: { ...formData.contactInfo, email: e.target.value }
                })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                Website
              </label>
              <input
                type="url"
                id="website"
                value={formData.contactInfo.website}
                onChange={(e) => setFormData({
                  ...formData,
                  contactInfo: { ...formData.contactInfo, website: e.target.value }
                })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => {
                setShowForm(false)
                setEditingAccommodation(null)
              }}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {editingAccommodation ? 'Update' : 'Add'} Accommodation
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accommodations.map((accommodation) => (
          <div
            key={accommodation.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
          >
            {accommodation.imageUrl && (
              <img
                src={accommodation.imageUrl}
                alt={accommodation.name}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{accommodation.name}</h3>
              <p className="text-gray-600">
                {locations.find(l => l.id === accommodation.locationId)?.name}
              </p>
              <p className="text-primary font-semibold">
                ${accommodation.pricePerNight.toFixed(2)} per night
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {accommodation.amenities.slice(0, 3).map((amenity) => (
                  <span
                    key={amenity}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                  >
                    {amenity}
                  </span>
                ))}
                {accommodation.amenities.length > 3 && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    +{accommodation.amenities.length - 3} more
                  </span>
                )}
              </div>
              <p className="mt-2 text-gray-700 line-clamp-3">{accommodation.description}</p>
              
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  onClick={() => handleEdit(accommodation)}
                  className="p-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <PencilIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDelete(accommodation.id)}
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
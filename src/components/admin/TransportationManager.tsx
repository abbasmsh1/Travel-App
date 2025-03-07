'use client'

import { useState, useEffect } from 'react'
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

interface Transportation {
  id: string
  type: string
  description: string
  baseCost: number
  locationId: string
  availability?: {
    frequency: string
    schedule: {
      [key: string]: {
        start: string
        end: string
        interval: number // in minutes
      }
    }
  }
}

interface Location {
  id: string
  name: string
}

const TRANSPORTATION_TYPES = [
  'Bus',
  'Train',
  'Taxi',
  'Ferry',
  'Subway',
  'Tram',
  'Car Rental',
  'Bike Rental',
  'Airport Shuttle'
]

export default function TransportationManager() {
  const [transportations, setTransportations] = useState<Transportation[]>([])
  const [locations, setLocations] = useState<Location[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingTransportation, setEditingTransportation] = useState<Transportation | null>(null)
  const [formData, setFormData] = useState({
    type: '',
    description: '',
    baseCost: 0,
    locationId: '',
    availability: {
      frequency: 'daily',
      schedule: {
        monday: { start: '06:00', end: '22:00', interval: 30 },
        tuesday: { start: '06:00', end: '22:00', interval: 30 },
        wednesday: { start: '06:00', end: '22:00', interval: 30 },
        thursday: { start: '06:00', end: '22:00', interval: 30 },
        friday: { start: '06:00', end: '22:00', interval: 30 },
        saturday: { start: '07:00', end: '21:00', interval: 45 },
        sunday: { start: '07:00', end: '21:00', interval: 45 }
      }
    }
  })
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [transportationsRes, locationsRes] = await Promise.all([
        fetch('/api/admin/transportations'),
        fetch('/api/admin/locations')
      ])
      
      const transportationsData = await transportationsRes.json()
      const locationsData = await locationsRes.json()
      
      setTransportations(transportationsData.transportations)
      setLocations(locationsData.locations)
    } catch (error) {
      console.error('Failed to fetch data:', error)
      setMessage({ type: 'error', text: 'Failed to load data' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)

    try {
      const response = await fetch('/api/admin/transportations', {
        method: editingTransportation ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editingTransportation ? { ...formData, id: editingTransportation.id } : formData)
      })

      if (!response.ok) {
        throw new Error('Failed to save transportation')
      }

      await fetchData()
      setShowForm(false)
      setEditingTransportation(null)
      setFormData({
        type: '',
        description: '',
        baseCost: 0,
        locationId: '',
        availability: {
          frequency: 'daily',
          schedule: {
            monday: { start: '06:00', end: '22:00', interval: 30 },
            tuesday: { start: '06:00', end: '22:00', interval: 30 },
            wednesday: { start: '06:00', end: '22:00', interval: 30 },
            thursday: { start: '06:00', end: '22:00', interval: 30 },
            friday: { start: '06:00', end: '22:00', interval: 30 },
            saturday: { start: '07:00', end: '21:00', interval: 45 },
            sunday: { start: '07:00', end: '21:00', interval: 45 }
          }
        }
      })
      setMessage({ type: 'success', text: `Transportation ${editingTransportation ? 'updated' : 'added'} successfully` })
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to save transportation' })
    }
  }

  const handleEdit = (transportation: Transportation) => {
    setEditingTransportation(transportation)
    setFormData({
      type: transportation.type,
      description: transportation.description,
      baseCost: transportation.baseCost,
      locationId: transportation.locationId,
      availability: transportation.availability || {
        frequency: 'daily',
        schedule: {
          monday: { start: '06:00', end: '22:00', interval: 30 },
          tuesday: { start: '06:00', end: '22:00', interval: 30 },
          wednesday: { start: '06:00', end: '22:00', interval: 30 },
          thursday: { start: '06:00', end: '22:00', interval: 30 },
          friday: { start: '06:00', end: '22:00', interval: 30 },
          saturday: { start: '07:00', end: '21:00', interval: 45 },
          sunday: { start: '07:00', end: '21:00', interval: 45 }
        }
      }
    })
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this transportation option?')) {
      return
    }

    try {
      const response = await fetch(`/api/admin/transportations/${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('Failed to delete transportation')
      }

      await fetchData()
      setMessage({ type: 'success', text: 'Transportation deleted successfully' })
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to delete transportation' })
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
        <h2 className="text-2xl font-bold">Manage Transportation</h2>
        <button
          onClick={() => {
            setEditingTransportation(null)
            setFormData({
              type: '',
              description: '',
              baseCost: 0,
              locationId: '',
              availability: {
                frequency: 'daily',
                schedule: {
                  monday: { start: '06:00', end: '22:00', interval: 30 },
                  tuesday: { start: '06:00', end: '22:00', interval: 30 },
                  wednesday: { start: '06:00', end: '22:00', interval: 30 },
                  thursday: { start: '06:00', end: '22:00', interval: 30 },
                  friday: { start: '06:00', end: '22:00', interval: 30 },
                  saturday: { start: '07:00', end: '21:00', interval: 45 },
                  sunday: { start: '07:00', end: '21:00', interval: 45 }
                }
              }
            })
            setShowForm(true)
          }}
          className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Transportation
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
            {editingTransportation ? 'Edit Transportation' : 'Add New Transportation'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                {TRANSPORTATION_TYPES.map((type) => (
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
              <label htmlFor="baseCost" className="block text-sm font-medium text-gray-700">
                Base Cost
              </label>
              <input
                type="number"
                id="baseCost"
                value={formData.baseCost}
                onChange={(e) => setFormData({ ...formData, baseCost: parseFloat(e.target.value) })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                min="0"
                step="0.01"
                required
              />
            </div>

            <div>
              <label htmlFor="frequency" className="block text-sm font-medium text-gray-700">
                Frequency
              </label>
              <select
                id="frequency"
                value={formData.availability.frequency}
                onChange={(e) => setFormData({
                  ...formData,
                  availability: { ...formData.availability, frequency: e.target.value }
                })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                required
              >
                <option value="daily">Daily</option>
                <option value="weekdays">Weekdays Only</option>
                <option value="weekends">Weekends Only</option>
                <option value="custom">Custom Schedule</option>
              </select>
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
            <h4 className="text-sm font-medium text-gray-700 mb-4">Schedule</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(formData.availability.schedule).map(([day, schedule]) => (
                <div key={day} className="space-y-2">
                  <p className="capitalize text-sm font-medium text-gray-700">{day}</p>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label htmlFor={`${day}-start`} className="block text-xs text-gray-500">
                        Start
                      </label>
                      <input
                        type="time"
                        id={`${day}-start`}
                        value={schedule.start}
                        onChange={(e) => setFormData({
                          ...formData,
                          availability: {
                            ...formData.availability,
                            schedule: {
                              ...formData.availability.schedule,
                              [day]: { ...schedule, start: e.target.value }
                            }
                          }
                        })}
                        className="block w-full px-2 py-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor={`${day}-end`} className="block text-xs text-gray-500">
                        End
                      </label>
                      <input
                        type="time"
                        id={`${day}-end`}
                        value={schedule.end}
                        onChange={(e) => setFormData({
                          ...formData,
                          availability: {
                            ...formData.availability,
                            schedule: {
                              ...formData.availability.schedule,
                              [day]: { ...schedule, end: e.target.value }
                            }
                          }
                        })}
                        className="block w-full px-2 py-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor={`${day}-interval`} className="block text-xs text-gray-500">
                        Interval (min)
                      </label>
                      <input
                        type="number"
                        id={`${day}-interval`}
                        value={schedule.interval}
                        onChange={(e) => setFormData({
                          ...formData,
                          availability: {
                            ...formData.availability,
                            schedule: {
                              ...formData.availability.schedule,
                              [day]: { ...schedule, interval: parseInt(e.target.value) }
                            }
                          }
                        })}
                        className="block w-full px-2 py-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        min="1"
                      />
                    </div>
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
                setEditingTransportation(null)
              }}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {editingTransportation ? 'Update' : 'Add'} Transportation
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {transportations.map((transportation) => (
          <div
            key={transportation.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold">{transportation.type}</h3>
              <p className="text-gray-600">
                {locations.find(l => l.id === transportation.locationId)?.name}
              </p>
              <p className="text-primary font-semibold">
                Base Cost: ${transportation.baseCost.toFixed(2)}
              </p>
              <p className="mt-2 text-gray-700 line-clamp-3">{transportation.description}</p>
              
              {transportation.availability && (
                <div className="mt-2">
                  <p className="text-sm text-gray-600">
                    Frequency: {transportation.availability.frequency}
                  </p>
                  <div className="mt-1 text-xs text-gray-500">
                    Example schedule: {Object.entries(transportation.availability.schedule)[0][1].start} - {Object.entries(transportation.availability.schedule)[0][1].end}
                    <br />
                    Every {Object.entries(transportation.availability.schedule)[0][1].interval} minutes
                  </div>
                </div>
              )}
              
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  onClick={() => handleEdit(transportation)}
                  className="p-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <PencilIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDelete(transportation.id)}
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
'use client'

import { useState, useEffect, useRef } from 'react'
import { PencilIcon, PhotoIcon, TrashIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

interface PageContent {
  id: string
  page: string
  title: string
  subtitle?: string
  content: {
    sections: {
      heading?: string
      text: string
    }[]
  }
  backgroundUrl?: string
}

const PAGES = [
  { id: 'home', name: 'Home Page' },
  { id: 'destinations', name: 'Destinations Page' },
  { id: 'contact', name: 'Contact Page' }
]

export default function PageManager() {
  const [pages, setPages] = useState<PageContent[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingPage, setEditingPage] = useState<PageContent | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [formData, setFormData] = useState<Omit<PageContent, 'id'>>({
    page: '',
    title: '',
    subtitle: '',
    content: {
      sections: [{ text: '' }]
    },
    backgroundUrl: ''
  })
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('/api/admin/pages')
      const data = await response.json()
      setPages(data.pages)
    } catch (error) {
      console.error('Failed to fetch pages:', error)
      setMessage({ type: 'error', text: 'Failed to load pages' })
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
      formData.append('type', 'page')

      const response = await fetch('/api/admin/upload-image', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error('Failed to upload image')
      }

      const data = await response.json()
      setFormData(prev => ({ ...prev, backgroundUrl: data.imageUrl }))
      setMessage({ type: 'success', text: 'Image uploaded successfully' })
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to upload image' })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)

    try {
      const response = await fetch('/api/admin/pages', {
        method: editingPage ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editingPage ? { ...formData, id: editingPage.id } : formData)
      })

      if (!response.ok) {
        throw new Error('Failed to save page')
      }

      await fetchData()
      setShowForm(false)
      setEditingPage(null)
      setFormData({
        page: '',
        title: '',
        subtitle: '',
        content: {
          sections: [{ text: '' }]
        },
        backgroundUrl: ''
      })
      setMessage({ type: 'success', text: `Page ${editingPage ? 'updated' : 'saved'} successfully` })
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to save page' })
    }
  }

  const handleEdit = (page: PageContent) => {
    setEditingPage(page)
    setFormData({
      page: page.page,
      title: page.title,
      subtitle: page.subtitle || '',
      content: page.content,
      backgroundUrl: page.backgroundUrl || ''
    })
    setShowForm(true)
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
        <h2 className="text-2xl font-bold">Manage Pages</h2>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PAGES.map((pageInfo) => {
          const pageContent = pages.find(p => p.page === pageInfo.id)
          return (
            <div
              key={pageInfo.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
            >
              {pageContent?.backgroundUrl ? (
                <div className="relative h-48">
                  <img
                    src={pageContent.backgroundUrl}
                    alt={pageContent.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{pageInfo.name}</h3>
                  </div>
                </div>
              ) : (
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-gray-400">{pageInfo.name}</h3>
                </div>
              )}
              
              <div className="p-4">
                {pageContent ? (
                  <>
                    <h3 className="text-lg font-semibold">{pageContent.title}</h3>
                    {pageContent.subtitle && (
                      <p className="text-gray-600 mt-1">{pageContent.subtitle}</p>
                    )}
                    <div className="mt-4 space-y-2">
                      {pageContent.content.sections.map((section, index) => (
                        <div key={index} className="space-y-1">
                          {section.heading && (
                            <h4 className="font-medium">{section.heading}</h4>
                          )}
                          <p className="text-gray-700 line-clamp-2">{section.text}</p>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="text-gray-500 italic">No content added yet</p>
                )}
                
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => {
                      if (pageContent) {
                        handleEdit(pageContent)
                      } else {
                        setEditingPage(null)
                        setFormData({
                          page: pageInfo.id,
                          title: '',
                          subtitle: '',
                          content: {
                            sections: [{ text: '' }]
                          },
                          backgroundUrl: ''
                        })
                        setShowForm(true)
                      }
                    }}
                    className="p-2 text-gray-600 hover:text-primary transition-colors"
                  >
                    <PencilIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold">
            {editingPage ? 'Edit Page Content' : 'Add Page Content'}
          </h3>
          
          <div>
            <label htmlFor="page" className="block text-sm font-medium text-gray-700">
              Page
            </label>
            <select
              id="page"
              value={formData.page}
              onChange={(e) => setFormData({ ...formData, page: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              required
              disabled={!!editingPage}
            >
              <option value="">Select a page</option>
              {PAGES.map((page) => (
                <option key={page.id} value={page.id}>
                  {page.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              required
            />
          </div>

          <div>
            <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">
              Subtitle
            </label>
            <input
              type="text"
              id="subtitle"
              value={formData.subtitle}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Background Image</label>
            <div className="mt-1 flex items-center space-x-4">
              {formData.backgroundUrl ? (
                <div className="relative w-32 h-32">
                  <img
                    src={formData.backgroundUrl}
                    alt="Background"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, backgroundUrl: '' })}
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
              Content Sections
            </label>
            <div className="space-y-4">
              {formData.content.sections.map((section, index) => (
                <div key={index} className="space-y-2">
                  <input
                    type="text"
                    placeholder="Section Heading (optional)"
                    value={section.heading || ''}
                    onChange={(e) => {
                      const newSections = [...formData.content.sections]
                      newSections[index] = {
                        ...section,
                        heading: e.target.value
                      }
                      setFormData({
                        ...formData,
                        content: { sections: newSections }
                      })
                    }}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  />
                  <textarea
                    placeholder="Section Text"
                    value={section.text}
                    onChange={(e) => {
                      const newSections = [...formData.content.sections]
                      newSections[index] = {
                        ...section,
                        text: e.target.value
                      }
                      setFormData({
                        ...formData,
                        content: { sections: newSections }
                      })
                    }}
                    rows={4}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    required
                  />
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        const newSections = formData.content.sections.filter((_, i) => i !== index)
                        setFormData({
                          ...formData,
                          content: { sections: newSections }
                        })
                      }}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove Section
                    </button>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    ...formData,
                    content: {
                      sections: [...formData.content.sections, { text: '' }]
                    }
                  })
                }}
                className="text-primary hover:text-primary/80"
              >
                Add Section
              </button>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => {
                setShowForm(false)
                setEditingPage(null)
              }}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {editingPage ? 'Update' : 'Save'} Page
            </button>
          </div>
        </form>
      )}
    </div>
  )
} 
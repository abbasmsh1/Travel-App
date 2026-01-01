'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { PhotoIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function NewRegion() {
  const router = useRouter()
  const supabase = createClient()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    if (!supabase) {
      alert('Supabase is not configured.')
      setLoading(false)
      return
    }

    try {
      const { error } = await supabase
        .from('regions')
        .insert([formData])

      if (error) throw error

      router.push('/admin/regions')
      router.refresh()
    } catch (error) {
      alert('Error creating region: ' + (error as any).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/regions" className="p-2 hover:bg-white/10 rounded-lg text-gray-400">
          <ArrowLeftIcon className="w-6 h-6" />
        </Link>
        <h1 className="text-3xl font-display font-bold text-white">Add New Region</h1>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-8 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Region Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Gilgit-Baltistan"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
          <textarea
            name="description"
            required
            rows={4}
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the region's beauty and attractions..."
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Image URL</label>
          <div className="flex gap-4">
            <input
              type="url"
              name="image"
              required
              value={formData.image}
              onChange={handleChange}
              placeholder="https://images.unsplash.com/..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
            <div className="px-4 py-3 bg-white/10 rounded-xl text-white">
              <PhotoIcon className="w-6 h-6" />
            </div>
          </div>
          {formData.image && (
            <div className="mt-4 relative h-64 w-full rounded-xl overflow-hidden border border-white/10">
              <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
            </div>
          )}
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg disabled:opacity-50"
          >
            {loading ? 'Creating...' : 'Create Region'}
          </button>
        </div>
      </form>
    </div>
  )
}

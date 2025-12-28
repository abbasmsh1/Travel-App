'use plain'
'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { PhotoIcon } from '@heroicons/react/24/outline'

export default function NewDestination() {
  const router = useRouter()
  const supabase = createClient()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    location: '',
    description: '',
    full_description: '',
    category: '',
    image: '',
    gallery: [] as string[]
  })

  // Basic slug generator
  const generateSlug = (name: string) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => {
      const newData = { ...prev, [name]: value }
      if (name === 'name') {
        newData.slug = generateSlug(value)
      }
      return newData
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await supabase
        .from('destinations')
        .insert([formData])

      if (error) throw error

      router.push('/admin/destinations')
      router.refresh()
    } catch (error) {
      alert('Error creating destination: ' + (error as any).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-display font-bold text-white mb-8">Add New Destination</h1>
      
      <form onSubmit={handleSubmit} className="space-y-8 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Slug</label>
            <input
              type="text"
              name="slug"
              required
              readOnly
              value={formData.slug}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-400 cursor-not-allowed"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
            <input
              type="text"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Gilgit-Baltistan"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
            <select
              name="category"
              required
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            >
              <option value="" className="bg-slate-800">Select Category</option>
              <option value="Mountains & Valleys" className="bg-slate-800">Mountains & Valleys</option>
              <option value="Historical" className="bg-slate-800">Historical</option>
              <option value="Nature" className="bg-slate-800">Nature</option>
              <option value="Coastal" className="bg-slate-800">Coastal</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Short Description</label>
          <textarea
            name="description"
            required
            rows={2}
            value={formData.description}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Full Description (Markdown)</label>
          <textarea
            name="full_description"
            rows={6}
            value={formData.full_description}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-mono text-sm"
          />
        </div>

        <div>
           <label className="block text-sm font-medium text-gray-300 mb-2">Main Image URL</label>
           <div className="flex gap-4">
             <input
               type="url"
               name="image"
               required
               value={formData.image}
               onChange={handleChange}
               placeholder="https://..."
               className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
             />
             <button type="button" className="px-4 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-colors">
               <PhotoIcon className="w-6 h-6" />
             </button>
           </div>
           {formData.image && (
             <div className="mt-4 relative h-48 w-full rounded-xl overflow-hidden">
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
            {loading ? 'Creating...' : 'Create Destination'}
          </button>
        </div>
      </form>
    </div>
  )
}

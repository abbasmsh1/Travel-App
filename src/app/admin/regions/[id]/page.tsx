'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter, useParams } from 'next/navigation'
import { PhotoIcon, ArrowLeftIcon, TrashIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function EditRegion() {
  const router = useRouter()
  const params = useParams()
  const supabase = createClient()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: ''
  })

  useEffect(() => {
    async function fetchRegion() {
      if (!supabase || !params.id) return

      const { data, error } = await supabase
        .from('regions')
        .select('*')
        .eq('id', params.id)
        .single()

      if (error) {
        alert('Error fetching region: ' + error.message)
        router.push('/admin/regions')
        return
      }

      if (data) {
        setFormData({
          name: data.name,
          description: data.description,
          image: data.image
        })
      }
      setLoading(false)
    }

    fetchRegion()
  }, [supabase, params.id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const { error } = await supabase
        .from('regions')
        .update(formData)
        .eq('id', params.id)

      if (error) throw error

      router.push('/admin/regions')
      router.refresh()
    } catch (error) {
      alert('Error updating region: ' + (error as any).message)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this region? This may affect destinations associated with it.')) return
    
    try {
      const { error } = await supabase
        .from('regions')
        .delete()
        .eq('id', params.id)

      if (error) throw error

      router.push('/admin/regions')
      router.refresh()
    } catch (error) {
      alert('Error deleting region: ' + (error as any).message)
    }
  }

  if (loading) return <div className="text-white p-8">Loading region data...</div>

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href="/admin/regions" className="p-2 hover:bg-white/10 rounded-lg text-gray-400">
            <ArrowLeftIcon className="w-6 h-6" />
          </Link>
          <h1 className="text-3xl font-display font-bold text-white">Edit Region</h1>
        </div>
        <button 
          onClick={handleDelete}
          className="p-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl border border-red-500/20 transition-all flex items-center gap-2"
        >
          <TrashIcon className="w-5 h-5" />
          Delete Region
        </button>
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
            disabled={saving}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  )
}

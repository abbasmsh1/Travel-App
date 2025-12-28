'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function AdminContact() {
  const [content, setContent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    async function fetchContent() {
      const { data } = await supabase
        .from('site_content')
        .select('*')
        .eq('page_slug', 'contact')
        .single()
      
      if (data) {
        setContent(data.content)
      }
      setLoading(false)
    }
    fetchContent()
  }, [])

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setMessage({ type: '', text: '' })

    const { error } = await supabase
      .from('site_content')
      .update({ content })
      .eq('page_slug', 'contact')

    if (error) {
      setMessage({ type: 'error', text: 'Failed to update content: ' + error.message })
    } else {
      setMessage({ type: 'success', text: 'Contact page updated successfully!' })
      router.refresh()
    }
    setSaving(false)
  }

  const updateInfo = (field: string, value: string) => {
    setContent((prev: any) => ({
      ...prev,
      info: {
        ...prev.info,
        [field]: value
      }
    }))
  }

  if (loading) {
    return <div className="p-8 text-white">Loading...</div>
  }

  if (!content) {
    return <div className="p-8 text-white">No content found. Please run the SQL setup script.</div>
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-white">Edit Contact Page</h1>

      {message.text && (
        <div className={`mb-6 p-4 rounded-xl border ${
          message.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-red-500/10 border-red-500/20 text-red-400'
        }`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-8">
        {/* Header Section */}
        <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl font-bold mb-4 text-primary">Header Section</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Title</label>
              <input
                type="text"
                value={content.title}
                onChange={(e) => setContent({ ...content, title: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Subtitle</label>
              <input
                type="text"
                value={content.subtitle}
                onChange={(e) => setContent({ ...content, subtitle: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white"
              />
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl font-bold mb-4 text-primary">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
              <input
                type="email"
                value={content.info.email}
                onChange={(e) => updateInfo('email', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Phone</label>
              <input
                type="text"
                value={content.info.phone}
                onChange={(e) => updateInfo('phone', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Office Address</label>
              <textarea
                value={content.info.address}
                onChange={(e) => updateInfo('address', e.target.value)}
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white"
              />
            </div>
          </div>
        </section>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-primary/30"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  )
}

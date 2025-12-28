'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function AdminAbout() {
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
        .eq('page_slug', 'about')
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
      .eq('page_slug', 'about')

    if (error) {
      setMessage({ type: 'error', text: 'Failed to update content: ' + error.message })
    } else {
      setMessage({ type: 'success', text: 'About page updated successfully!' })
      router.refresh()
    }
    setSaving(false)
  }

  const updateSection = (section: string, field: string, value: any) => {
    setContent((prev: any) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }))
  }

  const updateWhyVisitItem = (index: number, field: string, value: string) => {
    const newItems = [...content.whyVisit.items]
    newItems[index][field] = value
    setContent((prev: any) => ({
      ...prev,
      whyVisit: {
        ...prev.whyVisit,
        items: newItems
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
      <h1 className="text-3xl font-bold mb-8 text-white">Edit About Page</h1>

      {message.text && (
        <div className={`mb-6 p-4 rounded-xl border ${
          message.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-red-500/10 border-red-500/20 text-red-400'
        }`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-8">
        {/* Hero Section */}
        <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl font-bold mb-4 text-primary">Hero Section</h2>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Hero Title</label>
            <input
              type="text"
              value={content.heroTitle}
              onChange={(e) => setContent({ ...content, heroTitle: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white"
            />
          </div>
        </section>

        {/* Heritage Section */}
        <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl font-bold mb-4 text-primary">Heritage Section</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Section Title</label>
              <input
                type="text"
                value={content.heritage.title}
                onChange={(e) => updateSection('heritage', 'title', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Paragraph 1</label>
              <textarea
                value={content.heritage.text1}
                onChange={(e) => updateSection('heritage', 'text1', e.target.value)}
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Paragraph 2</label>
              <textarea
                value={content.heritage.text2}
                onChange={(e) => updateSection('heritage', 'text2', e.target.value)}
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Image URL</label>
              <input
                type="text"
                value={content.heritage.image}
                onChange={(e) => updateSection('heritage', 'image', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white"
              />
            </div>
          </div>
        </section>

        {/* Why Visit Section */}
        <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl font-bold mb-4 text-primary">Why Visit Section</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400 mb-1">Section Title</label>
            <input
              type="text"
              value={content.whyVisit.title}
              onChange={(e) => updateSection('whyVisit', 'title', e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white"
            />
          </div>
          <div className="space-y-6">
            {content.whyVisit.items.map((item: any, index: number) => (
              <div key={index} className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Item Title</label>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => updateWhyVisitItem(index, 'title', e.target.value)}
                      className="w-full bg-white/10 border border-white/10 rounded-lg p-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1">Description</label>
                    <textarea
                      value={item.description}
                      onChange={(e) => updateWhyVisitItem(index, 'description', e.target.value)}
                      rows={2}
                      className="w-full bg-white/10 border border-white/10 rounded-lg p-2 text-white"
                    />
                  </div>
                </div>
              </div>
            ))}
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

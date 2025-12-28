import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { PlusIcon, TagIcon } from '@heroicons/react/24/outline'

export default async function AdminPackages() {
  const supabase = createClient()
  const { data: packages } = await supabase.from('packages').select('*').order('created_at', { ascending: false })

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-display font-bold text-white">Travel Packages</h1>
        <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <PlusIcon className="w-5 h-5" />
          Create Package
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages?.length === 0 ? (
             <div className="col-span-full p-12 text-center text-gray-400 bg-white/5 rounded-2xl border border-white/10">
                <TagIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No packages created yet.</p>
             </div>
        ) : (
          packages?.map((pkg) => (
            <div key={pkg.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>
              <div className="flex justify-between items-end">
                <div>
                   <p className="text-gray-400 text-sm">{pkg.duration_days} Days / {pkg.duration_days - 1} Nights</p>
                </div>
                <span className="text-primary font-bold text-lg">${pkg.price}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

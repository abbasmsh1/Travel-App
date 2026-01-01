import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { PlusIcon, PencilIcon, TrashIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default async function AdminRegions() {
  const supabase = createClient()
  const { data: regions } = await supabase.from('regions').select('*').order('name', { ascending: true })

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-display font-bold text-white">Regions</h1>
        <Link 
          href="/admin/regions/new" 
          className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <PlusIcon className="w-5 h-5" />
          Add New Region
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
        {regions?.length === 0 ? (
          <div className="col-span-full p-12 text-center text-gray-400 bg-white/5 rounded-2xl border border-white/10 italic">
            No regions found. Create one to get started.
          </div>
        ) : (
          regions?.map((region) => (
            <div key={region.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:bg-white/10 transition-colors backdrop-blur-md">
              <div className="relative h-48 w-full">
                <img 
                  src={region.image} 
                  alt={region.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-xl font-bold">{region.name}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm line-clamp-3 mb-6 leading-relaxed">
                  {region.description}
                </p>
                <div className="flex gap-2 justify-end pt-4 border-t border-white/10">
                  <Link href={`/admin/regions/${region.id}`} className="p-2 hover:bg-white/10 rounded-lg text-blue-400 transition-colors">
                    <PencilIcon className="w-5 h-5" />
                  </Link>
                  <button className="p-2 hover:bg-white/10 rounded-lg text-red-400 transition-colors">
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

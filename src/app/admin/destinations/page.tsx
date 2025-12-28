import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline'

export default async function AdminDestinations() {
  const supabase = createClient()
  const { data: destinations } = await supabase.from('destinations').select('*').order('created_at', { ascending: false })

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-display font-bold text-white">Destinations</h1>
        <Link 
          href="/admin/destinations/new" 
          className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <PlusIcon className="w-5 h-5" />
          Add New
        </Link>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md">
        <table className="w-full text-left">
          <thead className="bg-white/5 text-gray-300">
            <tr>
              <th className="p-4 font-medium">Name</th>
              <th className="p-4 font-medium">Location</th>
              <th className="p-4 font-medium">Category</th>
              <th className="p-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {destinations?.length === 0 ? (
               <tr>
                 <td colSpan={4} className="p-8 text-center text-gray-400">
                   No destinations found. Create one to get started.
                 </td>
               </tr>
            ) : (
              destinations?.map((dest) => (
                <tr key={dest.id} className="hover:bg-white/5 transition-colors text-white">
                  <td className="p-4">{dest.name}</td>
                  <td className="p-4 text-gray-300">{dest.location}</td>
                  <td className="p-4">
                    <span className="bg-white/10 px-2 py-1 rounded text-sm text-gray-300">
                      {dest.category}
                    </span>
                  </td>
                  <td className="p-4 flex gap-2 justify-end">
                    <Link href={`/admin/destinations/${dest.id}`} className="p-2 hover:bg-white/10 rounded-lg text-blue-400">
                      <PencilIcon className="w-5 h-5" />
                    </Link>
                    <button className="p-2 hover:bg-white/10 rounded-lg text-red-400">
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

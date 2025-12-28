import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { PlusIcon, CalendarIcon } from '@heroicons/react/24/outline'

export default async function AdminTours() {
  const supabase = createClient()
  const { data: tours } = await supabase.from('tours').select('*').order('created_at', { ascending: false })

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-display font-bold text-white">Group Tours</h1>
        <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <PlusIcon className="w-5 h-5" />
          Schedule Tour
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {tours?.length === 0 ? (
             <div className="col-span-full p-12 text-center text-gray-400 bg-white/5 rounded-2xl border border-white/10">
                <CalendarIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No tours scheduled yet.</p>
             </div>
        ) : (
          tours?.map((tour) => (
            <div key={tour.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">{tour.name}</h3>
              <p className="text-gray-400 text-sm mb-4">Start: {new Date(tour.start_date).toLocaleDateString()}</p>
              
              <div className="flex justify-between items-center border-t border-white/10 pt-4">
                 <span className="text-sm bg-white/10 px-2 py-1 rounded text-gray-300 capitalize">{tour.type}</span>
                 <span className="text-primary font-bold">${tour.price}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

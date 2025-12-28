import { createClient } from '@/lib/supabase/server'

export default async function AdminDashboard() {
  const supabase = createClient()
  
  // Fetch stats (mocked or real if tables exist)
  // const { count: userCount } = await supabase.from('profiles').select('*', { count: 'exact' })
  // const { count: destCount } = await supabase.from('destinations').select('*', { count: 'exact' })

  // For now, placeholder stats
  const stats = [
    { name: 'Total Users', value: 'Loading...', href: '/admin/users' },
    { name: 'Destinations', value: 'Loading...', href: '/admin/destinations' },
    { name: 'Active Packages', value: 'Loading...', href: '/admin/packages' },
    { name: 'Upcoming Tours', value: 'Loading...', href: '/admin/tours' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-display font-bold text-white mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
            <h3 className="text-gray-400 text-sm font-medium">{stat.name}</h3>
            <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer">
              <h3 className="text-white font-bold mb-2">Add New Destination</h3>
              <p className="text-gray-400 text-sm">Create a new travel destination page.</p>
           </div>
           <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer">
              <h3 className="text-white font-bold mb-2">Create Package</h3>
              <p className="text-gray-400 text-sm">Bundle destinations into a package.</p>
           </div>
           <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer">
              <h3 className="text-white font-bold mb-2">Schedule Tour</h3>
              <p className="text-gray-400 text-sm">Add a new group tour date.</p>
           </div>
        </div>
      </div>
    </div>
  )
}
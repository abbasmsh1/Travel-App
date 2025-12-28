import { createClient } from '@/lib/supabase/server'
import { UserCircleIcon } from '@heroicons/react/24/outline'

export default async function AdminUsers() {
  const supabase = createClient()
  const { data: profiles } = await supabase.from('profiles').select('*').order('created_at', { ascending: false })

  return (
    <div>
      <h1 className="text-3xl font-display font-bold text-white mb-8">Registered Users</h1>

      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md">
        <table className="w-full text-left">
          <thead className="bg-white/5 text-gray-300">
            <tr>
              <th className="p-4 font-medium">User</th>
              <th className="p-4 font-medium">Email</th>
              <th className="p-4 font-medium">Role</th>
              <th className="p-4 font-medium">Joined</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {profiles?.length === 0 ? (
               <tr>
                 <td colSpan={4} className="p-8 text-center text-gray-400">
                   No users found.
                 </td>
               </tr>
            ) : (
              profiles?.map((profile) => (
                <tr key={profile.id} className="hover:bg-white/5 transition-colors text-white">
                  <td className="p-4 flex items-center gap-3">
                    <UserCircleIcon className="w-8 h-8 text-gray-400" />
                    <span className="font-medium">{profile.full_name || 'N/A'}</span>
                  </td>
                  <td className="p-4 text-gray-300">{profile.email}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold uppercase ${
                      profile.role === 'admin' ? 'bg-purple-500/20 text-purple-300' : 'bg-green-500/20 text-green-300'
                    }`}>
                      {profile.role}
                    </span>
                  </td>
                  <td className="p-4 text-gray-400 text-sm">
                    {new Date(profile.created_at).toLocaleDateString()}
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

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { 
  HomeIcon, 
  MapIcon, 
  UsersIcon, 
  TagIcon, 
  CalendarIcon,
  ArrowLeftOnRectangleIcon 
} from '@heroicons/react/24/outline'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Check if user is admin
  let isAdmin = false
  try {
    const { data: profile, error } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()
    
    // If table doesn't exist or other error, this might fail
    if (!error && profile?.role === 'admin') {
      isAdmin = true
    }
  } catch (err) {
    console.error('Error checking admin role:', err)
  }

  // Optional: Redirect if not admin (commented out for development ease, or set to true)
  // if (!isAdmin) { return <div>Unauthorized</div> }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white/5 border-r border-white/10 hidden md:flex flex-col">
        <div className="p-6">
          <Link href="/" className="font-display text-2xl font-bold text-white">
            Saffarlog <span className="text-primary text-sm">Admin</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <NavLink href="/admin" icon={<HomeIcon className="w-5 h-5" />}>
            Dashboard
          </NavLink>
          <NavLink href="/admin/destinations" icon={<MapIcon className="w-5 h-5" />}>
            Destinations
          </NavLink>
          <NavLink href="/admin/users" icon={<UsersIcon className="w-5 h-5" />}>
            Users
          </NavLink>
          <NavLink href="/admin/packages" icon={<TagIcon className="w-5 h-5" />}>
            Packages
          </NavLink>
          <NavLink href="/admin/tours" icon={<CalendarIcon className="w-5 h-5" />}>
            Group Tours
          </NavLink>
        </nav>

        <div className="p-4 border-t border-white/10">
          <form action="/auth/signout" method="post">
             <Link href="/" className="flex items-center space-x-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                <ArrowLeftOnRectangleIcon className="w-5 h-5" />
                <span>Back to Site</span>
             </Link>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
         {children}
      </main>
    </div>
  )
}

function NavLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
    >
      {icon}
      <span>{children}</span>
    </Link>
  )
}

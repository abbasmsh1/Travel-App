import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { 
  HomeIcon, 
  MapIcon, 
  UsersIcon, 
  TagIcon, 
  CalendarIcon,
  InformationCircleIcon,
  PhoneIcon,
  ArrowLeftOnRectangleIcon 
} from '@heroicons/react/24/outline'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient()
  
  if (!supabase) {
    return (
      <div className="min-h-screen bg-[#0f172a] text-white p-8">
        <div className="max-w-4xl mx-auto bg-red-500/10 border border-red-500/20 p-6 rounded-2xl">
          <h1 className="text-xl font-bold text-red-400 mb-2">Supabase Configuration Missing</h1>
          <p className="text-gray-300">
            Please set <code className="text-primary">NEXT_PUBLIC_SUPABASE_URL</code> and 
            <code className="text-primary">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> in your environment variables.
          </p>
        </div>
      </div>
    )
  }

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

  // Hardcode failsafe for the specific admin email
  if (user?.email === 'saffarlog@gmail.com') {
    isAdmin = true
  }

  // Redirect if not admin
  if (!isAdmin) { 
    redirect('/') 
  }

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
          <div className="pt-4 pb-2 px-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
            Site Content
          </div>
          <NavLink href="/admin/about" icon={<InformationCircleIcon className="w-5 h-5" />}>
            About Page
          </NavLink>
          <NavLink href="/admin/contact" icon={<PhoneIcon className="w-5 h-5" />}>
            Contact Info
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

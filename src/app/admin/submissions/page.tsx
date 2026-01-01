import { createClient } from '@/lib/supabase/server'
import { format } from 'date-fns'
import { 
  EnvelopeIcon, 
  UserIcon, 
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline'

export default async function AdminSubmissions() {
  const supabase = createClient()
  const { data: submissions, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <div className="p-8 text-center text-red-400 bg-red-500/10 rounded-2xl border border-red-500/20">
        Error loading submissions: {error.message}
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-display font-bold text-white">Inquiries</h1>
          <p className="text-gray-400 mt-2">Manage customer messages and contact form submissions.</p>
        </div>
        <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm text-gray-400">
          Total: {submissions?.length || 0}
        </div>
      </div>

      <div className="grid gap-6">
        {submissions?.length === 0 ? (
          <div className="p-12 text-center text-gray-400 bg-white/5 rounded-2xl border border-white/10 italic">
            No inquiries received yet.
          </div>
        ) : (
          submissions?.map((sub) => (
            <div 
              key={sub.id} 
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md hover:bg-white/10 transition-colors group"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <UserIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-0.5">{sub.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <EnvelopeIcon className="w-4 h-4" />
                        <span>{sub.email}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-400 border border-white/10">
                      <ClockIcon className="w-3.5 h-3.5" />
                      {format(new Date(sub.created_at), 'MMM dd, yyyy • HH:mm')}
                    </span>
                    <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                      sub.status === 'sent' 
                        ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                        : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                    }`}>
                      {sub.status === 'sent' ? <CheckCircleIcon className="w-3.5 h-3.5" /> : <ExclamationCircleIcon className="w-3.5 h-3.5" />}
                      {sub.status.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                  <div className="flex items-center gap-2 mb-3 text-primary/80 font-bold uppercase tracking-wider text-xs">
                    <ChatBubbleLeftRightIcon className="w-4 h-4" />
                    <span>{sub.subject}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {sub.message}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

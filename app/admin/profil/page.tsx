import { createClient } from '@/lib/supabase/server'
import { User, Mail, ShieldCheck } from 'lucide-react'

export const metadata = {
  title: 'Profil Saya — CMS Desa Bajawali',
}

export default async function AdminProfilPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  let profile = null
  if (user) {
    const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single()
    profile = data
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h2 className="text-2xl font-bold text-ink-950" style={{ fontFamily: 'var(--font-editorial), serif' }}>
          Profil Saya
        </h2>
        <p className="text-ink-600 text-sm mt-1">
          Informasi akun Anda di sistem ini.
        </p>
      </div>

      <div className="bg-white border border-paper-200 rounded-lg overflow-hidden">
        <div className="h-32 bg-green-900 relative">
          <div className="absolute -bottom-10 left-6">
            <div className="w-20 h-20 rounded-full bg-white p-1 shadow-md">
              <div className="w-full h-full rounded-full bg-green-100 text-green-700 flex items-center justify-center text-3xl font-bold">
                {profile?.full_name?.charAt(0)?.toUpperCase() || 'U'}
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-14 p-6 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-ink-950">{profile?.full_name || 'Pengguna'}</h3>
            <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
              {profile?.role || 'Administrator'}
            </span>
          </div>

          <div className="space-y-4 pt-4 border-t border-paper-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-paper-100 flex items-center justify-center text-ink-500 shrink-0">
                <User size={16} />
              </div>
              <div>
                <p className="text-xs text-ink-400 font-medium">Nama Lengkap</p>
                <p className="text-sm text-ink-950">{profile?.full_name || '-'}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-paper-100 flex items-center justify-center text-ink-500 shrink-0">
                <Mail size={16} />
              </div>
              <div>
                <p className="text-xs text-ink-400 font-medium">Email Terdaftar</p>
                <p className="text-sm text-ink-950">{profile?.email || user?.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-paper-100 flex items-center justify-center text-ink-500 shrink-0">
                <ShieldCheck size={16} />
              </div>
              <div>
                <p className="text-xs text-ink-400 font-medium">Status Akun</p>
                <p className="text-sm text-green-600 font-medium">{profile?.is_active ? 'Aktif' : 'Non-aktif'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { createClient } from '@/lib/supabase/server'

export const metadata = {
  title: 'Kelola Pengguna — CMS Desa Bajawali',
}

export default async function AdminPenggunaPage() {
  const supabase = await createClient()
  const { data: profiles } = await supabase.from('profiles').select('*').order('created_at', { ascending: true })

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-ink-950" style={{ fontFamily: 'var(--font-editorial), serif' }}>
          Kelola Pengguna
        </h2>
        <p className="text-ink-600 text-sm mt-1">
          Daftar pengguna yang memiliki akses ke CMS.
        </p>
      </div>

      <div className="bg-white border border-paper-200 rounded-lg overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-ink-800">
            <thead className="bg-paper-100 text-ink-600 font-semibold uppercase tracking-wider text-xs border-b border-paper-200">
              <tr>
                <th className="px-6 py-4">Nama Lengkap</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Peran (Role)</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-paper-200">
              {profiles?.map((profile) => (
                <tr key={profile.id} className="hover:bg-paper-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-ink-950">
                    {profile.full_name || '-'}
                  </td>
                  <td className="px-6 py-4 text-ink-600">
                    {profile.email}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {profile.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${
                      profile.is_active 
                        ? 'text-green-700 bg-green-50 border-green-100' 
                        : 'text-red-700 bg-red-50 border-red-100'
                    }`}>
                      {profile.is_active ? 'Aktif' : 'Non-aktif'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-paper-200 bg-paper-50 text-xs text-ink-500">
          Catatan: Untuk menambah pengguna baru, silakan hubungi tim Developer.
        </div>
      </div>
    </div>
  )
}

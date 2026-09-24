import Link from 'next/link'
import { Newspaper, Image as ImageIcon, Users, Database, Plus } from 'lucide-react'
import { NavigationChevron } from '@/components/ui/NavigationChevron'
import StatCard from '@/components/admin/StatCard'
import { getNewsCount } from '@/lib/queries/news'
import { getGalleryCount } from '@/lib/queries/gallery'
import { createClient } from '@/lib/supabase/server'

export default async function AdminDashboardPage() {
  const supabase = await createClient()

  // Fetch stats in parallel
  const [newsCount, galleryCount, profilesResult, recentNewsResult, recentGalleryResult] =
    await Promise.all([
      getNewsCount(),
      getGalleryCount(),
      supabase.from('profiles').select('*', { count: 'exact', head: true }),
      supabase
        .from('news')
        .select('id, title, is_published, created_at')
        .order('created_at', { ascending: false })
        .limit(3),
      supabase
        .from('gallery')
        .select('id, title, is_published, created_at')
        .order('created_at', { ascending: false })
        .limit(3),
    ])

  const usersCount = profilesResult.count || 0
  const recentNews = recentNewsResult.data || []
  const recentGallery = recentGalleryResult.data || []

  // Merge and sort recent activity
  const recentActivity = [
    ...recentNews.map((n) => ({
      type: 'berita' as const,
      title: n.title,
      date: n.created_at,
      published: n.is_published,
    })),
    ...recentGallery.map((g) => ({
      type: 'galeri' as const,
      title: g.title,
      date: g.created_at,
      published: g.is_published,
    })),
  ]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5)

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h2 className="text-2xl font-bold text-ink-950" style={{ fontFamily: 'var(--font-editorial), serif' }}>
          Selamat Datang di CMS
        </h2>
        <p className="text-ink-600 text-sm mt-1">
          Kelola konten website Desa Bajawali dari sini.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Berita"
          value={newsCount}
          icon={<Newspaper size={18} />}
          color="green"
        />
        <StatCard
          label="Galeri"
          value={galleryCount}
          icon={<ImageIcon size={18} />}
          color="blue"
        />
        <StatCard
          label="Pengguna"
          value={usersCount}
          icon={<Users size={18} />}
          color="amber"
        />
        <StatCard
          label="Data Desa"
          value="Aktif"
          icon={<Database size={18} />}
          color="clay"
        />
      </div>

      {/* Quick Actions + Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="bg-white border border-paper-200 rounded-lg p-6">
          <h3 className="text-sm font-semibold text-ink-950 uppercase tracking-wider mb-4">
            Aksi Cepat
          </h3>
          <div className="space-y-3">
            <Link
              href="/admin/berita/tambah"
              className="flex items-center gap-3 p-3 rounded-md border border-paper-200 hover:border-green-300 hover:bg-green-50/50 transition-colors group"
            >
              <div className="w-8 h-8 rounded-md bg-green-100 text-green-700 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <Plus size={16} />
              </div>
              <div>
                <span className="text-sm font-medium text-ink-950">Tambah Berita</span>
                <p className="text-xs text-ink-400">Buat berita baru</p>
              </div>
            </Link>
            <Link
              href="/admin/galeri/tambah"
              className="flex items-center gap-3 p-3 rounded-md border border-paper-200 hover:border-green-300 hover:bg-green-50/50 transition-colors group"
            >
              <div className="w-8 h-8 rounded-md bg-blue-100 text-blue-700 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Plus size={16} />
              </div>
              <div>
                <span className="text-sm font-medium text-ink-950">Tambah Foto</span>
                <p className="text-xs text-ink-400">Upload foto galeri</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white border border-paper-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-ink-950 uppercase tracking-wider">
              Aktivitas Terbaru
            </h3>
          </div>

          {recentActivity.length === 0 ? (
            <div className="text-center py-8 text-ink-400 text-sm">
              Belum ada aktivitas. Mulai dengan menambahkan berita atau foto.
            </div>
          ) : (
            <div className="space-y-3">
              {recentActivity.map((activity, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-2 border-b border-paper-100 last:border-0"
                >
                  <div
                    className={`w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 ${
                      activity.type === 'berita'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {activity.type === 'berita' ? (
                      <Newspaper size={14} />
                    ) : (
                      <ImageIcon size={14} />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-ink-950 truncate">{activity.title}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-ink-400">
                        {new Date(activity.date).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                          activity.published
                            ? 'bg-green-100 text-green-700'
                            : 'bg-amber-100 text-amber-700'
                        }`}
                      >
                        {activity.published ? 'Published' : 'Draft'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-paper-100 flex gap-4">
            <Link
              href="/admin/berita"
              className="text-xs font-medium text-green-700 hover:text-green-800 flex items-center gap-1"
            >
              Lihat semua berita <NavigationChevron direction="next" className="shrink-0" />
            </Link>
            <Link
              href="/admin/galeri"
              className="text-xs font-medium text-green-700 hover:text-green-800 flex items-center gap-1"
            >
              Lihat semua galeri <NavigationChevron direction="next" className="shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// =============================================
// Data Source Configuration
// =============================================
// Controls whether a module reads from local data or Supabase.
// When a module is migrated to Supabase, change its source here.

export const DATA_SOURCE = {
  news: 'supabase' as const,
  gallery: 'supabase' as const,
  profile: 'local' as const,
  demographic: 'local' as const,
  infrastructure: 'local' as const,
}

export type DataSourceModule = keyof typeof DATA_SOURCE

export function isSupabaseSource(module: DataSourceModule): boolean {
  return DATA_SOURCE[module] === 'supabase'
}

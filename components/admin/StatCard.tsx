import { ReactNode } from 'react'

interface StatCardProps {
  label: string
  value: string | number
  icon: ReactNode
  color?: 'green' | 'blue' | 'amber' | 'clay'
}

const colorMap = {
  green: {
    bg: 'bg-green-50',
    icon: 'bg-green-100 text-green-700',
    value: 'text-green-900',
  },
  blue: {
    bg: 'bg-blue-50',
    icon: 'bg-blue-100 text-blue-700',
    value: 'text-blue-900',
  },
  amber: {
    bg: 'bg-amber-50',
    icon: 'bg-amber-100 text-amber-700',
    value: 'text-amber-900',
  },
  clay: {
    bg: 'bg-orange-50',
    icon: 'bg-orange-100 text-orange-700',
    value: 'text-orange-900',
  },
}

export default function StatCard({ label, value, icon, color = 'green' }: StatCardProps) {
  const c = colorMap[color]

  return (
    <div className={`${c.bg} border border-paper-200 rounded-lg p-5`}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-ink-600 font-medium">{label}</span>
        <div className={`w-9 h-9 rounded-md flex items-center justify-center ${c.icon}`}>
          {icon}
        </div>
      </div>
      <div className={`text-3xl font-bold ${c.value}`}>{value}</div>
    </div>
  )
}

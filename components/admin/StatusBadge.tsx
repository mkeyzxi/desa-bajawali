interface StatusBadgeProps {
  published: boolean
  size?: 'sm' | 'md'
}

export default function StatusBadge({ published, size = 'sm' }: StatusBadgeProps) {
  const sizeClasses = size === 'sm' ? 'text-[10px] px-2 py-0.5' : 'text-xs px-2.5 py-1'

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md font-semibold ${sizeClasses} ${
        published
          ? 'bg-green-100 text-green-700'
          : 'bg-amber-100 text-amber-700'
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          published ? 'bg-green-500' : 'bg-amber-500'
        }`}
      />
      {published ? 'Published' : 'Draft'}
    </span>
  )
}

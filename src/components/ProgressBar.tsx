export default function ProgressBar({
  value,
  size = 'md',
  showLabel = true,
}: {
  value: number
  size?: 'sm' | 'md'
  showLabel?: boolean
}) {
  const heightClass = size === 'sm' ? 'h-1' : 'h-1.5'
  return (
    <div className="flex items-center gap-2 w-full">
      <div
        className={`${heightClass} flex-1 bg-ink-100 dark:bg-ink-700 rounded-full overflow-hidden`}
      >
        <div
          className="h-full bg-accent-500 transition-all duration-300"
          style={{ width: `${value}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-xs font-mono text-ink-400 dark:text-ink-300 w-8 text-right">
          {value}%
        </span>
      )}
    </div>
  )
}

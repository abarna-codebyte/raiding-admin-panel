import type { ReactNode } from 'react'

export interface EventFeedItem {
  id: string
  time: string
  dotColor: string
  text: ReactNode
  emphasize?: boolean
}

export function EventFeed({ items }: { items: EventFeedItem[] }) {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className="flex items-start gap-2.5 border-b border-[var(--color-border-faint)] py-2.5 last:border-0">
          <span className="mt-1 size-2 shrink-0 rounded-full" style={{ background: item.dotColor }} />
          <span className="min-w-[62px] shrink-0 text-[11px] text-[var(--color-text-muted)]">{item.time}</span>
          <div
            className="text-[12px] leading-relaxed"
            style={item.emphasize ? { color: 'var(--color-rose-600)', fontWeight: 500 } : { color: 'var(--color-text)' }}
          >
            {item.text}
          </div>
        </div>
      ))}
    </div>
  )
}

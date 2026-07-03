export interface TimelineItem {
  id: string
  title: string
  time: string
  color: string
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className="flex gap-2.5 py-1.5">
          <span
            className="mt-1 size-2.5 shrink-0 rounded-full border-2 border-white"
            style={{ background: item.color, boxShadow: `0 0 0 1.5px ${item.color}` }}
          />
          <div>
            <div className="text-[13px] font-medium">{item.title}</div>
            <div className="mt-0.5 text-[11px] text-[var(--color-text-muted)]">{item.time}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

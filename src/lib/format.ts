export function formatCurrency(value: number): string {
  return '₹' + value.toLocaleString('en-IN')
}

export function formatDate(date: string | Date, opts?: Intl.DateTimeFormatOptions): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-IN', opts ?? { day: '2-digit', month: 'short', year: 'numeric' })
}

export function formatNumber(value: number): string {
  return value.toLocaleString('en-IN')
}

export function initials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join('')
}

/** Simulates network latency for local mock data, keeping the API shape
 * identical to a real Axios call so swapping in a real backend is trivial. */
export function delay<T>(data: T, ms = 400): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms))
}

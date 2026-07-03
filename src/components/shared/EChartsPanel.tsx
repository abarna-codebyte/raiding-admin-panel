import ReactECharts from 'echarts-for-react'

export function EChartsPanel({ option, height = 260 }: { option: Record<string, any>; height?: number }) {
  return <ReactECharts option={option} style={{ height }} notMerge />
}

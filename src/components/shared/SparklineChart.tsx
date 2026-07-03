import ReactECharts from 'echarts-for-react'

export interface SparklinePoint {
  label: string
  value: number
  displayValue: string
}

export function SparklineChart({ data, color }: { data: SparklinePoint[]; color: string }) {
  const option = {
    grid: { top: 6, bottom: 20, left: 4, right: 4 },
    tooltip: {
      trigger: 'axis',
      formatter: (params: any) => {
        const p = params[0]
        return `${p.name}: <strong>${data[p.dataIndex].displayValue}</strong>`
      },
      textStyle: { fontSize: 12 },
    },
    xAxis: {
      type: 'category',
      data: data.map((d) => d.label),
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { fontSize: 10, color: 'var(--color-text-faint)' },
    },
    yAxis: { type: 'value', show: false },
    series: [
      {
        type: 'bar',
        data: data.map((d) => d.value),
        barWidth: '55%',
        itemStyle: { color, borderRadius: [3, 3, 0, 0] },
      },
    ],
  }
  return <ReactECharts option={option} style={{ height: 110 }} notMerge />
}

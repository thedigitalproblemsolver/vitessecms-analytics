import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart } from 'chart.js/auto'
import { CategoryScale } from 'chart.js'
import FetchApi from '../utils/FetchApi'

Chart.register(CategoryScale)

export default function BarChart({ source, title }: { source: string; title: string }) {
  const [chartData, setChartData] = useState<FetchResult>()
  useEffect((): void => {
    getData()
  }, [])

  const getData = async (): Promise<void> => {
    const response: FetchResult = await FetchApi('/admin/analytics/admindashboard/' + source)
    setChartData(response)
  }

  var data: BarChartData = {
    labels: chartData?.data?.map(x => x.date),
    datasets: [
      {
        data: chartData?.data?.map(x => x.amount),
        backgroundColor: ['green']
      }
    ]
  }

  var options = {
    plugins: {
      title: {
        display: true,
        text: title
      },
      legend: {
        display: false
      }
    }
  }
  console.log(data)
  return (
    <div className='chart-container'>
      <Bar data={data} options={options} />
    </div>
  )
}

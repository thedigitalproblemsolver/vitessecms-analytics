import React from 'react'
import BarChart from '../elements/BarChart'

export default function AnalyticsDashboard() {
  return (
    <div className='row'>
      <div className='col-12 col-lg-4'>
        <BarChart source='getpageviewsbyday' title='PageViewsByDay' />
      </div>
      <div className='col-12 col-lg-4'>
        <BarChart source='getclicksbyday' title='ClicksByDay' />
      </div>
      <div className='col-12 col-lg-4'>
        <BarChart source='getwebcrawlervisitsbyday' title='WebcrawlerVistsByDay' />
      </div>
    </div>
  )
}

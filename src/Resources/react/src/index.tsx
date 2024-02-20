import ReactDOM from 'react-dom/client'
import AnalyticsDashboard from './components/AnalyticsDashboard'
import React from 'react'

const analyticsDashboardContainer = document.getElementById('react-analytics-dashboard')
if (null !== analyticsDashboardContainer) {
  const analyticsDashboardRoot = ReactDOM.createRoot(analyticsDashboardContainer)
  analyticsDashboardRoot.render(<AnalyticsDashboard />)
}

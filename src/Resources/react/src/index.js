import React from 'react';
import ReactDOM from "react-dom/client";
import AnalyticsDashboard from "./AnalyticsDashboard";

window.React = React;

const analyticsDashboardContainer = document.getElementById('react-analytics-dashboard');
if (null !== analyticsDashboardContainer) {
    const analyticsDashboardRoot = ReactDOM.createRoot(analyticsDashboardContainer);
    analyticsDashboardRoot.render(<AnalyticsDashboard/>);
}
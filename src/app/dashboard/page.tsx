import React from 'react'


// you can put these UI elements outside the app directory in a "components" folder if you wish
import LineChart from './line-chart'
function BarChart() {
  return (
    <h1>Bar chart</h1>
  )
}

export default function Dashboard(){
  return (
    <>
      <h1>Dashboard</h1>
      <BarChart />
      <LineChart />
    </>
  )
}
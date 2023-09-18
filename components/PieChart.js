import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: 'center' }}>Line Chart</h2>
      <Line
        datasetIdKey="id"
        data={{
          labels: ['Jun', 'Jul', 'Aug'],
          datasets: [
            {
              id: 1,
              data: [5, 6, 7]
            },
            {
              id: 2,
              data: [3, 2, 1]
            }
          ]
        }}
      />
    </div>
  );
}
export default LineChart;

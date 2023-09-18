// ***** ChartJS ***** //
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

Chart.register(CategoryScale);

import { Line } from 'react-chartjs-2';
// ***** ***** //

// ***** Nivo ***** //
import dynamic from 'next/dynamic';

const ResponsiveLine = dynamic(
  () => import('@nivo/line').then((m) => m.ResponsiveLine),
  { ssr: false }
);
// ***** ***** //

const IndexPage = () => {
  return (
    <div className="App">
      {/* Nivo Line Chart */}
      <div style={{ width: '300px', height: '300px' }}>
        <ResponsiveLine
          data={[
            {
              id: 'Subway',
              color: 'hsl(71, 70%, 50%)',
              data: [
                {
                  x: '2016',
                  y: 644
                },
                {
                  x: '2017',
                  y: 760
                }
              ]
            },
            {
              id: 'Jersey Mikes',
              color: 'hsl(71, 70%, 50%)',
              data: [
                {
                  x: '2016',
                  y: 224
                },
                {
                  x: '2017',
                  y: 542
                }
              ]
            }
          ]}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
          }}
          yFormat=" >-.2f"
          curve="basis"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'year',
            legendOffset: 36,
            legendPosition: 'middle'
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'number of subs',
            legendOffset: -40,
            legendPosition: 'middle'
          }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
        />
      </div>
      {/*  */}
      {/* ChartJS Line Chart */}
      <div className="chart-container" style={{ width: '300px' }}>
        <h2 style={{ textAlign: 'center' }}>Line Chart</h2>
        <Line
          data={{
            labels: ['Jun', 'Jul', 'Aug'],
            datasets: [
              {
                data: [5, 6, 7],
                label: 'Line 1',
                borderColor: 'purple',
                backgroundColor: 'orange'
              },
              {
                data: [3, 2, 1],
                label: 'Line 2',
                borderColor: 'red',
                backgroundColor: 'pink'
              }
            ]
          }}
        />
      </div>
      {/*  */}
    </div>
  );
};

export default IndexPage;

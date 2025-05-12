import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const margin = { right: 24 };
const uData = [400, 1800, 2000, 2780, 1890, 2390, 3490];
const pData = [240, 1398, 2500, 2200, 2000, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function SimpleLineChart() {
  return (
    <LineChart
      height={300}
      series={[
        { data: pData, label: 'pv', color: '#00DEC3' },
        { data: uData, label: 'uv', color: '#0080FF' },
      ]}
      xAxis={[{ 
        scaleType: 'point', 
        data: xLabels,
        tickLabelStyle: { fill: '#FFFFFF' },
      }]}
      yAxis={[{ 
        width: 50,
        tickLabelStyle: { fill: '#FFFFFF' },
      }]}
      margin={margin}
      sx={{
        '.MuiLineElement-root': {
          strokeWidth: 2,
        },
        '.MuiChartsAxis-line, .MuiChartsAxis-tick': {
          stroke: '#FFFFFF',
        },
        '.MuiChartsLegend-root': {
          color: '#FFFFFF',
        },
      }}
    />
  );
}

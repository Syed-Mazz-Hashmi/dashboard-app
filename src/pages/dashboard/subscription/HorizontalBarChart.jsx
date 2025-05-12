import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const xLabels = ['Swipr', 'Clikkle Project', 'Clikkle Ads', 'Hivrr', 'Clikkle Campaign'];
const values = [6.5, 10.0, 11.8, 12.2, 13.5]; // Example GB values
const colors = ['#0080FF', '#BB41BD', '#32BD40', '#32BD40', '#FEE044'];

export default function HorizontalBarChart() {
  return (
    <BarChart
      height={300}
      xAxis={[{
        label: 'GB Used',
        tickLabelStyle: { fill: '#FFFFFF' },
      }]}
      yAxis={[{
        scaleType: 'band',
        data: xLabels,
        tickLabelStyle: { fill: '#FFFFFF' },
      }]}
      series={[{
        data: values,
        label: 'Storage',
        color: '#00DEC3',
      }]}
      layout="horizontal"
      sx={{
        '.MuiBarElement-root': {
          // strokeWidth: ,
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

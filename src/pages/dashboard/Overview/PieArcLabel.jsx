import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const desktopOS = [
  { label: 'Swiprr', value: 36.8 },
  { label: 'Hivrr', value: 40.5 },
  { label: 'Clikkle ADs', value: 12.4 },
  { label: 'Clikkle SMS', value: 12.4 },
];

export default function PieArcLabel() {
  return (
    <PieChart
      series={[
        {
          data: desktopOS,
          arcLabel: (item) => item.value, // 👈 Show label text instead of value
          arcLabelMinAngle: 35,
          arcLabelRadius: '60%',
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fontWeight: 'bold',
          fontSize: '10px',
          fill: 'white', // 👈 Label color set to white
        },
      }}
      width={160}
      height={160}
    />
  );
}

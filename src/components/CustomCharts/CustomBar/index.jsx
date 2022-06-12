import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Medalleria FFMM Interescuelas 2022',
    },
  },
};

const labels = ['Oro', 'Plata', 'Bronce'];

export const data = {
  labels,
  datasets: [
    {
      label: 'EJC',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgb( 199, 0, 57)',
    },
    {
      label: 'FAC',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba( 5, 23, 102)',
    },
    {
      label: 'ARC',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(  12, 34, 129)',
    },
    {
      label: 'PONAL',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba( 12, 129, 56)',
    },
  ],
};

export function ChartBar() {
  return <Bar options={options} data={data} />;
}

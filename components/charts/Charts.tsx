'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { chartBeritaBulan, chartKategoriBerita } from '@/data/dummy';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Theme colors from design tokens
const colors = {
  green700: '#087653',
  green300: '#8FD3B6',
  green100: '#DDF3E8',
  clay: '#B56B45',
  sun: '#C99A31',
  blueMap: '#4D7892',
  paper200: '#EAE5D8',
  ink800: '#2A3530',
  ink400: '#8A938D'
};

const commonOptions: ChartOptions<any> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        font: {
          family: 'Manrope, sans-serif',
          size: 12
        },
        color: colors.ink800,
        usePointStyle: true,
        padding: 20
      }
    },
    tooltip: {
      backgroundColor: '#ffffff',
      titleColor: colors.ink800,
      bodyColor: colors.ink800,
      borderColor: colors.paper200,
      borderWidth: 1,
      padding: 12,
      cornerRadius: 6,
      titleFont: {
        family: 'Manrope, sans-serif',
        size: 13,
        weight: 'bold'
      },
      bodyFont: {
        family: 'Manrope, sans-serif',
        size: 12
      }
    }
  }
};

const gridOptions = {
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          family: 'Manrope, sans-serif'
        },
        color: colors.ink400
      }
    },
    y: {
      grid: {
        color: colors.paper200,
      },
      border: {
        display: false
      },
      ticks: {
        font: {
          family: 'Manrope, sans-serif'
        },
        color: colors.ink400
      }
    }
  }
};

export function BeritaLineChart() {
  const data = {
    labels: chartBeritaBulan.map(d => d.month),
    datasets: [
      {
        label: 'Jumlah Berita',
        data: chartBeritaBulan.map(d => d.total),
        borderColor: colors.green700,
        backgroundColor: colors.green700,
        borderWidth: 2,
        tension: 0.1,
        pointRadius: 4,
        pointBackgroundColor: '#ffffff',
        pointBorderColor: colors.green700,
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    ...commonOptions,
    ...gridOptions,
    plugins: {
      ...commonOptions.plugins,
      legend: {
        display: false
      }
    }
  };

  return <div className="w-full h-full"><Line options={options} data={data} /></div>;
}

export function KategoriDoughnutChart() {
  const data = {
    labels: chartKategoriBerita.map(d => d.category),
    datasets: [
      {
        data: chartKategoriBerita.map(d => d.total),
        backgroundColor: [
          colors.green700,
          colors.clay,
          colors.sun,
          colors.blueMap,
          colors.green300,
        ],
        borderWidth: 0,
        hoverOffset: 4
      },
    ],
  };

  return <div className="w-full h-full"><Doughnut options={commonOptions} data={data} /></div>;
}

export function KelompokUmurBarChart() {
  const data = {
    labels: ['0-14', '15-24', '25-54', '55-64', '65+'],
    datasets: [
      {
        label: 'Jumlah Jiwa',
        data: [119, 143, 346, 102, 52],
        backgroundColor: colors.green300,
        hoverBackgroundColor: colors.green700,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    ...commonOptions,
    ...gridOptions,
    plugins: {
      ...commonOptions.plugins,
      legend: {
        display: false
      }
    },
    indexAxis: 'y' as const, // Horizontal bar
  };

  return <div className="w-full h-full"><Bar options={options} data={data} /></div>;
}

export function AgamaDoughnutChart() {
  const data = {
    labels: ['Islam', 'Hindu', 'Kristen', 'Katholik'],
    datasets: [
      {
        data: [146, 586, 7, 24],
        backgroundColor: [
          colors.green700,
          colors.sun,
          colors.clay,
          colors.blueMap,
        ],
        borderWidth: 0,
        hoverOffset: 4
      },
    ],
  };

  return <div className="w-full h-full"><Doughnut options={commonOptions} data={data} /></div>;
}

export function SukuDoughnutChart() {
  const data = {
    labels: ['Bali', 'Bugis', 'Jawa', 'Tator', 'Mandar'],
    datasets: [
      {
        data: [585, 59, 75, 34, 3],
        backgroundColor: [
          colors.green300,
          colors.green700,
          colors.blueMap,
          colors.clay,
          colors.sun,
        ],
        borderWidth: 0,
        hoverOffset: 4
      },
    ],
  };

  return <div className="w-full h-full"><Doughnut options={commonOptions} data={data} /></div>;
}

export function StatusPernikahanPieChart() {
  const data = {
    labels: ['Kawin', 'Belum Kawin'],
    datasets: [
      {
        data: [419, 319],
        backgroundColor: [
          colors.green700,
          colors.green100,
        ],
        borderWidth: 0,
        hoverOffset: 4
      },
    ],
  };

  return <div className="w-full h-full"><Doughnut options={commonOptions} data={data} /></div>;
}

export function DistribusiWilayahBarChart() {
  const data = {
    labels: ['Dusun Kerta', 'Dusun Makmur', 'Lestari', 'Mandiri'],
    datasets: [
      {
        label: 'Populasi',
        data: [164, 350, 174, 77],
        backgroundColor: colors.blueMap,
        hoverBackgroundColor: colors.green700,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    ...commonOptions,
    ...gridOptions,
    plugins: {
      ...commonOptions.plugins,
      legend: {
        display: false
      }
    },
  };

  return <div className="w-full h-full"><Bar options={options} data={data} /></div>;
}


'use client';

import dynamic from 'next/dynamic';

export const KelompokUmurBarChartWrapper = dynamic(() => import('./Charts').then(mod => mod.KelompokUmurBarChart), { ssr: false });
export const AgamaDoughnutChartWrapper = dynamic(() => import('./Charts').then(mod => mod.AgamaDoughnutChart), { ssr: false });
export const SukuDoughnutChartWrapper = dynamic(() => import('./Charts').then(mod => mod.SukuDoughnutChart), { ssr: false });
export const StatusPernikahanPieChartWrapper = dynamic(() => import('./Charts').then(mod => mod.StatusPernikahanPieChart), { ssr: false });
export const DistribusiWilayahBarChartWrapper = dynamic(() => import('./Charts').then(mod => mod.DistribusiWilayahBarChart), { ssr: false });
export const LembagaEkonomiDoughnutChartWrapper = dynamic(() => import('./Charts').then(mod => mod.LembagaEkonomiDoughnutChart), { ssr: false });

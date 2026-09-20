'use client';

import dynamic from 'next/dynamic';

export const BeritaLineChartWrapper = dynamic(() => import('./Charts').then(mod => mod.BeritaLineChart), { ssr: false });
export const KategoriDoughnutChartWrapper = dynamic(() => import('./Charts').then(mod => mod.KategoriDoughnutChart), { ssr: false });
export const KelompokUmurBarChartWrapper = dynamic(() => import('./Charts').then(mod => mod.KelompokUmurBarChart), { ssr: false });
